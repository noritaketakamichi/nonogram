import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top from './Top';
import Playing from './Playing';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const routing = (  
  <Router>  
    <div>  
      <Route exact path="/" component={Top} />  
      <Route path="/play/:id" component={Playing} />   
    </div>  
  </Router>  
)  

ReactDOM.render(routing, document.getElementById("root"));
