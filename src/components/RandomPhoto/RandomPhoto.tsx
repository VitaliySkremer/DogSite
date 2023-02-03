import {useEffect, useState} from "react";
import ky from "ky";
import {Button} from "../../ui/Button/Button";
import styles from './RandomPhoto.module.scss'
import {IntoCode} from "../../ui/IntoCode/IntoCode";
import { ResponseFetchSingleDog } from "../../utils/ResponseFetchSingleDog";

interface DogData {
  status:string;
  message: string;
}

export const RandomPhoto = () => {
  const [img,setImg] = useState('');

  const getImg = async () => {
    const data:DogData = await ky('https://dog.ceo/api/breeds/image/random').json();
    setImg(data.message)
  }

  useEffect(()=>{
    getImg();
  },[])

  return (
    <div className={styles.wrapper}>
      <div className={styles.code}>
        <IntoCode
          className={styles.fetch}
          description='Для получения рандомной картинки сделай запрос сюда:'>
          https://dog.ceo/api/breeds/image/random
        </IntoCode>
        <IntoCode
          className={styles.fetch}
          border={true}
          description='Например запрос может выглядеть так:'
        >
          fetch('https://dog.ceo/api/breeds/image/random')<br/>
              .then(response =&gt; response.json())<br/>
              .then(data =&gt; console.log(data))
        </IntoCode>
        <IntoCode
          border={true}
          description='А вот и ответ:)'
        >
          {ResponseFetchSingleDog}
        </IntoCode>
      </div>
      <div className={styles.img__wrapper}>
        <Button
          size="small"
          className={styles.btn}
          onClick={getImg}
        >
          Другая собака!
        </Button>
        <img src={img} className={styles.img} alt=""/>
      </div>
    </div>
  )
}