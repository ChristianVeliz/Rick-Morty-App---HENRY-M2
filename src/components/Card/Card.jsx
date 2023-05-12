import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, image, onClose, addFav, removeFav, myFavorites }) {
   
   const [isFav, setIsFav] = useState(false);

   console.log("myfavorites", myFavorites)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }
      else {
         setIsFav(true);
         addFav({id, name, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites, id]);

   return (
      
      <div className={styles.cardContainer}>
         <div className={styles.image_container}>
            <img  className={styles.image} src={image} alt={name} />
         </div>

         <div className={styles.text_container}>
         
            <button onClick={() => onClose(id)} className={styles.buttonStyle}>Cerrar</button>
           
            <Link to={`/detail/${id}`} className={styles.link}>
               <h2 className={styles.nameStyle}>{name}</h2>  
            </Link>  
            
              
         </div>
         <button onClick={handleFavorite} className={styles.favoriteButton}>{isFav ? '❤️' : '🤍' }</button>
      </div>
       
   );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         console.log("character", character)
         dispatch(addFav(character))
      },

      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);


