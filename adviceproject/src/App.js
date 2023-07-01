
import react form 'react';
import axios from 'axios'
// now we can create a basic class based component
import './App.Css';
class App extends React.Component {
    //state is like a global object that contains almost all of the important things
    state= {advice:''}
    // we are getting  A STRING  of advice and we are going to store it here
    // now comes the question on where and how are we actually going to call and make that getrequest to get the API
    // we are going to use component didmount lifecycle method in react we have to go through different lifecycle methods like component didmount component did unmount etc.
    ComponentDidMount(){
        //console.log("COMPONENT DID MOUNT");
       // axios.get(); // instead of creating it just here we are going to creat eit in separate class method called
       this.fetchAdvice();
     } 
     fetchAdvice=() => {
        axios.get('https://api.adviceslip.com/advice')
                .then((response) =>{
                    const {advice}= response.data.slip;
                    this.setState({ advice}) // this means cocnst ki value jo set ki h vo upar jo advice ki ki value setstae me h usme update krde
                   // we use thi sntax to update state properties in  class based component
                    // console.log(advice);
                  })
                .catch((error)=>{
                    console.log(error);
                  })
        // inside of our application we need to get request to the specific url
        // using .then and .catch syntax we can get a response of how we like it

     } // we dont need const here bcoz this is a function inside class that makes it a method 
     // instead of console.log we need to fetch the actual advice using axios an dfcourse usin g the advice API so we can do that wither here in  place of console.log but we need to call fetch fucntion 2 times on the componentDidCount
    render(){
            const {advice}=this.state;
            return(
                <div classname="app">
                    <div classname= "card">
                     <h1 classname="heading">{advice}</h1>
                     <button classname="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE</span>
                     </button>
                    </div>
                </div>
            
        );
    }
}
export default App;