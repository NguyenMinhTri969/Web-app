import React, { Component } from 'react';
import { withRouter } from "react-router";

import { checkRole } from '../../Auth/CheckRole'; 
import { getShopDetails } from "../../RestAPI/RestAPI";
import { getExecutorsOfShop } from "../../RestAPI/RestAPI";
import { getNumberOfShopExecutors } from "../../RestAPI/RestAPI";

import Dashboard from "../../Component/DashBoard/AppBar/AppBar";
import TabShopDetails from "../../Component/MenuBar/Shop/ShopDetails/TabShopDetails";
import Breadcrumbdetails from "../../Component/Breadcrumb/Breadcrumb_details";


class Shop_Details extends Component {
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
        
        await getShopDetails(id).then(res => {
        
            this.setState({
                information: res,
                name: res.name
            })
        })
        
        getExecutorsOfShop(id).then(res => {
           
            this.setState({
                executor: res
            })
        })

        getNumberOfShopExecutors(id).then(res => {
            
            this.setState({
                count: res
            })
        })
       
    }

    render() {
       
        const props = {
            href: "/shops",
            title1: "Shop",
            title2: this.state.name 
        }

        const tabs = {
            title: this.state.name,
            information: this.state.information ? this.state.information : " ",
            executor: this.state.executor,
            count: this.state.count
        }

        return (
            <Dashboard 
                table={<TabShopDetails {...tabs} />}
                breadcrumb ={<Breadcrumbdetails {...props}/>}
            />
        )
    }
}

export default withRouter(Shop_Details);