let CreateNotesBtn = document.getElementById("CreateNotesBtn");
let NotesHolder = document.querySelector(".NotesHolder");
let ValueHolderAll = document.querySelectorAll(".ValueHolder");

function deleteFeature() {
  let DltBtn = document.querySelectorAll(".DltNoteBtn");

  NotesHolder.addEventListener("click", (e) => {
    const detBtn = e.target.closest(".DltNoteBtn");
    if (!detBtn) return;
    const Wrapper = detBtn.closest(".ValueHolder");
    if (!Wrapper) return;
    Wrapper.remove();
    SaveData();
  });
}

NotesHolder.addEventListener("input", (e) => {
  let Edittabele = e.target.closest(".InputBox");
  if (!Edittabele) return;
});

CreateNotesBtn.addEventListener("click", () => {
  createNote("");
});
function createNote(){

  CreateNotesBtn.addEventListener("click", () => {
    let id = Date.now().toString();
  
    let ValueHolder = document.createElement("div");
    ValueHolder.className = "ValueHolder";
    ValueHolder.id = id;
  
    let p = document.createElement("p");
    p.className = "InputBox";
    p.setAttribute("contenteditable", true);
  
    let DltImg = document.createElement("img");
    DltImg.className = "DltNoteBtn";
    DltImg.setAttribute("src", "notes-app-img/images/delete.png");
    DltImg.style.cursor = "pointer";
  
    ValueHolder.append(p);
    ValueHolder.append(DltImg);
    NotesHolder.append(ValueHolder);
  
    p.focus();
  
    deleteFeature();
    SaveData();
  });
}

function SaveData() {
  localStorage.setItem("Notes", NotesHolder.innerHTML);
}
function GetData() {
  NotesHolder = localStorage.getItem("Notes");
}
