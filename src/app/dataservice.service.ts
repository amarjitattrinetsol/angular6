import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  getEmployeesData() {
    return [
      {id:1, name: 'Pat', code: 1235, email: 'john@example.com', mobile: 5648754357},
      {id:2, name: 'Rishi', code: 1283, email: 'Rishi@example.com', mobile: 5648774657},
      {id:3, name: 'Gourav', code: 1423, email: 'Gourav@example.com', mobile: 5643754656},
      {id:4, name: 'Prince', code: 1523, email: 'Prince@example.com', mobile: 5648765465},
      {id:5, name: 'Deepak', code: 1623, email: 'Deepak@example.com', mobile: 7648754657},
    ];
  }
}
