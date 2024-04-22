import './App.scss';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { InitialFrame  } from './COMPONENTS/frame/initial_frame';
import { useAppSelector } from './REDUX/hooks';
import { useDispatch } from 'react-redux';
import { change_theme } from './REDUX/Slices/themeSlice';
import { GlobalStyle } from './GlobalStyles';
import MainPage from './PAGE/mainPage/mainPage';

function App() {

  const Theme = useAppSelector(state => state.theme)
  const dispatch = useDispatch()

  useEffect(()=>{
    const getTheme = localStorage.getItem('theme')
    if(!getTheme) return

    if(getTheme === "light" && Theme.theme !== "light")
      dispatch(change_theme("light"))
    else if(getTheme === "dark" && Theme.theme !== "dark")
      dispatch(change_theme("dark"))
  },[])

  return (
    <div className="App">
      <GlobalStyle theme={Theme}/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

function Test(){
  const Theme = useAppSelector(state => state.theme)
  const dispatch = useDispatch()
  return <InitialFrame>
    <button style={{marginTop:"150px"}} onClick={e=>{
      e.preventDefault()
      dispatch(change_theme(Theme.theme === "light"?"dark":"light"))
    }}>버어어어어튼</button>
  </InitialFrame>
}