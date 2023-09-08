import React, { FC } from 'react';
import { useAppSelector } from '../hooks/storeHooks';
import { selectIsCorrect } from '../reducers/guessSlice';
import GuessForm from './GuessForm';
import SuccessBanner from './SuccessBanner';
import { IRefProp } from '../types/props-interfaces';

const GameFooter: FC<IRefProp> = ({ scrollRef }) => {
    const isGameFinished = useAppSelector(selectIsCorrect)

    return (
        <div className="game-footer">
            {isGameFinished ? <SuccessBanner /> : <GuessForm scrollRef={scrollRef} />}
        </div >
    );
}

export default GameFooter;
