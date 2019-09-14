import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(private library: LibraryService) { }
 
  books:any;

  ngOnInit() {
    this.library.getBooks().subscribe(data=>{
      console.log(data);
      this.books = data;
    })
  }

  deleteBook(bktitle){
    this.library.deleteBook(bktitle).subscribe(data=>{
      this.books = data;
    })
  }
}
