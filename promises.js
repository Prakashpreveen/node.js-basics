// let p = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a === 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log(`This is in the then ${message}`);
// }).catch((message) => {
//   console.log(`This is in the catch ${message}`);
// });

const user1 = false;
const user2 = false;
const user3 = true;

function watchPromise() {
  return new Promise((resolve, reject) => {
    if (user1) {
      reject({
        name: "user1",
        message: ":(",
      });
    } else if (user2) {
      reject({
        name: "user2",
        message: ":(",
      });
    } else if (user3) {
      resolve("Welcome User 3 :)");
    } else {
      reject({
        name: "No Active Users",
        message: "No Users are Approved.",
      });
    }
  });
}

watchPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
