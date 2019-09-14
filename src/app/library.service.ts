import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get("https://libappserver.herokuapp.com/books/getbooks");
  }

  getBookById(bid){
    return this.http.get("https://libappserver.herokuapp.com/books/" + bid);
  }

  getAuthors(){
    return this.http.get("https://libappserver.herokuapp.com/authors/getauthors");
  }

  getAuthorById(aid){
    return this.http.get("https://libappserver.herokuapp.com/authors/" + aid);
  }

  deleteBook(dbid){
    return this.http.get("https://libappserver.herokuapp.com/books/delete/" + dbid);
  }

  editBook(data){
    return this.http.post("https://libappserver.herokuapp.com/books/edit/", data)
  }

  addNewBook(book){
    return this.http.post("https://libappserver.herokuapp.com/books/add/", book)
  }

  addUser(user){
    return this.http.post("https://libappserver.herokuapp.com/signup", user)
  }

  getUser(user){
    return this.http.post("https://libappserver.herokuapp.com/login", user);
  }

  checkUsernameEmail(user){
    return this.http.get("https://libappserver.herokuapp.com/signup/"+user['username'])
  }

}
