import React from 'react';
import CityFeatureBanner from '../components/CityFeatureBanner';
import GameFooter from '../components/GameFooter';
import GuessListWrapper from '../components/GuessListWrapper';

const GameView = () => {
    return (
        <div className="game-view-wrapper">
            <CityFeatureBanner />
            <GuessListWrapper />
            <GameFooter />
        </div>
    );
}

export default GameView;
