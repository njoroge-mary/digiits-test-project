import './App.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

// export default App;


function App() {
  

  return (
    <>
    <div className='container bg-purple-400 text-white p-2 py-8 mt-4 mx-auto text-center text-4xl font-bold'>

      Initial Setup
    </div>
    </>
  )
}

export default App
