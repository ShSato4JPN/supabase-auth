import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData = await response.json();

  console.log(bbsAllData);

  return (
    <main className={styles.main}>
      <h1>prisma test</h1>
    </main>
  );
}
