import axios from 'axios';

// chi co fetch moi response duoc status axios thi chua biet cach lay :(((
const API_ROOT = "http://localhost:8000/"

export const login =  user => {
    console.log("user ne" + user);
	return fetch((API_ROOT + "login/token"),{
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

export const getListChannel = () => {
    return  axios.get(API_ROOT + "channels").then(res => {
        return res.data
    })
}

export const getDetailsChannel =  (id) => {
    return axios.get(API_ROOT + "channels/" + id).then(res => {
        return res.data
    })
}

export const getAllShops = () => {
    return axios
                    .get(API_ROOT + 'shops',{
                        headers:{
                            "token":sessionStorage.getItem('token'),
                        }
                    }).then(res =>{
                        if(res.status === 200){
                            const data = JSON.parse(res.data);
                            return data;
                        }
                        return null;
                    });
}

export const getAllCountries = () => {
    return axios.post("http://localhost:8000/country/").then(res => {
        console.log(res)
    })
}

export const getAllUsers = () => {
    return axios.get(API_ROOT + "users",{
        headers:{
            "token":sessionStorage.getItem('token'),
        }}).then(res => {
            if(res.status === 200){
                const data = JSON.parse(res.data);
                return data
            }
            return null;
        })
}