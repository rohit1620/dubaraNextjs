import Image from "next/image";
import styles from "./page.module.css";
import EventFunctionState from "./components/EventFunctionState";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Rohit kumar malav</h1>
       <EventFunctionState/>
      </main>
     
    </div>
  );
}
