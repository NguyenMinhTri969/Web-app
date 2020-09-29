import React, { Component } from 'react';
import { withRouter } from "react-router";

import { checkRole } from '../../Auth/CheckRole'; 
import { getCountryDetails } from "../../RestAPI/RestAPI";
import { getShopsOfCountry } from "../../RestAPI/RestAPI";

import Dashboard from "../../Component/DashBoard/AppBar/AppBar";
import Tab from "../../Component/MenuBar/Country/Countrydetails/Tab";
import Breadcrumbdetails from "../../Component/Breadcrumb/Breadcrumb_details";

class Channel_Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            

        getCountryDetails(id).then(res => {
            this.setState({
                information: res
            })
        })

        getShopsOfCountry(id).then(res => {
            this.setState({
                shops: res
            })
        })
       
    }

    render() {
        
        const { match } = this.props;

        const name = match.params.details

        const props = {
            href: "/countrys",
            title1: "Country",
            title2: name
        }
        return (
            <Dashboard 
                breadcrumb ={<Breadcrumbdetails {...props}/>}
                table = {<Tab information={this.state.information}
                                title={name}
                                shops={this.state.shops} />} // data is object
            />
        )
    }
}

export default withRouter(Channel_Details);