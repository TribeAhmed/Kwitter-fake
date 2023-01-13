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

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send()
{
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push ({
            name:user_name,
            message:msg,
            like:0

      })     
      document.getElementById("msg").value = "";      

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
