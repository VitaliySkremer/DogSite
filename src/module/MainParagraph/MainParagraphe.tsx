import styles from './MainParagraph.module.scss'

export const MainParagraphe = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>
        Welcome to a resource <span className={styles.title_bold}>full of dog pictures!</span>
      </h1>
      <p className={styles.paragraph}>
        Here you can find out what breeds of dogs exist and see how they look.
      </p>
      <p className={styles.paragraph}>
        I will also leave some links for getting dog pictures from the API
      </p>
      <p className={styles.paragraph}>
        Hope you find the dog you like!
      </p>
    </section>
  )
}