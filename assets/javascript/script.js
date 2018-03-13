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
let wins = 0;
let loses = 0;
let choice = true;
let turn = 1;

$("#submit").on("click", function () {
    event.preventDefault();
    let player = $("#inputUser").val();
    let player2 = $("#inputUser2").val();
    console.log(player);

    database.ref().push({
        turn : turn, 
        players : {
            player1 : {
                name: player,
                choice: choice,
                wins: wins,
                loses: loses,
            },
            player2 : {
                name: player,
                choice: choice,
                wins: wins,
                loses: loses,
            },
        },
    });
});

database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().player);
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

