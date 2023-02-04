import {ListAllBreeds} from "../module/ListAllBreeds/ListAllBreeds";
import {RandomPhoto} from "../components/RandomPhoto/RandomPhoto";
import {ListByBreed} from "../module/ListByBreed/ListByBreed";
import {RandomByThreePhoto} from "../components/RandomByThreePhoto/RandomByThreePhoto";
import { responseThreePhoto } from "../utils/ResponseThreePhoto";
import {useState} from "react";
import {Tabs} from "../components/Tabs/Tabs";
import {ISelect} from "../components/Tabs/Tabs";
import {BreedList} from "../module/BreedList/BreedList";
import {ListSubBreed} from "../module/ListSubBreed/ListSubBreed";
import { ListThreeSubBreed } from "../utils/ListThreeSubBreed";

const listDogsTabs:Array<ISelect> = [
  {text:'Список всех парод'},
  {text:'Рандомная картинка'},
  {text:'По породе'},
  {text:'По под породе'},
  {text:'Список пород'},
]

export const Dogs = () => {
  const [select, setSelect] = useState<ISelect>(listDogsTabs[0])

  const newSetSelect = (sel:ISelect) => {
    setSelect(sel);
  }

  return (
    <div>
      <Tabs listTab={listDogsTabs} select={select} setSelect={newSetSelect}/>
      {select.text === 'Список всех парод' && <ListAllBreeds/>}
      {select.text === 'Рандомная картинка' && (
        <>
          <RandomPhoto/>
          <RandomByThreePhoto
            title='Получить сразу 3 картинки'
            fetch='https://dog.ceo/api/breeds/image/random/3'
            result={responseThreePhoto}
          />
        </>
      )}
      {select.text === 'По породе' && (
        <>
          <ListByBreed/>
          <RandomByThreePhoto
            title='Получить сразу 3 картинки'
            fetch='https://dog.ceo/api/breed/hound/images/random/3'
            result={responseThreePhoto}
          />
        </>
      )}
      {select.text === 'По под породе' && (
        <>
          <ListSubBreed/>
          <RandomByThreePhoto
            title='Получить сразу 3 картинки под породы'
            fetch='https://dog.ceo/api/breed/hound/afghan/images/random/3'
            result={ListThreeSubBreed}
          />
        </>
      )}
      {select.text === 'Список пород'&& <BreedList/>}
    </div>
  )
}