export class ListButton{
    constructor(
        private title: string, 
        private link: string,
        private color: string, 
        private icon?: string){
    }

    public static create(){
        return new ListButton(
            "Přidat položku", 
            "form", 
            "primary",
            "fas fa-plus"
        );
    }
}