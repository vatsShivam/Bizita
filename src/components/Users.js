
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import './user.css';  
import axios from "axios";
class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            posts : []   
        };
    }
   componentDidMount(){
   var k=this.props.match.params.id;
    axios
    .get(
     
     `http://localhost:3004/members/${k}`
    
    )
    .then((resp) => {
      console.log(resp)
     
     this.setState({posts:resp.data})
   
    
    })
    .catch((error) => {
     
      console.log(error);
    });
   }
   renderTableData() {
    const Shivam = this.state.posts;
    const {
      image,
      name,
      category,
      id,
      categoryid,
      address,
      description,
      contact,
      empcode
      } =Shivam;
      return(
        <div className="wrapper">

                <div className="section1">
                  <div className="bris">
                 <img src={image} className="shiv"/>
                  </div>
                     <h1 className="names">
                       {name}
                     </h1>
                     <h2 className="cate">
                       {category}
                     </h2>
                     <p className="add">
                       {address}
                     </p>
                     <p className="add">
                       Contact No:{contact}
                     </p>
                     <p className="add">
                       Description:{description}
                     </p>
                     <p className="add">
                       Empcode:{empcode}
                     </p>
                     <p className="add">
                       Category Id:{categoryid}
                     </p>
                     <p className="add">
                       Id:{id}
                     </p>
                    <Link to="/"> <p className="adds">Back To DahBoard</p></Link>
                </div>
                
          
            </div>
      )
   
   }
    render() {
       

    
            return(
              <div className="body">
              {this.renderTableData()}
              
              </div>
            
            );
        }
      
    }
  
  
 


export default Users;
