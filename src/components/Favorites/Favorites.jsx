
import Card from "../Card/Card";
import { connect } from 'react-redux'
import styles from './Favorites.module.css'

const Favorites = ({ myFavorites }) => {
    console.log(myFavorites);
    return (
        <div className = {styles.container}>
            {
                myFavorites?.map(fav => {
                    return (
                        
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);