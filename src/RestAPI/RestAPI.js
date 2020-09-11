import axios from 'axios';

// chi co fetch moi response duoc status axios thi chua biet cach lay :(((
const API_ROOT = "http://127.0.0.1:8000/"

export const login = async user => {
    console.log("user ne" + user);
	return await fetch((API_ROOT + "login/token"),{
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

export const getListChannel = async () => {
    return await axios.get(API_ROOT + "channels").then(res => {
        return res.data
    })
}

export const getDetailsChannel = async (id) => {
    return await axios.get(API_ROOT + "channels/" + id).then(res => {
        return res.data
    })
}

export const getListShop = async () => {
    return await axios
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
