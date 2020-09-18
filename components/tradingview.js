import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import userauth from './auth';
import {IonButton, IonMenu, IonItem, IonContent, IonMenuToggle, IonApp, IonSplitPane, IonPage, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonList, IonMenuButton, IonCardHeader, IonCard, IonCardContent } from '@ionic/react';
import{MdAddCircle,MdUpdate,MdSystemUpdateAlt,MdAddShoppingCart,MdHome} from 'react-icons/md';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import {f,database,storage,auth} from './config.js';
class tradingview extends Component{
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
   render(){
       return(
        <>
        <IonHeader>
            <IonToolbar>
                <IonMenuButton slot="start"></IonMenuButton>
                <IonCardHeader>
                <Link to="/">
            <IonButton  >
          <MdHome/>
          </IonButton>
           </Link>
                </IonCardHeader>
            </IonToolbar>
        </IonHeader>
          <IonContent>      
<TradingViewWidget
 theme={Themes.DARK}
 locale="en"
 width="500"
 height="500"
 symbol="BINANCE:BTCNGN"
 interval="60"
 style="1"
 toolbar_bg="#f1f3f6"
 enable_publishing="false"
 withdateranges="true"
 hide_side_toolbar="false"
 allow_symbol_change="true"
container_id="tradingview_e678f"
                   /> 
          </IonContent>
        </>
       );
   }
}

export default tradingview;