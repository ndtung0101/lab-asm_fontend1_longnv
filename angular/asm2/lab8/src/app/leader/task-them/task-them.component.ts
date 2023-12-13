import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../../du-lieu.service';


@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent {
  constructor(
    private router: Router,
    private d:DuLieuService
  ){}
 
  ten:string='';
  mota:string='';
  // task:any;
  themTask(task:any){
    var ten= task.ten;
    var mota= task.mota;
    console.log(mota, ten);
    this.d.themTask(task).subscribe ( data => alert('Thêm thành công'));
    this.router.navigate(['/leader/task']);
  }
  
  listDa: any;
  listNv: any;

  ngOnInit(): void {
    this.d.getDuAn().subscribe(data => {
      this.listDa = data;
      console.log('Dữ liệu dự án:', this.listDa);
    });
  
    this.d.getNhanVien().subscribe(data => {
      this.listNv = data;
      console.log('Dữ liệu nhân viên:', this.listNv);
    });
  }
  xuly(d: any) {
    console.log("Data: ", d);
    console.log("tenDuAn=", this.ten);
  }
}
