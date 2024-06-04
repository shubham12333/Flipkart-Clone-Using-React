import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import { store,persistor } from './Redux/Store/Store';
import { Routing } from './Routes/Routes';

ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <Routing />
  </PersistGate>
    </Provider>
 ,  
  document.getElementById('root')
);

