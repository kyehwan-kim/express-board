const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://clon0306:vhksvhks88!@cluster0.kuggtx6.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// insertOne
// client.connect((err) => {
//   // client를 불러와 kdt5 라는 스키마를 생성 후 collection으로 테이블생성
//   const test = client.db('kdt5').collection('test');

//   // {}를 비운 이유는 모든 데이터를 삭제한다는 뜻 (조건, 콜백함수))
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertOne(
//       {
//         name: 'pororo',
//         age: 5,
//       },
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// insertMany
// client.connect((err) => {
//   // client를 불러와 kdt5 라는 스키마를 생성 후 collection으로 테이블생성
//   const test = client.db('kdt5').collection('test');

//   // {}를 비운 이유는 모든 데이터를 삭제한다는 뜻 (조건, 콜백함수))
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// deleteOne 쿼리
// client.connect((err) => {
//   // client를 불러와 kdt5 라는 스키마를 생성 후 collection으로 테이블생성
//   const test = client.db('kdt5').collection('test');

//   // {}를 비운 이유는 모든 데이터를 삭제한다는 뜻 (조건, 콜백함수))
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         test.deleteOne({ name: 'crong' }, (deleteOneErr, deleteOneResult) => {
//           if (deleteOneErr) throw deleteOneErr;
//           console.log(deleteOneResult);
//         });
//       },
//     );
//   });
// });

// deleteMany 쿼리
// client.connect((err) => {
//   // client를 불러와 kdt5 라는 스키마를 생성 후 collection으로 테이블생성
//   const test = client.db('kdt5').collection('test');

//   // {}를 비운 이유는 모든 데이터를 삭제한다는 뜻 (조건, 콜백함수))
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//         test.deleteMany(
//           { age: { $gte: 5 } },
//           (deleteManyErr, deleteManyResult) => {
//             if (deleteManyErr) throw deleteManyErr;
//             console.log(deleteManyResult);
//           },
//         );
//       },
//     );
//   });
// });

// updateOne 쿼리
// client.connect((err) => {
//   // client를 불러와 kdt5 라는 스키마를 생성 후 collection으로 테이블생성
//   const test = client.db('kdt5').collection('test');

//   // {}를 비운 이유는 모든 데이터를 삭제한다는 뜻 (조건, 콜백함수))
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//         test.updateOne(
//           { name: 'loopy' },
//           { $set: { name: '루피' } },
//           (updateErr, updateResult) => {
//             if (updateErr) throw updateErr;
//             console.log(updateResult);
//           },
//         );
//       },
//     );
//   });
// });

// updateMnay 쿼리
// client.connect((err) => {
//   // client를 불러와 kdt5 라는 스키마를 생성 후 collection으로 테이블생성
//   const test = client.db('kdt5').collection('test');

//   // {}를 비운 이유는 모든 데이터를 삭제한다는 뜻 (조건, 콜백함수))
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//         test.updateMany(
//           { age: { $gte: 5 } },
//           { $set: { name: '5살 이상인 친구들' } },
//           (updateErr, updateResult) => {
//             if (updateErr) throw updateErr;
//             console.log(updateResult);
//           },
//         );
//       },
//     );
//   });
// });

// findOne 쿼리
// client.connect((err) => {
//   // client를 불러와 kdt5 라는 스키마를 생성 후 collection으로 테이블생성
//   const test = client.db('kdt5').collection('test');

//   // {}를 비운 이유는 모든 데이터를 삭제한다는 뜻 (조건, 콜백함수))
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//         test.findOne({ name: 'loopy' }, (findErr, findData) => {
//           if (findErr) throw findErr;
//           console.log(findData);
//         });
//       },
//     );
//   });
// });

// find 쿼리
// client.connect((err) => {
//   // client를 불러와 kdt5 라는 스키마를 생성 후 collection으로 테이블생성
//   const test = client.db('kdt5').collection('test');

//   // {}를 비운 이유는 모든 데이터를 삭제한다는 뜻 (조건, 콜백함수))
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//         const findCursor = test.find({ name: 'loopy' });
//         console.log(findCursor);

//         findCursor.toArray((toArrErr, toArrData) => {
//           if (toArrErr) throw toArrErr;
//           console.log(toArrData);
//         });
//       },
//     );
//   });
// });
