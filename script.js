let CreateNotesBtn = document.getElementById("CreateNotesBtn");
let NotesHolder = document.querySelector(".NotesHolder");
let ValueHolderAll = document.querySelectorAll(".ValueHolder");
const STORAGE_KEY = "Notes_v1";

let DltBtn = document.querySelectorAll(".DltNoteBtn");
NotesHolder.addEventListener("click", (e) => {
  const detBtn = e.target.closest(".DltNoteBtn");
  if (!detBtn) return;
  const Wrapper = detBtn.closest(".ValueHolder");
  if (!Wrapper) return;
  Wrapper.remove();
  saveData();
});

NotesHolder.addEventListener("input", (e) => {
  let Edittabele = e.target.closest(".InputBox");
  if (!Edittabele) return;
  console.log(e.target);

  // saveDataDebounced();
});

CreateNotesBtn.addEventListener("click", () => {
  createNote("");
});

function createNote(text = "") {
  CreateNotesBtn.addEventListener("click", () => {
    let id = Date.now().toString();

    let ValueHolder = document.createElement("div");
    ValueHolder.className = "ValueHolder";
    ValueHolder.id = id;

    let p = document.createElement("p");
    p.className = "InputBox";
    p.setAttribute("contenteditable", true);
    p.textContent = text;

    let DltImg = document.createElement("img");
    DltImg.className = "DltNoteBtn";
    DltImg.setAttribute("src", "notes-app-img/images/delete.png");
    DltImg.style.cursor = "pointer";

    ValueHolder.append(p);
    ValueHolder.append(DltImg);
    NotesHolder.append(ValueHolder);

    p.focus();

    saveData();
    // saveDataDebounced();
  });
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, NotesHolder.innerHTML);
  } catch (err) {
    alert("Save failed", err);
  }
}

function GetData() {
  let Saved = localStorage.getItem(STORAGE_KEY);
  if (!Saved) return;
  NotesHolder.innerHTML = Saved;
}

GetData();
