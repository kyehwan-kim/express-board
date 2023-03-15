// 전체 패키지 부분
const express = require('express');
const cors = require('cors');

// 서버에서 매우 중요한 것들을 선언하는 파트
const app = express();
const PORT = 4000;

// router 코드들
app.use(cors());
app.set('view engine', 'ejs');

// body-parser를 위한 코드 2개
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mainRouter = require('./routes');
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');

// 서버 설정 부분
app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);
// app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

// 문제가 있을 때 서버가 켜지면 안되기 때문에 서버를 실행하는 코드는 최하단에 있다.
app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 실행 중입니다!`);
});
