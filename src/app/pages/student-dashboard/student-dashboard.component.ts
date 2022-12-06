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
  studentId: string = '';
  message: string = '';
  success: boolean = false;

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

  // Delete
  deleteStudent(studentId: any) {
    console.log('studentId->', studentId);
    if (window.confirm('Do you want to delete?')) {
      this.api.deleteSingleStudent(studentId).subscribe({
        // Next
        next: (res: any) => {
          console.log('res->', res);

          // alert('Student delete success');
          this.message = 'Student deleted success';
          this.success = true;
          setTimeout(() => {
            this.message = '';
          }, 2000);
        },
        // Error
        error: (error: any) => {
          console.log('res->', error);
          alert('Student delete error');
          this.message = 'Something went wrong';
          this.success = false;
          setTimeout(() => {
            this.message = '';
          }, 2000);
        },
        // Complete
        complete: () => {
          console.log('complete');
          this.getAllStudent();
        },
      });
    }
  }
}
