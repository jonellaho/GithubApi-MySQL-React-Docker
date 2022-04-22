const router = require("express").Router();
const AuthRoutes = require('./auth.routes');
const RepositoryRoutes = require('./repository.routes');

    // insert global api prefix
    router.use('/auth' , AuthRoutes);
    router.use('/repository' , RepositoryRoutes);

module.exports = router