import "@styles/globals.css";
import Layout from "@components/layout";
import { useApollo } from "@lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { useCreateStore, Provider } from "@lib/store";
import { MantineProvider } from "@mantine/core";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../mocks");
}

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  const createStore = useCreateStore(pageProps.initialZustandState);

  return (
    <ApolloProvider client={apolloClient}>
      <Provider createStore={createStore}>
        <Layout>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: "dark",
            }}
          >
            <Component {...pageProps} />
          </MantineProvider>
        </Layout>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
