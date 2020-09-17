import React, { Component } from 'react';
import { withRouter } from "react-router";

import { checkRole } from '../../CheckRole/CheckRole'; 
import { getDetailsChannel } from "../../RestAPI/RestAPI";

import Dashboard from "../../Component/DashBoard/AppBar/AppBar";
import Channeldetails from "../../Component/MenuBar/Channel/Channeldetails.js/Channeldetails";
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
        

        await getDetailsChannel(id).then(res => {
            this.setState({
                executor: JSON.parse(res[0]),
                shops: JSON.parse(res[1])
            })
        })
       
    }

    render() {
        
        const { match } = this.props;

        const name = match.params.details
        
        console.log(match.params)
        
        const props = {
            href: "/channel",
            title1: "Channel",

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