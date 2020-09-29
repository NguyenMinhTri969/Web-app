import React from 'react';
import GoogleLogin from 'react-google-login';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router";


import MailOutlineIcon from '@material-ui/icons/MailOutline';

import axios from 'axios';


const useStyles = makeStyles((theme) => ({

    submit: {
      margin: theme.spacing(0, 0, 2,),
      backgroundColor: theme.palette.primary.main,  
      color: "white"
    },
    button: {
        
    }
  }));

export default function Buttonlogin() {
    const classes = useStyles();
    const history = useHistory();


    const responseGoogle = (response) => {
        console.log(response)
        const token = response.tokenId
        const url = "http://localhost:8000/login/gmail/access-token?google_token_id="+token
        console.log(url)
        axios.get(url).then(res => {
            if(res.status === 200) {
                sessionStorage.setItem('email',response.profileObj.email)
                sessionStorage.setItem('image',response.profileObj.imageUrl)
                sessionStorage.setItem('token',res.data.access_token)
                history.push({
                    pathname:"/sim"
                  })
    
            } else {
                console.log("login failed")
            }
        })
        }

    return (

        <div className="button">
            <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              
            >
                
                    Sign In
            
            </Button>
            <GoogleLogin
                clientId="686571586750-qqotc9b8s50mpn4n14glva58cgiaqtro.apps.googleusercontent.com"
                render={renderProps => (
                <Button 
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled}
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                >
                   
                        <MailOutlineIcon style={{ color: "white", margin: "0 10px 0 0" }} />
                    
                   
                    
                    Login With Your Gmail
             
                                
                </Button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}