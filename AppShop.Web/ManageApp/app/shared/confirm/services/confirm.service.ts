import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from '@angular/material';

import { ConfirmButton } from './../models/confirm-button';
import { ConfirmComponent } from './../components/confirm/confirm.component';

@Injectable()
export class ConfirmService{

    constructor(private dialog: MatDialog) {}

    show(title: string, buttonClass: ConfirmButton = ConfirmButton.Primary): Observable<boolean>{
        return this.dialog.open(ConfirmComponent, { 
            data: {
                title: title,
                buttonClass: buttonClass
            }
        }).afterClosed();
    }

}