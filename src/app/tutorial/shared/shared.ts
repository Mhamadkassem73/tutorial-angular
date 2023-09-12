import { ValidatorFn, AbstractControl } from "@angular/forms";
import { AppComponent } from "app/app.component";
import { periods } from "../constants/parameters";

import { replace } from 'lodash';
import { labels } from "./constants/labels";

export class Shared {

  appUrl: string;
  constructor()
  {
  }
  getLabel( key: string )
  {
      if( labels[ key ]) return labels[ key ];
      return key;
  }

}
