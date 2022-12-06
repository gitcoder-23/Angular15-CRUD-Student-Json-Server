import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentModel } from '../models/Student.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BaseUrl = `${environment.apiUrl}`;

  constructor(private _http: HttpClient) {}

  // GET Students
  getStudents = () => {
    const apiPostResponse = this._http.get<StudentModel[]>(
      `${this.BaseUrl}/students`
    );
    console.log('apiGetResponse->', apiPostResponse);
    return apiPostResponse;
  };
  // getStudents() {
  //   const apiResponse = this._http
  //     .get<StudentModel[]>(`${this.BaseUrl}/students`)
  //     .pipe(
  //       map((res: any) => {
  //         console.log('get-res->', res);

  //         return res;
  //       })
  //     );
  // }

  // POST ADD Student
  // Post
  postStudent = (data: StudentModel) => {
    const apiPostResponse = this._http.post<StudentModel>(
      `${this.BaseUrl}/students`,
      data
    );
    console.log('apiPostResponse->', apiPostResponse);
    return apiPostResponse;
  };
  // postStudent(data: StudentModel) {
  //   const apiResponse = this._http
  //     .post<StudentModel>(`${this.BaseUrl}/students`, data)
  //     .pipe(
  //       map((res: any) => {
  //         console.log('add-res->', res);

  //         return res;
  //       })
  //     );
  // }

  // Get Single Student
  getSingleStudent(id: string) {
    const apiResponse = this._http
      .get<StudentModel>(`${this.BaseUrl}/students/${id}`)
      .pipe(
        map((res: any) => {
          console.log('get-single-res->', res);

          return res;
        })
      );
  }

  // Update Single Student
  updateSingleStudent(data: StudentModel, id: string) {
    const apiResponse = this._http
      .put<StudentModel>(`${this.BaseUrl}/students/${id}`, data)
      .pipe(
        map((res: any) => {
          console.log('update-res->', res);

          return res;
        })
      );
  }

  // Update Single Student

  deleteSingleStudent = (id: string) => {
    const apiPostResponse = this._http.delete<any>(
      `${this.BaseUrl}/students/${id}`
    );
    console.log('apiDeleteResponse->', apiPostResponse);
    return apiPostResponse;
  };
  // deleteSingleStudent(id: string) {
  //   const apiResponse = this._http
  //     .delete<any>(`${this.BaseUrl}/students/${id}`)
  //     .pipe(
  //       map((res: any) => {
  //         console.log('delete-res->', res);

  //         return res;
  //       })
  //     );
  // }
}
