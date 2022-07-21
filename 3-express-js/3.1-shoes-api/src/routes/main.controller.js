const express = require('express');

const dummyRouter  = require('./dummyes/index');
const shoesRouter = require('./shoes/index');
// const customersRouter = require('./customers/index');

const routerApi = (app) => {
    app.use('/dummy', dummyRouter);
    app.use('/shoes', shoesRouter);
    // router.use('/customers', customersRouter);
};

module.exports = routerApi;