import { Suspense } from "react"
import DynamicContent from "./dynamic-component-with-time"
import styles from "../page.module.css"

// export const revalidate = 60;

export default async function Page(): Promise<JSX.Element> {
  const url = "http://worldtimeapi.org/api/timezone/America/Chicago"
  const response = await fetch(url)
  const cachedData = await response.json()
  const timestamp = JSON.stringify(cachedData.datetime)

  return (
    <main
      className={styles.main}
      // data-ttl={revalidate}
      data-created-date-time={timestamp}
    >
      <pre>💵 Cached Data: {timestamp}</pre>
      <div className={styles.container}>
        <Suspense fallback={<p>Loading fresh data...</p>}>
          {/* @ts-expect-error Async Server Component */}
          <DynamicContent />
        </Suspense>
      </div>
    </main>
  )
}
