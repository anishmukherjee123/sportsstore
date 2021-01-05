import {
    Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges
} from "@angular/core";

// this class contains a custom directive, built using existing directives

@Directive({
    selector: "[counterOf]"
})

export class CounterDirective {
    
    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {

    }

    // declare as an input
    @Input("counterOf")
    // the number of navigation pages
    counter: number;

    ngOnChanges(changes: SimpleChanges) {
        this.container.clear();
        for(let i=0; i<this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i+1));
        }
    }

}

class CounterDirectiveContext {
    constructor(public $implicit: any){}
}