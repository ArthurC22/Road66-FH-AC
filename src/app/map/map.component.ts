import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Waypoint} from '../model/Waypoint.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() waypoints: Waypoint[];

  constructor() { }

  ngOnInit() {
    console.log(this.waypoints);
    const myMap = L.map('mapLayout').setView([50.6311634, 3.0599573], 12);

    console.log(L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myMap).isLoading());
  }

}
