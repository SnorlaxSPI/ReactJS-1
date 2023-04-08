import { RepositoryList } from './components/RepositoryList.jsx';
import { Counter } from './components/Counter.jsx';

import React from 'react';

import './styles/global.scss';

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
};
