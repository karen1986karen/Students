import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServService {
public id: any='';
public name: any='';
public groupName: any='';
public groupId: any='';
public gr: any='';
public faculId: any='';
public faculName: any='';
public studentName: any='';
public studentId: any='';
public lastName: any='';
public email: any='';
public phone: any='';
  constructor(private http: HttpClient) { }
  
  public getFaculities(){
    return this.http.get('http://10.10.0.156:8030/api/faculties');
  }
  public deleteData(){
    return this.http.delete('http://10.10.0.156:8030/api/faculties/'+ this.id);
  }
  public add(){
    return this.http.post('http://10.10.0.156:8030/api/faculties/?name='+this.name, this.name);
  }
  public editData(name){
    
    return this.http.put(`http://10.10.0.156:8030/api/faculties/${this.id}?name=${name}`,  this.id, this.name);
  }
  public getGroupsInfo(){
    return this.http.get('http://10.10.0.156:8030/api/groups');
  }
  public addGroup(){
    return this.http.post(`http://10.10.0.156:8030/api/groups?name=${this.groupName}&faculty_id=${this.faculId}`, this.groupName, this.faculId);
  }
  public deleteGroup(){
    return this.http.delete('http://10.10.0.156:8030/api/groups/'+ this.gr);
  }
  public editGroup(nm, gd){
    return this.http.put(`http://10.10.0.156:8030/api/groups/${gd}?name=${nm}&faculty_id=${this.faculId}`,  this.groupId, this.groupName, );
  }
  public getStudentsInfo(){
    return this.http.get('http://10.10.0.156:8030/api/students');
  }
  public delStud(){
    return this.http.delete(`http://10.10.0.156:8030/api/students/${this.studentId}`)
  }
  public addStd(){
    return this.http.post(`http://10.10.0.156:8030/api/students?name=${this.studentName}&last_name=${this.lastName}&email=${this.email}&phone=${this.phone}&faculty_id=${this.faculId}&group_id=${this.groupId}`, 
      this.studentName, this.lastName );
  }
  public editStudent(i, nm, lnm, em, ph, fid, gid){
    return this.http.put(`http://10.10.0.156:8030/api/students/${i}?name=${nm}&last_name=${lnm}&email=${em}&phone=${ph}&faculty_id=${fid}&group_id=${gid}`, 
      this.studentName, this.lastName )
  }
  public getFaculGroup(){
    return this.http.get(`http://10.10.0.156:8030/api/faculties/${this.faculId}/groups`)
  }
}
