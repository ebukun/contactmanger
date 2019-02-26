import React, { Component } from 'react';
// import Contact from './components/Contact';
import Header from './components/layout/Header';
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import LifeCycle from './components/test/LifeCycle';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Provider } from './context';

///import router
// import { BrowserRouter as Router, Route, Switch } 
// from 'react-router-dom';
import { HashRouter as Router, Route, Switch } 
from 'react-router-dom';


class App extends Component {
  render() {

    //without JSX 
    // return React.createElement(
    //   'div',
    //   {className: 'App'},
    //   React.createElement('h1', null, 'The App Component')
    // );

    // let name = 'LArry';
    // let showHello = false;
    // let showMath = true;
    // let num1 = 40;
    // let num2 = 23;

    // let math;
    // let val;
    // if(showMath){
    //   math = <h3>5 + 5 = {5 + 5}</h3>
    //   val = <h3>{num1} + {num2} = {num1 + num2}</h3>
    // }else{
    //   math= null;
    //   val = null;
    // }
   
    return (
      <Provider>
        {/* <Router basename ={process.env.PUBLIC_URL}> */}
        <Router basename ={process.env.PUBLIC_URL}>
        <div className="App">
         <Header branding= "Contact Manager"/>  
         <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            {/* <Route exact path="/about/:id" component={About} /> */}
            <Route exact path="/about" component={About} />
            <Route exact path="/test" component={LifeCycle} />

            <Route exact component={NotFound} />

          </Switch>
            {/* <AddContact />
            <Contacts/> */}
            {/* <Contact name="Sean Don" 
            email="seandon@gmail.com" phone="333-333-333" />
            <Contact name="Bukun folami" 
            email="bukunfor@gmail.com" phone="333-555-367" /> */}
         </div>
         

         {/* <h4>Hello {name.toUpperCase()}</h4>
         <h4>1 + 1 = {1 + 1}</h4>
         {showHello ? <h3>2 + 2 = {2 + 2}</h3> :null}
         {math}
         {val}
         <label htmlFor="name">Name</label>
         <input type="text"/> */}
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
