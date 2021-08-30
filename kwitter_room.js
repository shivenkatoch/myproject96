var firebaseConfig = {
      apiKey: "AIzaSyCIuOfTQi863MGRBt6atc91aC-PHaxkWN0",
      authDomain: "kwitter-c0548.firebaseapp.com",
      databaseURL: "https://kwitter-c0548-default-rtdb.firebaseio.com",
      projectId: "kwitter-c0548",
      storageBucket: "kwitter-c0548.appspot.com",
      messagingSenderId: "928839763507",
      appId: "1:928839763507:web:9ff38cb0d9580e80714546"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";
    
function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name -" + Room_names);
       row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
       
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}