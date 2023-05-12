import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css';



const Detail = (props) => {
    const {id} = useParams();
    console.log(id);

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
         setCharacter(data);
         } else {
         window.alert('No hay personajes con ese ID');
      }
        });
     return setCharacter({});
    }, [id]);

    return (
        <div className={styles.pageColor}>
            <div >
                <img src={character?.image} alt={character?.name} />
            </div>
            
            <div>
                <h2>Name: {character?.name}</h2>
                <h2>Status: {character?.status}</h2>
                <h2>Specie: {character?.species}</h2>
                <h2>Gender: {character?.gender}</h2>
                <h2>Origin: {character?.origin?.name}</h2>
            </div>
                       
        </div>
    )
}

export default Detail;