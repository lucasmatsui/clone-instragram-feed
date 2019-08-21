import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import logo from './assets/instagram.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Feed from './pages/Feed';

const Routes = createAppContainer(
  createStackNavigator({
    Feed
  }, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions:{
      headerTitle: <Image source={logo} />,
      headerLeft: <Icon name="camera-alt" size={28} color="#444" onPress={() => {alert("Abrir Camera!");}}/>,
      headerRight: <Icon name="launch" size={28} color="#444" onPress={() => {alert("Ir para o Direct!");}}  />,
      headerStyle: {
        backgroundColor: '#f3f3f3',
        height:45
      },
      headerLeftContainerStyle: {
        paddingLeft: 15
      },
      headerRightContainerStyle: {
        paddingRight: 15
      }
    },
  })
);

export default Routes;