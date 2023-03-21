// const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr);
// console.log(...arr);

// const obj = {
//   name: '김계환',
//   status: 'good',
// };

// console.log(obj);
// console.log({ ...obj });

const hwanData = {
  name: 'kyehwan',
  gender: 'M',
};

const hwanInfo = {
  nickName: '퐌',
  email: 'clon0306@naver.com',
};

const hwan = {
  ...hwanData,
  ...hwanInfo,
};

console.log(hwan);

const arr1 = [1, 2, 3];
const arr2 = ['4', '5', '6'];

const merge = [...arr1, ...arr2];

// console.log(merge);

const hwan2 = {
  name: '계환',
  gender: 'M',
  nickName: '퐌',
  email: 'clon0306@naver.com',
};

const { name, ...restInfo } = hwan2;
console.log(name, restInfo);

const arr3 = [1, 2, 3, 4, 5, 6, 7];
const [first, ...rest] = arr3;
console.log(first, rest);

function spread(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

spread(1, 2, 3, 4, 5, 6, 7, 8);
