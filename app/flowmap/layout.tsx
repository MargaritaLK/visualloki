import styles from './styles.module.css'
 
export default function FlowmapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className={styles.dashboard}>{children}</section>
}