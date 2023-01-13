
var firebaseConfig = {
      apiKey: "AIzaSyD4tT7Re7B3ZKt2CGERW1mozNEOMVrsKqk",
      authDomain: "kwitter-16321.firebaseapp.com",
      databaseURL: "https://kwitter-16321-default-rtdb.firebaseio.com",
      projectId: "kwitter-16321",
      storageBucket: "kwitter-16321.appspot.com",
      messagingSenderId: "1031209643039",
      appId: "1:1031209643039:web:a318c33a0a89d7e6b0f92a"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() 
{ 
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function add_room()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html";
}