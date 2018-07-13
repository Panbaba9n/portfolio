import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../../shared/components/services/technology.service';
import { Technology } from "../../shared/classes/technology";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  technologies: Technology[];

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
    this.getTechnologies();
  }

  getTechnologies():void {
    this.technologies = this.technologyService.getTechnolohies();
  }

}
