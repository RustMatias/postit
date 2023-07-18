import { Injectable } from '@angular/core';
import { Column } from '../interfaces/column';
import { Post } from '../interfaces/post';
import { DataLS } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class TestAppService {
  private index = 1
  private columns: Column[] = [{
    name:"to do",
    post: [{
      name: "Example ",
      description: "this is an example text",
      color: "#ebca93",
      id: 1
    }]
  },{
    name:"In progres",
    post: []
  },{
    name:"Done",
    post: []
  }]

  get getColumns(): Column[]{
    return [...this.columns]
  }


  constructor() {
    this.loadLocalStorage()
   }


 
  createPostit(query:string){
    this.index += 1
    let newPost: Post = {
      name: "New post-It",
      description: "description",
      color: "#ebca93",
      id: this.index
    }

    this.columns.forEach(col => {
      console.log(col.name)
      console.log(query)
      console.log("")
      if(col.name == query){
        col.post.push(newPost);
      }
    });
  }

  save(){
    let data: DataLS = {
      index: this.index,
      columns: this.columns}
    localStorage.setItem('data', JSON.stringify(data))
  }

  private loadLocalStorage(){
    if(localStorage.getItem('data')){
      let data:DataLS = JSON.parse(localStorage.getItem('data')!)
      this.index = data.index
      this.columns = data.columns
      console.warn("data loaded")
    }else{
      console.warn("no data founded")
    }
  }


  edit(edit: Post){
    this.columns.forEach(columns => {
        columns.post.forEach(post => {
          if(post.id == edit.id){
            post.color = edit.color
            post.description = edit.description
            post.name = edit.name
          }
        });
    });
  }



  deletePostit(p:Post){
    let column: Column 
    this.columns.forEach(column => {
      column.post.forEach(post => {
        if(post.id == p.id){
          let index = column.post.indexOf(post)
          column.post.splice(index, 1)
      }});
    });
    this.save()
  }

}
