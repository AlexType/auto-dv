import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent {
  protected navItems: NavItem[] = [
    {
      routerLink: ['/catalog'],
      name: 'Автомобили'
    },
    {
      routerLink: ['/calculation'],
      name: 'Калькулятор'
    },
    {
      routerLink: ['/faq'],
      name: 'Информация'
    },
    {
      routerLink: ['/contacts'],
      name: 'Контакты'
    },
  ]
}

export interface NavItem {
  name: string;
  routerLink: string[];
}
