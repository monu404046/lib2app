import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LibraryService } from "../library.service";

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {

  bookid;
  book;
  constructor(private router: ActivatedRoute, private library: LibraryService) { }

  ngOnInit() {
    this.bookid = this.router.snapshot.paramMap.get('bid');
    console.log(this.bookid);
    
    this.library.getBookById(this.bookid).subscribe(data=>{
      console.log(data);
      this.book = data;
    })

  }

}
