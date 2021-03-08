import React from 'react';
import { Table } from 'antd';
import Cursovs from './Cursovs'


const url = 'https://jsonplaceholder.typicode.com/users'

const columns = [

	{	title: 'id',
		dataIndex: 'id',
		key:'id'
	},

	{
		title: 'Name',
		dataIndex: 'name',
		key:'name'
	},

	{
		title: 'username',
		dataIndex: 'username',
		key:'username'
	},

	{
		title: 'address',
		dataIndex: ['address', 'city'],
		key:'address'
	},

	{
		title: 'email',
		dataIndex: 'email',
		key:'email'
	},

	{
		title: 'phone',
		dataIndex: 'phone',
		key:'phone'
	},

	{
		title: 'company',
		dataIndex: ['company', 'name'],
		key:'company'
	},

	{
		title: 'website',
		dataIndex: 'website',
		key:'website'
	},
]

class Students extends React.Component {
	state = {
		students: [],
		error: '',
		count: null,
		showCursovs: false
	}


	componentDidMount = async () => {
		let students = []
		try{
			const result = await fetch (url)
			students = await result.json()
		} catch(err){
			this.setState({error:"Ошибка получения данных",})
		}

		console.log(students);
		this.setState({students,})

	}

	// change showCursovs = true
	handleClick = (param) => {
		this.setState({showCursovs: param});
	  }



	render () {
		const { error, students } = this.state
		const showCursovs = !this.state.showCursovs;
		
		return ( showCursovs?(
			<div className="students">
				<h1>Students</h1>
				<h2>{error}</h2>
				<Table 
					onRow={(record, rowIndex) => {
						return{
							onClick: (event) => {
								this.count=rowIndex+1;
								// change showCursovs = true
								this.handleClick(true);
							},
						};
					}}
				dataSource={students} columns = {columns} />
			</div>): <Cursovs value={this.count}/> // show_Cursovs
			);
	}
}
export default Students