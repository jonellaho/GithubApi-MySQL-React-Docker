const axios = require('axios');

const getAllRepos = async (req, res) => {
    try {
    
        const { password } = req.body;
        const { data } = await axios({
            url: 'https://api.github.com/user/repos',
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + password,
                "Accept": "application/vnd.github.v3+json"
            }
        });

        let result = data.map(repo => ({
            github_repo_id: repo.id,
            title: repo.name,
            owner_name: repo.owner.login,
            owner_url: repo.owner.html_url,
            description: repo.description ? repo.description : "No description",
            download_url: repo.downloads_url
        }));

        addResult(result,req.models.sequelize)
        res.send(result);

    } catch (e) {
        return res.status(400).send({
            message: 'Error'
        });
    }
};

async function addResult(data,db) {
    try {
        const repository = db.models.repository;
        await repository.bulkCreate(data, { ignoreDuplicates: true })
    } catch (e) {
        console.log(e)
    }
}

module.exports = { getAllRepos }