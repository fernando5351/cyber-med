const connection = require('../../config/connection')
const por = require('../app');
const { request } = require('express');

async function Login(request, response) {
    const { user_email_address, user_password } = request.body;

    if (user_email_address && user_password) {
        let query = `SELECT * FROM super_usuario WHERE user_email = "${user_email_address}"`;

        connection.query(query, ( error, data ) => {
            if (data.length > 0) {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].user_password == user_password)
                    {
                        request.session.user_id  = data[count].user_id;
            
                        response.send("estas dentro amiguito")
                    }
                    else
                    {
                        response.send('incorrect password')
                    }
                }             
            }
            else {
                response.send('correo incorrecto');
            }
            response.end();
        })

    }
    else {
        response.send('inserte el email y el password por favor')
        response.end()
    }   
}

module.exports = {
    Login
}



