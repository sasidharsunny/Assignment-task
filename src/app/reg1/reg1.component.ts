import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg1',
  templateUrl: './reg1.component.html',
  styleUrls: ['./reg1.component.css']
})
export class Reg1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitlogForm(x)
  {
console.log(x)
  }





}
