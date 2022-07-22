import React,{Component} from 'react';
import CardList from '../component/CardList'
import Scroll from '../component/Scroll'
import ErrorBoundry from '../component/ErrorBoundry'
import SearchField from '../component/SearchField'

import './App.css';



class App extends Component {
   constructor(){
      super()
      this.state={
         cats:[],
         searchField:''
      }
   }

   componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({cats:users}));
   }

   onSearchChange =(event)=>{
      this.setState({searchField : event.target.value});
      console.log(event.target.value);
   }
   render() {
      const {cats,searchField} = this.state;
      const filteredcats = cats.filter(cat =>{
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return !cats.length ?
      <h1>loading</h1>:
      (
         <>
            <div className="tc">
               <h1>CatsFriends</h1>
               <SearchField searchChange={this.onSearchChange} />

               <Scroll>
                  <ErrorBoundry>
                     <CardList cats={filteredcats} />
                  </ErrorBoundry>
               </Scroll>
               
            </div>
         </>
         
      );
   }
}

export default App;