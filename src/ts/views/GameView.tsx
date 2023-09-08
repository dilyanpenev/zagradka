import React, { useRef } from 'react';
import CityFeatureBanner from '../components/CityFeatureBanner';
import GameFooter from '../components/GameFooter';
import GuessListWrapper from '../components/GuessListWrapper';

const GameView = () => {
    const listBottomRef = useRef<null | HTMLDivElement>(null);
    return (
        <div className="game-view-wrapper">
            <CityFeatureBanner />
            <GuessListWrapper scrollRef={listBottomRef} />
            <GameFooter scrollRef={listBottomRef} />
        </div>
    );
}

export default GameView;
