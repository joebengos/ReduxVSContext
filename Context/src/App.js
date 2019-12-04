import React from 'react';
import Login from './pages/login';
import Provider from './store/config/provider';

function App() {
  return (
    <Provider>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
