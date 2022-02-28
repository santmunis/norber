import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

import Router from "./routes/route";
import Menu from './components/menu';
import SideNav from './components/side-nav';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <div className="menu">
            <Menu color="#234099" />
          </div>
          <div className="side-menu">
            <SideNav />
          </div>
          <main className="content">
            <Router />
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
