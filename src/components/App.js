import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Header COmponent
import Header from './Header';

//Router Component
import StreamsRouter from './router/StreamsRouter';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <StreamsRouter />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
