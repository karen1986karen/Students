import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../../services/my-serv.service';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.scss']
})
export class StudComponent implements OnInit {
  public menu: boolean=true;
  public stId: boolean=true;
  public mod: boolean=false;
  public facIn:boolean=false;
  public edSt: boolean=false;
  public disabled: boolean=true;
  public faculArr: any=[];
  public groupArr: any=[];
  public title: any='';
  public students: any=[];
  public studentName: any='';
  public studentId: any='';
  public lastName: any='';
  public email: any='';
  public phone: any='';
  public faculId: any=null;
  public groupId: any='';
  public addSt: boolean=true;
  public error1: any;
  constructor(private serv: MyServService) { }

  ngOnInit() {
    this.getStudents();
  }
  public onChange(event, item){
    if(event.value!==null){
      this.disabled=false;
      
      this.serv.faculId=event;
      this.serv.getFaculGroup().subscribe(
        (data)=>{
          this.groupArr=data;
          console.log(data)
        },
        (error)=>{
          console.log(error)
        }
      )
    }
  }
  // public getNumber(a){
  //   if(!a.typeof(Number)){
  //     this.phone='';
  //   }
  // }
  public onChang(e){
    this.serv.groupId=e;
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
    this.menu=true;
  }
  //open modal
  public addStud(){
    this.mod=true;
    this.menu=false;
    this.facIn=true;
    this.addSt=true;
    this.edSt=false;
    this.title="Create";
    this.studentId='';
    this.studentName='';
    this.lastName='';
    this.email='';
    this.phone='';
    this.faculId='';
    this.groupId='';
    this.error1='';
    this.serv.getFaculities().subscribe(
      (data)=>{
        this.faculArr=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  public addStd(){
    this.serv.studentName=this.studentName;
    this.serv.lastName=this.lastName;
    this.serv.studentId=this.studentId;
    this.serv.email=this.email;
    this.serv.phone=this.phone;
    this.serv.groupId=this.groupId;
    this.serv.faculId=this.faculId;
    this.error1='';
    this.serv.addStd().subscribe(
      (data)=>{
        if(data){
          this.menu=true;
          this.getStudents();
          this.mod=false;

        }
        
        console.log(data)
      },
      (error)=>{
        this.error1=error;
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
    this.menu=false;
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
    this.error1='';
    this.serv.getFaculities().subscribe(
      (data)=>{
        this.faculArr=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )

    if(this.faculId!==null){
      this.disabled=false;
    }
  }
  public editS(i, nm, lnm, em, ph, fid, gid){
    this.serv.editStudent(i, nm, lnm, em, ph, fid, gid).subscribe(
      (data)=>{
        this.mod=false;
        this.menu=true;
        this.getStudents();
        console.log(data)
      },
      (error)=>{
        this.error1=error;
        console.log(error)
      }
    )
  }

}
