import reset from './reset.module.css';
import CustomTheme from './theme/CustomTheme';
import { Provider } from 'react-redux';
import store from './store/store';
import Router from './router/Router';

function App() {
    return (
        <Provider store={store}>
            <CustomTheme className={reset}>
                <Router />
            </CustomTheme>
        </Provider>
    );
}

export default App;

