import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments: Department[];
  public loadingDepartments: boolean;
  public departmentDeleting :boolean;
  public message : string;


  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();

  }

  public getDepartments():void{
    this.loadingDepartments = true;

    this.departmentService.getDepartments().subscribe(
      result =>{
        this.departments = result;
      },err => {
        this.message = err;
      }

    ).add(()=> {this.loadingDepartments = false});
  }

  public deleteDepartment(id: number): void{
    this.departmentDeleting = true;
    this.departmentService.deleteDepartment(id).subscribe(
      result =>{
        this.getDepartments();
      },err => {
        this.message = err;
      }
    ).add(()=> {this.departmentDeleting = false});
  }
}
