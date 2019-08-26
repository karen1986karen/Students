import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../services/my-serv.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {
public arr: any=[];
public title: any='';
public name: any='';
public mod: boolean=false;
public but: boolean=false;
public facul: boolean=true;
  constructor(private myServ: MyServService) { }
  ngOnInit() {
   this.getData()
  }
  public close(){
    this.mod=false;
  }
  public getData(){
    this.myServ.getFaculities().subscribe(
      (data)=>{
        this.arr=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  public addFaculity(){
    this.title="Add";
    this.mod=true;
    this.name="";
  }
  public faculityAdd(){
    this.myServ.name=this.name;
    this.myServ.add().subscribe(
      (data)=>{
        if(data){
          this.mod=false;
          this.getData();
        }
        console.log(data)
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  public delete(i){
    this.myServ.id=i;
    this.myServ.deleteData().subscribe(
      (data)=>{
        if(data){
          this.getData();
        }
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  public editItem(n){
    this.myServ.editData(n).subscribe(
      (data)=>{
        this.myServ.name=n;
        console.log(data)
        this.mod=false;
        this.getData();
      },
      (error)=>{
        console.log(error)
      }
    );
  }
  public edit(i, nam){
    this.title="Edit";
    this.myServ.id=i;
    this.mod=true;
    this.myServ.name=nam;
    this.name=nam;
    this.but=true;
    this.facul=false;
  }
}
