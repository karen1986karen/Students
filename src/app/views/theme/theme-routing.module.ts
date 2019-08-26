import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { RedComponent } from './red/red.component';

import { StudComponent } from './stud/stud.component';
import { GroupComponent } from './group/group.component';
import { DashComponent } from './dash/dash.component';
// import { FacultiesComponent } from '../../components/faculties/faculties.component';
// import { FacultetComponent } from './facultet/facultet.component';
// import { FacultiesComponent } from '../../components/faculties/faculties.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        redirectTo: 'red'
      },
      {
        path: 'dash',
        component: DashComponent,
        data: {
          title: 'dash'
        }
      },
      {
        path: 'red',
        component: RedComponent,
        data: {
          title: 'Faculities'
        }
      },
      {
        path: 'group',
        component: GroupComponent,
        data: {
          title: 'Group'
        }
      },
      {
        path: 'stud',
        component: StudComponent,
        data: {
          title: 'Stud'
        }
      },
      // {
      //   path: 'colors',
      //   component: ColorsComponent,
      //   data: {
      //     title: 'Colors'
      //   }
      // },
      
     
      // {
      //   path: 'typography',
      //   component: TypographyComponent,
      //   data: {
      //     title: 'Typography'
      //   }
      // },
      

     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
