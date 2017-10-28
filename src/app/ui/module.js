"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_calendar_1 = require("angular-calendar");
var module_1 = require("../validators/module");
var calendar_header_component_1 = require("./calendar-header/calendar-header.component");
var header_component_1 = require("./header/header.component");
var timecard_entry_component_1 = require("./timecard-entry/timecard-entry.component");
var index_1 = require("../pipes/index");
var StrathDemoUIModule = (function () {
    function StrathDemoUIModule() {
    }
    return StrathDemoUIModule;
}());
StrathDemoUIModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            module_1.CustomFormsModule,
            angular_calendar_1.CalendarModule
        ],
        entryComponents: [
            timecard_entry_component_1.TimeCardEntryComponent
        ],
        declarations: [
            index_1.PIWorkTypeFilterPipe,
            calendar_header_component_1.CalendarHeaderComponent,
            header_component_1.HeaderComponent,
            timecard_entry_component_1.TimeCardEntryComponent
        ],
        exports: [
            calendar_header_component_1.CalendarHeaderComponent,
            header_component_1.HeaderComponent
        ]
    })
], StrathDemoUIModule);
exports.StrathDemoUIModule = StrathDemoUIModule;
//# sourceMappingURL=module.js.map