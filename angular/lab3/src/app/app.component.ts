import { Component } from '@angular/core';
import { ISanpham } from './isanpham';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chucNang:string='';
  ghiNhanCN(cn:string=''){
    this.chucNang=cn;
    if (this.chucNang!='ct') this.spDangXem=null;
  }
  spDangXem:any=null;  
  ganSP(sp:ISanpham){      
      this.spDangXem=sp;
      this.chucNang='ct';
  }
}

