import { Injectable } from '@angular/core';

// class person to encapsulate person information
export class Person {
  name: string;
  age: number;
  id: number;
  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}

@Injectable({
  providedIn: 'root',
})
export class DataFetcherService {
  private person1: Person;
  private person2: Person;
  private person3: Person;
  private person4: Person;
  private result: Person[];

  constructor() {
    this.person1 = new Person('Rohit', 18, 1);
    this.person2 = new Person('Shyam', 21, 2);
    this.person3 = new Person('Ram', 35, 3);
    this.person4 = new Person('Hari', 25, 4);
    this.result = [this.person1, this.person2, this.person3, this.person4];
  }
  get_age(id: number) {
    return this.result[id - 1].age;
  }

  get_name(id: number) {
    return this.result[id - 1].name;
  }

  get_person(id: number) {
    return this.result[id - 1];
  }
}
