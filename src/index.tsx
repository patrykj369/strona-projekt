import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Reset } from 'styled-reset';

import MainPage from './components/MainPage/MainPage';
import store from './tools/store';


ReactDOM.render(

    <Provider store={store}>
        <Reset />

        <MainPage />
    </Provider>,

  document.getElementById('root')
);