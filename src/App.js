import React, { useEffect, useState } from 'react';
import './index.css';
import Header from './components/Header';
import './App.css';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem(("theme")|| "light" ));

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme)
  }, [theme])
  return (
    <div className="page-container" >
      <Header theme = {theme} setTheme = {setTheme} />
      <List />
        <Footer />
    </div>
  );
}

export default App;
