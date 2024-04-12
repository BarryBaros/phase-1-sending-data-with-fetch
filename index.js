// // Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json",
//     },

//     body: JSON.stringify({
//       dogName: "Byron",
//         dogBreed: "Poodle",
// }),
// };
// fetch("http://localhost:3000/dogs", configurationObject);


// // SECOND METHOD
// const formData = {
//       dogName: "Byron",
//         dogBreed: "Poodle",
// }

// const configurationObject = {
//     // method: "POST",
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json",
//     },

//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(function (response) {
//     return response.json();
// })
//     .then(function (object) {
//         console.log(object);
//     })

// // Include .catch to help handle erros (In this case, we forgot method:"POST")
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });



// // THIRD METHOD
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// });


// Challenge
// Function to submit user data to the server
function submitData(name, email) {
    // Creating an object to hold the user data
    const formData = {
        name: name,
        email: email,
    }

    // Configuration object for the fetch request
    const configurationObject = {
        method: "POST", // HTTP method for the request
        headers: {
            "Content-Type": "application/json", // Set the content type to JSON
            "Accept": "application/json" // Specify the accepted content type
        },
        body: JSON.stringify(formData) // Convert user data to JSON string
    };

    // Sending the POST request to the server
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) { // Handling the response from the server
            return response.json(); // Parse the response body as JSON
        })
        .then(function (object) { // Handling the parsed JSON data
            document.body.innerHTML += object.id; // Displaying the ID in the HTML body
        })
        .catch(function (error) { // Handling any errors that occur during the request
            document.body.innerHTML += error.message; // Displaying the error message in the HTML body
        });
}

