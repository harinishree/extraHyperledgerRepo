'use strict';
var request = require('../models/request');
var bcSdk = require('../invoke');
var user = 'dhananjay.p';

//exports is used here so that newRequest can be exposed for router and blockchainSdk file.
exports.getStatiscialData = (requestid,transactionString) => {
    return new Promise((resolve, reject) => {

     console.log("entering into newRequest function.....!")



     const getStatisticalData = ({ 
        requestid:requestid,
        transactionString:transactionString
        
    }); 

    bcSdk.getStatiscialData({ user: user, UserDetails: getStatisticalData })
    
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
        

       