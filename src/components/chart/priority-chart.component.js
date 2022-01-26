import React, { Component } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const labels = ['Open', 'In Progress', 'Resolved'];
const backgroundColor = ['gold', 'cornflowerblue', 'darkslategray'];
const options = {
	maintainAspectRatio: false,
	responsive: false,
}

export default class PriorityChart extends Component {
	constructor(props) {
		super(props);

		this.open = 0;
		this.progress = 0;
		this.resolved = 0;
		this.chartReference = React.createRef();
		this.state = { 
			tickets: [],
			data: {
			    datasets: [{
			        data: [0, 0, 0],
			        backgroundColor: backgroundColor
			    }],

			    labels: labels
			}
		};
	}

	componentDidMount() {
        axios.get('/tasks')
            .then(res => {
				console.log("sss")
				console.log(res.data)
                this.setState({ tickets: res.data });
                this.state.tickets.map(ticket => {
                	// get number of each type and update state data
					console.log("ticket")
					console.log(ticket)
                	switch(ticket.status){
                		case 1: 
                			this.open++;
                			break;
                		case 2:
                			this.progress++;
                			break;
                		case 3:
                			this.resolved++;
                			break;
                	}
					console.log('this.open')
					console.log(this.open)
                	this.setState({ data: {
                		datasets: [{
                			data: [this.open, this.progress, this.resolved]
        			 	}]
        			}});
					console.log('this.state.datasets')
					console.log(this.state.data)
                });
            })
            .catch(error => console.log(error));
    }

	 
	

	render() {
		return(
			<div>
				{/* <Bar 
					data={this.state.data}
					options={options}
					height={350}
					width={500} /> */}
						<Bar ref={this.chartReference} data={this.state.data} options={options} />
			</div>
		);
	}
}