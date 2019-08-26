import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../services/my-serv.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
public empty: any=[];
public mod: boolean=false;
public title: any='';
public groupName: any='';
public groupId: any='';
public faculId: any='';
public edGr: boolean=false;
public addGr: boolean=true;
public facId: any='';
public facIn: boolean=false;

  constructor(private myService: MyServService ) { }
  ngOnInit() {
   this.getGroups();
  }
  public close(){
    this.mod=false;
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
    )
  }
  public addGroup(){
    this.title="Add";
    this.mod=true;
    this.groupName='';
    this.groupId='';
  }
  public addOne(){
    this.myService.groupName=this.groupName;
    this.myService.groupId=this.groupId;
    this.mod=false;
    this.myService.addGroup().subscribe(
      (data)=>{
        this.getGroups();
        console.log(data)
      },
      (error)=>{
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
    this.facIn=true;
    this.edGr=true;
    this.addGr=false;
    this.groupName=gnm;
    this.groupId=gid;
    this.myService.groupName=gnm;
    this.myService.groupId=gid;
    this.myService.faculId=gfid;
  }
  public editG(nm, gd){
    this.myService.editGroup(nm, gd).subscribe(
      (data)=>{
        this.mod=false;
        this.getGroups();
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  


}
