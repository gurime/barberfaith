import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { NopageComponent } from './nopage/nopage.component';

const routes: Routes = [
  {path: '', title: 'Barber-Faith',component: HomeComponent},
  {path: 'Home', title: 'Barber-Faith', component: HomeComponent},
  {path: 'About', title: 'About Barber-Faith', component: AboutComponent},
  {path: 'Mission', title: 'Barber-Faiths Mission', component: MissionComponent},
  {path: 'Contact', title: 'Contact Barber-Faith', component: ContactComponent},

  {path: '**', title: 'Nopage', component: NopageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
