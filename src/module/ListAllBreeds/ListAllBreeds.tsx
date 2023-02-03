import {IntoCode} from "../../ui/IntoCode/IntoCode";
import { ListBreeds } from "../../utils/ListBreeds";
import styles from './ListAllBreeds.module.scss'

export const ListAllBreeds = () => {

  return (
    <section>
      <h3 className='title'>Список всех парод собак</h3>
      <IntoCode
        className={styles.fetch}
        description="Запрос делай сюда">
        https://dog.ceo/api/breeds/list/all
      </IntoCode>
      <IntoCode
        description="Ответ придёт примерно в таком виде:)"
        border={true}
        size='full'>
        {ListBreeds}
      </IntoCode>
    </section>
  )
}