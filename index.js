import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { View, Text } from 'react-native'
import React from 'react'
import { store } from './app/redux';
import { Provider } from 'react-redux';

const RootComponent = () => {
    return (
      <Provider store={store}>
        <App />        
      </Provider>
    
  )
}


AppRegistry.registerComponent(appName, () => RootComponent);