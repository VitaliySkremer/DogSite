import styles from './Navigate.module.scss'
import {LinkHref} from "../../ui/LinkHref/LinkHref";
import {Link} from "react-router-dom";

interface linkedList {
  to:string;
  text:string;
}

const linkedList:linkedList[] = [
  {
    to:'/dogs', text:'Собаки'
  },{
    to:'/about', text:'about'
  },
]

export const Navigate = () => {
  return (
    <div className={styles.navigate}>
      <Link to='/'>
        <img className={styles.img} src="https://dog.ceo/img/dog-api-logo.svg" alt="dog"/>
      </Link>
      <h1 className={styles.title}>Dog</h1>
      {linkedList.map(link=>
        <LinkHref key={link.to} to={link.to}>
          {link.text}
        </LinkHref>
      )}
    </div>
  )
}