const axios = require('axios');

const signIn = async (req, res) => {
    
    try {
        const { password } = req.body;
        const { data } = await axios({
            url: 'https://api.github.com/user',
            method: 'GET',
            headers: {
              "Content-Type" : "application/json",
              "Authorization" : "token " + password ,
              "Accept" : "application/vnd.github.v3+json"
            }
          });

        let result = {
            iconUrl : data.avatar_url,
            location : data.location,
            fullName : data.name,
            accessToken : password
        }

        res.send(result);

    } catch (e) {
        return res.status(400).send({
            message: 'Error'
        });
    }
};


module.exports = {
    signIn
}