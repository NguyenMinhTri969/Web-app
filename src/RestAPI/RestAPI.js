import axios from 'axios';


const API_ROOT = "http://localhost:8000/"

export const login =  user => {
    console.log(user)
	return fetch((API_ROOT + "login/token"),{
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method:'POST',
            body: user
		})
		.then(async res => {
		if(res.status === 401){
                const notifield = "Wrong password ";
                return notifield;
            }
		else if(res.status === 200){
                const data = await res.json();
                sessionStorage.setItem('token',data.access_token);
				return data.access_token;
            }
        else if(res.status === 500){
            console.log('erro database');
            return 0;
            }
        })

        /* return fetch((API_ROOT + "login/token"),{
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method:'POST',
            body: {
                'grant_type': null,
                'username': '1',
                'password': '1',
                'scope': null,
                'client_id': null,
                'client_secret': null
            }
		}).then(res => {
            console.log(res)
        })
         */
}

//// ====> Channel
export const getListChannel = () => {
    return  axios.get(API_ROOT + "channel/", {
        headers: {
            "Authorization" : "Bearer " + sessionStorage.getItem('token')
        }
    }).then(res => {
        return res.data
    })
}

export const getListManagerOfChannel =  (id) => {
    return axios.get(API_ROOT + "channel/" + id + "/all-manager", {
            headers: {    
                "Authorization":"Bearer " + sessionStorage.getItem('token')
            }      
     }).then(res => {
            return res.data
    })
}

export const getShopsOfChannel = (id) => {
    return axios.get(API_ROOT + "channel/" + id + "/shops", {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        return res.data
    })
}

export const getManagerNotChannel = (id) => {
    return axios.get(API_ROOT + "channel/" + id + "/all-manager-not_channel", {
            headers: {    
                "Authorization":"Bearer " + sessionStorage.getItem('token')
            }      
    }).then(res => {
        return res.data
    })
}
/// <=== Channel
//// Country
export const getAllCountries = () => {
    return axios.get(API_ROOT + "country/", {
            headers: {    
                "Authorization":"Bearer " + sessionStorage.getItem('token')
            }      
    }).then(res => {
        return res.data
    })

}

export const getCountryDetails = (id) => {
    return axios.get(API_ROOT + "country/{country_id}?postal_code=" + id, {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if(res.status === 200) {
            return res.data
        }
        return null;
    })
}

export const getShopsOfCountry = (id) => {
    return axios.get(API_ROOT + "country/{country_id}/all_shop?postal_code=" + id, {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if(res.status === 200) {
            return res.data
        }
        return null;
    })
}
/// Coutnry
/// User
export const getAllUsers = () => {
    return axios.get(API_ROOT + "users",{
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
            if(res.status === 200){
                
                return res.data
            }
            return null;
        })
}

export const getUserDetails = (id) => {
    return axios.get(API_ROOT + "users/" + id, {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if (res.status === 200) {
            return res.data
        }
        return null;
    })
}

export const getNumberOfShopExecutors = (id) => {
    return axios.get(API_ROOT + "shop/" + id + "/count-executors", {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if(res.status === 200) {
            return res.data
        }
        return null;
    })
}

export const getShopsOfExecutor = (id) => {
    return axios.get(API_ROOT + "users/" + id + "/all-shop", {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if(res.status === 200) {
            return res.data
        }
        return null;
    })
}


//// <=== User
//// ===> Shop
export const getAllShops = () => {
    return axios
                    .get(API_ROOT + 'shop/?limit=100',{
                        headers: {    
                            "Authorization":"Bearer " + sessionStorage.getItem('token')
                        }      
                    }).then(res =>{
                        if(res.status === 200){
                            return res.data
                        }
                        return null;
                    });
}

export const getShopDetails = (id) => {
    return axios.get(API_ROOT + "shop/" + id, {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if(res.status === 200) {
            return res.data
        }
        return null;
    })
}

export const getExecutorsOfShop = (id) => {
    return axios.get(API_ROOT + "shop/" + id + "/all-executors", {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if(res.status === 200) {
            return res.data
        }
        else {
            return null;
        }
    })
}

/// <==== Shop
export const getAllSim = () => {
    return axios.get(API_ROOT + "sim", {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if(res.status === 200) {
            return res.data
        }
        else {
            return null;
        }
    })
}
export const getDetailsSim = (id) => {
    return axios.get(API_ROOT + "sim/" + id, {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if(res.status === 200) {
            return res.data
        }
        else {
            return null;
        }
    })
}
export const getMessages = (id) => {
    return axios.get(API_ROOT + "sim/" + id + "/all-messages",  {
        headers: {    
            "Authorization":"Bearer " + sessionStorage.getItem('token')
        }      
    }).then(res => {
        if(res.status === 200) {
            return res.data
        }
        else {
            return null;
        }
    })
}