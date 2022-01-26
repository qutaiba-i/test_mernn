import React from 'react';
import Dashboard from './components/dashboard'
import "bootstrap/dist/css/bootstrap.min.css";
/* class App extends Component {
  render() {
    return (
      <div className="App">
       <Dashboard/>
      </div>
    );
  }
}

export default App;
 */



import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import About from './components/about';
import Navbar from './components/common/navbar';
import Sidebar from './components/common/sidebar';
import Header from './components/common/header';
import AddStory from './components/forms/addStory';
import Sidetest from './components/common/sidetest';
import Project from './components/project.page';
import User from './components/user.page';
import Task from './components/task.page';



const IndexPage = () => {

  return <div>Welcome to SFD <br/><a href="/story/1">Homepage</a></div>
}
const NotFoundPage = () => {

  return <div><h2>Not Found</h2><br/>no found</div>
}

export default function App() {
  return (
    // <Router>
  <div className="wrapper">
 
        <div className="con">
                <Header/>
      </div>
      <div className="side">
         
               < Sidetest/>
               
     </div>
        <div id="content" className="con">
         <Switch   >
         <Route path='/story' exact component={Dashboard}/>
        <Route path='/story/:id' exact component={Dashboard}/>
        
        <Route path='/about' exact component={About}/>
        <Route path='/project' exact component={Project}/>
        <Route path='/task' exact component={Task}/>
        <Route path='/user' exact component={User}/>
        <Route exact path='/'  component={IndexPage} />
        <Route path='*' exact component={NotFoundPage}/>

        </Switch>  
        
    </div>
  </div>
    // </Router>
  );
}

