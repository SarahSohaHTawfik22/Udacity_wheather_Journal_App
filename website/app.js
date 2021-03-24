/* Global Variables */

// Create a new date instance dynamically with JS
let d22 = new Date();
let newDate = d22.getMonth()+ 1 +'.'+ d22.getDate()+'.'+ d22.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);
let zipCode = '';
const APIkey = '&appid=7c4e442212ba72fcd788703c751089e5';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&zip=';
//chaining el functions
//chaining el functions
console.log(baseURL);
console.log(APIkey);
function performAction(e) {
    const feelings = document.getElementById('feelings').value;
console.log(feelings);
    zip_Code = document.getElementById('zip').value;
    if (zip_Code != '') {
        console.log(zip_Code);
        if (zip.length === 0 || feelings.length === 0) {
            alert("Please fill up all values fields !");
            return;
          }
        getData(baseURL, zip_Code, APIkey)
            .then(function (data) {
                console.log(data);
                postData('/Weatheradding', { temperature:data.main.temp, feels: feelings, date: newDate })
            })
            .then(function () {
                updateUI();
            }
            )
    }
}


//GET req for API
// make a GET request to the OpenWeatherMap API
const getData = async (baseURL,zip_Code, APIkey) => {
    const response = await fetch(baseURL + zip_Code + APIkey)
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

// update ui
const updateUI = async () => {
    const request = await fetch('/Alldataa');
    try {
        const getalldata = await request.json();
        document.getElementById('date').innerHTML = getalldata.date;
        document.getElementById('temp').innerHTML = getalldata.temperature;
        document.getElementById('content').innerHTML = getalldata.feels;
    } catch (error) {
        console.log('err', error);
    }
}
//POST req to server

const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('err', error);
    }
}
/*function performAction(e) {
    const feelings = document.getElementById('feelings').value;
console.log(feelings);
    zip_Code = document.getElementById('zip').value;
    if (zip_Code != '') {
        console.log(zip_Code);
        if (zip.length === 0 || feelings.length === 0) {
            alert("Please fill up all values fields !");
            return;
          }
        getData(baseURL, zip_Code, APIkey)
            .then(function (data) {
                console.log(data);
                postData('/Weatheradding', { temperature:data.main.temp, feels: feelings, date: newDate })
            })
            .then(function () {
                updateUI();
            }
            )
    }
}*/
/*function performAction(e) {
    const feelings = document.getElementById('feelings').value;
console.log(feelings);
    zip_Code = document.getElementById('zip').value;
    if (zip_Code != '') {
        console.log(zip_Code);
        if (zip.length === 0 || feelings.length === 0) {
            alert("Please fill up all values fields !");
            return;
          }
        getData(baseURL, zip_Code, APIkey)
            .then(function (data) {
                console.log(data);
                postData('/Weatheradding', { temperature:data.main.temp, feels: feelings, date: newDate })
            })
            .then(function () {
                updateUI();
            }
            )
    }
}*/