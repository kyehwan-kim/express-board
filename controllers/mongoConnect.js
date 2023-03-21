const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://clon0306:vhksvhks88!@cluster0.kuggtx6.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
