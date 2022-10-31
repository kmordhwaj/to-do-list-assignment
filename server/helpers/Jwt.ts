const expressJwt = require('express-jwt');

function authJwt1(){
    const secret = process.env.SECRET_JWT;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms:['HS256']
    }).unless({
        path: [
            `${api}/users/login`,
            `${api}/users/register`,
            {url: /\/api\/v1\/tasks(.*)/ , methods: ['GET', 'OPTIONS']}
        ]
    });
}

module.exports = authJwt1;