import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Hello from './Hello'
import Hello from './components/Hello'
import './css/style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello name="World" enthusiasmLevel={3} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
