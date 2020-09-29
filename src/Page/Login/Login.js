import React, { Component } from 'react';
//import { useHistory } from "react-router-dom";


import Signin from '../../Component/Signin/Signin';
import { withRouter } from "react-router";
import {login} from '../../RestAPI/RestAPI';
import LoginFailed from "../../Component/Popup/LoginFailed";




class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {  
            popup: false
        }
    }


    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async onSubmit(event) {
     
        event.preventDefault();  // dung de ngan k cho gui form di, dung de test code
        const { history } = this.props;
        const data = {
            username: this.state.email,
            password: this.state.password
        }
        await login(JSON.stringify(data)).then(res => {
           
            if(res === sessionStorage.getItem('token')){
                sessionStorage.setItem('user',this.state.email);
                return history.push('/sim')
            } else {
                this.setState({
                    popup: true
                })
            }
            
            }) 
        }   
    onClose() {
        this.setState({
            popup: false
        })
    }

    render() {
        const Popup = this.state.popup ? <LoginFailed onClose={() => this.onClose()} open={this.state.popup}/> : ''

        return (

            <div>
                <Signin 
                    onChange={(event)=>this.onChange(event)} 
                    onSubmit={(event)=>this.onSubmit(event)}
                />
                {Popup}
                
            </div>
         
            
        )
    }
    
}

export default withRouter(Login);