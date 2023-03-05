import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: BreadcrumbItem[] = [];
  @Input() active: string = '';
}

export interface BreadcrumbItem {
  name: string;
  routerLink: string[];
}
