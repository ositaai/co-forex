import React, { Component } from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import home from './components/home';
import starter from './components/starter';
import premvideos from './components/premvideos';
import prempdf from './components/prempdf';
import tradingview from './components/tradingview';
import getcode from './components/getcode';
import explanation from './components/explanation';
import modal from './components/modal';
import videoplayer from './components/videoplayer';
import { IonMenu, IonItem, IonContent, IonMenuToggle, IonApp, IonSplitPane, IonPage, IonRouterOutlet } from '@ionic/react';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import "./App.css";
class App extends Component{
    constructor(){
      super();
}
   render(){
       return(
           <BrowserRouter>
            <IonApp>
                  
                    <Menu/>
                    <IonPage id="main">
                        <IonRouterOutlet>
                        <Route exact path="/" component={prempdf}/>
                        <Route path="/starter" component={starter}/>
                        <Route path="/premvideos" component={premvideos}/>
                        <Route path="/prempdf" component={home}/>
                        <Route path="/tradingview" component={tradingview}/> 
                        <Route path="/explanation" component={explanation}/>
                        <Route path="/getcode" component={getcode}/> 
                        <Route exact path="/videoplayer/:slug/" component={videoplayer}/>
                        </IonRouterOutlet>
                       </IonPage>
                 
               </IonApp> 
           </BrowserRouter>
              
       );
   }
}

export default App;