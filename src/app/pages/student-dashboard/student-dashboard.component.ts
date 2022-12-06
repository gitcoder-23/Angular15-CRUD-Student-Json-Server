import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/models/Student.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent implements OnInit {
  constructor(private api: ApiService) {}
  studentList: StudentModel[] = [];

  ngOnInit(): void {
    this.getAllStudent();
  }

  // Get All Students
  getAllStudent() {
    this.api.getStudents().subscribe((res: any) => {
      console.log('getResponseinList->', res);

      this.studentList = res;
    });
  }
}
