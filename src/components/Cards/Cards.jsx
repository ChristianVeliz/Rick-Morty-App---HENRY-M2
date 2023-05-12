import Card from '../Card/Card.jsx'
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {
   console.log(characters);
   return (
   <div className = {styles.container}>
      {characters.map((character, index) => {
         return(
         <Card 
            key = {index}
           id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
         />
         )
      })}
   </div>
   );
}
