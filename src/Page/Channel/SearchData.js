import axios from 'axios';
import TypeChecker from 'typeco';

const API_ROOT = "http://localhost:8000/"

export const getMatchedList = value => {

    if (TypeChecker.isEmpty(value)) return axios.get(API_ROOT + "channel/", {
            headers: {
                "Authorization" : "Bearer " + sessionStorage.getItem('token')
            }
            }).then(res => {
            return res.data
    });
        return (
            axios.get(API_ROOT + "channel/", {
                headers: {
                    "Authorization" : "Bearer " + sessionStorage.getItem('token')
                }
                }).then(res => {
                console.log(res.data.filter(item => item.name.toLowerCase().includes(value.toLowerCase())))    
                return res.data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
            })
        )
      
        

}