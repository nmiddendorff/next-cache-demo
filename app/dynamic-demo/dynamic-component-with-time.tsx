import styles from "../page.module.css"

export default async function DynamicContent(): Promise<JSX.Element> {
  const url = "http://worldtimeapi.org/api/timezone/America/Chicago"
  const response = await fetch(url, { next: { revalidate: 5 } })
  const dynamicData = await response.json()
  const timestamp = JSON.stringify(dynamicData.datetime)

  return (
    <div
      className={styles.dynamicSection}
      data-ttl="0"
      data-created-date-time={timestamp}
    >
      <pre className={styles.dynamicContent}>✨ Fresh Data: {timestamp}</pre>
    </div>
  )
}
