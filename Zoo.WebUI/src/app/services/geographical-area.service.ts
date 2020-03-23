import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeographicalArea } from '../models/geographical-area.model';

@Injectable({
    providedIn: 'root'
})
export class GeographicalAreaService {

    geographicalAreaSelected: GeographicalArea;
    geographicalArea: GeographicalArea[];
    readonly URL_API = 'http://localhost:3000/api/geographicalArea';

    constructor(private http: HttpClient) {
        this.geographicalAreaSelected = new GeographicalArea();
    }

    getGeographicalArea() {
        return this.http.get(this.URL_API);
    }

    postGeographicalArea(geographicalArea: GeographicalArea) {
        return this.http.post(this.URL_API, geographicalArea);
    }
}
