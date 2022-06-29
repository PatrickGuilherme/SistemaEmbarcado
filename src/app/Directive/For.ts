import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[FOR]'
})
export class RepeatDirective {
    @Input() set FOR(repeat:number) {
        for(let i = 0; i < repeat; i++) {
            this.containerRef.createEmbeddedView(this.templateRef, {position: i })
        }
    }

    constructor(private templateRef: TemplateRef<any>,
        private containerRef:ViewContainerRef) { }
}