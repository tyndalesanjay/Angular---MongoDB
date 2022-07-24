import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: any = [];
  id: any;
  constructor(
    private studentService: StudentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getAll().subscribe((data: any) => {
      if (!data) {
        throw new Error('No Students Found');
      }
      this.students = data;
      console.log(data);
    });
  }

  deleteStudent(_id: any) {
    this.studentService.deleteById(_id).subscribe(
      (response) => {
        console.log(response);
        return this.getStudents();
      },
      (Error) => {
        console.log(Error);
      }
    );
  }

  deleteAll() {
    this.studentService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        return this.getStudents();
      },
      (Error) => {
        console.log(Error);
      }
    );
  }
}
