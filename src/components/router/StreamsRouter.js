import React from 'react';
import { Route } from 'react-router-dom';

//Stream Components
import StreamCreate from '../streams/StreamCreate';
import StreamEdit from '../streams/StreamEdit';
import StreamDelete from '../streams/StreamDelete';
import StreamList from '../streams/StreamList';
import StreamShow from '../streams/StreamShow';

const StreamsRouter = () => {
  return (
    <div>
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" component={StreamCreate} />
      <Route path="/streams/edit/:id" component={StreamEdit} />
      <Route path="/streams/delete/:id" component={StreamDelete} />
      <Route path="/streams/show/:id" component={StreamShow} />
    </div>
  );
};

export default StreamsRouter;
