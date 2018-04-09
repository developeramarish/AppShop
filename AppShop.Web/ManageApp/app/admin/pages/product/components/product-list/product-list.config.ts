import { 
    ListConfig,
    ListColumn, 
    ListColumnType, 
    ListButton, 
    ListAction } from '@app/shared/list';

export class ProductListConfig {

    static get(): ListConfig
    {
        let listConfig = new ListConfig;
        // Set columns
        listConfig
            .addColumn(new ListColumn("Název", "name").setAsDefaultSort())
            .addColumn(new ListColumn("Cena", "price", ListColumnType.price))
            .addColumn(new ListColumn("Zobrazit", "status", ListColumnType.status));
        // Set buttons
        listConfig
            .addButton(ListButton.create());
        // Set actions
        listConfig
            .addAction(ListAction.edit())
            .addAction(ListAction.duplicate())
            .addAction(ListAction.delete());

        return listConfig;
    }

}