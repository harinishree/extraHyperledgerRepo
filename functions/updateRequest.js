'use strict';
var request = require('../models/request');
var bcSdk = require('../invoke');
var user = 'dhananjay.p';

//exports is used here so that updateRequest can be exposed for router and blockchainSdk file.
exports.updateRequest = (requestid, status, transactionString) =>
    new Promise((resolve, reject) => {
        
        console.log("entering into updateRequest function.......!")
        
        const updateRequest = ({
            requestid: requestid,
            status: status,
            transactionString: transactionString,
        })
        // updateRequest.save()
        bcSdk.updateRequest({ user: user, RequestDetails: updateRequest })

        .then(() => resolve({ "status": 200, "message": "request updated Successfully" }))

        .catch(err => {

            if (err.code == 401) {

                reject({ "status": 401, "message": 'Request Already updated!' });

            } else {
                console.log("error occurred" + err);

                reject({ "status": 500, "message": 'Internal Server Error !' });
            }
        });
    });