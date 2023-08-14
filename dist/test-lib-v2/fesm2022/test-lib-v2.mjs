import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from 'test-lib/dist/test-lib';
import { TestLibModule } from 'test-lib/dist/test-lib';

class TestLibV2Service {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibV2Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibV2Service, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibV2Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TestLibV2Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibV2Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.0", type: TestLibV2Component, selector: "lib-test-lib-v2", ngImport: i0, template: ` <p><lib-test-lib></lib-test-lib> inside test-lib-v2 works!</p> `, isInline: true, dependencies: [{ kind: "component", type: i1.TestLibComponent, selector: "lib-test-lib" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibV2Component, decorators: [{
            type: Component,
            args: [{ selector: 'lib-test-lib-v2', template: ` <p><lib-test-lib></lib-test-lib> inside test-lib-v2 works!</p> ` }]
        }] });

class TestLibV2Module {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibV2Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.0", ngImport: i0, type: TestLibV2Module, declarations: [TestLibV2Component], imports: [TestLibModule], exports: [TestLibV2Component] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibV2Module, imports: [TestLibModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibV2Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TestLibV2Component],
                    imports: [TestLibModule],
                    exports: [TestLibV2Component],
                }]
        }] });

/*
 * Public API Surface of test-lib-v2
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TestLibV2Component, TestLibV2Module, TestLibV2Service };
//# sourceMappingURL=test-lib-v2.mjs.map
