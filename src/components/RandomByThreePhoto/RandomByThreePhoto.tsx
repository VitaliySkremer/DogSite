import {IntoCode} from "../../ui/IntoCode/IntoCode";
import {Button} from "../../ui/Button/Button";
import ky from "ky";
import {useEffect, useState} from "react";
import styles from './RandomThreePhoto.module.scss'

interface RandomByThreePhotoProps {
  title:string;
  fetch:string;
  result:string
}

interface DogData {
  status:string;
  message: Array<string>;
}

export const RandomByThreePhoto = ({title, fetch, result}:RandomByThreePhotoProps) => {
  const [img, setImg] = useState<string[]>([]);

  const getImg = async () => {
    const data:DogData = await ky(fetch).json();
    setImg(data.message)
  }

  useEffect(()=>{
    getImg();
  },[])

  return (
    <section className={styles.section}>
      <h3 className='title'>{title}</h3>
      <IntoCode className={styles.fetch} size='small'>
        {fetch}
      </IntoCode>
      <div className={styles.wrapper}>
        <IntoCode
          className={styles.code}
          description='Ответ приходит примерно такой'
          size='small'>
          {result}
        </IntoCode>
        <div className={styles.img__block}>
          <Button className={styles.btn} onClick={getImg}>
            Ещё собачки!
          </Button>
          <div>
            {img.map(photo=>
              <img className={styles.img} src={photo} key={photo} alt=""/>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}