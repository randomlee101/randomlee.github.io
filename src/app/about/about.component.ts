import { Component, OnInit } from '@angular/core';

interface Skills {
  icon: string,
  name: string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  allSkills: Array<Skills> = [
    {
      icon: 'angular',
      name: 'Angular'
    },
    {
      icon: 'flutter',
      name: 'Flutter'
    },
    {
      icon: 'typescript',
      name: 'Typescript'
    },
    {
      icon: 'google-cloud',
      name: 'Google Cloud'
    },
    {
      icon: 'node',
      name: 'Node.JS'
    },
  ]
  ngOnInit(): void {
  }
  

}
