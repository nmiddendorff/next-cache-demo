"use client";

import useSWR from "swr";
import styles from "../page.module.css";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function Profile() {
  const { data, error, isLoading } = useSWR(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div
      className={styles.dynamicSection}
      data-ttl="0"
      data-created-date-time={new Date().toISOString()}
    >
      <pre className={styles.dynamicContent}>
        ✨ Fresh Data: {JSON.stringify(data.datetime)}
      </pre>
    </div>
  );
}
