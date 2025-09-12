let ValueHolderAll = document.querySelectorAll(".ValueHolder");
let CreateNotesBtn = document.getElementById("CreateNotesBtn");
let NotesHolder = document.querySelector(".NotesHolder");
CreateNotesBtn.addEventListener("click", () => {
  let id = Date.now();
  console.log();

  let ValueHolder = document.createElement("div");
  ValueHolder.className = "ValueHolder";
  ValueHolder.id = id;

  let DltImg = document.createElement("img");
  DltImg.className = "DltNoteBtn";
  DltImg.id = id;
  DltImg.setAttribute("src", "notes-app-img/images/delete.png");

  let p = document.createElement("p");
  p.setAttribute("contenteditable", true);
  p.className = "InputBox";

  ValueHolder.append(p);
  ValueHolder.append(DltImg);

  NotesHolder.append(ValueHolder);


});

