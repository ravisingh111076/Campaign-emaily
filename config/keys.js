
//cam00gzIshaan
//mongodb+srv://cam00gz:<password>@campaign-emaily.tktdp.mongodb.net/<dbname>?retryWrites=true&w=majority
//keys.js - figure out
if(process.env.NODE_ENV === 'production') {
  //we are in production
    module.exports = require('./prod');
}else {
  module.exports = require('./dev');
  // we are in development - return the dev keys
}
