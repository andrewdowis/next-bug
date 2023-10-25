import Link from "next/link"

// These styles apply to every route in the application
import "./global.css"
import styles from "./rootStyle.module.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className={`${styles.header} ${styles.headerMain}`}>
          <h1>
            <Link href="/" className={styles.homeLink}>
              Root
            </Link>
          </h1>
          <h2>
            <Link href="/revalidate" className={styles.homeLink}>
              Revalidate
            </Link>
          </h2>
          <h3>
            <Link href="/nostore" className={styles.menuBarLinks}>
              No Store
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  )
}
