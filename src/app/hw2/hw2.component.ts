/* tslint:disable:no-trailing-whitespace one-line */
import { Component, OnInit } from '@angular/core';
import { Element } from './element.model';

@Component({
  selector: 'app-hw2',
  templateUrl: './hw2.component.html',
  styleUrls: ['./hw2.component.css']
})
export class Hw2Component{

  constructor() { }
  isADish = false;
  clicked = false;
  goodOrNot = 'I truly admire you for eating that...';
  dishName: string;
  meat: Element[] = [
    new Element('Chicken', false),
    new Element('Beef', false),
    new Element('Pork', false),
    new Element('Lamb', false)
  ];
  veggie: Element[] = [
    new Element('Broccoli', false),
    new Element('Coriander', false),
    new Element('Peanuts', false),
    new Element('Green Onion', false),
    new Element('Cumin', false),
    new Element('Red Pepper', false),
    new Element('Garlic', false),
  ];
  mySet: Set<string> = new Set<string>();


  reset() {
    for (const m of this.meat) {
      m.checked = false;
    }
    for (const v of this.veggie) {
      v.checked = false;
    }
    this.clicked = false;
    this.goodOrNot = 'I truly admire you for eating that...';
    this.dishName = '';
    this.mySet.clear();
    this.isADish = false;
  }

  add() {
    if (this.meat[1].checked && !this.mySet.has(this.meat[1].name)) {
      this.mySet.add(this.meat[1].name);
    } else if (!this.meat[1].checked && this.mySet.has(this.meat[1].name)) {
      this.mySet.delete(this.meat[1].name);
    }

    if (this.veggie[0].checked && !this.mySet.has(this.veggie[0].name)) {
      this.mySet.add(this.veggie[0].name);
    } else if (!this.veggie[0].checked && this.mySet.has(this.veggie[0].name)) {
      this.mySet.delete(this.veggie[0].name);
    }
  }


  ifWorks() {
    this.clicked = true;
    if (
      this.mySet.size === 2 &&
      this.mySet.has(this.meat[1].name) &&
      this.mySet.has(this.veggie[0].name))
    {
      this.goodOrNot = 'Congratulations! You\'ve got yourself a';
      this.dishName = 'Beef with Broccoli';
      this.isADish = true;
    } else if (
      this.mySet.size === 3 &&
      this.mySet.has(this.meat[0].name) &&
      this.mySet.has(this.veggie[2].name) &&
      this.mySet.has(this.veggie[5].name)
    )
    {
      this.goodOrNot = 'Congratulations! You\'ve got yourself a';
      this.dishName = 'Kung Pao Chicken';
      this.isADish = true;
    } else if (
      this.mySet.size === 2 &&
      this.mySet.has(this.meat[2].name) &&
      this.mySet.has(this.veggie[3].name)
    )
    {
      this.goodOrNot = 'Congratulations! You\'ve got yourself a';
      this.dishName = 'Twice-cooked Pork';
      this.isADish = true;
    } else if (
      this.mySet.size === 3 &&
      this.mySet.has(this.meat[3].name) &&
      this.mySet.has(this.veggie[1].name) &&
      this.mySet.has(this.veggie[4].name)
    )
    {
      this.goodOrNot = 'Congratulations! You\'ve got yourself a';
      this.dishName = 'Cumin Lamb';
      this.isADish = true;
    }
  }

}
