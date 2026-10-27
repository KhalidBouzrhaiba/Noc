import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/bricolage-grotesque/wdth.css';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/caveat';
import './styles/base.css';
import './styles/deck.css';
import './styles/s1-entrance.css';
import './styles/s2-why.css';
import './styles/s3-universe.css';
import './styles/s4-process.css';
import './styles/s5-finale.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
