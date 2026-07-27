// Async & Await

function getData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data Received");
        }, 2000);
    });
}

async function showData() {
    const data = await getData();
    console.log(data);
}

showData();