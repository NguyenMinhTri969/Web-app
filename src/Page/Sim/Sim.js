import React from 'react';
import DashBoard from '../../Component/DashBoard/AppBar/AppBar';
import ListSim from '../../Component/MenuBar/Sim/ListSim';
import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb';

export default function Sim(props) {
    return (
        <div>
            <DashBoard 
                table = {<ListSim />}
                breadcrumb = {<Breadcrumb value1='Sim' href="/Sim"/>}
            />
        </div>
    )
}