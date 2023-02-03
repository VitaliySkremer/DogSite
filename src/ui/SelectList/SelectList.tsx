import {useRef, useState} from "react";
import styles from './SelectList.module.scss'
import {DropMenu} from "./DropMenu";

interface ISelectListProps {
  list:Array<string>;
  select: string;
  setSelect:(sel:string)=>void;
}

export const SelectList = ({list, select, setSelect}:ISelectListProps) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLButtonElement>(null)

  const toggleActive = () =>{
    setIsActive(false)
  }

  return (
    <div className={styles.select}>
      <button ref={ref} className={styles.btn} onClick={()=> setIsActive(prevState => !prevState)}>{select}</button>
      {isActive && (
        <DropMenu
          top={ref.current?.getBoundingClientRect().bottom}
          left={ref.current?.getBoundingClientRect().left}
          width={ref.current?.offsetWidth}
          list={list}
          setSelect={setSelect}
          setActive={toggleActive}
        />
      )}
    </div>
  )
}