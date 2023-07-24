import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Container = ({ children }) => {
  const containerStyle = {
    backgroundImage: 'linear-gradient(to top, #023047, #264653)',
    minHeight: '100vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <div style={containerStyle}>{children}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

