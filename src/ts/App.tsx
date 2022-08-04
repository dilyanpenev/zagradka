import React from 'react';
import '../scss/App.scss';
import HeaderBanner from './components/HeaderBanner';
import GameView from './views/GameView';

const App = () => {
  return (
    <div className="App">
      <HeaderBanner />
      <GameView />
    </div>
  );
}

export default App;
