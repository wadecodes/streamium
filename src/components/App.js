import React from 'react';
import { Router } from 'react-router-dom';
import history from '../history';

// Header COmponent
import Header from './Header';

//Router Component
import StreamsRouter from './router/StreamsRouter';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <StreamsRouter />
        </div>
      </Router>
    </div>
  );
};

export default App;
