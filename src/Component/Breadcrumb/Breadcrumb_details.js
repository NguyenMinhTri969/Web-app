import React from 'react';
import { Link } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function(props) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" variant="body2" href="/Sim">
                Home
            </Link>
            <Link color="inherit" variant="body2" href={props.href}>
                {props.title1}
            </Link>
            <Typography
                color = "textPrimary"
                variant='subtitle2' 
            >
                {props.title2}
            </Typography>
        </Breadcrumbs>
        )
}