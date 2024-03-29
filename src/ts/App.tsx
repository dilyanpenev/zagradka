/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import '../scss/App.scss';
import { getTodaysCity } from './helpers/api';
import { useAppDispatch } from './hooks/storeHooks';
import { setTodaysAnswer } from './reducers/answerSlice';
import { changeView } from './reducers/viewSlice';
import { Views } from './constants/reducer-enums';
import HeaderBanner from './components/HeaderBanner';
import Wrapper from './views/Wrapper';

const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodaysCity();
      dispatch(setTodaysAnswer(data));
      dispatch(changeView(Views.GAME));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <HeaderBanner />
      <Wrapper />
    </div>
  );
}

export default App;
