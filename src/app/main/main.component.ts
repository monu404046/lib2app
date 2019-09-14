import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  user;

  mainNavs = [
    {link:"/main/home", title:"Home"}, 
    {link:"/main/books", title:"Books"}, 
    {link:"/main/authors", title:"Authors"},
    {link:"/main/addbook", title:"Add Books"},
    {link:"/main/updatebook", title:"Edit/Delete Books"}
  ]

  ngOnInit() {
    this.user = localStorage.getItem("Username");
  }

  logout(){
    localStorage.removeItem("Username");
    this.router.navigateByUrl("");
  }
}
