//aaccesed with coupon code genereted from firebase database
import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import {f,database,storage,auth} from './config.js';
import userauth from './auth';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,IonImg,IonThumbnail,IonAvatar
     ,IonBadge,IonHeader,IonToolbar,IonMenuButton,IonContent,IonTitle ,IonList,IonItem, IonButton, IonCard} from '@ionic/react';
import { IoMdLogOut } from "react-icons/io";
import{MdHome,MdCloudDownload} from 'react-icons/md';
import one from "../image/one.JPG";
import two from "../image/two.JPG";
import three from "../image/three.JPG";
import four from "../image/four.JPG";
import five from "../image/five.JPG";
import six from "../image/six.JPG";
import seven from "../image/seven.JPG";
import eight from "../image/eight.JPG";
import nine from "../image/nine.JPG";
import ten from "../image/ten.JPG";


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
            <Link to="/explanation">
           <IonButton style={{color:"red"}}>click to access the videos</IonButton>
           </Link>  
            <Link to="/">
            <IonButton  >
          <MdHome/>
          </IonButton>
           </Link>
          </div>
        </div>
      </nav>
      <IonContent>
      <div class="container" style={{paddingBottom:'50px',paddingTop:'50px'}}>
             <ul class="list-unstyled">
            <IonCard><h2>Start with the ebooks</h2>
            <h5 style={{color:"red"}}>you may need to watch our traning videos before proceeding to read some of the free pdfs</h5>
            <Link to="/explanation">
           <IonButton style={{color:"red"}}>get the videos</IonButton>
           </Link>  
            </IonCard>

        <li class="media my-4">
        <IonThumbnail>
        <IonImg src={four} class="mr-3" alt="..."></IonImg>
      </IonThumbnail>
          <div class="media-body">
            <h2 class="mt-0 mb-1 text-primary">How to trade out of recession.pdf</h2>
           <b>You don’t have to be a genius or a rocket scientist to make a comfortable living from
FOREX TRADING alone. But the transition from your current career status to that ofa
Part-Time or Full-Time Forex Trader, must happen gradually and I’m explaining the
necessary steps you have to make later on in the Book.</b> 
             <a href="https://drive.google.com/open?id=1uvbiLGNkmfId2vnMoG5LD8e-H2RI1Yac" download>
             <div style={{fontSize:"50px"}}><MdCloudDownload/></div>
            </a>
          </div>
        </li>

        
        <li class="media">
      <IonThumbnail>
        <IonImg src={three}  alt="..."></IonImg>
      </IonThumbnail>
          <div class="media-body">
            <h2 class="mt-0 mb-1 text-primary">Rock and roll to bank with MACD and EMAS.pdf</h2>
            <b>if you are familiar with forex you can understand the concept in this
            book else i will recommend taking the video course before reading it</b>
            <a href="https://drive.google.com/open?id=10ouDnfiifRn0lmIhABx6YvPhAPXIF2My" download>
            <div style={{fontSize:"50px"}}><MdCloudDownload/></div>
            </a>
          </div>
        </li>

          <li class="media">
      <IonThumbnail>
        <IonImg src={one}  alt="..."></IonImg>
      </IonThumbnail>
          <div class="media-body">
            <h2 class="mt-0 mb-1 text-primary">planet forex.pdf</h2>
            <b>if you are familiar with forex you can understand the concept in this
            book else i will recommend taking the video course before reading it</b> 
            <a href="https://drive.google.com/open?id=1n984q9MjVx4DcgZAVP8uYGXhZcAXFONk" download>
            <div style={{fontSize:"50px"}}><MdCloudDownload/></div>
            </a>
          </div>
        </li>

          <li class="media">
      <IonThumbnail>
        <IonImg src={five}  alt="..."></IonImg>
      </IonThumbnail>
          <div class="media-body">
            <h2 class="mt-0 mb-1 text-primary">How to trade bollinger bands for big profit.pdf</h2>
            <b>if you are familiar with forex you can understand the concept in this
            book else i will recommend taking the video course before reading it</b>
            <a href="https://drive.google.com/open?id=19A_rtJE2_IfopOQlhBtZoRyO2T6vHIrU" download>
            <div style={{fontSize:"50px"}}><MdCloudDownload/></div>
            </a>
          </div>
        </li>

          <li class="media">
      <IonThumbnail>
        <IonImg src={eight}  alt="..."></IonImg>
      </IonThumbnail>
          <div class="media-body">
            <h2 class="mt-0 mb-1 text-primary">The candlestick trading bible.pdf</h2>
            <b>if you are familiar with forex you can understand the concept in this
            book else i will recommend taking the video course before reading it</b> 
            <a href="https://drive.google.com/open?id=1mUYtZyCJd7aZRTormx62naO0xeJ9MiIl" download>
            <div style={{fontSize:"50px"}}><MdCloudDownload/></div>
            </a>
          </div>
        </li>

          <li class="media">
      <IonThumbnail>
        <IonImg src={nine}  alt="..."></IonImg>
      </IonThumbnail>
          <div class="media-body">
            <h2 class="mt-0 mb-1 text-primary">The engulfing trader.pdf</h2>
            <b>if you are familiar with forex you can understand the concept in this
            book else i will recommend taking the video course before reading it</b> 
            <a href="https://drive.google.com/open?id=1-OD1NjgfP88ADh9lDCAbtsJdJvOqx4Wr" download>
            <div style={{fontSize:"50px"}}><MdCloudDownload/></div>
            </a>
          </div>
        </li>

          <li class="media">
      <IonThumbnail>
        <IonImg src={two}  alt="..."></IonImg>
      </IonThumbnail>
          <div class="media-body">
            <h2 class="mt-0 mb-1 text-primary">How to trade ichumoku system profitable signal .pdf</h2>
            <b>if you are familiar with forex you can understand the concept in this
            book else i will recommend taking the video course before reading it</b> 
            <a href="https://drive.google.com/open?id=1JQZF83sL84GH_xKDIslGajtGcVA9C1kC" download>
            <div style={{fontSize:"50px"}}><MdCloudDownload/></div>
            </a>
          </div>
        </li>

          <li class="media">
      <IonThumbnail>
        <IonImg src={ten}  alt="..."></IonImg>
      </IonThumbnail>
          <div class="media-body ">
            <h2 class="mt-0 mb-1 text-primary">Forex from nothing to everything in 30 days.pdf</h2>
            <b>if you are familiar with forex you can understand the concept in this
            book else i will recommend taking the video course before reading it</b>
            <a href="https://drive.google.com/open?id=1Vt4K0EkSl_PFNRFv7JD1NTH2FTrDHkSC" download>
            <div style={{fontSize:"50px"}}><MdCloudDownload/></div>
            </a>
          </div>
        </li>

          <li class="media">
      <IonThumbnail>
        <IonImg src={seven}  alt="..."></IonImg>
      </IonThumbnail>
          <div class="media-body">
            <h2 class="mt-0 mb-1 text-primary">Forex candlestick made easy.pdf</h2>
            <b>if you are familiar with forex you can understand the concept in this
            book else i will recommend taking the video course before reading it</b> 
            <a href="https://drive.google.com/open?id=171kQNQXVsCJY4l_eZegc6XCmdd2joUEp" download>
            <div style={{fontSize:"50px"}}><MdCloudDownload/></div>
            </a>
          </div>
        </li>

      </ul>

          <div style={{paddingBottom:'50px'}}>


<footer class="page-footer font-small teal pt-4">
<div class="container-fluid text-center text-md-left">
<div class="row">
<hr class="clearfix w-100 d-md-none pb-3"/>
<div class="col-md-6 mb-md-0 mb-3">
<h5 class="text-uppercase font-weight-bold">OUR AIM</h5>
<p>coforex is willing to help people learn forex with no stress and also understand
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