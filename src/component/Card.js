// import { render } from '@testing-library/react';
import React from 'react';
// import './Card.css'
// import ReactDOM from 'react-dom';


const Card = ({name,email,id,phone})=>{ //?or we can put props then destructuring it
   // ReactDom.render(){
      // const {name,email,id} = props;
      return (
         <div className ="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" >
         <img src ={`https://robohash.org/${id}?200x200&set=set4`} alt ="Empty for Now" />
            <div>
               <h2>{name}</h2>
               <p>{email}</p>
               <p>{phone}</p>
            </div>
         </div>
      );
   // }
}

export default Card;