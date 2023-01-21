import styles from "./index.module.css";
import { type NextPage } from "next";
import React from "react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    const download = trpc.download.download.useMutation();
    const handleDownload = () => {
      download.mutate({filename: "test.txt"});
    };
  
    React.useEffect(() => {
      if (download.isSuccess) {
        const url = window.URL.createObjectURL(new Blob([download.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "test.txt");
        document.body.appendChild(link);
        link.click();
  }}, [download.isSuccess])
  
  
    return (
      <>
        <main className={styles.main}>
          <div className={styles.container}>
            <button onClick={handleDownload} className={styles.loginButton}>
              Download
            </button>
          </div>
        </main>
      </>
    );
  };
  
  export default Home;
