import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FamilyService } from 'src/app/services/family.service';
import { Family } from 'src/app/models/family.model';


@Component({
  selector: 'appointment2',
  templateUrl: './appointment2.component.html',
  styleUrls: ['./appointment2.component.css'],
})


export class Appointment2Component implements OnInit {

  family: Family = {name: "", phoneNumber: "", members: [], checkedIn: [], nextAppointment: ""};

  datePicked: Date = new Date();
  pipe = new DatePipe('en-US');
  nextAppointment: string = "";

  constructor(public familyService: FamilyService) { }

  ngOnInit(): void {
  }

  updateAppointment() {
    var nextAppointment = this.pipe.transform(this.datePicked, 'dd-MM-YYYY');
    this.family = this.familyService.getFamily();
    this.family.nextAppointment = nextAppointment? nextAppointment: "";
    this.familyService.postFamily(this.family);
    console.log();
  }
  
}
