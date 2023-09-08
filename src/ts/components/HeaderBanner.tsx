import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/storeHooks';
import { changeView, getCurrentView } from '../reducers/viewSlice';
import { Views } from '../constants/reducer-enums';

const HeaderBanner = () => {
    const currentView = useAppSelector(getCurrentView);
    const dispatch = useAppDispatch()

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (currentView === Views.GAME) {
            dispatch(changeView(Views.HELP));
        }
        else if (currentView === Views.HELP) {
            dispatch(changeView(Views.GAME));
        }
    }
    return (
        <header>
            <div className="site-header">
                <span className='site-header__menu'>|||</span>
                <span className='site-header__title'>zaGradka</span>
                <span className='site-header__help' onClick={clickHandler}>{currentView === Views.HELP ? "X" : "?"}</span>
            </div>
        </header>
    );
}

export default HeaderBanner;
