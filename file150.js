// Promise

const promise = new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Something Went Wrong");
    }
});

promise
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });