import { FormBuilder, FormControl } from "@angular/forms";
import { Validators, FormConfig, ElementSize } from "@app/shared/form";

export class ProductFormConfig {

    static get(values?: any): FormConfig
    {
        // Form Builder controls
        let formBuilder = new FormBuilder().group({
            name: ["", Validators.required],
            url: [],
            price: ["", Validators.required],
            description: [],
            status: ["", Validators.required],
        });

        // Form Config
        let config = new FormConfig(formBuilder);
        if(values)
            config.setDefaultValues(values);
        
        let imageBox = config.addBox("Obrázek", ElementSize.col_3);

        let infoBox = config.addBox("Základní informace", ElementSize.col_5);
        infoBox.addText(<FormControl>formBuilder.get("name"), "Název produktu");
        infoBox.addText(<FormControl>formBuilder.get("url"), "Url adresa");
        infoBox.addTextarea(<FormControl>formBuilder.get("description"), "Krátký popis");

        let priceBox = config.addBox("Cena a stav", ElementSize.col_4);
        priceBox.addText(<FormControl>formBuilder.get("price"), "Cena za kus").setSuffix(" Kč");
        priceBox.addCheckbox(<FormControl>formBuilder.get("status"), "Povolit produkt");

        return config;
    }

}