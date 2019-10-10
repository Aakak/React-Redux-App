import React from 'react';
import { connect } from 'react-redux';

const AnimeList = (props) => {
    return<div />;
};

const mapStateToProps = state => {
    return {
        animeList: state.animeList
    }
}

export default connect(
    mapStateToProps, 
    {})(AnimeList);
 