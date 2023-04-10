import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "@paymasters-io/server/dist/trpc";

import superjson from "superjson";

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: "https://api.paymasters.io/trpc",
          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
      transformer: superjson,
    };
  },
  ssr: false,
});
