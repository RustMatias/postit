import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestAppService } from '../../services/test-app.service';
import { Column } from '../../interfaces/column';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css']
})
export class TestAppComponent {




    get columns(): Column[]{
      return this.TestAppService.getColumns
    }

    constructor(
      private TestAppService: TestAppService
    ){}


    createPostit(column:string){
      this.TestAppService.createPostit(column)
      this.TestAppService.save()
    }
}
