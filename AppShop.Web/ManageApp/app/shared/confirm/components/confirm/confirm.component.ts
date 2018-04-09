import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html'
})
export class ConfirmComponent{ 
    title: string = "";
    buttonClass: string = "button-purple";

    constructor(
        private dialogRef: MatDialogRef<ConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) private data){ 
            this.title = data.title;
            this.buttonClass = data.buttonClass;
        }

    confirm(): void{
        this.dialogRef.close(true);
    }

    close(): void{
        this.dialogRef.close(false);
    }
}