import { Button, ConfigProvider } from "antd";
import Layout from "components/layout";
import type { AppProps } from "next/app";

import "normalize.css/normalize.css";
import "../styles/globals.css";

// _app.tsx 入口文件
export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ConfigProvider></ConfigProvider> 是antd用来自定义配置的
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8cf0c6ec",
          fontSize: 16,
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
        <Button>anniu</Button>
      </Layout>
    </ConfigProvider>
  );
}
