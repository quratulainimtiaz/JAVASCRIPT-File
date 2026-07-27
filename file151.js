// Promise Chaining

Promise.resolve(5)
    .then(function (num) {
        return num * 2;
    })
    .then(function (result) {
        console.log(result);
    });