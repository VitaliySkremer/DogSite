import {IntoCode} from "../../ui/IntoCode/IntoCode";
import {ListSubBreed as list} from "../../utils/ListSubBreed";

export const ListSubBreed = () => {
  return (
    <section>
      <h3 className='title'>Список под пород собачек</h3>
      <IntoCode
        className='fetch'
        description="Запрос делай сюда">
        https://dog.ceo/api/breed/hound/list
      </IntoCode>
      <IntoCode
        description="Ответ придёт примерно в таком виде:)"
        border={true}
        size='full'>
        {list}
      </IntoCode>
    </section>
  )
}