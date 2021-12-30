import {Component, Input, OnInit} from '@angular/core';
import {ApiDataIfc} from "../interfaces/interfaces";

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent implements OnInit {

  @Input() cardData: ApiDataIfc;

  constructor() { }

  ngOnInit(): void {
  }

}
