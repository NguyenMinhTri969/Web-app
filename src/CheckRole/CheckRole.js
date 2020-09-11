import jwt_decode from 'jwt-decode';

export const checkRole = async function() {
    const token = sessionStorage.getItem('token');
    if(token === null) {
        sessionStorage.removeItem('token')
    }else {
        const decode = await jwt_decode(token)
        return decode.role
    }
}