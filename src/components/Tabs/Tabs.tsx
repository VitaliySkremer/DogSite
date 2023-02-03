import styles from './Tabs.module.scss'

export interface ISelect{
  text:string;
}

interface ITabsProps {
  listTab: Array<ISelect>;
  select: ISelect;
  setSelect: (select:ISelect)=>void;
}

export const Tabs = ({listTab, select,setSelect}:ITabsProps) => {
  return (
    <ul className={styles.list}>
      {listTab.map(tab=>
        <li className={styles.item} key={tab.text}>
          <button
            onClick={()=>setSelect(tab)}
            className={[styles.btn, tab.text===select.text?styles.isActive:''].join(' ')}
          >{tab.text}
          </button>
        </li>
      )}
    </ul>
  )
}