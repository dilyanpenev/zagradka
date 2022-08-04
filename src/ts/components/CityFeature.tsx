import React, { FC } from 'react';
import { CityFeatureProps } from '../types/props-interfaces';

const CityFeature: FC<CityFeatureProps> = ({ imagePath, altText, featureName }) => {
    return (
        <div className="city-feature">
            <img className="city-feature__icon" src={imagePath} alt={altText} />
            <span className="city-feature__title">{featureName}</span>
        </div>
    );
}

export default CityFeature;
