import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Reg1Component } from './reg1/reg1.component';
import { Reg2Component } from './reg2/reg2.component';
import { Reg3Component } from './reg3/reg3.component';
import { Reg4Component } from './reg4/reg4.component';


const routes: Routes = [{path:"reg1",component:Reg1Component}
,{path:"reg2",component:Reg2Component}
,{path:"reg3",component:Reg3Component}
,{path:"reg4",component:Reg4Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
