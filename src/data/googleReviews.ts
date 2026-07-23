/**
 * Google işletme profilindeki müşteri yorumları (elle seçilmiş / güncellenir).
 * Kaynak: Google Haritalar ekran görüntüleri
 */
export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  /** Örn. "2 ay önce" — Google’daki göreli tarih */
  relativeTime?: string;
};

export const GOOGLE_RATING = {
  value: 5,
  /** Google profilindeki toplam yorum sayısı — değişince güncelleyin */
  count: 98,
} as const;

/**
 * Ana sayfada gösterilecek seçilmiş yorumlar.
 * Google’dan kopyalanan gerçek metinlerle doldurulur.
 */
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: "Osman Aldemir",
    rating: 5,
    relativeTime: "2 gün önce",
    text: "Bu numarayı İnternete gördüm cok memnun oldum",
  },
  {
    author: "Efe Timur",
    rating: 5,
    relativeTime: "bir hafta önce",
    text: "Orhan Usta ve ekibinden çok memnun kaldık. Binamızın fosseptik/gider sistemi için dalgıç pompa kurulumu, kuyu temizliği, tahliye hattı ve elektrik bağlantısı gibi detaylı bir iş yaptılar. Süreç boyunca ilgili, çözüm odaklı ve titiz …",
  },
  {
    author: "Alptuğ Ulus",
    rating: 5,
    relativeTime: "bir ay önce",
    text: "İvedi bir şekilde gelip sorunumuzu çözdüler çok teşekkür ederim.",
  },
  {
    author: "Mehmet Enes Alphan",
    rating: 5,
    relativeTime: "bir ay önce",
    text: "Orhan beye teşekkür ediyorum işimizi hallettiği için işi hakkıyla yapan nadir işletmelerden",
  },
  {
    author: "Emre Bolat",
    rating: 5,
    relativeTime: "bir ay önce",
    text: "Sorun çözümündeki hız ve tecrübenizden dolayı teşekkürler",
  },
  {
    author: "gokhan çömezoglu",
    rating: 5,
    relativeTime: "bir ay önce",
    text: "Çok iyi çok başarılı",
  },
  {
    author: "Mehmet Diker",
    rating: 5,
    relativeTime: "4 ay önce",
    text: "Aradım 1 saat içinde geldiler tıkanık giderimizi açtılar tavsiye ederim",
  },
  {
    author: "oguz ersozoglu",
    rating: 5,
    relativeTime: "4 ay önce",
    text: "Arkadaslari internetten buldum islerini temiz yaptilar tavsiye ederim.",
  },
  {
    author: "Sahil Kasabası",
    rating: 5,
    relativeTime: "4 ay önce",
    text: "İşini iyi yapan düzgün çalışan bir işletme.",
  },
  {
    author: "Caner",
    rating: 5,
    relativeTime: "6 ay önce",
    text: "Tuvaletim tıkandı arkadaşlar geldi giderimi açtılar ve kamera ile baktılar pimaşlar çökmüş tespit ettiler sıkıntımı giderdiler",
  },
  {
    author: "Turan Kaya",
    rating: 5,
    relativeTime: "7 ay önce",
    text: "intenetten buldum logarimiz tıkandı kısa sürede gelip müdahale ettiler sorun çözüldü prafösönel bi şekilde açtılar logarı işlerinde çok uzmanlar ihtiyacı olan gönül rahatligiyla arayıp cagirabilirler tavsiye ederim..",
  },
  {
    author: "Deniz Baykara",
    rating: 5,
    relativeTime: "7 ay önce",
    text: "Başarılı",
  },
  {
    author: "mustafa koç",
    rating: 5,
    relativeTime: "8 ay önce",
    text: "Esenyurt bölgesinde bulunan lojistik depomuzun bahçesini su bastı netten dağdelen kuka Vidanjor firmasını buldum ve aradım 1 saate kalmadan geldiler ve kısa sürede logardaki tıkanıklığa müdahale edildi ve açtılar.",
  },
  {
    author: "Taylan Yigit",
    rating: 5,
    relativeTime: "8 ay önce",
    text: "Numarayı internetten buldum logar işimizi tıkanıklık işimizi kamera ve robot ile çözdü Orhan Beye teşekkür ediyoruz siz de tercih edebilirsiniz",
  },
  {
    author: "Ümit Karadağ",
    rating: 5,
    relativeTime: "8 ay önce",
    text: "Valla aylardır kaç yeri aradık kimsenin çözemediğini Orhan bey ve Volkan bey bir kaç saat içinde çözdü. Parasını hakeden bir işletme",
  },
  {
    author: "Metin Arslan",
    rating: 5,
    relativeTime: "8 ay önce",
    text: "Uzun yıllardır birlikte çalıştığımız çözüm ortağımızdır. Ne zaman başımız sıkışsa ilk başvurduğumuz yerdir. Kendileri hızlı bir şekilde sorunun olduğu yere intikal ederler. Bir kaç işyerimiz var, nerede bir sorunumuz olursa olması gereken en iyi şekli ile sorunu giderip çözüm üretiyorlar. Şiddetle tavsiye ederim.",
  },
  {
    author: "Muhammed can yavuz",
    rating: 5,
    relativeTime: "8 ay önce",
    text: "Son zamanlarda ustalık hizmeti olarak aldığım en iyi hizmetti diyebilirim problemi tek seferde bulup çözüme kavuşturdular çok memnun kaldım tavsiye ediyorum",
  },
  {
    author: "Osman Almalı",
    rating: 5,
    relativeTime: "8 ay önce",
    text: "Hem iletisimleri cok iyi hemde islerini temiz yapıyorlar gönül rahatlığıyla tercih edebilirsiniz.",
  },
  {
    author: "savas akyuz",
    rating: 5,
    relativeTime: "9 ay önce",
    text: "Aradım 1 saat içinde hemen geldiler aylarca çözemediğimiz arızayı tesbit edip gerekeni yaptılar. Orhan bey ve ekibine teşekürler",
  },
  {
    author: "Kurtuluş Şimşek",
    rating: 5,
    relativeTime: "9 ay önce",
    text: "Arkadaşlar merhaba vidanjör kuka servisi lazım oldu Orhan Dağdelen beyle iletişim kurdum ve Orhan bey ve ekibi çok güzel yardımcı oldular herkese tavsiye ederim ben memnun kaldım Orhan bey ve ekibine sonsuz teşekkür ediyorum kuko vidanjör deyince İstanbul avcılar da Orhan Dağdelen ve ekibine sonsuz teşekkürler ellerinize emeğinize sağlık kesinlikle tavsiye ederim",
  },
  {
    author: "Ayhan YAVUZ",
    rating: 5,
    relativeTime: "9 ay önce",
    text: "Orhan bey ve 5 kişilik aile ekibiyle birlikte imkansız dediğimiz tıkanıklar ve gider çöküntüleri bile çevreye rahatsızlık vermeden tabiri caizse yağda kıl çeker gibi işlerini titizlikle ve hızlı şekilde tüm şikayetlerinizi giderdiler kendilerine çok teşekkür ediyorum",
  },
  {
    author: "Zafer Yıldırım",
    rating: 5,
    relativeTime: "9 ay önce",
    text: "Arkadaşları internet buldum logarim tıkanmış ti logari temizlediler giderleri açtılar işlerini güzel yapan ustalar sıkıntıyı kısa sürede çözdüler ellerine sağlık",
  },
  {
    author: "bülent kurnaz",
    rating: 5,
    relativeTime: "9 ay önce",
    text: "Arkadaşın numarasını İnternet ten buldum işini temiz yapıyor piyasa göre fiyatları gayet makul ben hizmetten gayet memnun kaldım tafsiye ederim",
  },
  {
    author: "Volkan Kurnaz",
    rating: 5,
    relativeTime: "9 ay önce",
    text: "Ustayu internet ten buldum binanın balkon giderleri toplanmıştı çakıl tula vs gibi pislkiler gideri tikmiş robot ve kamera ile temizlendi işinin erbabı",
  },
  {
    author: "Ali Halis",
    rating: 5,
    relativeTime: "9 ay önce",
    text: "İnternetten bulduğum usta logar tıkanıklığını açtı kaliteli işçilik güvenilir hizmet tercih edebilirsiniz.",
  },
  {
    author: "Serhat Güzel",
    rating: 5,
    relativeTime: "9 ay önce",
    text: "Geldiler işimi çözdüler Orhan bey ve ekibi teşekkür ederim temiz ve güzel işçilikleri için",
  },
  {
    author: "Ali Kurnaz",
    rating: 5,
    relativeTime: "9 ay önce",
    text: "Orhan Bey ve ekibine temiz ve güzel işçilikleri için teşekkür ederim Ellerine sağlık",
  },
  {
    author: "Recep Güngören",
    rating: 5,
    relativeTime: "10 ay önce",
    text: "Orhan Bey’e referans üzerinde tanıştım ve kendisi ile randevulaştık 20 daireli bir apartmanın yöneticisiyim. Apartmanımızda logar sorunu vardı ama daha önce birkaç kişiye gösterdik ama maalesef çözüm bulamadılar ve bir dünya paramızı aldılar. Orhan Bey’e bu anlamda çok teşekkür ederim geldi ve nokta atışı yaptı arızayı tespit etti ve çok kısa zaman sürecinde logarımızı temizledi ve arızayı profesyonel ekipler ile beraber çözüme ulaştırdılar kendisine çok teşekkür ederim",
  },
  {
    author: "Damla Kurnaz",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Tuvalet giderimiz tıkanmıştı geldiler ve sorunumuzu çözdüler işlerinde gerçekten çok iyiler herşey için teşekkürler",
  },
  {
    author: "Mevlut Gezginer",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Alt yapı kanal ve vidanjör işimizi yaptı Orhan beye teşekkür ederim telavsiye ederim",
  },
  {
    author: "Ahmet Gül",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Gece geç saate tuvaletemiz tıkandı sağolsunlar yardımcı oldular işini düzgün yapan insanlar çok teşekkür ederiz",
  },
  {
    author: "cihan çetin",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Sitenin kanalizasyon gider pimaçları tıkandı internet ten bulduğum arkadaşlar problemi kısa süre de çözduler vidanjör ile teşekkürler",
  },
  {
    author: "Zeynep Dağdelen",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Yağmurdan dolayı evime su basmıştı vidanjör ekibi geldi su tahliye yaptı çok memnun kaldık sizede öneririm",
  },
  {
    author: "Filiz Kurnaz",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Gece geç saatte mutfak giderimiz tıkanmıştı.robot ve kamera yardımı ile problemi giderdiler.teşekkürler",
  },
  {
    author: "Samet Bagi",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Evimizdeki problemi sağolsun hallettiler vidanjör ve kanal işlemi teşekkür ederiz",
  },
  {
    author: "Aydin Yasar Kurnaz",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Çok iyi işçilik işlerini düzgün yapan insanlar garantili hizmet temiz işçilik",
  },
  {
    author: "mehmet dağdelen",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Logar tıkandı vidanjör kuka hizmeti ile açıldı çok memnun kaldık",
  },
  {
    author: "Tuncay Kocak",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Arkadaşlar internet ten buldum işlerini iyi yapan ustalar",
  },
  {
    author: "A.Eray BOSTAN",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "İşleri düzgün yapan insanlar internetten ulaştım.islerinde iyiler.tsk",
  },
  {
    author: "Muhammed",
    rating: 5,
    relativeTime: "bir yıl önce",
    text: "Lavabo muz tıkandı sorunumuzu yaptılar teşekkür ederiz",
  },
];
