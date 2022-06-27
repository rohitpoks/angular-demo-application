import { Component, OnInit } from '@angular/core';
// import service
import { DataFetcherService } from '../data-fetcher.service';
// import person class
import { Person } from '../data-fetcher.service';
@Component({
  selector: 'app-person-information',
  templateUrl: './person-information.component.html',
  styleUrls: ['./person-information.component.css']
})
export class PersonInformationComponent implements OnInit {
  person1: Person;
  person2: Person;
  person3: Person;
  person4: Person;
  result: Person[];
  active: boolean;
  constructor(private dataFetcher : DataFetcherService) {
    this.person1 = this.dataFetcher.get_person(1);
    this.person2 = this.dataFetcher.get_person(2);
    this.person3 = this.dataFetcher.get_person(3);
    this.person4 = this.dataFetcher.get_person(4);
    this.result = [];
    this.active = false;
  }

  ngOnInit(): void {
  }

  get_age(id : number) {
    return this.dataFetcher.get_age(id);
  }

  get_name(id : number) {
    return this.dataFetcher.get_name(id);
  }

  get_people() {
    // set values for people array
    this.result[0] = this.person1;
    this.result[1] = this.person2;
    this.result[2] = this.person3;
    this.result[3] = this.person4;
    this.active = true;
  }

  make_inactive() {
    this.result = []
    this.active = false;
  }

}
