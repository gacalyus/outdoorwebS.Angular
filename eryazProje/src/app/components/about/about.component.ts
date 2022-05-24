import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  personels: any = [
    {
      name: 'Brian McCurdy',
      about: `  Brian çok düz güney Ontario'da büyüdü, ancak 20'li yaşlarının başında 
         British Columbia'nın yağmur ormanlarındaki ilk yürüyüşünde, yerini değiştirmesi
         gerektiğini biliyordu. BC'ye taşındı ve macera yarışları ve dağ bisikleti de dahil
         olmak üzere dış mekanlara daldı. O ve o zamanki arkadaşı, şimdiki karısı Sasha,
         Kuzey Vancouver'a yerleşmeden önce patika koşusu yaptı, kanoya bindi ve macera
         birlikte yarıştı. Brian, son on yılda dış mekan fotoğrafçılığı becerilerini 
         geliştirdi ve oynamayı seçtiğimiz güzel ortamların özünü yakalama becerisiyle
         tanınıyor. Brian McCurdy Photography'de onun tam portföyünü görebilirsiniz .`,
      picture:
        'https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/Brian%20McCurdy%20%28Switchback%20Travel%29.jpg',
    },
    {
      name: 'Sarah Nelson',
      about: `      Sarah, şu anda Boulder, Colorado merkezli Switchback Travel'da Editör.
       Ortabatı'daki açık hava fırsatlarının olmaması nedeniyle sınırlı
       hissederek, 2016'da Northwestern'den gazetecilik derecesiyle mezun
       olduktan günler sonra batıya, dağlara gitti. Sarah kendini hemen kaya
       tırmanışı, dağcılık ve kayak gibi sporlara verdi ve şimdi bir Başkalarının
       da aynı şeyi yapmasına yardımcı olmak için yerel dağ kulübü. İdeal ve sık
       kullanılan uzak çalışma alanları arasında Rockies'in geniş manzaraları ve
       köpeği Sam ile yürüyüş molaları yer alıyor.`,
      picture:
        'https://www.switchbacktravel.com/sites/default/files/Sarah%20Nelson.jpg',
    },
    {
      name: 'Jenny Abegg',
      about: `      Jenny, şu anda Boulder, Colorado merkezli Switchback Travel'da Editör.
  Ortabatı'daki açık hava fırsatlarının olmaması nedeniyle sınırlı
  hissederek, 2016'da Northwestern'den gazetecilik derecesiyle mezun
  olduktan günler sonra batıya, dağlara gitti. Jenny kendini hemen kaya
  tırmanışı, dağcılık ve kayak gibi sporlara verdi ve şimdi bir Başkalarının
  da aynı şeyi yapmasına yardımcı olmak için yerel dağ kulübü. İdeal ve sık
  kullanılan uzak çalışma alanları arasında Rockies'in geniş manzaraları ve
  köpeği Sam ile yürüyüş molaları yer alıyor.`,
      picture:
        'https://www.switchbacktravel.com/sites/default/files/Jenny%20Abbeg%20(Switchback%20Travel).jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
