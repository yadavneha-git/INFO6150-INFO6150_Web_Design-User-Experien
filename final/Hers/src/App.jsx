import { useState } from 'react';
import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Main from "./Components/Main.jsx";
import Skiplink from "./Components/Skiplink.jsx";
import ThemeSwitcher from './Components/ThemeSwitcher.jsx';




function App() {
  const[page, setpage] =useState('Articles');
  
  const [theme, setTheme] = useState('light');
  

  function go(targetpage){
    setpage(targetpage);
  }

  function onNav(event){
    event.preventDefault();
    const target =event.target.dataset.page;
    go(target);
  }

  function toogleTheme(){
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

  return (
    <div className ={`app ${theme}`}>
      <Skiplink />
      <Header onNav={onNav} theme={theme} toggleTheme={toogleTheme}/>
      
      <Main page={page} onNav={onNav}/>
      
      
      
    
      <Footer />
    </div>
  );
}
export default App;
