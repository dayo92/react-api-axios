import React,{Component} from 'react';
import axios from 'axios'
import './App.css';
import Users from './components/Users';
// import loadingGif from './spinner.gif'
//when ever you want to fetch data in react it has to be done in the component did mount methods

class App extends Component {

  state={
    users:[],
    loading:false
  }

 async componentDidMount(){

  this.setState({
    loading:true
  })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      console.log(response)
      // console.log(response)

      this.setState({
        users:response.data,
        loading:false
      })
  }

  render(){
    const allUsers = this.state.users.map((user)=>{
        return <h1 key={user.id}>{user.name} </h1>
    });

    // let loading = this.state.loading

    // if(loading === true){
    //   <h1></h1>
    // }
   
  return (
   <div>

   <Users data={allUsers}  loading={this.state.loading}/>
   </div>
  );
}
}

export default App;
