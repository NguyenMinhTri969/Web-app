import React, { Component } from 'react';
import { withRouter } from "react-router";

import { checkRole } from '../../Auth/CheckRole'; 
import { getListManagerOfChannel } from "../../RestAPI/RestAPI";
import { getShopsOfChannel } from "../../RestAPI/RestAPI";
import { getManagerNotChannel } from "../../RestAPI/RestAPI";

import Dashboard from "../../Component/DashBoard/AppBar/AppBar";
import Channeldetails from "../../Component/MenuBar/Channel/Channeldetails.js/Tab";
import Breadcrumbdetails from "../../Component/Breadcrumb/Breadcrumb_details";

import AddManager from "../../Component/Popup/AddManagerToChannel/AddManagerToChannel";

class Channel_Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dialog: false,
            data: ["2"]
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

        getManagerNotChannel(id).then(res => {
            this.setState({
                managernotbelong: res
            })
        })

       
    }
    openListManager() {
        this.setState ({
            dialog: true
        })
    }

    onChange(event) { 
       
        const currentIndex = this.state.data.indexOf(event.target.value);

        if (currentIndex === -1) {
        this.state.data.push(event.target.value);
            
        } else {
        this.state.data.splice(currentIndex, 1);
        }
        this.setState({ [event.target.name]: event.target.checked });

        console.log(this.state.data)
    }
    onSubmit() {
        console.log(this.state.data)
    }



    render() {
        
        const { match } = this.props;

        const name = match.params.details

        const props = {
            href: "/channel",
            title1: "Channel",
            title2: name
        }
        const dialog = this.state.dialog ? <AddManager 
                                                open={this.state.dialog} 
                                                value={this.state.managernotbelong}
                                                onChange={(event) => {this.onChange(event)}}
                                                onSubmit={() => this.onSubmit()}
                                                checked={this.state.data} /> : ' ';   

        return (
            <React.Fragment>
                {dialog}
                <Dashboard 
                    table={<Channeldetails 
                                executor={this.state.executor}
                                shops={this.state.shops}
                                title={name}
                                openListManager={() => this.openListManager()}
                            />}
                    breadcrumb ={<Breadcrumbdetails {...props}/>}
                />
            </React.Fragment>
        )
    }
}

export default withRouter(Channel_Details);