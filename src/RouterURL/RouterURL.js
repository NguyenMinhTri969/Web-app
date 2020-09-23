import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";




import Login from '../Page/Login/Login';
import Sim from "../Page/Sim/Sim";
import Channel from "../Page/Channel/Channel";
import ChannelDetails from "../Page/Channel/ChannelDetails";
import Shop from "../Page/Shop/Shop";
import Shopdetails from "../Page/Shop/ShopDetails";

import User from "../Page/User/User";
import UserDetails from "../Page/User/UserDetails";
import Country from "../Page/Country/Country";
import CountryDetails from "../Page/Country/CountryDetails";


export default function() {
    return (
        <div>
            <Switch>
                <Redirect path = '/' to ='/login' exact />
                <Route path ="/login">
                    <Login />
                </Route>
                <Route path ="/sim">
                    <Sim />
                </Route>
                <Route path ="/channel" exact>
                    <Channel />
                </Route>
                <Route path ="/channel/:details/:id">
                    <ChannelDetails/>
                </Route>

                <Route path ="/shops" exact>
                        <Shop />   
                </Route>
                <Route path ="/shops/:id/:name">
                    <Shopdetails />
                </Route>

                <Route path ="/countrys" exact>
                        <Country />
                </Route>
                <Route path ="/country/:details/:id">
                    <CountryDetails />
                </Route>

                <Route path ="/user" exact>
                        <User />
                </Route>
                <Route path ="/user/:details/:id">
                    <UserDetails />
                </Route>

            </Switch>
        </div>
    )
}