import styles from './MyOffice.module.scss'
export const MyOffice = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <p className={styles.paragraph}>А это мы сидим в нашем кабинете:3</p>
        <div className={styles.img__wrapper}>
          <img className={styles.img} src="https://www.amworld.ru/upload/000/u3/5/1/d7ca9ba8.jpg" alt="собака"/>
          <img className={styles.img} src="https://growthautomationservices.com/wp-content/uploads/2018/05/work-puppy.jpg" alt="собака"/>
          <img className={styles.img} src="https://main.judgehype.com/images/froala/2017/09/1505465469_837161.jpg" alt="собака"/>
          <img className={styles.img} src="https://sun9-45.userapi.com/impf/c851124/v851124362/1279e4/kYwOEywdmRI.jpg?size=604x453&quality=96&sign=78f5dd74f93162d7ad3349b65a88b3de&type=album" alt="собака"/>
          <img className={styles.img} src="https://prodota.ru/forum/uploads/monthly_2020_03/gx8t4rbfkul41.jpg.694c7d3cdb9e74270476193470cf2174.jpg" alt="собака"/>
        </div>
      </div>
    </section>
  )
}