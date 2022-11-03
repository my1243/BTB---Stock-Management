import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';

const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.FADE
}

const AlertTemplate = ({ style, options, message, close }) => (
    <div className={`p-4 border bg-white shadow-xl text-md z-50 rounded-lg uppercase flex justify-between items-center font-semibold ${options.type === 'info' ? 'text-blue-500' : options.type === 'error' ? 'text-red-500' : 'text-green-500'}`} style={style}>
      <div className='mr-4'>
        {options.type === 'info' && <i class="fa-solid fa-exclamation rounded-full flex justify-center items-center font-semibold h-8 w-8 p-2 border-2 border-blue-500 "></i>}
        {options.type === 'success' && <i class="fa-solid fa-check rounded-full flex justify-center items-center font-semibold h-8 w-8 p-2 border-2 border-green-500"></i>}
        {options.type === 'error' && <i class="fa-solid fa-exclamation rounded-full flex justify-center items-center font-semibold h-8 w-8 p-2 border-2 border-red-500"></i>}
      </div>

      <div className='mx-4'>
        <span className='font-bold'>{options.type}: </span>
        {message}
      </div>
      <button className='ml-4' onClick={close}><i class="fa-solid fa-xmark"></i></button>
    </div>
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
//   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
