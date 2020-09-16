import React from 'react';
import { checkRole } from '../../CheckRole/CheckRole';
import { getAllCountries } from "../../RestAPI/RestAPI";

/* import Dashboard from '../../Component/DashBoard/AppBar/AppBar';

import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb';

import ListCountry from "../../Component/MenuBar/Country/ListCountry"; */
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
            console.log('res ne' + res)
        })
        
    }
    render() {
        return (
            <div>countries here</div>
        )
    }

    
}
export default Country;