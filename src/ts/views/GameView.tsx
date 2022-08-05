import React from 'react';
import CityFeatureBanner from '../components/CityFeatureBanner';
import GuessFooter from '../components/GuessFooter';
import GuessListWrapper from '../components/GuessListWrapper';

const GameView = () => {
    return (
        <div className="game-view-wrapper">
            <CityFeatureBanner />
            <GuessListWrapper />
            <GuessFooter />
        </div>
    );
}

export default GameView;
