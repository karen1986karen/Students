import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { PhonePipe } from './pipes/phone.pipe';
// import { GroupPipe } from './pipes/group.pipe';
// import { FacultetPipe } from './pipes/facultet.pipe';
// import { NamePipe } from './pipes/name.pipe';
// import { EmailPipe } from './pipes/email.pipe';
// import { LastNamePipe } from './pipes/last-name.pipe';
// import { MyFilterPipe } from './my-filter.pipe';
// import { GroupsComponent } from './components/groups/groups.component';
// import { StudentsComponent } from './components/students/students.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    // AngularFontAwesomeModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    FacultiesComponent,
    // PhonePipe,
    // GroupPipe,
    // FacultetPipe,
    // NamePipe,
    // EmailPipe,
    // LastNamePipe,
    // MyFilterPipe,
    // GroupsComponent,
    // StudentsComponent
    
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
