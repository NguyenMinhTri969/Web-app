import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import LazyLoad from 'react-lazyload'


import Login from '../Page/Login/Login';
import Sim from "../Page/Sim/Sim";
import Channel from "../Page/Channel/Channel";
import ChannelDetails from "../Page/Channel/ChannelDetails";
import Shop from "../Page/Shop/Shop";
import Shopdetails from "../Page/Shop/ShopDetails";
import Country from "../Page/Country/Country";
import User from "../Page/User/User";
import UserDetails from "../Page/User/UserDetails";

const Loading = () => (
    <div className="post loading">
      <h5>Loading...</h5>
    </div>
  )
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
                    <LazyLoad placeholder={<Loading />}>
                        <Shop />
                    </LazyLoad>
                </Route>

                <Route path ="/shops/:id">
                    <Shopdetails />
                </Route>
                <Route path ="/countrys" exact>
                        <Country />
                </Route>

                <Route path ="/user" exact>
                        <User />
                </Route>
                <Route path ="/user/:id">
                    <UserDetails />
                </Route>

            </Switch>
        </div>
    )
}