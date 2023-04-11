import { trpc } from "utils/trpc";
import { useConnectWallet, useSetChain, useWallets } from "@web3-onboard/react";
import { KeyClause, executeObjectType } from "@paymasters-io/server";
import z from "zod";
import { SiweMessage } from "siwe";
import { Web3Provider } from "zksync-web3";

interface IExecuteObjectType {
  contract_address: string;
  chainId: string;
  name: string;
  owner_address: string;
  metadata: string;
  verified?: boolean;
  timestamp?: number;
}

interface ICallKey {
  id?: string;
  contract_address?: string;
  chainID?: string;
}

interface IssuedAtRequired extends SiweMessage {
  issuedAt: string;
}

const useApiCall = () => {
  const [{ wallet }, connect] = useConnectWallet();
  const [{ connectedChain }] = useSetChain();

  // ##########     QUERIES      #############

  // ----    auth     ----

  const nonce = trpc.auth.authNonce.useQuery(undefined, { enabled: false });
  const _signOut = trpc.auth.authLogout.useQuery(undefined, { enabled: false });
  const signOut = () => _signOut.refetch();
  const _isSignedIn = trpc.auth.authVerified.useQuery();
  const isSignedIn = _isSignedIn.data?.ok;
  const sessionDetails = trpc.auth.authDetails.useQuery(undefined, {
    enabled: false,
  });
  const getAuthSession = async () =>
    isSignedIn ? (await sessionDetails.refetch()) && sessionDetails.data : [];

  // ----    fetch    ----

  const getAllEntries = trpc.fetch.all.useQuery();
  const getOneEntry = async (input: ICallKey) =>
    await trpc.fetch.one.useQuery(input, { enabled: false }).refetch();
  const getEntryWhere = async (input: KeyClause) =>
    await trpc.fetch.where
      .useQuery(
        {
          clause: input.clause as string,
          operand: input.operand as string,
          value: input.value as string,
        },
        { enabled: false }
      )
      .refetch();
  const getRawEntries = (chain: string) =>
    trpc.fetch.allRaw.useQuery({ chain }, { enabled: false }).refetch();

  // ##########     MUTATIONS      #############

  // ----    auth     ----

  const _signIn = trpc.auth.authVerify.useMutation();
  const signIn = async () => {
    async function _createSession() {
      if (!wallet) return;
      const signer = new Web3Provider(wallet.provider).getSigner();
      const message = new SiweMessage({
        domain: document.location.host,
        address: await signer.getAddress(),
        chainId: parseInt(connectedChain?.id as string, 16),
        uri: document.location.origin,
        version: "1",
        statement: "Sign in to paymasters-io",
        nonce: nonce.data?.nonce,
        issuedAt: nonce.data?.issuedAt,
        expirationTime: nonce.data?.expirationTime,
      });
      const signature = await signer.signMessage(message.prepareMessage());
      const mutResult = await _signIn.mutateAsync({
        signature,
        message: message as IssuedAtRequired,
      });
      console.log(mutResult);
    }

    console.log({
      wallet,
    });

    await connect();

    console.log({
      isSignedIn,
    });

    if (!isSignedIn) {
      await nonce.refetch();
      await _createSession();
    }
  };

  // ----    execute     ----

  const _apply = trpc.execute.apply.useMutation();
  // const executeObjectTypePartial = executeObjectType.required();
  const newEntry = async (input: IExecuteObjectType) => {
    await _apply.mutateAsync(input);
  };

  return {
    signOut,
    signIn,
    isSignedIn,
    getAuthSession,
    getAllEntries,
    getOneEntry,
    getEntryWhere,
    getRawEntries,
    newEntry,
    wallet,
  };
};

export default useApiCall;
