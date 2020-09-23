import React, { Component } from 'react';
import { checkRole } from '../../CheckRole/CheckRole';
import { getAllShops } from "../../RestAPI/RestAPI";

import Dashboard from '../../Component/DashBoard/AppBar/AppBar';
import Listshop from '../../Component/MenuBar/Shop/Listshop';
import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb';

class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        checkRole().then(check_role => {
            if (check_role === null) {
                this.props.history.push('/login')
            }this.setState({
                role: check_role
            })
        })
        
        getAllShops().then(res => {
            this.setState({
                data: res
            })
        })
        
          
        
    }

    render() {
        return (
            <Dashboard
                table={<Listshop value={this.state.data ? this.state.data : []}/>}
                breadcrumb={<Breadcrumb title1="Shop" />} 
            />
        )
    }
}
export default Shop;