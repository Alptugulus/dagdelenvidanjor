export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "kanal-tikanikligi-aninda-ne-yapilmali",
    title: "Kanal Tıkanıklığı Anında Ne Yapılmalı? Ev ve İş Yeri İçin Pratik Rehber",
    excerpt:
      "Kanal tıkanıklığında yanlış müdahale hem maliyeti artırır hem de taşkına yol açabilir. Doğru adımlar ve profesyonel destek zamanı bu rehberde.",
    date: "07 Mayıs 2026",
    author: "Vidanjor Teknik Ekibi",
    image: "/blog-1.png",
    content: `
## İlk 10 dakikada yapılması gerekenler

Kanal tıkanıklığı fark edildiğinde ilk kural panik yapmadan su kullanımını durdurmaktır.  
Özellikle mutfak ve banyo giderlerinde geri tepme başladıysa, yeni su vermek taşkın riskini hızla artırır.

1. Lavabo, duş ve tuvalette su kullanımını kesin.
2. Gider kapağı çevresindeki birikintiyi güvenli şekilde temizleyin.
3. Elektrik prizlerine yakın su birikimi varsa alanı izole edin.
4. Kimyasal açıcıları peş peşe kullanmayın.

## Hangi durumlarda acil ekip çağrılmalı?

Şu belirtiler varsa profesyonel cihazla müdahale gerekir:

- Suyun hiç gitmemesi veya anında geri gelmesi
- Birden fazla noktada aynı anda tıkanıklık
- Yoğun kötü koku ve taşma
- Rögar kapağından su yükselmesi

## Neden ev tipi çözümler yetersiz kalır?

Pompa, spiralli makine ve görüntüleme kamerası olmadan yapılan işlemler çoğu zaman sadece yüzeysel rahatlama sağlar.  
Ana hat tıkanıklıkları kısa sürede tekrar eder ve daha büyük maliyet oluşturur.

## Profesyonel müdahalenin avantajı

Vidanjor ekipleri tıkanıklığın noktasını tespit eder, uygun yöntemle açar ve hattın genel durumuna dair net bilgi sunar.  
Böylece aynı sorunun tekrar etme olasılığı ciddi biçimde azalır.
    `,
  },
  {
    id: 2,
    slug: "fosseptik-cekimi-ne-zaman-gerekir",
    title: "Fosseptik Çekimi Ne Zaman Gerekir? Taşma Yaşamadan Önlem Alın",
    excerpt:
      "Fosseptik dolumunu son ana bırakmak koku, taşma ve çevresel risk oluşturur. Doğru periyot ve erken uyarı belirtilerini öğrenin.",
    date: "07 Mayıs 2026",
    author: "Saha Operasyon Ekibi",
    image: "/blog-2.png",
    content: `
## Fosseptik çekiminde doğru zamanlama neden kritik?

Fosseptik sistemlerinde geciken çekim, taşma ve kötü koku dışında altyapı hatlarında geri basınca neden olabilir.  
Bu durum hem hijyen hem de maliyet açısından işletmeler ve binalar için risklidir.

## Ortalama çekim periyodu nasıl belirlenir?

Tek bir doğru periyot yoktur; kullanım yoğunluğu belirleyicidir:

- Düşük yoğunluk: 2-3 ay
- Orta yoğunluk: 1-2 ay
- Yüksek yoğunluk (işletme/santiye): 2-4 hafta kontrol

## Geç kaldığınızı gösteren işaretler

- Rögar çevresinde yoğun koku
- Tuvalet ve giderlerde yavaş akış
- Geri tepme ve fokurdama sesleri
- Kapağa yakın bölgede nemlenme/sızıntı

## Planlı çekimin avantajı

Planlı vidanjör çekimi:

- Acil taşma riskini düşürür
- Beklenmedik maliyetleri azaltır
- Kullanım sürekliliği sağlar
- Çevresel şikayetlerin önüne geçer

Vidanjor ekibi sahada doluluk ve akış durumuna göre size uygun bir bakım takvimi önerir.
    `,
  },
  {
    id: 3,
    slug: "isletmeler-icin-yag-tutucu-bakim-rehberi",
    title: "Restoran ve Kafeler İçin Yağ Tutucu Bakım Rehberi",
    excerpt:
      "Yağ tutucu temizliği geciktiğinde gider tıkanıklığı, kötü koku ve operasyon aksaması kaçınılmaz olur. İşletmeler için net bakım planı burada.",
    date: "07 Mayıs 2026",
    author: "Kurumsal Hizmetler Birimi",
    image: "/blog-3.png",
    content: `
## Yağ tutucu neden düzenli temizlenmeli?

Mutfak atıkları zamanla yağ tutucu içinde katman oluşturur.  
Temizlik yapılmadığında sistem verimsizleşir, yağ gider hattına kaçar ve tıkanıklık oluşturur.

## Hangi işletmeler daha sık bakım yapmalı?

- Yüksek servis trafiği olan restoranlar
- Endüstriyel mutfaklar
- Toplu yemek üretim alanları
- AVM içi yiyecek-içecek işletmeleri

## Önerilen bakım aralıkları

- Düşük yoğunluk: Aylık kontrol
- Orta yoğunluk: 2 haftada bir
- Yüksek yoğunluk: Haftalık bakım

## Düzenli bakımın işletmeye katkısı

Periyodik yağ tutucu temizliği ile:

- Tıkanıklık ve koku şikayetleri azalır
- Mutfak operasyonu kesintiye uğramaz
- Acil müdahale maliyeti düşer
- Hijyen standartları korunur

Vidanjor kurumsal bakım planlarıyla işletmenize uygun periyot belirlenir ve düzenli ziyaret takvimi oluşturulur.
    `,
  },
];
