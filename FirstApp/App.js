import React from 'react';
import {HomeScreen} from "./src/navigation/navigation";
import  {ProfileScreen} from "./src/navigation/profil";

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;