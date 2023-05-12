import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './visual/About';
import Detail from './visual/Detail';
import Form from './components/Form/Form';
import { useState } from 'react';   
import { useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

const email = 'chrivel1998@gmail.com';
const password = 'alianza1998';


function App() {
   const location = useLocation();//almacena informacion(objeto) de la URL actual de mi pagina;
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const onSearch = (id) => {
      const duplicate = characters.find(character => character.id === parseInt(id));
      
      if (!duplicate) {
         axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.data)
            .then((data) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            });
      }else {
         window.alert("Duplicado")
      }

   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter((character) => {
         return (
            character.id !== Number(id)
         )
      })
      setCharacters(charactersFiltered)
   }
   return (
      
      <div className='App'>
         {location.pathname !== '/' ? < Nav onSearch={onSearch} /> : <h1>Aun no se visualiza la Nav</h1>}
         
         <Routes>
            <Route path='/' element={<Form login={login} />} />

            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />

            <Route path='/about' element={<About />}/>

            <Route path='/detail/:id' element={<Detail />}/>        

            <Route path='/favorites' element = {<Favorites />} />

         </Routes>   

      </div>
      
      
   );
}

export default App;

