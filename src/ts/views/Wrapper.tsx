import React, { Fragment } from 'react';
import { useAppSelector } from '../hooks/storeHooks';
import { getCurrentView } from '../reducers/viewSlice';
import { Views } from '../constants/reducer-enums';
import LoadingView from './LoadingView';
import GameView from './GameView';

const Wrapper = () => {
    const currentView = useAppSelector(getCurrentView);

    switch (currentView) {
        case Views.LOADING:
            return (
                <Fragment>
                    <LoadingView />
                </Fragment>
            );

        case Views.GAME:
            return (
                <Fragment>
                    <GameView />
                </Fragment>
            );

        default:
            return (
                <Fragment>
                </Fragment>
            );
    }
}

export default Wrapper;
