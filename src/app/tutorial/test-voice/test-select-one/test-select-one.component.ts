import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from 'app/tutorial/services/snack-bar.service';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-test-select-one',
  templateUrl: './test-select-one.component.html',
  styleUrls: ['./test-select-one.component.scss']
})
export class TestSelectOneComponent extends Shared implements OnInit {

  constructor(
    private _snackBarService:SnackBarService,
    private _router:Router
  ) {super(); }

  ngOnInit(): void {
  }
question="ما هي الكلمة التي تبدأ بحرف ال ب";
  data = [
    {value:'منزل',istrue:"false"},
    {value:'باب',istrue:"true"},
    {value:'وجبة',istrue:"false"}];
  selectedTeam = {value:'----------------------',istrue:"false"};
  minTableHeight: string = '20vh'; // Set to 50% of the viewport height

  onSelected(selected) {
    console.log(selected);
    this.selectedTeam = selected;
  }

  goToNextPage()
  {



    if(this.selectedTeam.istrue== "true")
    {
      this._router.navigateByUrl('/test/test-select-multi-options');

    }
   else
    {
      this._snackBarService.openConfirmationDialog("الاجابة غير صحيحة","الاجابة الصحيحة هي باب ","confirm","go to next").then(response => {
        if(response =='confirmed' )
        {
          this._router.navigateByUrl('/test/test-select-multi-options');
          
        }
      });

    }
  }
}