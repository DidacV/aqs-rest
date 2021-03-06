'use strict';

exports.constants = {
  PORT: process.env.PORT || 3000,
  SERVER_TITLE: 'Attendance System REST Api',
  JWT_SECRET: process.env.JWT_SECRET || "TEST",
  EXPIRATION_PERIOD: '3h'
}

exports.restHapiConfig = {
  appTitle: this.constants.SERVER_TITLE,
  mongo: {
    // CHANGE THIS TO THE MONGODB URI
    // For heroku, we need to pass process.env.MONGOLAB_URI
    // For test, we can use 'mongodb://localhost/att-rest'
    URI: process.env.MONGOLAB_URI
  },
  server: {
    connection: {
      port: this.constants.PORT
    }
  },
  enableAuditLog: true,
  auditLogTTL: "1d",
  enableCreatedAt:false,
  enableUpdatedAt:false,
  enableDeletedAt:false,
  enableCreatedBy:false,  
  enableUpdatedBy:false,
  enableDeletedBy:false,
  absoluteModelPath: true,
  absoluteApiPath: true,
  modelPath: __dirname + '/server/models',
  apiPath: __dirname + '/server/api',
}