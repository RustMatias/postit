import { Component, Input,ViewChild,ElementRef } from '@angular/core';
import { Post } from '../../interfaces/post';
import { TestAppService } from '../../services/test-app.service';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent {

  public editable:boolean = false;
  public titletxt:string = ""
  public descriptiontxt:string = ""

  @Input()
  public postit: Post = {
    name: "",
    description: "",
    color: "",
    id: 0
  }

  @ViewChild('color')
  public color! : ElementRef<HTMLInputElement>;
/* 
  @ViewChild('title')
  public title! : ElementRef<HTMLInputElement>; */

  @ViewChild('titleinput')
  public titleInput! : ElementRef<HTMLInputElement>;

/*   @ViewChild('description')
  public description! : ElementRef<HTMLInputElement>; */

  @ViewChild('descriptioninput')
  public descriptionInput! : ElementRef<HTMLInputElement>;

  constructor(
    private testAppService:TestAppService
  ){

  }

  changeColor(){
    this.postit.color = this.color.nativeElement.value
    this.testAppService.edit(this.postit)
    this.testAppService.save()
  }


  editableEnable(){
    console.log(this.postit.id)
    //get the text
  /*   this.titletxt = this.postit.name
    this.descriptiontxt= this.postit.description */

    this.editable = true

    setTimeout(() => {
    //Set the value in inputs
      this.titleInput.nativeElement.value = this.postit.name
      this.descriptionInput.nativeElement.value = this.postit.description

    }, 1);
  }

  edit(){
    this.postit.name = this.titleInput.nativeElement.value
    this.postit.description= this.descriptionInput.nativeElement.value

  }

  editableFinish(){
    this.editable = false
    this.testAppService.save()
    this.testAppService.edit(this.postit)
   /*  setTimeout(() => {
      //Set the value in html
      this.title.nativeElement.innerHTML = this.titletxt 
      this.description.nativeElement.innerHTML = this.descriptiontxt

    
    }, 1); */
    
  }


  deletePostit(){
    this.testAppService.deletePostit(this.postit)
  }
}
