import React from 'react';
import CityFeature from './CityFeature';
import { CityFeatureProps } from '../types/props-interfaces';

const CityFeatureBanner = () => {
    const featuresArray: CityFeatureProps[] = [
        { imagePath: require('../../images/compass.png'), altText: 'Compass image', featureName: 'Регион' },
        { imagePath: require('../../images/bulgaria.png'), altText: 'Bulgaria outline', featureName: 'Област' },
        { imagePath: require('../../images/group.png'), altText: 'Group of people image', featureName: 'Население' },
        { imagePath: require('../../images/tracks.png'), altText: 'Train tracks image', featureName: 'ЖП гара' },
        { imagePath: require('../../images/altitude.png'), altText: 'Altitude image', featureName: 'Надморска височина' },
    ]
    return (
        <div className="city-feature-banner">
            {featuresArray.map((featureObject, index) => {
                return <CityFeature key={index} imagePath={featureObject.imagePath} altText={featureObject.altText} featureName={featureObject.featureName} />
            })}
        </div>
    );
}

export default CityFeatureBanner;
