const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://clon0306:vhksvhks88!@cluster0.kuggtx6.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const test = client.db('kdt5').collection('test');
  test.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw err;
    console.log(deleteResult);
    test.insertOne(
      {
        name: 'hwan',
        nickNmae: 'kyehwan',
      },
      (insertErr, insertResult) => {
        console.log(insertResult);

        client.close();
      },
    );
  });
});
