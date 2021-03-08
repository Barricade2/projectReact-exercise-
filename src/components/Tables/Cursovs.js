import React from 'react';
import { Table } from 'antd';


class Cursovs extends React.Component {
	state = {
		students: [],
		error: '',
	}

	componentDidMount = async () => {
		let students = []
		try{
			if (this.props.value){
				var url = 'https://jsonplaceholder.typicode.com/posts?userId='+String(this.props.value);}
			else{var url = 'https://jsonplaceholder.typicode.com/posts'}
			const result = await fetch (url)
			students = await result.json()
		} catch(err){
			this.setState({error:"Ошибка получения данных",})
		}

		console.log(students);
		this.setState({students,})

	}



	render () {
		let  { error, students  } = this.state

		const columns = [

			{	title: 'userId',
				dataIndex: 'userId',
				key:'userId',

			},
			{
				title: 'id',
				dataIndex: 'id',
				key:'id'
			},
			{
				title: 'title',
				dataIndex: 'title',
				key:'title'
			},
			{
				title: 'body',
				dataIndex: 'body',
				key:'body'
			},
		]
		
		return (
			<div className="students">
				<h1>Курсовые</h1>
				<h2>{error}</h2>
				<Table 	dataSource={students} columns = {columns} />
			</div>
			)
	}
}
export default Cursovs;