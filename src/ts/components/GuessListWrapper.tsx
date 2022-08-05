import React from 'react';
import { GuessItemProps } from '../types/props-interfaces';
import GuessItem from './GuessItem';

const GuessListWrapper = () => {
    const guessList: GuessItemProps[] = [
        { guessIndex: 1, cityName: "Айтос", score: [1, 1, 0, 0, 0], guessAttributes: ["Югоизточен", "Бургас", "258", "има", "89 км"] },
        { guessIndex: 2, cityName: "Угърчин", score: [0, 0, 1, 1, 0], guessAttributes: ["Северен централен", "Ловеч", "112", "няма", "200 км"] },
    ];

    return (
        <div className="guess-list-wrapper">
            {guessList.map((guessObject, index) => {
                return <GuessItem key={index}
                    guessIndex={guessObject.guessIndex}
                    cityName={guessObject.cityName}
                    score={guessObject.score}
                    guessAttributes={guessObject.guessAttributes}
                />
            })}
        </div>
    );
}

export default GuessListWrapper;
