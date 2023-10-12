import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from 'app/tutorial/services/snack-bar.service';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-test-count',
  templateUrl: './test-count.component.html',
  styleUrls: ['./test-count.component.scss']
})
export class TestCountComponent extends Shared implements OnInit {

  constructor(
    private _snackBarService:SnackBarService,
    private _router:Router
  ) {super(); }

  ngOnInit(): void {
  }
question="ما هي الكلمة التي تبدأ بحرف ال ب";
imageURL="http://192.168.16.109:8000/levels/1/1/2/image/appleCount.jpg";
count=6;
imageWidth: number = 10; // Set the width in pixels
imageHeight: number = 10; // Set the height in pixels




  goToNextPage(number :Number)
  {
    if(this.count== number)
    {
      this._snackBarService.snackBarPopup("bravo!!","ok");
      this._router.navigateByUrl('/test/test-true-phrase');
    }
   else
    {
      this._snackBarService.openConfirmationDialog("الاجابة غير صحيحة","الاجابة الصحيحة هي  " +this.count,"confirm","go to next").then(response => {
        if(response =='confirmed' )
        {
          this._router.navigateByUrl('/test/test -true-phrase');
        }
      });
    }
  }
}