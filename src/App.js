import {GlobalStyle } from './style';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import store from './store';
import { ReactReduxContext } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
