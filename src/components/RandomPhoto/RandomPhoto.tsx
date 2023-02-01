import {useEffect, useState} from "react";
import ky from "ky";
import {Button} from "../../ui/Button/Button";
import styles from './RandomPhoto.module.scss'

interface DogData {
  status:string;
  message: string;
}

export const RandomPhoto = () => {
  const [img,setImg] = useState('');
  const [toogle, setToogle] = useState(false);

  useEffect(()=>{
    const getImg = async ()=>{
      const data:DogData = await ky('https://dog.ceo/api/breeds/image/random').json();
      setImg(data.message)
    }

    getImg();
  },[toogle])

  return (
    <div className={styles.wrapper}>
      <Button
        size="small"
        className={styles.btn}
        onClick={()=> setToogle(!toogle)}
      >
        more dog!
      </Button>
      <img src={img} alt=""/>
    </div>
  )
}