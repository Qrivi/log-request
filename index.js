const port = process.env.PORT || 5000 
const logger = require('./node_modules/log-requests/logger')({ port})

console.log(`Server will listen on port ${port}`);
