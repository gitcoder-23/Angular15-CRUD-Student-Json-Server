import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StudentDashboardRoutingModule } from './student-dashboard-routing.module';
import { StudentDashboardComponent } from './student-dashboard.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  declarations: [StudentDashboardComponent, HeaderComponent, ModalComponent],
  imports: [
    CommonModule,
    StudentDashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
})
export class StudentDashboardModule {}
