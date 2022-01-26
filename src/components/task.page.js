import React,{Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Story from './story'
import AddStory from './forms/addStory';
import Loader from './loader'
import Header from './common/header'
import { withRouter } from 'react-router';
// import ListItem from '@material-ui/core/ListItem';

class Dashboard extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      show: true,
      tasks:[],
      stories:[],
      err:'',
      err2:'',
      loading:true,
      loadingStory:true,
      storyFilterd:[],
      taskFilterd:[],
      f_brn:''

    };
    console.log(this.props)
    // console.log(this.props)
    // console.log(this.props)
    this.getData = this.getData.bind(this)
    this.btnClick=this.btnClick.bind(this)
  }
  
  componentDidMount = ()=>{
    console.log("didmo")
    this.getStoryDetails();
    // this.getStoryDetails2();
    this.getData();
    setInterval(() => {
      this.getData();
  }, 100000);
  }

  componentWillUnmount = ()=>{
    console.log("willmo")
    this.getStoryDetails();
    // this.getStoryDetails2();
    this.getData();
   
  }

  // componentWillUpdate=()=>{
  //   console.log("upd")
  //   this.getStoryDetails();
  //   // this.getStoryDetails2();
  //   // this.getData();
  // }
  getStoryDetails = () => {
    
    axios.get(`/story`)
    .then((r)=> {
        this.setState({
            stories: r.data,
            err2:''
        })
    })
    .then(()=>{
      this.setState({
        loadingStory:false
    })
  })
    .catch((e)=>{
        this.setState({
          loadingStory:false,
          err2: e
        })
    })
   
  }
  // getStoryDetails2 = () => {
  //   // console.log(this.props.match.params.id)
  //   axios.get(`/story/${this.props.match.params.id}`)
  //   .then((r)=> {
  //       this.setState({
  //           stories: r.data,
  //           err2:''
  //       })
  //   })
  //   .then(()=>{
  //     this.setState({
  //       loadingStory:false
  //   })
  // })
  //   .catch((e)=>{
  //       this.setState({
  //         loadingStory:false,
  //         err2: e
  //       })
  //   })
   
  // }

  getData = () => {
// console.log(this.props.match.params.id)
    // axios.get(`/tasks/${this.props.match.params.id}`)
    axios.get(`/tasks`)
    .then((r)=> {console.log("dataaa")
      console.log(r.data)
     {this.setState({
          tasks: r.data,
          taskFilterd:r.data,
          err:''
      }
      )} 
    })
    .then(()=>{
      this.setState({
        loading:false
      })
    })
    .catch((e)=>{
      if (!e.response){
      this.setState({
        loading:true,
        err: e
    })
  }
      else
        this.setState({
            loading:false,
            err: e
        })
    })
   
    

}

// --------------------------


btnClick(e){

console.log("here---")
console.log(e.target.value)
// console.log(this.props.match.params.id)
{this.setState({f_brn:e.target.value,
  storyFilterd:this.state.stories.filter(i=>i.storyId===parseInt(e.target.value)),
  taskFilterd:this.state.tasks.filter(i=>i.storyId===parseInt(e.target.value))
})
  console.log(this.state.storyFilterd)
  console.log(this.state.tasks)
  console.log(this.state.taskFilterd)}

// alert(e.target);
  // this.setState({data: 'nannsd'});
 
}

    render(){
      let {stories,loadingStory} = this.state;
      let storyTable;
     
      let branchs=[
        {
          id: '1',
          name: 'HQ'
        },
        {
          id: '2',
          name: 'Sana'
          
        }
      ];

      if(!loadingStory)
      storyTable = stories.map((story,index)=>{
        // console.log(story);
        // console.log(story.storyId);
        // console.log(story.title);

        return(
          
          <li key={index}>

            <Link to={`/story/${story.storyId}`} activeClassName="active" >
              <i className="fas fa-list-alt"></i>
              
              <span>{`/story/${story.storyId}`}</span>
              <span className="menu-text">{story.title}</span>
            </Link>
            {/* {this.setState.storyFilterd={stories.filter(i=>i.storyId===parseInt(this.props.match.params.id))} */}

          </li>
        )
      })
      else
      storyTable = <li>
        <div className="loader">
         <Loader/>
          </div>
      </li>



        return(
            <div>
              <div className="side">
                <span className="logo">Filter</span>
                <ul className="side-menu">
                  {/* {storyTable} */}
                  {/* ------------------ */}

                  {branchs.map((item) => {
                  console.log('---')
                 
                   return <li onClick={this.btnClick} value={item.id} >
                     {/* <span>A</span> <p>{item.name}</p>  */}
                     <i className="fas fa-list-alt"></i> {item.name}</li>;
                   })}
                  
                  {/* ------------ */}
                </ul>
                {/* <div className="otherMenu">
                  <AddStory/>
                </div> */}
              </div>
              <div className="con">
                {/* <Header/> */}
            {/* {console.log(this.props.match.params.id)} */}
            {/* {console.log(this.state.stories.filter(i=>i.storyId===parseInt(this.props.match.params.id)))} */}
            
                  <aside>
                      {/* <Story storyName={this.state.stories.filter(i=>i.storyId===parseInt(this.props.router.params.id))} storyType={this.props.match.params.id} tasks={this.state.tasks} loading={this.state.loading}/> */}
                      {/* {console.log(this.props.match.params.id)} */}
                      {/* {console.log(this.state.stories.filter(i=>i.storyId===parseInt(this.props.match.params.id)) )} */}
                      {/* <Story storyName={this.state.stories.filter(i=>i.storyId===parseInt(this.props.match.params.id))}  */}
                      {console.log(this.state.storyFilterd)}
                      {console.log("now tf")}
                      {console.log(this.state.taskFilterd)}
                      {/* <div>kkk</div> */}
                      <Story storyName={this.state.storyFilterd} 
      storyType={this.props.match.params.id}tasks={this.state.taskFilterd} loading={this.state.loading}/>
                      {/* // storyType={this.props.match.params.id}tasks={this.state.tasks} loading={this.state.loading}/> */}
                  </aside>

              </div>
            </div>
        )
    }
}
export default withRouter(Dashboard) 