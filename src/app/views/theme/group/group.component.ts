import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../../services/my-serv.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  public empty: any=[];
  public arr: any=[];
  public menu: boolean=true;
  public mod: boolean=false;
  public title: any='';
  public faculName: any='';
  public groupName: any='';
  public groupId: any='';
  public faculId: any='';
  public selectInput: boolean=true;
  public edGr: boolean=false;
  public addGr: boolean=true;
  public facId: any='';
  public facIn: boolean=false;
  public error1: any;
  public error2: any;

  
  constructor(private myService: MyServService) { }

  ngOnInit() {
    this.getGroups();
    this.getFacul();
   }
   public close(){
     this.mod=false;
     this.menu=true;
   }
   public getGroups(){
     this.myService.getGroupsInfo().subscribe(
       (data)=>{
         this.empty=data;
         console.log(data)
       },
       (error)=>{
         console.log(error)
       }
     );
   }
   public getFacul(){
    this.myService.getFaculities().subscribe(
      (data)=>{
        this.arr=data;
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  //open modal
public addGroup(){
     this.title="Create";
     this.mod=true;
     this.menu=false;
     this.groupName='';
     this.groupId='';
     this.error1='';
   }
public addOne(){
    this.myService.groupName=this.groupName;
    this.myService.faculId=this.faculId;
    // this.menu=true;
    this.error1='';
    this.myService.addGroup().subscribe(
       (data)=>{
         
         if(data){
          this.menu=true;
          this.mod=false;
          this.getGroups();
         }
         console.log(data)
       },
       (error)=>{
         this.error1=error;
         console.log(error)
       }
           )
   }
public deleteGroup(gr){
     this.myService.gr=gr;
     this.myService.deleteGroup().subscribe(
       (data)=>{
         if(data){
           this.getGroups();
         }
         console.log(data)
       },
       (error)=>{
         console.log(error)
       }
     )
   }
   // open modal
public editGroup(gid, gnm, gfid){
     this.title="Edit";
     this.mod=true;
     this.menu=false;
     this.edGr=true;
     this.addGr=false;
     this.selectInput=false;
     this.groupName=gnm;
     this.groupId=gid;
     this.myService.groupName=gnm;
     this.myService.groupId=gid;
     this.myService.faculId=gfid;
     this.error1='';
     this.error2='';
   }
public editG(nm, gd){
     this.myService.editGroup(nm, gd).subscribe(
       (data)=>{
         console.log(data, 'editdata')
         this.error2=data;
         if(data[0]==422){
           return;
         } else{
          this.mod=false;
          this.menu=true;
          this.getGroups();
         }
       },
       (error)=>{
         this.error2=error;
         console.log(error)
       }
     )
   }
 }
 