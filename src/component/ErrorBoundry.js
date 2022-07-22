import React,{Component} from 'react';

class ErrorBoundry extends Component {

   constructor(props){
      super(props);
      this.state = {
         ErrorB: false
      }
   }

   componentDidCatch(){
      this.setState({ErrorB: true})
   }

   render() {
      if(this.state.ErrorB){
         return <h1>Oooops sth wrong happend</h1>
      }
      return this.props.children
      
   }

}

export default ErrorBoundry;

