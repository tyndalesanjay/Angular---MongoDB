import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';
// import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})

export class CreateStudentComponent implements OnInit {

  constructor( private studentService: StudentsService, private router: Router) { }

  ngOnInit(): void {
  }

  students = {
    name: "",
    email: "",
    cohort: "",
    phoneNumber: "",
  }

  createStudent() {
    const data = {
      name: this.students.name,
      email: this.students.email,
      cohort: this.students.cohort,
      phoneNumber: this.students.phoneNumber,
    }
    this.studentService.createStudent(data).subscribe(() => {
      this.router.navigate(["/list"]);
      console.error();
      console.log(data)
    });
  }
}
