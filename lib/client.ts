import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from 'server/src/trpc';
import SuperJSON from 'superjson';

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "https://api.paymasters.io"
    })
  ],
  transformer: SuperJSON
});

