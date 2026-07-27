// Fetch API

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });