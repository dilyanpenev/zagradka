import React, { FC } from 'react';
import GuessItem from './GuessItem';
import { useAppSelector } from '../hooks/storeHooks';
import { selectGuessList } from '../reducers/guessSlice';
import { IRefProp } from '../types/props-interfaces';

const GuessListWrapper: FC<IRefProp> = ({ scrollRef }) => {
    const guessList = useAppSelector(selectGuessList)

    return (
        <div className="guess-list-wrapper" ref={scrollRef}>
            {guessList.map((guessObject, index) => {
                return <GuessItem key={index}
                    guessIndex={index + 1}
                    cityName={guessObject.cityName}
                    score={guessObject.score}
                    guessAttributes={guessObject.guessAttributes}
                />
            })}
        </div>
    );
}

export default GuessListWrapper;
