import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@fluentui/react-components";
import { MyDataGrid } from "./ui/MyDataGrid";

export default function Home() {
  return (
    <main className={styles.main}>
        <MyDataGrid />
        <Button>Hello Everyone</Button>
    </main>
  );
}
