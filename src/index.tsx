import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Hello from './Hello'
import StatefulHello from './components/StatefulHello'
import './css/style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <StatefulHello name="World" enthusiasmLevel={3} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
