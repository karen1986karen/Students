import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../../services/my-serv.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit {
  public arr: any=[];
  public menu: boolean=true;
  public title: any='';
  public name: any='';
  public mod: boolean=false;
  public but: boolean=false;
  public facul: boolean=true;
  public error: any;
  constructor(private myServ: MyServService) { }

  ngOnInit() {
    this.getData()
   }
   public close(){
     this.mod=false;
     this.menu=true;
   }
   public getData(){
     this.myServ.getFaculities().subscribe(
       (data)=>{
         console.log(data)
         this.arr=data;
       },
       (error)=>{
         console.log(error);
       }
     );
   }
   // open modal
   public addFaculity(){
     this.title="Create";
     this.menu=false;
     this.mod=true;
     this.name="";
     this.error='';
   }
   public faculityAdd(){
     this.myServ.name=this.name;
     this.myServ.add().subscribe(
       (data)=>{
         this.menu=true;
         if(data){
           this.mod=false;
           this.getData();
         }
         console.log(data)
       },
       (error)=>{
         this.error=error;
         
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
         this.menu=true;
         console.log(data)
         this.mod=false;
         this.getData();
       },
       (error)=>{
         this.error=error;
         console.log(error)
       }
     );
   }
   //open modal
   public edit(i, nam){
     this.error='';
     this.title="Edit";
     this.myServ.id=i;
     this.mod=true;
     this.menu=false;
     this.myServ.name=nam;
     this.name=nam;
     this.but=true;
     this.facul=false;
   }
 }
 
