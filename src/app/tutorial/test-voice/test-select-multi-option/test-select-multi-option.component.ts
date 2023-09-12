import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from 'app/tutorial/services/snack-bar.service';
import { Shared } from 'app/tutorial/shared/shared';

@Component({
  selector: 'app-test-select-multi-option',
  templateUrl: './test-select-multi-option.component.html',
  styleUrls: ['./test-select-multi-option.component.scss']
})
export class TestSelectMultiOptionComponent extends Shared implements OnInit {

  constructor(
    private _router: Router,
    private _snackBarService: SnackBarService,
  ) { super(); }

  ngOnInit(): void {
  }
  question = "ما هي الكلمات التي تبدأ بحرف ال ب";
  data = [
    { value: 'منزل', istrue: false, selected: false },
    { value: 'باب', istrue: true, selected: false },
    { value: 'بركة', istrue: true, selected: false },
    { value: 'وجبة', istrue: false, selected: false }];
  selectedTeam = { value: '----------------------', istrue: "false" };
  minTableHeight: string = '20vh'; // Set to 50% of the viewport height

  toggleSelection(option: any): void {
    option.selected = !option.selected;
  }
  goToNextPage() {
    var test = false;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].selected != this.data[i].istrue) {
        test = true;
      }
    }

    if (test === true) {

      this._snackBarService.openConfirmationDialog("ttile", "msg", "confirm", "go to next").then(response => {
        if (response == 'confirmed') {
          this._router.navigateByUrl('/test/test-multi-connect');

        }
      });

    }
    else {
      this._router.navigateByUrl('/test/test-multi-connect');

    }
  }
}