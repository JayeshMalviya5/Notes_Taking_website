console.log("welcome to notes");
showNotes();
// if user add a Note, add it to localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("n");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("n", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("n");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += ` <div class="noteCard card my-2 mx-2" style="width: 20rem;">

  <div class="card-body">
      <h5 class="card-title">Note no.${index + 1}</h5>
      <p class="card-text">
      ${element}
      </p>
      <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete notes</button>
  </div>
</div>`;
  });
  let notesele = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesele.innerHTML = html;
  }
  else{
    notesele.innerHTML = `No notes available`
  }
}

// function to delete note

function deleteNote(index){
  // console.log(`deleting notes`);

  let notes = localStorage.getItem("n");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index,1);
  localStorage.setItem("n", JSON.stringify(notesObj));
  showNotes();

}

let search= document.getElementById(`searchTxt`);
search.addEventListener('input', function(){
  // console.log("input fired");
  let inputVal= search.value
  let noteCards = document.getElementsByClassName(`noteCard`);
  Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName('p')[0].innerText;
    // console.log(cardTxt);
    if(cardTxt.includes(inputVal)){
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }
  })
})
