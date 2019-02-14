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
    const myMap = L.map('maplayout').setView([50.6311634, 3.0599573], 12);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map Layout'
    }).addTo(myMap);

    this.waypoints.forEach(mark => {
      const myIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });
      L.marker([mark.lat, mark.lng], {icon: myIcon}).bindPopup(mark.label).addTo(myMap).openPopup();
    });
  }

}
