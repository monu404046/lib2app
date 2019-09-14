import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LibraryService } from "../library.service";

@Component({
  selector: 'app-authordetail',
  templateUrl: './authordetail.component.html',
  styleUrls: ['./authordetail.component.css']
})
export class AuthordetailComponent implements OnInit {

  authorid;
  auth;
  constructor(private router: ActivatedRoute, private library: LibraryService) { }

  ngOnInit() {
    this.authorid = this.router.snapshot.paramMap.get('aid');
    console.log(this.authorid);
    
    this.library.getAuthorById(this.authorid).subscribe(data=>{
      this.auth = data;
    })
  }

}
