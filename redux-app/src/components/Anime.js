import React from 'react';

const Anime = props => {
    return (
        <>
            <h1>{props.anime.title}</h1>
            <img src={props.anime.image_url} />
            <p>{props.anime.synopsis}</p>
            <p>{props.anime.type} | {props.anime.episodes} | {props.anime.members}</p>
        </>
        

    )
}

export default Anime;