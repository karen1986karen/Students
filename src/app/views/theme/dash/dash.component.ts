import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../../services/my-serv.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  public arr: any=[];
  public faculArr: any=[];
  public groupArr: any=[];
  public menu: boolean=true;
  public title: any='';
  public name: any='';
  public mod: boolean=false;
  public but: boolean=false;
  public facul: boolean=true;
  public studentId: any='';
  public studentName: any='';
  public lastName: any='';
  public email: any='';
  public phone: any='';
  public faculId: any='';
  public fName: any='';
  public gName: any='';
  public groupId: any='';
  constructor(private myServ: MyServService) { }

  ngOnInit() {
    this.getData();
    this.getFacul();
    this.getGroup();
  }
  public getData(){
    this.myServ.getStudentsInfo().subscribe(
      (data)=>{
        this.arr=data
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  public getFacul(){
    this.myServ.getFaculities().subscribe(
      (data)=>{
        this.faculArr=data;
        // console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  public getGroup(){
    this.myServ.getGroupsInfo().subscribe(
      (data)=>{
        this.groupArr=data;
        // console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
