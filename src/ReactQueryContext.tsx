import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { DefaultOptions } from "react-query/types/core/types";

const config: {
  defaultOptions: DefaultOptions;
} = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

const queryClient = new QueryClient(config);

export const ReactQueryClientProvider: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools />
  </QueryClientProvider>
);
