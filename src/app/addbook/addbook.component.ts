import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { LibraryService } from "../library.service";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://library-server-assignment.herokuapp.com/books/add';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private library: LibraryService) { }

  book = {
    bookTitle:'',
    author:'',
    genre:'',
    description:'',
    price:null,
  };
  file;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'bimage' });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  addBook(){
    console.log(this.book);
    this.book['urlToImage'] = this.file.slice(12);
    this.library.addNewBook(this.book).subscribe();
    this.router.navigateByUrl("/main/books");
  }
}
