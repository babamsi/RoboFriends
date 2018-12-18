import React, { Component } from 'react';
import Searchbox from '../components/Searchbox'
import Cards from '../components/Cards'
import Scroll from '../components/Scroll'
//import { robots } from './robots'
import './App.css'

class App extends Component {
	constructor() {
		super();
		this.state = {
			serachfield: '',
			robots: []
		}

	}

	componentDidMount() {
		
		fetch('https://jsonplaceholder.typicode.com/users')
			.then( response => response.json())
			.then( robot => {
				const names = ['Suhayb', 'Ibraahim', 'Zubeyr','Khubayb','Jeekey', 'Shariif', 'Shamiinto','Dauud', 'Cumar', 'Jiciir']
				
				const updatedRobots = robot.slice();
				for (let key in updatedRobots) {
					updatedRobots[key].name = names[key]
					updatedRobots[key].email = `${names[key]}@suhayb.com`
				}
				this.setState({robots: updatedRobots})
			})
	}

	onChangeHandler = (event) => {
		this.setState({ serachfield: event.target.value })
	}
	render() {
		const filtred = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.serachfield)
		})
		let content = <h1 className="tc">Loading....</h1>
		if(this.state.robots.length !== 0) {
			content = (
			<div className="tc">
				<h1 className="f1">ROBOFRIENDS</h1>
				<Searchbox changed={this.onChangeHandler}/>
				<Scroll>
					<Cards robots={filtred}/>
				</Scroll>
			</div>
		)
		}
		return content
	}
}

export default App;