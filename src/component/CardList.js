import React from "react";
import Card from './Card';

const CardList  = ({cats})=>{
   var CardArray = cats.map((user,i)=>{
      return (<Card
         key={i}
         id={cats[i].id} 
         name={cats[i].name} 
         email={cats[i].email}
         phone={cats[i].phone}
         />)
   })
   return (
      <div>
         {CardArray}
      </div>
   );
}

export default CardList;