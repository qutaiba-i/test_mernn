
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AddStory from '../forms/addStory';



export default class Sidetest extends Component {
    render() {
		return(
    
    <div className="side">
        <span className="logo">SFD</span>
          
          <div className="otherMenu">
            {/* <AddStory/> */}
            <nav >
	  			
                  <ul >
                      <li className="nav-item">
                          <NavLink to="/story/1" onlyActiveOnIndex={true} className="nav-link" activeClassName="active">
                              <i class="fas fa-home"></i>
                              Dashboard 
                          </NavLink>
                      </li>
                      <li className="nav-item"> 
                		<NavLink to="/task" className="nav-link" activeClassName="active">
                			<i class="fas fa-ticket-alt"></i>
                			Issues/Tasks
                		</NavLink>
            		</li>
            		
            		<li className="nav-item">
                		<NavLink to="/project" className="nav-link" activeClassName="active">
                			<i class="fas fa-folder"></i>
                			Projects
                		</NavLink>
            		</li>
                    <li>
                		<NavLink to="/user" className="nav-link" activeClassName="active">
                			<i class="fas fa-users"></i>
                			Users
                		</NavLink>
            		</li>
                      </ul>
                      </nav>
            
          </div>
    </div>

/*     <nav class="col-md-2 d-none d-md-block bg-light sidebar">
	  			
	    		<ul class="nav flex-column">
	    			<li className="nav-item">
	    				<NavLink to="/" onlyActiveOnIndex={true} className="nav-link" activeClassName="active">
	    					<i class="fas fa-home"></i>
	    					Dashboard Home
	    				</NavLink>
	    			</li>
                    </ul>
                    </nav> */
)}}

