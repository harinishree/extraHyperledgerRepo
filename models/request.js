'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequestSchema = mongoose.Schema({
    requestid: String,
    status: String,
    InvolvedParties: Array,
    transactionString: Object,
});

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://Jay25:rpqb123@ds141464.mlab.com:41464/smob', { useMongoClient: true });


module.exports = mongoose.model('Request', RequestSchema);