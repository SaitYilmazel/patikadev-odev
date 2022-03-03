import React from 'react';
import Provider from './context/JobsProvider';
import Router from './Router';

export default () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};
