import axios from 'axios';

// chi co fetch moi response duoc status axios thi chua biet cach lay :(((
const API_ROOT = "http://localhost:8000/"

export const login =  user => {
    console.log("user ne" + user);
	return fetch((API_ROOT + "login/login/token"),{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method:'POST',
            body:user
		})
		.then(async res => {
		if(res.status === 401){
                const notifield = "Wrong password ne";
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
}

//// ====> Channel
export const getListChannel = () => {
    return  axios.get(API_ROOT + "channel/", {
        headers: {
            "token": sessionStorage.getItem('token'),
        }
    }).then(res => {
        return res.data
    })
}

export const getListManagerOfChannel =  (id) => {
    return axios.get(API_ROOT + "channel/" + id + "/all-manager", {
        headers:{
            "token":sessionStorage.getItem('token'),
        }
    }).then(res => {
        return res.data
    })
}

export const getShopsOfChannel = (id) => {
    return axios.get(API_ROOT + "channel/" + id + "/shops", {
        headers:{
            "token":sessionStorage.getItem('token'),
        }
    }).then(res => {
        return res.data
    })
}
/// <=== Channel
//// Country
export const getAllCountries = () => {
    return axios.post(API_ROOT + "country/").then(res => {
        return res.data
    })
}

export const getCountryDetails = (id) => {
    return axios.get(API_ROOT + "country/{country_id}?postal_code=" + id).then(res => {
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
        headers:{
            "token":sessionStorage.getItem('token'),
        }}).then(res => {
            if(res.status === 200){
                
                return res.data
            }
            return null;
        })
}

export const getUserDetails = (id) => {
    return axios.get(API_ROOT + "users/" + id, {
        headers: {
            "token":sessionStorage.getItem('token'),
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
            "token": sessionStorage.getItem('token')
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
            "token": sessionStorage.getItem('token')
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
                        headers:{
                            "token":sessionStorage.getItem('token'),
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
            "token": sessionStorage.getItem('token')
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
            "token": sessionStorage.getItem('token')
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

/// <====