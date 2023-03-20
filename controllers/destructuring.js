// // 배열 구조 분해 전
// const arr = [1, 2, 3];

// const one = arr[0];
// const two = arr[1];
// const three = arr[2];

// console.log(one, two, three);

// // 배열 구조 분해 사용
// const [deOne, deTwo, deThree];

// 날짜
// const today = new Date();
// console.log(today);

// const formattedDate = today.toISOString().substring(0, 10);
// console.log(formattedDate);

// const [year, month, day] = formattedDate.split('-');
// console.log(year, month, day);

//  객체 구조 분해 할당
const obj = { firstName: 'KYE HWAN', lastName: 'KIM' };

// const firstName = obj.firstName;
// const lastName = obj.lastName;

// console.log(firstName, lastName);

const { firstName, lastName } = obj;
console.log(firstName, lastName);

const person = {
  name: 'KIM',
  adress: {
    zipcode: '05500',
    city: 'Seoul',
  },
};

const {
  adress: { zipcode, city },
} = person;

console.log(zipcode, city);
