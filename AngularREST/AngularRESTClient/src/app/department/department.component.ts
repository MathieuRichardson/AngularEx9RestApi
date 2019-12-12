import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms';
import { retryWhen } from 'rxjs/operators';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public department: Department;
  public message: string;
  public saveMessage: string;
  public isValidFormSubmted: boolean;
  public loadingDepartmenrs:boolean;
  public departmentSaving:boolean;
  public button:string;
  public id: number;

  constructor(public departmentService: DepartmentService, private route :ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id'] !== undefined? parseInt(params['id']):null;
    });
  }

  public getDepartment():void{
    if(this.id != null && !isNaN(this.id)){
      this.loadingDepartmenrs = true;

      this.departmentService.getDepartment(this.id).subscribe(
        department => {
          if(this.departmentService == null){
            this.message =`Department ${this.id} not found`;
            this.department = null;
          }
          else{
            this.department = department;
            this.button = 'Save Depatment';
          }
        },err => {this.message = err;}
      ).add(() => {this.loadingDepartmenrs =false;})
    }else{
      if(!isNaN(this.id)){
        this.department =new Department();
        this.button = 'Create Department';

      }else{
        this.message = 'Invalid Depatment Number'
        this.department =null;
      }
    }
  }

  public onFormSubmit(form:NgForm){
    this.isValidFormSubmted = false;

    if(form.invalid) return;

    this.departmentSaving = true;
    this.department = form.value;
    this.message ="";
    this.saveMessage =  "";

    if (this.department.id === undefined){
      this.createDepartment(form);
    }else{
      this.saveDepartment(form);
    }
  }

  private createDepartment(form : NgForm){
    this.departmentService.createDepartment(this.department).subscribe(
      result =>{
        if(result.id !=0){
          this.saveMessage = `Department Saved! ID: ${result.id}`;
          this.department = new Department();
          this.isValidFormSubmted = true;
        }
        else{
          this.isValidFormSubmted = false;
          this.message = `an error occured while creating a deparment via the rest api`;

        }

      }, err =>{
        this.message = err;
      }
    ).add(()=> {this.departmentSaving = false;})
  }

  
  private saveDepartment(form : NgForm){
    this.departmentService.updateDepartment(this.department).subscribe(
      result =>{
        if(result > 0){
          this.saveMessage = `Department Saved! ID: ${this.department.id}`;
          this.department = new Department();
          this.isValidFormSubmted = true;
        }
        else{
          this.isValidFormSubmted = false;
          this.message = `an error occured while creating a deparment via the rest api`;

        }

      }, err =>{
        this.message = err;
      }
    ).add(()=> {this.departmentSaving = false;})
  }
}
