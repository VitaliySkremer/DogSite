import styles from './Navigate.module.scss'

export const Navigate = () => {
  return (
    <div className={styles.navigate}>
      <img className={styles.img} src="https://dog.ceo/img/dog-api-logo.svg" alt="dog"/>
      <h1 className={styles.title}>Dog</h1>
    </div>
  )
}