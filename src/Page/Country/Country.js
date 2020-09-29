import React from 'react';
import { checkRole } from '../../Auth/CheckRole';
import { getAllCountries } from "../../RestAPI/RestAPI";

import Dashboard from '../../Component/DashBoard/AppBar/AppBar';

import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb';

import ListCountry from "../../Component/MenuBar/Country/ListCountry";
class Country extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    async componentDidMount() {
        await checkRole().then(check_role => {
            if (check_role === null) {
                this.props.history.push('/login')
            }this.setState({
                role: check_role
            })
        })
        
        await getAllCountries().then(res => {
            this.setState({
                data: res
            })
        })
        
    }
    render() {
        return (
            <div>
                <Dashboard table={<ListCountry value={this.state.data ? this.state.data : []} />}
                    breadcrumb = {<Breadcrumb title1="Country" />}
                />
            </div>
        )
    }

    
}
export default Country;