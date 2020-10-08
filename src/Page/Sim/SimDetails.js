import React from 'react';
import { withRouter } from "react-router";
import DashBoard from '../../Component/DashBoard/AppBar/AppBar';
import Tab from '../../Component/MenuBar/Sim/SimDetails/Tab';
import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb_details';
import {checkRole} from '../../Auth/CheckRole';

import { getDetailsSim } from '../../RestAPI/RestAPI';
import { getMessages } from '../../RestAPI/RestAPI';

class Sim extends React.Component {
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
    
        const id = match.params.name;
       
        getDetailsSim(id).then(res => {
            
           this.setState({
               info: res
           })
        })
        getMessages(id).then(res => {
            this.setState({
                mess: res
            })
        })
        

    }

    render() {
        const { match } = this.props;
        const name = match.params.name

        const props = {
            href: "/sim",
            title1: "Sim",
            title2: name
        }
        return (
            <div>
                <DashBoard 
                    table = {<Tab 
                                information={this.state.info ? this.state.info : {}}
                                message={this.state.mess ? this.state.mess : []}
                            />}
                    breadcrumb = {<Breadcrumb {...props}/>}
                />
            </div>
        )
    }
}
export default withRouter(Sim);