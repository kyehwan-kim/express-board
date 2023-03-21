const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://clon0306:vhksvhks88!@cluster0.kuggtx6.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// try, catch 사용 구문

async function main() {
  try {
    await client.connect();
    const member = client.db('kdt5').collection('member');

    await member.deleteMany({});
    await member.insertMany([
      { name: '장경은', age: 27 },
      { name: '송수빈', age: 26 },
      { name: '박지원', age: 26 },
      { name: '윤제', age: 26 },
      { name: '김계환', age: 36 },
    ]);
    await member.insertOne({ name: '최두루', age: 32 });
    await member.deleteOne({ name: '윤제' });
    await member.updateOne(
      { name: '최두루', age: 32 },
      { $set: { name: '윤제', age: 26 } },
    );

    const findCursor = member.find({ age: { $gte: 27 } });
    const dataArr = await findCursor.toArray();
    console.log(dataArr);
  } catch (err) {
    console.error(err);
  }
}

main();

// Callback 함수 이용
// client.connect((err) => {
//   const member = client.db('kdt5').collection('member');

//   member.deleteMany({}, (deleteManyErr, deleteManyResult) => {
//     if (deleteManyErr) throw deleteManyErr;
//     // console.log(deleteManyResult);

//     member.insertMany(
//       [
//         { name: '장경은', age: 27 },
//         { name: '송수빈', age: 26 },
//         { name: '박지원', age: 26 },
//         { name: '윤제', age: 26 },
//         { name: '김계환', age: 36 },
//       ],
//       (insertManyErr, insertManyResult) => {
//         if (insertManyErr) throw insertManyErr;

//         member.insertOne(
//           {
//             name: '최두루',
//             age: 29,
//           },
//           (insertOneErr, insertOneResult) => {
//             if (insertOneErr) throw insertOneErr;

//             member.deleteOne(
//               { name: '윤제' },
//               (deleteOneErr, deleteOneResult) => {
//                 if (deleteOneErr) throw deleteOneErr;

//                 member.updateOne(
//                   { name: '최두루', age: 29 },
//                   { $set: { name: '윤제', age: 26 } },
//                   (updateOneErr, updateOneResult) => {
//                     if (updateOneErr) throw updateOneErr;

//                     const findCursor = member.find({ age: { $gte: 27 } });

//                     findCursor.toArray((toArrErr, toArrData) => {
//                       if (toArrErr) throw toArrErr;
//                       console.log(toArrData);
//                     });
//                   },
//                 );
//               },
//             );
//           },
//         );
//       },
//     );
//   });
// });
