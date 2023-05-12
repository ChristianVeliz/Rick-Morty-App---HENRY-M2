import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
      // console.log(event.target.value);
   }

   return (
      <div className={styles.barra}>
         <input className={styles.inputStyle} type='text' value={id} onChange={handleChange} />

         <button className={styles.buttonStyle} onClick={() => { props.onSearch(id); setId('') }} ><span>Agregar</span></button>
      </div>
   );
}
