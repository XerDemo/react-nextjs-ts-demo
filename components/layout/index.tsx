import Footer from "components/footer";
import Navbar from "components/navbar";
import { NextPage } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
