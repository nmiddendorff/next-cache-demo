import styles from "../page.module.css";

export default async function DynamicContent(): Promise<JSX.Element> {
  const url = "http://worldtimeapi.org/api/timezone/America/Chicago";

  // revalidate of 5
  // const response = await fetch(url, {
  //   next: { revalidate: 5 },
  // });

  // no-store causes the parent page to revalidate every time
  const response = await fetch(url, {
    cache: "no-store",
  });

  const dynamicContent = await response.json();

  return (
    <div
      className={styles.dynamicSection}
      data-ttl="0"
      data-created-date-time={new Date().toISOString()}
    >
      <pre className={styles.dynamicContent}>
        ✨ Fresh Data: {JSON.stringify(dynamicContent.datetime)}
      </pre>
    </div>
  );
}
