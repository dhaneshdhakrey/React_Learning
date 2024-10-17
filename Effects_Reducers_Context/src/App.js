import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './contest-auth/loggedin-pass'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(function(){
    let tempLogin=localStorage.getItem('loginhaikya');
    if(tempLogin==='1'){
      setIsLoggedIn(true);
    } 
  },)
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem('loginhaikya','1');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem('loginhaikya','0');
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={{
    isLoggedIn:isLoggedIn,
    doLogout:logoutHandler,
    doLogin:loginHandler
}}>
      <MainHeader  onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
