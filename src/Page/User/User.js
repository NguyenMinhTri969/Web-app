import React from 'react';
import { getAllUsers } from "../../RestAPI/RestAPI";
import { checkRole } from "../../CheckRole/CheckRole";

import DashBoard from "../../Component/DashBoard/AppBar/AppBar";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import ListUser from "../../Component/MenuBar/User/ListUser";


class LUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        checkRole().then(check_role => {
            if(check_role === null){
                this.props.history.push('/login')
            }this.setState({
                role: check_role
            })
        })

        getAllUsers().then(res => {
            console.log("usre ne" + res)
            this.setState({
                data: res
            })
        })
    }
    
    render() {
        return (
            <DashBoard table={<ListUser value={this.state.data ? this.state.data : []} />} breadcrumb={<Breadcrumb title1="User"/>} />
        )
    }   
}
export default LUser;