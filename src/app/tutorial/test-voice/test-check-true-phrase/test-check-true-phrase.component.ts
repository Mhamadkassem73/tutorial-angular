import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from 'app/tutorial/services/snack-bar.service';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-test-check-true-phrase',
  templateUrl: './test-check-true-phrase.component.html',
  styleUrls: ['./test-check-true-phrase.component.scss']
})
export class TestCheckTruePhraseComponent extends Shared implements OnInit {

  constructor(
    private _snackBarService: SnackBarService,
    private _router: Router
  ) { super(); }

  ngOnInit(): void {
  }
  question = "ما هي الكلمة التي تبدأ بحرف ال ب";


  phrases = [
    { text: 'This is a true statement', isChecked: false, istrue: true },
    { text: 'This is a false statement', isChecked: false, istrue: false },
    // Add more phrases as needed
  ];

  onCheckboxChange(phrase: any) {
    phrase.isChecked = !phrase.isChecked;
  }
  goToNextPage() {

console.log(this.phrases);
var trueAnswer=true;
this.phrases.forEach(phrase => {
  if(phrase.isChecked != phrase.istrue )
  trueAnswer=false;
});

    if (trueAnswer) {
      this._snackBarService.snackBarPopup("الاجابة صحيحة", "ok");
      this._router.navigateByUrl('/test/test-final');

    }
    else {
      this._snackBarService.openConfirmationDialog("الاجابة غير صحيحة", "الاجابة غير صحيحة", "confirm", "go to next").then(response => {
        if (response == 'confirmed') {
          this._router.navigateByUrl('/test/test-final');

        }
      });

    }
  }
}