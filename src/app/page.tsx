import styles from "./page.module.css";
import BBS from "../components/BBS";
import { BBSData } from "../app/types";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData: BBSData[] = await response.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main className={styles.main}>
      <BBS data={bbsAllData} />
    </main>
  );
}
