import React from 'react';
//import Navigator from './Navigator';


class Dashboard extends React.Component{
    handleClick = () => {
        const { handleLoginClick } = this.props
        handleLoginClick(false)
    }


    debugger;
    render(){
        const style = {
            textAlign: 'end'
          };
        console.log(this.props.message)
        const {habdleLoginClick} = this.props; 
        return <div className='Dashboard'>
        <br/><button onClick={this.handleClick} style={style}> Выйти </button>
        <h5> {this.props.message} </h5> 
        </div>;         //get message from App
    }
}

export default Dashboard;