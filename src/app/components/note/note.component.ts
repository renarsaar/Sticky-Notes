import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {
  noteList: Array<Note> = JSON.parse(localStorage.getItem("noteList") || "[]");
  newNoteTitle: string = "";
  newNoteText: string = "";
  currentNoteForEdit: Note | null = null;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('noteList') === null || localStorage.getItem('noteList') === "[]") {
      this.noteList.push(new Note(1, "Daily plans", "- Pick up kids from school\n- Dinner\n- Continue reading a book\n- Watch some TV"));
      this.noteList.push(new Note(2, "Meal plan", "Lasagne\nLemon Chicken\nFish & Veggies\nPizza\n"));
      this.noteList.push(new Note(3, "Work", "Call Trish over zoom @ 9 am 1029 8397 321"));
      this.noteList.push(new Note(4, "Grocery list", "- Milk\n- Bread\n- Apples\n- Coca Cola\n- Milk\n- Pasta\n - Lemons\n- Meat\n- Ham\n- Tomato sauce\n- Cheese\n- Broccoli\n"));
      this.noteList.push(new Note(5, "Coding", "Finish my Angular project, push the code to Github"));
      this.noteList.push(new Note(6, "University", "Publish Journal's instructions, check for grammar and syntax errors"));
      this.noteList.push(new Note(7, "Goal 1", "Increase Online presence\n\n1. Add a blog to the company website by 05/05/2022\n2. Create a company Facebook page by 06/06/2022"));
      this.noteList.push(new Note(8, "Goal 2", "Improve website engagement\n\nObjectives\n1. Post a blog article every Monday and Thursday by 10:00 am starting on 03/03/2022"));
      this.noteList.push(new Note(9, "Due Tomorrow", "August P&L statement\nPowerpoint on benefits about the new strategies"));
      this.noteList.push(new Note(10, "Email", "Reply to John\n Arrange a company meeting"));

      this.updateLocalStorage();
    }
  }

  onAddNote(): void {
    let newNote = new Note(this.getNextId(), "", "");

    this.noteList.push(newNote);

    this.currentNoteForEdit = newNote;

    this.updateLocalStorage();
  }

  onDeleteNote(id: number): void {
    this.noteList = this.noteList.filter((note: Note) => note.id !== id);

    this.updateLocalStorage();
  }

  onEditNote(note: Note): void {
    this.noteList.map((currentNote: Note) => {
      if (currentNote.id === note.id) {
        currentNote.title = note.title;
        currentNote.text = note.text;

        this.currentNoteForEdit = null;
      }
    })

    this.updateLocalStorage();
  }

  private getNextId(): number {
    let nextId = 0;

    if (this.noteList.length > 0) {
      nextId = this.noteList[this.noteList.length - 1].id;
      nextId++;
    }

    return nextId;
  }

  private updateLocalStorage(): void {
    localStorage.setItem('noteList', JSON.stringify(this.noteList));
  }
}
