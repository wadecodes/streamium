import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Stream Components
import StreamCreate from '../streams/StreamCreate';
import StreamEdit from '../streams/StreamEdit';
import StreamDelete from '../streams/StreamDelete';
import StreamList from '../streams/StreamList';
import StreamShow from '../streams/StreamShow';

const StreamsRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit/:id" exact component={StreamEdit} />
      <Route path="/streams/delete/:id" exact component={StreamDelete} />
      <Route path="/streams/:id" exact component={StreamShow} />
    </Switch>
  );
};

export default StreamsRouter;
