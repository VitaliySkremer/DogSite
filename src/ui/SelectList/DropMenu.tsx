import {createPortal} from "react-dom";
import styles from "./SelectList.module.scss";

interface IDropMenuProps {
  top?:number;
  width?:number;
  left?:number
  list:Array<string>;
  setSelect:(sel:string)=>void;
  setActive:()=>void;
}

export const DropMenu = ({top,left, width, list, setSelect,setActive}:IDropMenuProps) => {

  const handler = (sel:string) =>{
    setSelect(sel);
    setActive();
  }

  const node = document.getElementById('drop-menu')
  if(!node) return null;

  return createPortal((
    <div style={{top:top,left:left, width: width}} className={styles.list}>
      {list.map(item=>
        <button onClick={()=>handler(item)} className={styles.btn__list} key={item}>{item}</button>
      )}
    </div>
  ),node)
}