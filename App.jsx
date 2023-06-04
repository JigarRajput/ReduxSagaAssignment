import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './app/theme';
import RootMain from './app/navigation/RootMain';

const App = () => {
  
  return (
    <NavigationContainer theme={theme}>
      <RootMain />
    </NavigationContainer>
  );
};

export default App;
