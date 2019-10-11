import React from 'react';
import ReactDOM from 'react-dom';
import AnimeList from './components/AnimeList';
import './App.css';


function App() {
  return (
    <div className="App">
    <h1>Anime List</h1>
    <div className="anime-container">
    <AnimeList />
    </div>
   
    </div>
  );
}



export default App;