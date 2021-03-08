import React from 'react';
//import Navigator from './Navigator';

class LoginForm extends React.Component{
    handleClick = () => {
        const{ handleLoginClick }=this.props;
        handleLoginClick(true)
    };

    render(){
        const {handleLoginClick} = this.props; 

        return (
            <div>
                Login<br/>
                <input></input>
                <button onClick={this.handleClick}> Войти </button>
            </div>
        );}
}

export default LoginForm;