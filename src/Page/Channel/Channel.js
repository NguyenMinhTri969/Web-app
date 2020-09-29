import React from 'react';
import { checkRole } from '../../Auth/CheckRole';
import { getListChannel } from '../../RestAPI/RestAPI';
import Dashboard from '../../Component/DashBoard/AppBar/AppBar';
import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb';
import Listchannel from '../../Component/MenuBar/Channel/Listchannel';

class Channel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            role: '',
            data: []
        }
    }

    async componentDidMount() {
        await checkRole().then(check_role => {
            if(check_role === null){
                this.props.history.push('/login')
            }this.setState({
                role: check_role
            })
        })
        await getListChannel().then(res => {
            console.log(res)
            this.setState({
                data: res
            })
        })
    }
    render() {
        return (
            <Dashboard 
                breadcrumb = {<Breadcrumb title1="Channel"/>}
                table ={<Listchannel value={this.state.data}/>}
            />
        )
    }
}

export default Channel;