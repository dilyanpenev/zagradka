import React, { Fragment } from 'react';
import { useAppSelector } from '../hooks/storeHooks';
import { selectAnswerId } from '../reducers/answerSlice';
import LoadingView from './LoadingView';
import GameView from './GameView';

const Wrapper = () => {
    const answerId = useAppSelector(selectAnswerId)

    return (
        <Fragment>
            {answerId === null ? <LoadingView /> : <GameView />}
        </Fragment>
    );
}

export default Wrapper;
