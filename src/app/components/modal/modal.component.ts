import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { StudentModel } from 'src/app/models/Student.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}
  studentFrom!: FormGroup;
  studentObj: StudentModel = new StudentModel();
  message: string = '';
  success: boolean = false;
  studentList: StudentModel[] = [];

  ngOnInit(): void {
    this.studentFormValidation();
    this.getAllStudent();
  }

  studentFormValidation() {
    this.studentFrom = this.formBuilder.group({
      id: uuidv4(),
      studentName: ['', Validators.required],
      email: ['', Validators.required],
      className: ['', Validators.required],
      mobile: ['', Validators.required],
    });
  }

  addStudent() {
    console.log('addProduct->', this.studentFrom.value);
    this.studentObj.studentName = this.studentFrom.value.studentName;
    this.studentObj.email = this.studentFrom.value.email;
    this.studentObj.className = this.studentFrom.value.className;
    this.studentObj.mobile = this.studentFrom.value.mobile;
    if (this.studentFrom.valid) {
      this.api.postStudent(this.studentObj).subscribe({
        // Next
        next: (res: any) => {
          console.log('res->', res);
          this.getAllStudent();
          alert('Student added success');
          this.message = 'Student added success';
          this.success = true;

          this.studentFrom.reset();
          setTimeout(() => {
            this.message = '';
          }, 2000);
        },
        // Error
        error: (error: any) => {
          console.log('res->', error);
          alert('Student submit error');
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
          this.studentFrom.reset();
        },
      });
    } else {
      this.message = 'Please fill all the fields!';
      this.success = false;
      setTimeout(() => {
        this.message = '';
      }, 2000);
    }
  }

  // Get All Students
  getAllStudent() {
    this.api.getStudents().subscribe((res: any) => {
      // console.log('getResponse->', res);

      this.studentList = res;
    });
  }

  //
}
