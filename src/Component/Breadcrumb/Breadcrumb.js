import React from 'react';
import { Link } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function(props) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link 
                color="inherit" href="/Sim" 
                variant="body2"
            >
                Home
            </Link>
            <Typography
                color = "textPrimary"
                variant='subtitle2' 
            >
                {props.title1}
            </Typography>
        </Breadcrumbs>
        )
}