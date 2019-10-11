import React from 'react';

const Anime = props => {
    return (
        <>
           <div className="anime-cards">
            <h1>{props.anime.title}</h1>
            <img src={props.anime.image_url} />
            <p>{props.anime.synopsis}</p>
            <p className="anime-content">{props.anime.type} | {props.anime.episodes} | {props.anime.members}</p>
            </div>
        </>
        

    )
}

export default Anime;