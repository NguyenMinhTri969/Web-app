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
import Confirm from "../../Component/Popup/AddManagerToChannel/Confirm";

class Channel_Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dialog: false,
            confirm: false,
            data: []
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
    openListManagerToAdd() {
        this.setState ({
            dialog: true
        })
    }

    onChange(event) { 
        console.log(event.target.id)
    
        const currentIndex = this.state.data.indexOf(event.target.id);

        if (currentIndex === -1) {
        this.state.data.push(event.target.id);
            
        } else {
        this.state.data.splice(currentIndex, 1);
        }

        this.setState({ [event.target.name]: event.target.checked });
        console.log(this.state.data)
    }
    onClose() {
        this.setState ({
            dialog: false,
            data: []
        })
    }
    onCloseConfirm() {
        this.setState({
            confirm: false
        })
    }
    onConfirm() {
        if (this.state.data.length > 0) {
            this.setState({
                confirm: true
               
            })
        }
    }

    onSubmit() {
        console.log("Da gui 1 mang cac id cua manager ve backend")
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
                                                Confirm={() => this.onConfirm()}
                                                checked={this.state.data} 
                                                onClose={() => this.onClose()}/> : ' '; 
        const confirm = this.state.confirm ? <Confirm
                                                open={this.state.confirm} 
                                                onSubmit={() => {this.onSubmit()}}
                                                value={this.state.data}
                                                name={name}
                                                onClose={() => this.onCloseConfirm()} /> : ' ';

        return (
            <React.Fragment>
                {dialog}
                {confirm}
                <Dashboard 
                    table={<Channeldetails 
                                executor={this.state.executor}
                                shops={this.state.shops}
                                title={name}
                                openListManager={() => this.openListManagerToAdd()}
                            />}
                    breadcrumb ={<Breadcrumbdetails {...props}/>}
                />
            </React.Fragment>
        )
    }
}

export default withRouter(Channel_Details);