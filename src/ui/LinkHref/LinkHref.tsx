import {ReactNode} from "react";
import {Link} from "react-router-dom";
import styles from './LinkedHref.module.scss'

interface ILinkHref {
  children:ReactNode;
  to: string;
}

export const LinkHref = ({children, to}:ILinkHref) => {
  return (
    <Link className={styles.link} to={to}>
      {children}
    </Link>
  )
}