import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/store.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
            (registration) => {
                console.log('SW registered: ', registration);
            },
            (registrationError) => {
                console.log('SW registration failed: ', registrationError);
            }
        );
    });
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </Provider>
)
