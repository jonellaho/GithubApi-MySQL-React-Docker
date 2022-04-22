const Repository = (sequelize, Sequelize) => {
    return sequelize.define("repository", {
        github_repo_id: {
            type: Sequelize.INTEGER,
            primaryKey: true ,
        },
        title: {
            type: Sequelize.STRING
        },
        owner_name: {
            type: Sequelize.TEXT
        },
        owner_url : {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.TEXT
        },
        download_url : {
            type: Sequelize.TEXT
        }
    });
};

module.exports = Repository

