import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// @ts-ignore
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './theme/theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.addEventListener('load', async () => {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register("sw.js", { scope: './' })
            .then((sw) => console.log("file success!", sw))
            .catch((err) => console.log("file error!", err));
    }
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
