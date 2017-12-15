'use strict';
var request = require('../models/request');
var bcSdk = require('../invoke');
var user = 'dhananjay.p';

//exports is used here so that newRequest can be exposed for router and blockchainSdk file.
exports.getAllCustomerDetails = (requestid,transactionString) => {
    return new Promise((resolve, reject) => {

        console.log("entering into getallcustomerdetails")


        const getAllCustomerDetails = ({ 
            requestid:requestid,
            transactionString:transactionString
            
        }); 

        bcSdk.getAllCustomerDetails({ user: user, UserDetails: getAllCustomerDetails })
        
                .then(() => resolve({ "status": 200, "message": "request sent Successfully" }))
        
                .catch(err => {
        
                    if (err.code == 401) {
        
                        reject({ "status": 401, "message": 'Request Already sent!' });
        
                    } else {
                        console.log("error occurred" + err);
        
                        reject({ "status": 500, "message": 'Internal Server Error !' });
                    }
                });
            });
        }