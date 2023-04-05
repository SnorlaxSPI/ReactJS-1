import './styles/global.scss'

import React from 'react';
import { createRoot } from 'react-dom/client';

export function App() {
  return <h1>Hello React World!</h1>
};

createRoot(document.getElementById('root')).render(<App />);

