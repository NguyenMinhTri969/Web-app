import React, { Component } from 'react';
import { withRouter } from "react-router";

import { checkRole } from '../../CheckRole/CheckRole'; 

import { getUserDetails } from "../../RestAPI/RestAPI";
import {  getShopsOfExecutor } from "../../RestAPI/RestAPI";

import Dashboard from "../../Component/DashBoard/AppBar/AppBar";
import Tab from "../../Component/MenuBar/User/UserDetail/Tab";
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
        
        getShopsOfExecutor(id).then(res => {
        
            this.setState({
                listshop: res
            })
        })

        
        getUserDetails(id).then(res => {
        
            this.setState({
                profile: res
            })
        })   
    }

    render() {
        
        const { match } = this.props;

        const name = match.params.details

        const breadcrumb = {
            href: "/user",
            title1: "User",
            title2: name
        }

        const tab = {
            title: name,
            profile: this.state.profile,
            listshop: this.state.listshop
        }
        
        return (
            <Dashboard 
                table={<Tab {...tab} />}
                breadcrumb ={<Breadcrumbdetails {...breadcrumb}/>}
            />
        )
    }
}

export default withRouter(Channel_Details);