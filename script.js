let roomData = {};
let notEating = [];
let submittedRooms = new Set();
let totalChapati = 0;

function submitEating() {
  const room = document.getElementById("room").value;
  const count = parseInt(document.getElementById("count").value);

  if (submittedRooms.has(room)) {
    showPopup("💗 Your room counting is already submitted 🥺\nIf any issue contact mess monitor before 6:30");
    return;
  }

  submittedRooms.add(room);
  roomData[room] = count;
  totalChapati += count;

  showPopup("✅ Room " + room + " submitted successfully!");
}

function submitNotEating() {
  const name = document.getElementById("name").value;
  notEating.push(name);
  showPopup("❌ Marked not eating!");
}

function showPopup(msg) {
  const pop = document.getElementById("popup");
  pop.innerText = msg;
  pop.style.display = "block";
}

function adminLogin() {
  const pass = document.getElementById("adminPass").value;
  if (pass === "admin123") {
    document.getElementById("adminPanel").style.display = "block";
    document.getElementById("totalCount").innerText = totalChapati;
  } else {
    alert("Wrong password");
  }
}