import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Anime from './Anime';
import { fetchList }  from '../actions';

const AnimeList = props => {
    useEffect(() => {
        console.log('fetching');
        props.fetchList();
    }, []);


    if (props.isFetching) {
        return <h2>Loading Anime List...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.animeList.map(anime => (
                <Anime key={anime.mal_id} anime={anime}/>
           ))}
        </div>
    )
};

const mapStateToProps = state => {
    console.log("mapStatoToProps state")
    console.log(state)
    return {
        animeList: state.animeList,
        isFetching: state.isFetching,
        error: state.error
        
    };
};

export default connect(
    mapStateToProps, 
    { fetchList }
    )(AnimeList);
 