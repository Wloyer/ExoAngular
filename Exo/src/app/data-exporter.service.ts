import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataExporterService {

  data = {
    name: "Exemple",
    items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }]
  };

  constructor() { }

  downloadJson() {
    const fileName = "data.json";
    const json = JSON.stringify(this.data);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }
}
