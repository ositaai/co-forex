import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import userauth from './auth';
import 'tachyons';
import {f,database,storage,auth} from './config.js';
import { IoMdLogOut } from "react-icons/io";
import {IonMenuButton,IonCardHeader,IonButton, IonMenu,
     IonItem, IonContent, IonMenuToggle, IonApp, IonSplitPane,
      IonPage, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonList, IonFooter, IonCard } from '@ionic/react';
import{MdAddCircle,MdUpdate,MdSystemUpdateAlt,MdAddShoppingCart,MdHome} from 'react-icons/md';
import imge from "../chris-liverani-NDfqqq_7QWM-unsplash.jpg";
import Iframe from 'react-iframe';
import wok1 from "../work4.jpg";
import wok2 from "../work2.jpg";
import wok3 from "../work3.jpg";
import "aos";
import styled from "styled-components";


class prempdf extends Component{
    constructor(){
      super();
      this.state={
        isLoggedin:false,
        users:''
    }
}
componentDidMount=()=>{
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
}

logout=()=>{
  f.auth().signOut(); 
}

   render(){
       return(
        <>
         <nav >
        <div >
          <div className="nav-header">
            <IonMenuButton slot="start"></IonMenuButton> 
            {this.state.isLoggedin===true? <IonButton onClick={this.logout}>logout <IoMdLogOut/></IonButton>:
             <div></div>}
            <Link to="/tradingview">
            <IonButton  >
           view live chart
          </IonButton>
           </Link>
          </div>
        </div>
      </nav>
      <IonContent>
      <div  style={{paddingTop:"50px"}} id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={wok1} class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={wok2} class="d-block w-100 img-fluid" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={wok3}class="d-block w-100 img-fluid" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    
<div >
       <div class="jumbotron "></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h1>Forex trading made easy</h1>
            <p class="lead"><b>Learn how to trade forex and get eqiupped with the most profitable trading strategy for free</b> </p>
           <Link to="/starter">
           <IonButton>dont miss this oppurtunity start now</IonButton>
           </Link>
          </div>
          <div class="col-sm-6 hidden-xs">
            <div class="device pull-right"></div>
          </div>
        </div>
      </div>
    </div>
{/* all the places where icons is located should bbe replaced with presentaions*/}
    <div class="container">
      <div class="row ft">
        <div class="col-sm-8 ">
        <div class="card" style={{width: "18rem"}}>
        <Link to="/starter">
        <img src={wok1} class="card-img-top" alt="..."/>
    </Link>
  <div class="card-body">
    <p class="card-text text-primary"><b>you will learn how to trade easily while at home or office or even in the
    classroom.</b></p>
    <Link to="/starter">
    <a href="#" class="btn btn-primary">start now</a>
    </Link>
  </div>
</div>
        </div>
      </div>

      <div class="row ft">
        <div class="col-sm-8 hidden-xs">
        <div class="card" style={{width: "18rem"}}>
  <img src={wok2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text text-primary"> <b>By purchasing our video you will learn how to trade using profitable strategy.</b></p>
    <Link to="/explanation">
    <a href="#" class="btn btn-primary">start now</a>
    </Link>
  </div>
</div>
        </div>
      </div>
      <div class="row ft">
        <div class="col-sm-8 col-lg-8 hidden-xs">
        <div class="card" style={{width: "18rem"}}>
  <img src={wok3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text text-primary"><b>you will acquire skills to use special strategy developed by forex experts</b></p>
    <Link to="/starter">
    <a href="#" class="btn btn-primary">start now</a>
    </Link>
  </div>
</div>
        </div>
       
      </div>
      <div style={{paddingBottom:'50px'}}>

      <footer class="page-footer font-small teal pt-4">
<div class="container-fluid text-center text-md-left">
  <div class="row">
    <hr class="clearfix w-100 d-md-none pb-3"/>
    <div class="col-md-6 mb-md-0 mb-3">
      <h5 class="text-uppercase font-weight-bold">OUR AIM</h5>
      <p>Coforex is willing to help people learn forex with no stress and also understand
        the concept of trading forex with simple and profitable strategy.
      </p>

    </div>
  </div>
</div>
<div class="footer-copyright text-center py-3">© 2020 Copyright:
  <a href=""> coforex</a>
</div>
<div class="footer-copyright text-center py-3">
  <a href="">contact us: 08104200617</a>
</div>
</footer>
    </div>
    </div>
</IonContent>
        </>
       );
   }
}
export default prempdf;
