import React, { Fragment } from 'react';
// import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import Styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParComp from './components/ParComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import HookCounter from './components/HookCounter';
import BGDemo from './components/BGDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import CounterTwo from './components/CounterTwo';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import ToDoList from './components/ToDoList';
import CheckBox from './components/CheckBox';
import {Link, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';
import Button from 'devextreme-react/button';
import SimpleArray from './components/SimpleArray';
import TagBox from './components/TabBox';
import './components/mySass.scss';
import TestCompA from './components/TestCompA';
import GnaniLogin from './components/GnaniLogin'
import Signup from './components/Signup';
//import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import ReduxCount from './components/ReduxCount';

// const initialState = {
//   count:0
// }

// function reducer(state = initialState, action) {
//   switch(action.type){
//     case "INCREMENT" : 
//     return {
//       count: state.count + 1
//     };
//     case "DECREMENT" : 
//     return {
//       count: state.count - 1
//     };
//     default:
//     return state;
//   }

// }

// const store = createStore(reducer);

function App() {
  

//   sayHelloWorld = () =>{
//     alert('Hello world!');
// }

function sayHelloWorld(){
  console.log('Hello world!!!')
}
  return (
    <div className="App">
      {/* <GnaniLogin /> */}
      <Route exact path='/' component={GnaniLogin} />
      <Route path='/signup' component={Signup}/>
      {/* <TestCompA/> */}
      {/* <TagBox /> */}
      {/* <h1>Hello World!!!</h1> */}
      {/* <Button text="Click me" onClick={sayHelloWorld} /> */}
      {/* <SimpleArray /> */}
      {/* <Provider store= {store}>
        <ReduxCount/>
      </Provider> */}
      {/* <Switch>
        <Route exact path='/' component={Login}/>
        <Route  path='/admin' component={Admin}/>
        <Route  path='/logout' component={Logout}/>
      </Switch> */}
      {/* <CheckBox/> */}
      {/* <CounterTwo 
      render={(count, incrementCount)=> (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )
      }/>

      <CounterTwo
      render = {(count, incrementCount)=> (
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
      )} 
      /> */}
      {/* <ToDoList /> */}
      {/* <HoverCounter />
      <ClickCounter /> */}
      {/* <BGDemo />  */}
      {/* <HookCounter /> */}
      {/* <ErrorBoundary>
      <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"/>
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary = {true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name = 'Bruce' heroName = 'Batman' >
        <p>This is Children props</p>
      </Greet>
      <Greet name = 'Clark' heroName = 'Superman' />
      <Greet name = 'Diana' heroName = 'Woder Woman' /> */}
      {/* <Welcome name = 'Bruce' heroName = 'Batman'>
        <p>This is children</p>
      </Welcome>
      <Welcome name = 'Clark' heroName = 'Superman'>
        <button>Action</button>
      </Welcome>
      <Welcome name = 'Diana' heroName = 'Woder Woman' /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
