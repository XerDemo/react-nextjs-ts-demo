import Layout from "components/layout";
import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "../styles/globals.css";

// _app.tsx 入口文件
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
