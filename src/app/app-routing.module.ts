import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthordetailComponent } from './authordetail/authordetail.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { EditbookComponent } from './editbook/editbook.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from "./main/main.component";


const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"main", component: MainComponent, children:[
    {path:"home", component: HomeComponent},
    {path:"books", component: BooksComponent},
    {path:"authors", component: AuthorsComponent},
    {path:"addbook", component: AddbookComponent },
    {path:"editbook/:bid", component: EditbookComponent},
    {path:"updatebook", component: UpdatebookComponent},
    {path:"books/:bid", component: ReadmoreComponent},
    {path:"authors/:aid", component: AuthordetailComponent}
  ]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
