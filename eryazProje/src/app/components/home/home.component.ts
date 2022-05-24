import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Outdoor Ekipman Satın Almak İçin En İyi Siteler';
  websites: any = [
    {
      id: '1',
      title: 'Amazon.com',
      shipping: 'Değişir, ancak genellikle ücretsiz Amazon Prime ile 2 gün',
      returnPolicy:
        'Yeni, açılmamış ürünler için 30 gün (üçüncü taraf satıcı politikaları değişiklik gösterir)',
      internationalShipping: 'Evet',
      like: 'Değerli fiyatlandırma ve büyük seçim.',
      dont: 'Üst düzey dış mekan ekipmanları için genellikle başka yerlere bakarız.',
      src: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Informational%20Articles/Best%20Gear%20Sites/Amazon%20logo.jpg',
      url: 'https://www.amazon.com/?tag=20sbt-20',
    },
    {
      id: '2',
      title: 'Backcountry.com',
      shipping: 'Ücretsiz standart (50$+)',
      returnPolicy:
        'Yeni, kullanılmamış teçhizat için ömür boyu (para iadesi); Kullanılmış teçhizat için 30 gün',
      internationalShipping: 'Hayır',
      like: 'Çok sayıda üst düzey teçhizat dahil olmak üzere kapsamlı envanter.',
      dont: 'Diğer siteler ürün özelliklerini daha net bir şekilde sunar.',
      src: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Informational%20Articles/Best%20Gear%20Sites/Backcountry%20logo.jpg',
      url: 'https://www.backcountry.com/?avad=52463_e28baab09&utm_medium=Affiliate&utm_source=www.switchbacktravel.com&utm_campaign=Custom+Link&utm_term=content',
    },
    {
      id: '3',
      title: 'Evo.com',
      shipping: 'Ücretsiz standart (50$+)',
      returnPolicy: 'Yeni, kullanılmamış ürünler için 366 gün',
      internationalShipping: 'Evet',
      like: 'Kayakçılar, snowboardcular ve dağ bisikletçileri için en kapsamlı donanım koleksiyonlarından biri. ',
      dont: 'Yaz sporları için sınırlı teklifler. ',
      src: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Informational%20Articles/Best%20Gear%20Sites/Evo%20logo.jpg',
      url: 'https://www.evo.com/?avad=52463_d28b8e05d&a=Avantlink&utm_source=AL&utm_medium=Affiliate&utm_campaign=38931',
    },
    {
      id: '4',
      title: 'REI Kooperatifi',
      shipping: 'Ücretsiz standart (50$)',
      returnPolicy: '1 Yıl',
      internationalShipping: 'Evet',
      like: 'Kapsamlı fiziksel varlık,mükemmel müşteri hizmeti ve cömert iade politikası.',
      dont: 'Marka seçimi bazen sınırlıdır ve özellikle kış aylarında',
      src: 'https://www.switchbacktravel.com/sites/default/files/image_fields/Informational%20Articles/Best%20Gear%20Sites/REI%20Co-op%20logo.jpg',
      url: 'https://www.rei.com/?cm_mmc=aff_AL-_-38931-_-52463-_-NA&avad=52463_d28b8df8d',
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
