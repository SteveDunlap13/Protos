"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular_calendar_1 = require("angular-calendar");
var module_1 = require("./ui/module");
var app_component_1 = require("./app.component");
var auth_guard_1 = require("./guards/auth.guard");
var dashboard_container_1 = require("./containers/dashboard.container");
var timecard_container_1 = require("./containers/timecard.container");
var secure_container_1 = require("./containers/secure.container");
var core_2 = require("ng2-adal/core");
var index_1 = require("./services/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(index_1.InMemoryApiService),
            ng_bootstrap_1.NgbModalModule.forRoot(),
            angular_calendar_1.CalendarModule.forRoot(),
            module_1.StrathDemoUIModule,
            router_1.RouterModule.forRoot([
                { path: '', component: dashboard_container_1.DashboardContainer, },
                { path: 'secure', component: secure_container_1.SecureContainer, canActivate: [auth_guard_1.AuthGuard] },
                { path: '**', redirectTo: '' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_container_1.DashboardContainer,
            timecard_container_1.TimecardContainer,
            secure_container_1.SecureContainer
        ],
        providers: [
            index_1.Logger,
            index_1.ApiService,
            index_1.TimecardEntryService,
            index_1.WorkTypeService,
            index_1.PIWorkTypeService,
            index_1.WorkTaskService,
            auth_guard_1.AuthGuard,
            core_2.AdalService,
            index_1.SecretService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map