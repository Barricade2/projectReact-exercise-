//import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React from 'react'
import Navigator from './components/Navigator'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
//import { render } from '@testing-library/react';



class App extends React.Component{
  state = {
    isLoggedIn: false,
    message:"",
  };

  handleLoginClick = (param) => {
    this.setState({isLoggedIn: param});
  }

  callbackFunction = (childData) => {
    this.setState({message: childData,});
  }

  render(){
    console.log(this.state.message);
    return (
      <div className="App"> Test React.js Frontend Dev
        {this.state.isLoggedIn? <div className="MainScreen">
          <Navigator callbackFunction={this.callbackFunction}/>
          <Dashboard handleLoginClick={this.handleLoginClick} message={this.state.message}/>
        </div>: 
        <LoginForm handleLoginClick={this.handleLoginClick}/>
        }

      </div>);
  }

}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
