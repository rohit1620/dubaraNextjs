import Image from "next/image";
import styles from "./page.module.css";
import EventFunctionState from "./components/EventFunctionState";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Rohit kumar malav</h1>
       <EventFunctionState/>
       <Link href="/mongo-add" style={{backgroundColor:"black",color:"white"}}>Add Data To MongoDB</Link>
       <Link href="/mongo-get" style={{backgroundColor:"blue",color:"white"}}>Get Data From MongoDB</Link>
      </main>
     
    </div>
  );
}
