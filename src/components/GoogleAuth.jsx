import React from 'react';

class GoogleAuth extends React.Component{
    state = {isSignedIn : null};
    //Initializing the library
    componentDidMount(){
        //callback gets executed after the additional js code gets downloaded from google servers
        //Loading ---> Initializing ---> referce to auth library
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'833220579862-kr6geto7gglo9clg8dtfejkkqodur5tn.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn : this.auth.isSignedIn.get()})
            });
        });
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I don't know if you're signed in</div>
        }
        else if(this.state.isSignedIn){
            return <div>You're signed in</div>
        }
        else{
            return <div>You're signed out</div>
        }
    }
    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;