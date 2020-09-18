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
class home extends Component{
    constructor(){
      super();
}

  render(){
       return(
           <>
            <nav >
        <div >
          <div className="nav-header">
            <IonMenuButton slot="start"></IonMenuButton> 
          </div>
        </div>
      </nav>
      
        <IonContent> 
        <div className="roomsHero">
            <div className="flex flex-column">
            <div className="banner">
      <h1>contek forex school</h1>
      <div />
      <p>we provide life changing forex materials fo free</p>
      <Link to='/starter'className="btn-primary"> 
      click to get our free pdfs
       </Link>
    </div>

<div className="banner" >
      <h3>what you will learn</h3>
      <div />
      <h4>01-forex basics</h4>
      <h4>02-forex acronyms and jargon</h4>
      <h4>03-forex analysis</h4>
      <h4>04-fundamental analysis</h4>
      <h4>05-technical analysis</h4>
      <h4>06-metatrader 4</h4>
      <h4>07-calculating risks the smart way</h4>
      <h4>08-examples using real money</h4>
      <Link to='/starter' className="btn-primary"> 
      start learning
       </Link>
</div>
   

    <div   className="banner">
      <h1>start today</h1>
      <div />
      <div style={{paddingBottom:'50px'}}>
      <Link  className="btn-primary"> 
      contek 2020
       </Link>
       </div>
    </div>
          </div>
   
            <div className="flex flex-column">
          
            </div>
           

            </div>
            
        </IonContent>
           
           </>
       );
   }
}
export default home;