// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

import { RedComponent } from './red/red.component';
import { FormsModule } from '@angular/forms';
import { GroupComponent } from './group/group.component';
import { StudComponent } from './stud/stud.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DashComponent } from './dash/dash.component';
import { MyFilterPipe } from '../../my-filter.pipe';
import { LastNamePipe } from '../../pipes/last-name.pipe';
import { NamePipe } from '../../pipes/name.pipe';
import { EmailPipe } from '../../pipes/email.pipe';
import { FacultetPipe } from '../../pipes/facultet.pipe';
import { GroupPipe } from '../../pipes/group.pipe';
import { PhonePipe } from '../../pipes/phone.pipe';
// import { FacultetComponent } from './facultet/facultet.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeRoutingModule,
    AngularFontAwesomeModule,
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    
    RedComponent,
    
    GroupComponent,
    
    StudComponent,
    
    DashComponent,
    MyFilterPipe,
    LastNamePipe,
    NamePipe,
    EmailPipe,
    FacultetPipe,
    GroupPipe,
    PhonePipe
    // FacultetComponent,
    
    
  ],
  exports:[
    RedComponent
  ]
})
export class ThemeModule { }
