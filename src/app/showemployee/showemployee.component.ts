import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { log } from 'console';


interface Employee {
  sNo: number,
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css'],
})
export class ShowemployeeComponent implements OnInit {

  data: any = [];
  btnName: string = 'Add';
  columns: string[] = ['Sr.', 'Name', 'Email', 'Phone', 'Address', 'Action']
  empForm: Employee = {
    sNo: 0,
    name: '',
    email: '',
    phone: '',
    address: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

  add(obj: any) {
    if (this.btnName != 'Update') {
      this.data.push(obj.value);
      this.resetform(obj);
    }
    else {
      console.log(obj.value.sNo);
      let index = this.data.findIndex((ele: any) => ele.sNo == obj.value.sNo);
      this.data[index] = obj.value;
      this.btnName = 'Add';
      this.resetform(obj);
    }
  }

  resetform(form: NgForm) {
    form.reset();
  }


  edit(obj: Employee) {
    this.empForm.sNo = obj.sNo;
    this.empForm.name = obj.name;
    this.empForm.email = obj.email;
    this.empForm.phone = obj.phone;
    this.empForm.address = obj.address;
    this.btnName = 'Update'
  }

  delete(item: any) {
    if (item >= 0) {
      this.data.splice(item, 1);
      this.data = this.data;
      console.log('data', this.data);
    }
  }
}
