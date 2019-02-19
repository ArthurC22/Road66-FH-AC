import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as L from 'leaflet';
import {Waypoint} from '../model/Waypoint.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() waypoints: Waypoint[];
  @Output() onMarker = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    console.log(this.waypoints);
    const myMap = L.map('maplayout').setView([50.6311634, 3.0599573], 5);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map Layout'
    }).addTo(myMap);

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    this.waypoints.forEach(mark => {
      L.marker([mark.lat, mark.lng], {icon: myIcon}).bindPopup(mark.label).addTo(myMap).openPopup().on('click', function () {
        this.onMarker.emit(mark.timestamp);
      });
    });
  }

}
