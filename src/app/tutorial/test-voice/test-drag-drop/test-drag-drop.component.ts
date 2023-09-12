import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Shared } from 'app/tutorial/shared/shared';
import { Router } from '@angular/router';
import { SnackBarService } from 'app/tutorial/services/snack-bar.service';
@Component({
  selector: 'app-test-drag-drop',
  templateUrl: './test-drag-drop.component.html',
  styleUrls: ['./test-drag-drop.component.scss'],
})



export class TestDragDropComponent extends Shared implements OnInit {

  constructor(
    private _router:Router,
    private _snackBarService:SnackBarService,
  ) { super(); }

  ngOnInit(): void {
  }
question="رتب الكلمات التالية";
  data = [
    { value: 'الله', order: 4 },
    { value: 'عليكم', order: 2 },
    { value: 'و بركاته', order: 5 },
    { value: 'السلام', order: 1 },
    { value: 'و رحمة', order: 3 },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  goToNextPage(): void {
    console.log(this.data);
    var test = false;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].order != (i + 1)) {
        test=true;
      }
    }

    if(test===true)
    {
      this._snackBarService.openConfirmationDialog("ttile","msg","confirm","go to next").then(response => {
        if(response =='confirmed' )
        {
          this._router.navigateByUrl('/test/test-select-one-option');
          
        }
      });
    }
   else
    {
      this._router.navigateByUrl('/test/test-select-one-option');

    }
  }
}
