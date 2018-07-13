import { Injectable } from "@angular/core";
import { Technology } from "../../classes/technology";
import { Technologies } from "../../moks/mock-technology";

@Injectable()
export class TechnologyService {
  constructor() {}

  getTechnolohies(): Technology[] {
    return Technologies;
  }
}

