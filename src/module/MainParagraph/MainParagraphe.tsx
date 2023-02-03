import styles from './MainParagraph.module.scss'

export const MainParagraphe = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>
        Добро пожаловать на ресурс<span className={styles.title_bold}> полный различных картинок с собаками!</span>
      </h1>
      <p className={styles.paragraph}>
        Здесь ты можешь найти любую породу собаки и увидеть как она выглядит.
      </p>
      <p className={styles.paragraph}>
        Я также оставлю ссылки куда нужно делать запросы, чтобы получить эти картинки
      </p>
      <p className={styles.paragraph}>
        Я надеюсь у тебя всё получится!
      </p>
    </section>
  )
}