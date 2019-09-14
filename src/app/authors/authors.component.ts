import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;

  constructor(private library: LibraryService) { }

  ngOnInit() {
    this.library.getAuthors().subscribe(data=>{
      this.authors = data;
    })
  }

}
