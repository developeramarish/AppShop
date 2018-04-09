export class ListAction{
    constructor(
        private title: string,
        private link: string,
        private isEvent: boolean = false,
        private cssClass: string,
        private icon: string
    ) {
    }

    public static edit(){
        return new ListAction(
            "Upravit",
            "form",
            false,
            "button-warning",
            "far fa-edit"
        );
    }

    public static duplicate(){
        return new ListAction(
            "Duplikovat",
            "duplicate",
            true,
            "button-info",
            "far fa-clone"
        );
    }

    public static delete(){
        return new ListAction(
            "Smazat",
            "delete",
            true,
            "button-danger",
            "far fa-trash-alt"
        );
    }
}