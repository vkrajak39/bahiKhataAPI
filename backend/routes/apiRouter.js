const express = require('express');





const apiRouter = express.Router();


apiRouter.route('/test')
    .get((req, res) => {

        console.log("running api test router ")

        console.log(req)
        res.status(200).json({
            status: "success",
            

        });
    });

    module.exports = { apiRouter };