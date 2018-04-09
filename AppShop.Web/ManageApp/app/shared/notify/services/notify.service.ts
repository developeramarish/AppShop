import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material';

import { NotifyComponent } from './../components/notify/notify.component';
import { NotifyStyle, NotifyStyleIcon, NotifyType } from './../';

@Injectable()
export class NotifyService{

    constructor(private snackBar: MatSnackBar) {}

    show(content: string, style: NotifyType = NotifyType.Classic): void{
        let notifyType = NotifyType[style]; 

        this.snackBar.openFromComponent(NotifyComponent, { 
            duration: 5000,
            panelClass: NotifyStyle[notifyType],
            data: {
                content: content,
                icon: NotifyStyleIcon[notifyType]
            }
        })
    }

}