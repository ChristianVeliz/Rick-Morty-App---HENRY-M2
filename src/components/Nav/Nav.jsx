import SearchBar from '../Searchbar/SearchBar.jsx'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav(props){
    return(
        <div className={styles.navContainer}>
           
            <div className={styles.buttonContainer}>
                <button className={styles.buttonStyle}>
                    <Link to='/about' className={styles.link}>About</Link>
                </button> 

                <button className={styles.buttonStyle}>
                    <Link to='/home' className={styles.link}>Home</Link>
                </button>  

                <button className={styles.buttonStyle}>
                    <Link to='/favorites' className={styles.link}>Favorites</Link>
                </button>
            </div>

             <div className={styles.searchBarContainer}>
                <SearchBar onSearch={props.onSearch}/>
            </div>
        </div>
    )
}