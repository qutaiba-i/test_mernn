import React,{Component} from 'react'
import axios from 'axios';
import Filter from './common/filter';
import AddStory from './forms/addStory';
import ModalExampleDimmer from './modal_p'
import { Button} from 'reactstrap';


const Project = props => (
    <tr>
        <td>{props.project.title}</td>
        <td>
        {/* <Button color="primary" size="sm"  onClick={props.toggle} ><i className="fas fa-arrow-alt-circle-right"/>ff</Button> */}
      {console.log('props of modal')}
       { console.log(props.project)}  
        <ModalExampleDimmer propContent={props} classType="btnDashboard"/>
            {/* <a href="#" onClick={() => { 
                if(window.confirm('Are you sure you want to delete this project?')) 
                    props.deleteProject(props.project._id) 
            }} 
            className="badge badge-danger">Update</a> */}


            <a href="#" onClick={() => { 
                if(window.confirm('Are you sure you want to delete this project?')) 
                    props.deleteProject(props.project._id) 
            }} 
            className="badge badge-danger">Delete</a>
        </td>
    </tr>
);
const Task = props => (
    <tr>
        <td>{props.task.title}</td>
        <td>
            <a href="#" onClick={() => { 
                if(window.confirm('Are you sure you want to delete this project?')) 
                    props.deleteProject(props.task._id) 
            }} 
            className="badge badge-danger">Delete</a>
        </td>
    </tr>
);

class ProjectPage extends Component{
	constructor(props) {
        		super(props);
        
        		this.deleteProject = this.deleteProject.bind(this);
        
        		this.state = { projects: [] ,
                                tasks:[]};
              this.toggle = this.toggle.bind(this);
        	}
      
            componentDidMount() {
                axios.get('/story')
                    .then(res => {
                        this.setState({ projects: res.data })
                    })
                    .catch(error => console.log(error));
                    axios.get('/tasks')
                    .then(res => {
                        this.setState({ tasks: res.data })
                    })
                    .catch(error => console.log(error));     
            }
        
            // componentDidUpdate() {
            //     axios.get('/story')
            //         .then(res => {
            //             this.setState({ projects: res.data })
            //         })
            //         .catch(error => console.log(error));
                    
            //         axios.get('/tasks')
            //         .then(res => {
            //             this.setState({ tasks: res.data })
            //         })
            //         .catch(error => console.log(error));
            // }
        
            deleteProject(id) {
        	    axios.delete('/story/'+id)
        	        .then(res => { console.log(res.data)});
        
        	    // update tickets array to all projects without matching id
        	    this.setState({
        	        projects: this.state.projects.filter(el => el._id !== id)
        	    })
        	}
        
            updateProject(id) {
        	    axios.delete('/story/'+id)
        	        .then(res => { console.log(res.data)});
        
        	    // update tickets array to all projects without matching id
        	    this.setState({
        	        projects: this.state.projects.filter(el => el._id !== id)
        	    })
        	}

            getProjects() {
                return this.state.projects.map(currentProject => {
                    return <Project
                    			project={currentProject} 
                    			deleteProject={this.deleteProject}
                                key={currentProject._id}
                                toggle={this.toggle}
                            />;
                })
        	}
            getTasks() {
                console.log('tttttt')
                console.log(this.state.tasks)

                return this.state.tasks.map(task => {
                    return (
                        
                    <Task
                    			task={task} 
                    			deleteProject={this.deleteProject}
                                key={task._id}
                            />
                            )
                })
        	}
            
            toggle() {
                this.setState({
                  modal: !this.state.modal
                });
              }
    render(){
        return(
            <div>
              
           
              
                  <aside className="container">
                    <div className="col-sm aboutUs">
                        <h2 className="mcell-title story">project </h2>
                        <div className="padding20">q</div>
                        <AddStory/>
                    </div>
                  </aside>
                  {/* <ClientsFilter nextPage={this.nextPage} filter={this.filter} previousPage={this.previousPage} currentPage={this.state.currentPage} totalPages={totalPages} filterCategory={this.state.filterCategory} filterText={this.state.filterText} /> */}
                 {/* <Filter/> */}
                  <table className="table">
                    <thead className="thead-light">
                     <tr>
                        <th>Name</th>
                         <th>Actions</th>
                     </tr>
                     </thead>
                     <tbody>
                         { this.getProjects() }
                     </tbody>
                 </table>
                 <br></br>


                 <table className="table">
                    <thead className="thead-light">
                     <tr>
                        <th>Name</th>
                         <th>Actions</th>
                     </tr>
                     </thead>
                     <tbody>
                         { this.getTasks() }
                     </tbody>
                 </table>
                 <br></br>
            </div>
        )
    }
}
export default ProjectPage



// import React, { Component } from 'react';
// import axios from 'axios';

// import CreateProject from "./create-project.component";

// const Project = props => (
//     <tr>
//         <td>{props.project.name}</td>
//         <td>
//             <a href="#" onClick={() => { 
//                 if(window.confirm('Are you sure you want to delete this project?')) 
//                     props.deleteProject(props.project._id) 
//             }} 
//             className="badge badge-danger">Delete</a>
//         </td>
//     </tr>
// );

// // export default class ManageProjects extends Component {
// // 	constructor(props) {
// // 		super(props);

// // 		this.deleteProject = this.deleteProject.bind(this);

// // 		this.state = { projects: [] };
// // 	}

// //     componentDidMount() {
// //         axios.get('http://localhost:5000/projects/')
// //             .then(res => {
// //                 this.setState({ projects: res.data })
// //             })
// //             .catch(error => console.log(error));
// //     }

// //     componentDidUpdate() {
// //         axios.get('http://localhost:5000/projects/')
// //             .then(res => {
// //                 this.setState({ projects: res.data })
// //             })
// //             .catch(error => console.log(error));
// //     }

// //     deleteProject(id) {
// // 	    axios.delete('http://localhost:5000/projects/'+id)
// // 	        .then(res => { console.log(res.data)});

// // 	    // update tickets array to all projects without matching id
// // 	    this.setState({
// // 	        projects: this.state.projects.filter(el => el._id !== id)
// // 	    })
// // 	}

// //     getProjects() {
// //         return this.state.projects.map(currentProject => {
// //             return <Project
// //             			project={currentProject} 
// //             			deleteProject={this.deleteProject}
// //                         key={currentProject._id}
// //                     />;
// //         })
// // 	}

// // 	render() {
// // 		return(
// // 			<div>
// // 				<table className="table">
// //                     <thead className="thead-light">
// //                     <tr>
// //                         <th>Name</th>
// //                         <th>Actions</th>
// //                     </tr>
// //                     </thead>
// //                     <tbody>
// //                         { this.getProjects() }
// //                     </tbody>
// //                 </table>
// //                 <br></br>
// //                 <CreateProject />
// // 			</div>
// // 		);
// // 	}
// }