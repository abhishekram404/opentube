import React, { FC } from "react";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";
interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Layout;
