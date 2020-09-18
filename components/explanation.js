import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import userauth from './auth';
import 'tachyons';
import {IonMenuButton,IonCardHeader,IonButton, IonMenu,
     IonItem, IonContent, IonMenuToggle, IonApp, IonSplitPane,
      IonPage, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonList, IonFooter, IonCard } from '@ionic/react';
import{MdAddCircle,MdUpdate,MdSystemUpdateAlt,MdAddShoppingCart,MdHome} from 'react-icons/md';
import imge from "../chris-liverani-NDfqqq_7QWM-unsplash.jpg";
import img from "../mark-finn-SgraLCyISWs-unsplash.jpg";
import Iframe from 'react-iframe';
import "aos";
import { Button,NavDropdown,Nav,Form,FormControl,Navbar} from 'react-bootstrap';



class prempdf extends Component{
    constructor(){
      super();
      this.state={
        isLoggedin:false,
        users:''
    }
}


/*componentDidMount=()=>{
    var that=this;
    f.auth().onAuthStateChanged(function(user){
        if(user){
            var userid=f.auth().currentUser;
            var userids=userid.uid
             that.setState({users:userids})
            that.setState({isLoggedin:true});
        }else{
            that.setState({isLoggedin:false});
        }
    });

}*/

   render(){
       return(
        <React.Fragment>
          <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Co-forex</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/">  <MdHome/></Link></Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<IonContent>
          <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title text-primary ">Please read</h5>
    <p class="card-text"><b>The videos are not like other forex videos available in youtube or any other
                streaming platform.They are well packaged and organized and  is accessible for
                beginner and intermidiate traders.EVERYTHING YOU NEED TO KNOW TO START TRADING IS 
                AVAILABLE IN THIS VIDEOS.</b> </p>
                <Link to='/getcode'> <IonButton>GET YOUR OWN</IonButton> </Link> 
  </div>
</div>
what you will be able to do by the end of this course.
<div class="embed-responsive embed-responsive-16by9">
  
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5SRzMLYrY5s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</IonContent>
        </React.Fragment>
       );
   }
}
export default prempdf;