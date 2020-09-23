import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

export default function Loading(props) {
    const value = props.value
    const a = () => {
        if(value.length === 0) {
            return (
              <div style={{
                minWidth: 1000,
                minHeight: 250,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <CircularProgress />
              </div> 
              
            )
          } else return null
    }
    

    return (
        <div>
            {a()}
        </div>
    )  
};