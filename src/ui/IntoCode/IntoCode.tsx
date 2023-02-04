import React, {ReactNode} from "react";
import styles from './IntoCode.module.scss'

interface IntoCodeProps {
  children:ReactNode;
  border?: boolean;
  description?: string;
  className?:string;
  size?: 'full'|'small'
}

export const IntoCode = React.memo(({className,children, border = false, description,size = 'small'}:IntoCodeProps) => {

  return (
    <div className={className}>
      <p className={styles.description}>{description}</p>
      <div className={[styles.code, border?styles.border:'',size==='small'?styles.small:''].join(' ')}>
        <pre className={styles.code__font}>
          {children}
        </pre>
      </div>
    </div>
  )
})