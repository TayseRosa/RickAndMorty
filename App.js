import React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes';

export default () => {
  return(
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}