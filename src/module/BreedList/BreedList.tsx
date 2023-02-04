import {IntoCode} from "../../ui/IntoCode/IntoCode";
import {SelectList} from "../../ui/SelectList/SelectList";
import {useEffect, useState} from "react";
import ky from "ky";
import styles from './BreedList.module.scss'

interface BreedList {
  status:string;
  message:{
    [breed:string]: string[]
  }
}

interface IImg {
  status:string;
  message:string[]
}

export const BreedList = () => {
  const [breedList, setBreedList] = useState<string[]>([])
  const [select, setSelect] = useState('')
  const [img, setImg] = useState<string[]>([])
  const getList = async () =>{
    const response:BreedList = await ky('https://dog.ceo/api/breeds/list/all').json()
    setBreedList(Object.keys(response.message))
    setSelect(breedList[0]);
  }

  const getImg = async () =>{
    const response:IImg = await ky(`https://dog.ceo/api/breed/${select}/images/random/6`).json()
    setImg(response.message)
    console.log(response.message)
  }

  useEffect(()=>{
    getList();
  },[])

  useEffect(()=>{
    setSelect(breedList[0]);
  },[breedList])

  const newSetSelect = (sel:string) =>{
    setSelect(sel)
  }

  useEffect(()=>{
    getImg();
  }, [select])


  return (
    <section>
      <h3 className='title'>Список пород</h3>
      {breedList.length && (
        <IntoCode
          description='Посмотри какие милые пёсики:3'
        >
          https://dog.ceo/api/breed/<SelectList list={breedList} select={select} setSelect={newSetSelect}/>/images/random/6
        </IntoCode>
      )}
      <div>
        {img.map(item=>
          <img className={styles.img} src={item} key={item} alt=""/>
        )}
      </div>
    </section>
  )
}