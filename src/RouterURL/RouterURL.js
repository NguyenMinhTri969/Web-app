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
import ChannelDetails from "../Page/Channel/Channel_Details";
import Shop from "../Page/Shop/Shop";
import Shopdetails from "../Page/Shop/Shopdetails";
import Country from "../Page/Country/Country";

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

                <Route path ="/channel/:details">
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
                    <LazyLoad placeholder={<Loading />}>
                        <Country />
                    </LazyLoad>
                </Route>
            </Switch>
        </div>
    )
}