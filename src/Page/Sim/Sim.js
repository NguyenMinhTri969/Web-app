import React from 'react';
import DashBoard from '../../Component/DashBoard/AppBar/AppBar';
import ListSim from '../../Component/MenuBar/Sim/ListSim';
import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb';

import { getAllSim } from '../../RestAPI/RestAPI';

class Sim extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        getAllSim().then(res => {
            this.setState({
                data: res
            })
        })
    }

    render() {
        return (
            <div>
                <DashBoard 
                    table = {<ListSim data={this.state.data ? this.state.data : []} />}
                    breadcrumb = {<Breadcrumb value1='Sim' href="/Sim"/>}
                />
            </div>
        )
    }
}
export default Sim;