import React, { Component } from "react";
import './app.css';
import { Link } from "react-router-dom";
import axios from "axios";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      data:[]
     
    };
  }
 
  componentDidMount() {
   this.getData();
 }

 
 getData = () => {
  axios
  .get(
   
   "http://localhost:3004/members"
  
  )
  .then((resp) => {
    
   console.log(resp)
   this.setState({data:resp.data})
  
  })
  .catch((error) => {
   
    console.log(error);
  });
};
 renderTableData() {
  const Shivam = this.state.data;

  return Shivam.map((btc) => {
    const {
    image,
    name,
    category,
    id
    } = btc;
   
  
    return (
     
     

     
        <div className="column">
        <div className="card">
        <img src={image} alt="John" style={{width:"100%",height:"200px"}}/>
        <h1 style={{marginTop:"10px",fontWeight:"bold"}}>{name}</h1>
        <p class="title">{category}</p>
        <div style={{padding:"20px"}}>  
        <p><Link to={"/profile/" + id}>
         
        <button>View Profile</button> </Link></p>
        </div>
        </div>
        </div>
     
      
  
    );
  });
}
  render() {
  
    return (
        <div >
          <div style={{backgroundColor:"black",marginLeft:"-20px",marginRight:"-20px"}}>
          	<header className="header">
	  	<h2 className="logo">Bizita </h2>
      <ul className="main-nav">
          <li><a href="#">Home</a></li>
         
      </ul>
	</header> 
</div>
    <div className="row" >
           <div style={{backgroundColor:"#DCDCDC",marginLeft:"-20px",marginRight:"-20px"}}>
             <h3 style={{textAlign:"center",marginTop:"30px",marginBottom:"30px",}}><strong style={{fontWeight:"bold",fontSize:"30px"}}>PROFILE CARDS</strong></h3>
           <div style={{backgroundColor:"#DCDCDC"}}>
           { this.renderTableData()}
           </div>
           </div>
           </div>
      </div>     

         
       
    );
  }
}
export default Home;