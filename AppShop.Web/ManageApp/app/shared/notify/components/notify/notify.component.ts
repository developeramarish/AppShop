import { Component, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from "@angular/material";

@Component({
    selector: 'app-notify',
    templateUrl: './notify.component.html'
})
export class NotifyComponent{ 
    content: string = "";
    icon: string = "";

    constructor(
        private notifyRef: MatSnackBarRef<NotifyComponent>,
        @Inject(MAT_SNACK_BAR_DATA) private data)
    { 
        this.content = data.content;
        this.icon = data.icon;
    }

    close(){
        this.notifyRef.dismiss();
    }
}