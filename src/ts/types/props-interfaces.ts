import React from 'react';

export interface CityFeatureProps {
    imagePath: string,
    altText: string,
    featureName: string
}

export interface ScoreItemProps {
    title: string,
    isCorrect: number
}

export interface IRefProp {
    scrollRef: React.MutableRefObject<HTMLDivElement | null>
}