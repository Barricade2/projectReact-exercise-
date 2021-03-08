import React from 'react';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import StudentsTable from './Tables/Students';
//import { render } from "@testing-library/react";
import Cursovs from './Tables/Cursovs';

const buttonArray = [
    {
        text:'ФИО',
        icon: <PermContactCalendarIcon/>,
        title: 'Иванов Аексей',
    },
    {
        text:'Группа',
        icon: <PermContactCalendarIcon/>,
        title: 'ФМ-12-17',
    },
    {
        text: 'Возраст',
        icon: <PermContactCalendarIcon/>,
        title: '19',
    },
    {
        text: 'Студенты',
        icon: <AccountBalanceIcon/>,
        title: <StudentsTable/>,
    },
    {
        text: 'Курсовые',
        icon: <AccountBalanceIcon/>,
        title: <Cursovs/>,
    },

]

class Navigator extends React.Component{
    // post message
    sendValue = (title) => {
        const {callbackFunction} =this.props
        callbackFunction(title)
    };

render(){
    return(
        <div className="Navigator">
            <h1>Навигатор</h1>
            {buttonArray.map((button,i)=>(
                <>
                <button 
                    role="button"
                    className="nav-button"
                    onClick={()=>{this.sendValue(button.title)}} // post message
                >
                    {button.icon}
                    {button.text}
                </button>
                </>
                ))}
            </div>
            )
}
}

export default Navigator