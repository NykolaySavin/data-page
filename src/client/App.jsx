import React from 'react';
import Header from './js/components/header/Header';
import Menu from './js/components/menu/Menu.container'
import Content from "./js/components/content/Content.container";

function App() {
  return (
    <div className="body">
      <Header/>
        <div className="block">
            <Menu/>
            <Content/>
        </div>

    </div>
  );
}

export default App;
