import { Injectable } from "@angular/core";
import { NavLink } from "../../classes/navigation-link";
import { NavLinks } from "../../moks/mock-navigation-links";
import { SocialLinks } from "../../moks/mock-social-links";

@Injectable()
export class LinksService {
  constructor() {}

  getNavigationLinks(): NavLink[] {
    return NavLinks;
  }

  getSocialLinks(): NavLink[] {
    return SocialLinks;
  }
}
