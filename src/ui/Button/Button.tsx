import {ButtonHTMLAttributes, ReactNode} from "react";
import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children:ReactNode;
  className?: string;
  size?: "small" | "full"
}

export const Button = ({children, className,size = "small", ...other}:IButtonProps) => {

  const buttonSize = size === "small" ? styles.small: styles.full;

  return (
    <button className={[buttonSize, styles.btn, className].join(' ')} {...other}>
      {children}
    </button>
  )
}