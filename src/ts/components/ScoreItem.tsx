import React, { FC } from 'react';
import { ScoreItemProps } from '../types/props-interfaces';

const ScoreItem: FC<ScoreItemProps> = ({ title, isCorrect }) => {

    return (
        <div className={`score-item-wrapper ${isCorrect ? "correct" : ""}`}>
            <span>{title.toUpperCase()}</span>
        </div>
    );
}

export default ScoreItem;
