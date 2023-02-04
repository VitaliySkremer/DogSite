import styles from './Navigate.module.scss'
import {LinkHref} from "../../ui/LinkHref/LinkHref";
import {Link} from "react-router-dom";
import {useState} from "react";
import {SocialLinks} from "../../components/SocialLinks/SocialLinks";

interface linkedList {
  to:string;
  text:string;
}

const linkedList:linkedList[] = [
  {
    to:'/dogs', text:'Собаки'
  },{
    to:'/about', text:'О нас'
  },
]

export const Navigate = () => {
  const [isMenu, setIsMenu] = useState(false)

  const handler = () =>{
    setIsMenu(prevState => !prevState);
  }

  return (
    <>
      <div className={[styles.navigate, isMenu? styles.isActive:''].join(' ')}>
        <button onClick={handler} className={styles.close}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
          </svg>
        </button>
        <Link to='/'>
          <img className={styles.img} src="https://dog.ceo/img/dog-api-logo.svg" alt="dog"/>
        </Link>
        <h1 className={styles.title}>Dog</h1>
        <div className={styles.link__wrapper}>
          {linkedList.map(link=>
            <LinkHref key={link.to} to={link.to}>
              {link.text}
            </LinkHref>
          )}
        </div>
        <SocialLinks/>
      </div>
      <button onClick={handler} className={styles.menu}>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#0F1729"/>
        </svg>
      </button>
    </>
  )
}