'use strict';
var request = require('../models/request');
var bcSdk = require('../invoke');
var user = 'dhananjay.p';

//exports is used here so that newRequest can be exposed for router and blockchainSdk file.
exports.updateCustomerDetails = () => {
    return new Promise((resolve, reject) => {

        console.log("entering into newRequest function.....!")
            // 

        // newRequest.save()
        resolve({ "status": "update successfull" });



    });

}