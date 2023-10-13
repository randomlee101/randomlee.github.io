import { Component, OnInit } from '@angular/core';

interface Project {
    logo: string,
    title: string,
    description: string,
    skills: Array<string>
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  constructor() { }
  projects: Array<Project> = [
    {
      logo: "swipe-logo",
      title: "Swipe",
      description: "A web-based application for Merchants to render Buy Now Pay Later services to their customers and also keep track of the business",
      skills: "Flutter,Node.JS,Java,Angular".split(",")
    },
    {
      logo: "traindemy",
      title: "Traindemy",
      description: "Traindemy helps people acquire vocational and technical skills through online classes and offline practice opportunities.",
      skills: "Flutter,Node.JS".split(",")
    },
    {
      logo: "blast-off",
      title: "Blast Off Trivia",
      description: "A trivia and quiz app, offering a wide range of play modes, challenges, and collectibles. With the added excitement of winning real money",
      skills: "Flutter,Node.JS".split(",")
    },
    {
      logo: "betacare",
      title: "Betacare",
      description: "Book a consultation with general practitioners or specialist doctors and talk to them via video, audio, or text chats on our web and mobile apps. doctor-patient.",
      skills: "Flutter,Node.JS,Java,Python".split(",")
    },
  ]

  ngOnInit(): void {
  }

}
