import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../services/my-serv.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
public stId: boolean=true;
public mod: boolean=false;
public facIn:boolean=false;
public edSt: boolean=false;
public title: any='';
public students: any=[];
public studentName: any='';
public studentId: any='';
public lastName: any='';
public email: any='';
public phone: any='';
public faculId: any='';
public groupId: any='';
public addSt: boolean=true;
  constructor(private serv: MyServService) { }
  ngOnInit() {
    this.getStudents();
  }
  public getStudents(){
    this.serv.getStudentsInfo().subscribe(
      (data)=>{
        this.students=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  public close(){
    this.mod=false;
  }
  public addStud(){
    this.mod=true;
    this.facIn=true;
    this.addSt=true;
    this.edSt=false;
    this.title="ADD";
  }
  public addStd(){
    this.serv.studentName=this.studentName;
    this.serv.lastName=this.lastName;
    this.serv.studentId=this.studentId;
    this.serv.email=this.email;
    this.serv.phone=this.phone;
    this.serv.groupId=this.groupId;
    this.serv.faculId=this.faculId;
    this.serv.addStd().subscribe(
      (data)=>{
        this.getStudents();
        this.mod=false;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  public deleteStudent(st){
    this.serv.studentId=st;
    this.serv.delStud().subscribe(
      (data)=>{
        this.getStudents();
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  // open modal
  public editStud(item){
    this.title="Edit";
    console.log(item)
    this.stId=false;
    this.mod=true;
    this.addSt=false;
    this.edSt=true;
    this.studentId=item.id;
    this.studentName=item.name;
    this.lastName=item.last_name;
    this.email=item.email;
    this.phone=item.phone;
    this.faculId=item.faculty_id;
    this.groupId=item.group_id;

    this.serv.studentId=item.id;
    this.serv.studentName=item.name;
    this.serv.lastName=item.last_name;
    this.serv.email=item.email;
    this.serv.phone=item.phone;
    this.serv.faculId=item.faculty_id;
    this.serv.groupId=item.group_id;
  }
  public editS(i, nm, lnm, em, ph, fid, gid){
    this.serv.editStudent(i, nm, lnm, em, ph, fid, gid).subscribe(
      (data)=>{
        this.mod=false;
        this.getStudents();

        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
