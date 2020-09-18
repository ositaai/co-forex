import React, { Component } from 'react';
import 'tachyons';
import {Link,Route,Switch} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import PaystackButton from 'react-paystack';
import {f,database,storage,auth} from './config.js';
import Userauth from './auth.js';
import {IonMenuButton,IonCardHeader,IonButton, IonMenu,
    IonCard,IonCardContent,IonText,
    IonItem, IonContent, IonMenuToggle, IonApp, InponSplitPane,
     IonPage, IonRouterOutlet, IonHeader, IonToolbar, IonTitle,IonTextarea } from '@ionic/react';
import{MdAddCircle,MdUpdate,MdSystemUpdateAlt,MdAddShoppingCart,MdHome} from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner} from 'react-bootstrap';

class getcode extends Component{
    constructor(){
        super();
        this.state={
            firebasecode:'',
           isLoggedin:false,
           users:'',
           key: "pk_live_b2f714a38458480370b4dad36ff33ce952699b7c", //PAYSTACK PUBLIC KEY
    		   email:'',  // customer email
            amount:500000 ,//equals NGN100,
            codeavailable:false
        }
  }

  componentDidMount=()=>{
    var that=this;
    f.auth().onAuthStateChanged(function(user){
        if(user){
            var userid=f.auth().currentUser;
            var userids=userid.uid;
             var us=userid.email;
             that.setState({users:userids});
              that.setState({email:us})
            that.setState({isLoggedin:true});
// funtion to check if the userid is in paid table in firebase and set codeavailable to true
        database.ref('paidusers').child(that.state.users).once('value').then(function(snapshot){
              const exists=(snapshot.val()!==null);
              if (exists) that.setState({codeavailable:true});
              that.getcodefromfirebase();
            });
        }else{
            that.setState({isLoggedin:false});
        }
    });
}

callback = (response) => {
    console.log(response); // card charged successfully, get reference here
    this.getcodefromfirebase();
     //database.ref('/product/'+this.state.users+'/'+this.props.productname).set(userpro);
     database.ref('/paidusers/'+this.state.users).set(this.state.email);
     this.setState({codeavailable:true});
    //function that adds the userid in paid table in firebase
}

close = () => {
    console.log("Payment closed");
}

getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for( let i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

  getcodefromfirebase=()=>{
    var that=this;
    //get code fro firebase compare with the given code the set is paid to true
    database.ref('cuponcode').child("code").once('value').then(function(snapshot){
      const exists=(snapshot.val() !== null) 
    if(exists) var data=snapshot.val();
    that.setState({firebasecode:data})
    console.log(data);
  }
    )
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
        {this.state.isLoggedin?(
             <div className="code">
             <div className="flex flex-column">
             <IonCard>
             </IonCard>
             <div>{this.state.codeavailable?( <p>
               </p>): <div><PaystackButton
                   text="Make Payment"
                   className="payButton"
                   callback={this.callback}
                   close={this.close}
                   disabled={true} 
                   embed={true} 
                   reference={this.getReference()}
                   email={this.state.email}
                   amount={this.state.amount}
                   paystackkey={this.state.key}
                   tag="button"
                 />
    <form action="https://bitpay.com/checkout" method="post">
  <input type="hidden" name="action" value="checkout" />
  <input type="hidden" name="posData" value="" />
  <input type="hidden" name="data" value="olxu5DAOftDz8aEgq+7JYOkQ3AEYOP5fnDYyQXFdalghgridVP1Es+FSAminFEuQ7dCm7+wNmtDz0FHndiJD2owrUWeAHUmTPYKTFtCY9/X9TNxKRZWT2Aumk/S4BVqF4V5vygZtZPtlEDVPaY6Q4Gh9T1Hd2FNE2BhYbNIodUU++gfGdTQ11MGjYOqq6GXl" />
  <input type="image" src="https://bitpay.com/cdn/en_US/bp-btn-pay-currencies.svg" name="submit" style={{width: "210px"}} alt="BitPay, the easy way to pay with bitcoins."/>
</form>
</div>}
              
             </div>
         {this.state.codeavailable?( <div>
            <a href={this.state.firebasecode} download>
            <div ><IonButton>download video</IonButton></div>
            </a>
             <IonCard>please copy this link to the video</IonCard>
             <input value={this.state.firebasecode}></input>
             </div>):
              <Spinner style={{color:'white'}} animation="border" role="status">
              <span className="sr-only">Loading...</span>
              </Spinner>}
         {/*<IonButton onClick={this.getcodefromfirebase}>please remove</IonButton>*/}    
             </div>
             </div>
        ):(<Userauth message={"please login to start learnig"}/> )}
        </IonContent>
          </>
      );
  }
  
}

export default getcode;