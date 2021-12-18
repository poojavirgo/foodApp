import { Fragment } from 'react';
import './App.css';
import Header from './Layout/Header';
import Meals from './Meals/Meals';

function App() {
  return (
    <Fragment >
    <Header/>
    <main>
    <Meals/>
    </main>
    </Fragment>
  );
}

export default App;
