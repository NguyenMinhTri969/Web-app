import React, { Component } from 'react';
import { withRouter } from "react-router";

import { checkRole } from '../../CheckRole/CheckRole'; 
import { getListManagerOfChannel } from "../../RestAPI/RestAPI";
import { getShopsOfChannel } from "../../RestAPI/RestAPI";

import Dashboard from "../../Component/DashBoard/AppBar/AppBar";
import Channeldetails from "../../Component/MenuBar/Channel/Channeldetails.js/Tab";
import Breadcrumbdetails from "../../Component/Breadcrumb/Breadcrumb_details";

class Channel_Details extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }   
    }
    async componentDidMount() {
        await checkRole().then(check_role => {
            if(check_role === null){
                this.props.history.push('/login')
            }
            this.setState({
                role:check_role
            });
        });

        const { match } = this.props;
    
        const id = match.params.id
        

        getListManagerOfChannel(id).then(res => {
            
            this.setState({
                executor: res
                
            })
        })
        
        getShopsOfChannel(id).then(res => {
        
            this.setState({
                shops: res
            })
        })
       
    }

    render() {
        
        const { match } = this.props;

        const name = match.params.details

        const props = {
            href: "/channel",
            title1: "Channel",
            title2: name
        }
        return (
            <Dashboard 
                table={<Channeldetails 
                            executor={this.state.executor}
                            shops={this.state.shops}
                            title={name}/>}
                breadcrumb ={<Breadcrumbdetails {...props}/>}
            />
        )
    }
}

export default withRouter(Channel_Details);