// //buttons 
let about = document.getElementById('about');
let project = document.getElementById('project');
let skills = document.getElementById('skills');

// //divs - content
// let aboutInfo = document.getElementById('about-info');
// let projectInfo = document.getElementById('project-info');
// let skillsInfo = document.getElementById('skills-info');

about.addEventListener('click', showAboutMe);
project.addEventListener('click', showProject);
skills.addEventListener('click', showSkills);

// //div - buttons
// aboutInfo.style.display = "none";
// projectInfo.style.display = "none";
// skillsInfo.style.display = "none";

function showAboutMe () {
    // aboutInfo.style.display = "block";
    // projectInfo.style.display = "none";
    // skillsInfo.style.display = "none";
    // const BITCOIN_URL = "https://jsonplaceholder.typicode.com/todos/";
    // fetch(BITCOIN_URL)
    //     .then(response => response.json())
    //     .then(function (data) { 
    //         console.log(data);
    //     });
    //.then(responseJson => console.log(responseJson));

    fetch('https://jsonplaceholder.typicode.com/postses').then(function (response) {
	// The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

function showProject() {
    
    let sayHello = new Promise(function (resolve, reject) {

        // In 5 seconds, resolve the Promise.
        // Pass along "Hi, universe!" to any callback methods
        setTimeout(function () {
            resolve('Hi, universe!');
        }, 5000);

    });

    console.log(sayHello);
}

function showSkills() {
    // aboutInfo.style.display = "none";
    // projectInfo.style.display = "none";
    // skillsInfo.style.display = "block";
    console.log("this is for asycn");
}

