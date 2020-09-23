import React, { Component } from 'react';
import { withRouter } from "react-router";

import { checkRole } from '../../CheckRole/CheckRole'; 
import { getCountryDetails } from "../../RestAPI/RestAPI";

import Dashboard from "../../Component/DashBoard/AppBar/AppBar";
import Countrydetails from "../../Component/MenuBar/Country/Countrydetails/CountryDetails";
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
            console.log(res)
            this.setState({
                data: res
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
                table = {<Countrydetails value={this.state.data} title={name}/>} // data is object
            />
        )
    }
}

export default withRouter(Channel_Details);