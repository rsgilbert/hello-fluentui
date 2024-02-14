import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@fluentui/react-components";

export default function Home() {
  return (
    <main className={styles.main}>
        <Button>Hello Everyone</Button>
    </main>
  );
}
