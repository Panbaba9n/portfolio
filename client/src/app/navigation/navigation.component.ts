import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LinksService } from "../../shared/components/services/links.service";
import { NavLink } from "../../shared/classes/navigation-link";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('navLinks', [
      state('true', style({opacity: 1, transform: 'scale(1.0)', height: 'auto'})),
      state('false', style({opacity: 0, transform: 'scale(0.0)', height: 0})),
      transition('1 <=> 0', animate('300ms'))
    ])
  ]
})

export class NavigationComponent implements OnInit {
  @Output() navCollapsed = new EventEmitter<boolean>();
  collapsed: boolean = true;
  navBar: boolean = true;
  navLinks: NavLink[];
  socialLinks: NavLink[];

  constructor(private linksService: LinksService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.navLinks = this.linksService.getNavigationLinks();
    this.socialLinks = this.linksService.getSocialLinks();
  }

  toogleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.navCollapsed.emit(this.collapsed);
  }

  toogleNavBar(): void {
    this.navBar = !this.navBar;
  }

}
