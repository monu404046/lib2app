import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { LibraryService } from "../library.service";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://libappserver.herokuapp.com/books/edit';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  bookid;
  book = {
    bookTitle:'',
    author:'',
    genre:'',
    description:'',
    price:0,
  };
  file;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'bimage' });

  constructor(private router: Router, private route: ActivatedRoute, private library: LibraryService) { }

  ngOnInit() {
    this.bookid = this.route.snapshot.paramMap.get('bid');
    console.log(this.bookid);

    this.library.getBookById(this.bookid).subscribe(data=>{
      console.log(data);
      this.book['bookTitle'] = data['bookTitle'];
      this.book['author'] = data['author'];
      this.book['genre'] = data['genre'];
      this.book['description'] = data['description'];
      this.book['price'] = data['price'];
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  updateBook(){
    console.log(this.book);
    this.book['file'] = this.file.slice(12);
    this.library.editBook(this.book).subscribe();
    this.router.navigateByUrl("/main/updatebook");
  }

}
