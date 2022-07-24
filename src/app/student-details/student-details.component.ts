import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import {
  AccountsService,
  AccountInterface,
} from '../services/accounts.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  details: any = [];
  student: any = [];
  accounts: any = {
    studentID: "",
    account: "",
    bank: "",
    branch: "",
    accountType: "",
    status: "",
  }

  constructor(
    private studentService: StudentsService,
    private accountService: AccountsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getById(this.route.snapshot.paramMap.get('_id'));
    
    // setTimeout(() => {
    //   this.ngOnInit()
    // }, 1000);
  }

  getById(_id: any) {
    this.studentService.getById(_id).subscribe((data: any) => {
      this.details = data;
      this.student = {
        _id: this.details._id,
        name: this.details.name,
        email: this.details.email,
        cohort: this.details.cohort,
        phoneNumber: this.details.phoneNumber,
      };
      console.log(data);
      console.error();
    });
  }

  updateStudent(_id: any) {
    const data = {
      name: this.student.name,
      email: this.student.email,
      cohort: this.student.cohort,
      phoneNumber: this.student.phoneNumber,
    };
    this.studentService.updateStudent(_id, data).subscribe(() => {
      this.router.navigate(['/list']);
      console.error();
      console.log(data);
    });
  }

  createAccount() {
    const data = {
      studentID: this.details._id,
      account: this.accounts.account,
      bank: this.accounts.bank,
      branch: this.accounts.branch,
      accountType: this.accounts.accountType,
      status: this.accounts.status,
    };

    this.accountService.createAccount(data).subscribe(() => {
      console.error();
      console.log(data);
    });
  }
}
