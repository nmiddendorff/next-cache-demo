import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a href="/dynamic-demo" className={styles.card}>
          <h2 className={inter.className}>
            DYNAMIC DEMO <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Static page with bit of dynamic content.
          </p>
        </a>
        <a
          href="https://github.com/nmiddendorff/browning-bananas"
          className={styles.card}
        >
          <h2 className={inter.className}>
            🍌 Browning Bananas Chrome <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Chrome Extension to visualize when a component was rendered by the
            server
          </p>
        </a>
      </div>
    </main>
  );
}
