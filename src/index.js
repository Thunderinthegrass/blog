import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { postsAmount } from './shared/ProjectLogic';
import { posts } from './shared/ProjectData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsAmount={postsAmount} posts={posts} />
  </React.StrictMode>
);

reportWebVitals();
