import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { App } from './app';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <>
    <App />
    <Toaster />
  </>,
);
