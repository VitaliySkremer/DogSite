import {IntoCode} from "../../ui/IntoCode/IntoCode";
import {listHound} from "../../utils/ListHound";

export const ListByBreed = () => {
  return (
    <section>
      <h3 className='title'>По пароде</h3>
      <IntoCode
        className='fetch'
        description="Запрос делай сюда">
        https://dog.ceo/api/breed/hound/images
      </IntoCode>
      <IntoCode
        description="Ответ приходит в виде массива, например гончая"
        border={true}
        size='full'>
        {listHound}
      </IntoCode>
    </section>
  )
}