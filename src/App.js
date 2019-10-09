import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navigation/NavBar';
import AppRouter from './utils/appRouter';

function App() {
  return (
    <div className="App">
<NavBar />
<AppRouter />
    </div>
  );
}

export default App;
