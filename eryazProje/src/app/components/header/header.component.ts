import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Proje Başlangıç';
  routers: any = [
    {
      routerLink: '/home',
      name: 'Anasayfa',
    },
    {
      routerLink: '/about',
      name: 'Hakkımızda',
    },
    {
      routerLink: '/contact',
      name: 'İletişim',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
