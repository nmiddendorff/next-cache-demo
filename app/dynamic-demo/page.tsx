import { Suspense } from "react";
import DynamicContent from "./dynamic-component-with-time";
import styles from "../page.module.css";

export const revalidate = 10;

export default function Page(): JSX.Element {
  const timeStamp = new Date().toISOString();
  return (
    <main
      className={styles.main}
      data-ttl={revalidate}
      data-created-date-time={timeStamp}
    >
      <div className={styles.container}>
        <Suspense fallback={<p>Loading fresh data...</p>}>
          <DynamicContent />
        </Suspense>
      </div>
    </main>
  );
}
