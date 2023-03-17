const connection = require('./dbConnect');

const userDB = {
  // 중복회원찾기
  userCheck: (userID, cb) => {
    connection.query(
      `SELECT * FROM mydb.user WHERE USERID = '${userID}';`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },

  // 회원 가입 하기
  registerUser: (newUser, cb) => {
    connection.query(
      `INSERT INTO mydb.user (USERID, PASSWORD) VALUES ('${newUser.id}', '${newUser.password}');`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },
};

module.exports = userDB;
