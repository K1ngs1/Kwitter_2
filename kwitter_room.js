// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAJroz87lGpq0e1CSIdeQIt_ETF2WinMK4",
      authDomain: "kwitter-234af.firebaseapp.com",
      databaseURL: "https://kwitter-234af-default-rtdb.firebaseio.com",
      projectId: "kwitter-234af",
      storageBucket: "kwitter-234af.appspot.com",
      messagingSenderId: "249441244729",
      appId: "1:249441244729:web:5e955434cebc23e6009fe8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      //ADD YOUR FIREBASE LINKS HERE
    username=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

    function addRoom(){
          room = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room).update({
                purpose: "adding room name"
          });
          localStorage.setItem("roomname", room);
          window.location = "kwitter_page.html";
          
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
