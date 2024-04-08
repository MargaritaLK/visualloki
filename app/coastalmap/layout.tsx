import styles from './styles.module.css'
 
export default function CoastalmapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={styles.dashboard}>{children}</section>
}