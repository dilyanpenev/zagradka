import React from 'react';
import CityFeatureBanner from '../components/CityFeatureBanner';
import GuessFooter from '../components/GuessFooter';

const GameView = () => {
    return (
        <div className="game-view-wrapper">
            <CityFeatureBanner />
            <GuessFooter />
        </div>
    );
}

export default GameView;
