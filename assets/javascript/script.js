// Initialize Firebase
var config = {
    apiKey: "AIzaSyB1WM_l65EpmFj65bAetlwL5DuHrzRWI-I",
    authDomain: "rps-multiplayer-b570b.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-b570b.firebaseio.com",
    projectId: "rps-multiplayer-b570b",
    storageBucket: "rps-multiplayer-b570b.appspot.com",
    messagingSenderId: "171041075082"
};
firebase.initializeApp(config);

let database = firebase.database();
let playersArray = [];
let wins = 0;
let loses = 0;
let choice = "";
let turn = 1;

$("#submit").on("click", function () {
    event.preventDefault();
    for (let i = 0; i < 2; i++) {
        playersArray.push($("#inputUser").val());
        console.log(playersArray);
    }

    // database.ref().push({
    //     turn: turn,
    //     players: {
    //         1: {
    //             name: playersArray[0],
    //             choice: choice,
    //             wins: wins,
    //             loses: loses,
    //         },
    //         2: {
    //             name: playersArray[1],
    //             choice: choice,
    //             wins: wins,
    //             loses: loses,
    //         },
    //     },
    // });
});

// console.log(Player1);
// console.log(Player2);



database.ref().on("child_added", function (snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().player);
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});