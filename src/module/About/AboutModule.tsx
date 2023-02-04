import styles from './AboutModule.module.scss'

export const AboutModule = () => {
  return (
    <section>
      <p className={styles.paragraph}>
        Этот небольшой сайт сделан для тех, кто любит собак, но к сожалению, пока не смог обрести своего четвероногого друга! У меня конечно есть кошка, но это животное постоянно хочет меня сожрать:( Но вообще я стал ещё каефовать от овечек и в будущем хочу попробовать завести своё стадо
      </p>
      <span className={styles.span}>
        (А также он сделан для моей коллеги по работе, у которой 4 или 10 собак. Я сам уже запутался. Главное не ленись и у тебя всё получится! Ветошкину привет)
      </span>
      <p className={styles.paragraph}>
        Я указал несколько ресурсов от куда можно получить картинки собачек. Это сделано для тех, кто хочется потренироваться в программировании с получением данных
      </p>
    </section>
  )
}