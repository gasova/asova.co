---
layout: post.njk
title: "Apple Pay Türkiye'de neden hâlâ çalışmıyor — ve bunun bize maliyeti ne"
description: Apple Pay'in Türkiye'de neden hiç hayata geçmediğine, iPhone'ların neden dünyanın en pahalıları arasında olduğuna ve bunun arkasındaki tercihlere dair bir bakış.
date: 2026-09-12
tags:
  - posts
  - turkey
  - policy
  - fintech
---
Telefonla temassız ödeme gibi basit bir şeyin Türkiye'de hâlâ resmî olarak çalışmaması, bir
mühendis olarak bakınca insanı "asıl sorun ne" diye düşündürüyor — çünkü sorun teknoloji değil.

## Bu yazıyı neden kaleme aldım

Apple Pay'in Türkiye'de neden olmadığı konusu sosyal medyada sürekli dönüyor, ve maalesef
etrafta epey yanlış bilgi dolaşıyor — kimi zaman "Apple istemiyor", kimi zaman "hükümet
yasakladı" gibi basitleştirilmiş ya da gerçeği yansıtmayan iddialar şeklinde. Kullanıcıların ve
tüketicilerin haklı bir hayal kırıklığı var, ama bu hayal kırıklığı çoğu zaman yanlış bir
hedefe, ya da eksik bir resme yöneliyor. Bu yazıyı, meseleyi kaynaklarıyla birlikte,
basitleştirmeden ama anlaşılır şekilde ortaya koymak için yazdım — ne Apple'ı ne de bankaları ya
da düzenleyicileri tek başına suçlamak için değil, aslında kimin elinde ne kadar söz hakkı
olduğunu ve bu çıkmazın gerçekte nereden kaynaklandığını netleştirmek için.

## Bu bir teknik problem değil

Apple Pay dünyanın onlarca ülkesinde on yıla yakın süredir hayatta. Türkiye'de satılan güncel
her iPhone'un NFC donanımı bunu destekliyor. Bankalar modern çekirdek bankacılık altyapılarıyla
çalışıyor. Böyle bir yaygınlaşmayı normalde engelleyecek teknik parçaların hiçbiri eksik değil.

Eksik olan anlaşma. Apple'ın standart komisyon modeli — işlem başına yaklaşık %0,15-%0,5
aralığında olduğu söyleniyor — yüksek enflasyon ortamında zaten dar marjlarla çalışan Türk
bankalarıyla uyuşmuyor ve iki taraf da bugüne kadar bunu değiştirecek kadar baskı hissetmedi.
Buna bir de Apple'ın cüzdan ekosistemiyle neredeyse hiç entegrasyonu olmayan yerli kart şeması
TROY'u ve ödeme verisinin fiziksel olarak Türkiye sınırları içinde kalmasını isteyen, Apple'ın
merkezi işleme modeliyle tam örtüşmeyen yerelleştirme kurallarını eklediğinizde, teknolojiyle
hiç ilgisi olmayan, yıllardır süren bir çıkmaz ortaya çıkıyor.

Bu yerelleştirme refleksinin arkasında tesadüfi olmayan bir zamanlama da var. Türkiye, Ekim
2021'den Haziran 2024'e kadar, kara para aklamayla mücadele konusunda yetersiz bulunan ülkeleri
listeleyen FATF (Mali Eylem Görev Gücü) "gri listesi"nde yer aldı. Yani Apple ile bankalar
arasındaki müzakerelerin tıkandığı yılların neredeyse tamamında, Türk bankacılık sistemi zaten
uluslararası ölçekte ekstra denetim ve şüpheyle karşılanıyordu. Böyle bir dönemde düzenleyicilerin
veri ve ödeme akışlarını daha sıkı kontrol altında tutma isteği anlaşılır olsa da, sonuç yine aynı
kaldı: dışa kapanma refleksi, modern bir ödeme deneyimini içeri almak yerine dışarıda tutmayı
seçti.

Sonuç olarak Türkiyeli kullanıcılar kendi yamalarını kendileri üretti: Turkcell destekli
Paycell'in indirme sayısının 26 milyonu geçtiği söyleniyor; Akbank destekli Tosla da benzer bir
rol üstleniyor. Çoğunlukla NFC dokunuşu yerine QR kod üzerinden çalışıyorlar. Ama bunlar bir
ürün tercihinden çok, bir müzakere başarısızlığının geçici çözümü.

## Daha azına daha fazla ödemek

İşin tuhaf tarafı, bu pazarda Apple'ın fiyat dışı bırakıldığı ya da önceliksizleştirildiği bir
durum söz konusu değil. Türkiye, son dönemde dolar bazında dünyanın en pahalı iPhone'larına ev
sahipliği yaptı — 256 GB'lık bir iPhone 17 Pro, cihazın fiyat dilimine göre %50'ye kadar çıkan
özel tüketim vergisi, standart %20 KDV, ek bir RTÜK/TRT payı ve yurt dışından alınan cihazlar
için yaklaşık 1000 dolar civarında sabit bir IMEI kayıt ücreti eklendiğinde, ABD fiyatının iki
katından fazlasına, 2500 doları aşan seviyelere ulaşabiliyor. Nasıl ölçtüğünüze bağlı olarak,
tek bir cihaz ortalama net maaşın birkaç ayına denk gelebiliyor.

Yani ortaya çıkan tablo şu: donanım için dünyanın en yüksek fiyatlarından birini ödeyip, o
donanımı asıl değerli kılan yazılım katmanına sahip olamamak. Bu fark, altındaki düzenleyici
gerekçelerden çok daha fazla, bu telefonları her gün kullanan insanlar tarafından fark ediliyor.

## Eski teknolojiyi zorunlu kılmak, "rekabeti korumak" değildir

Bu tablonun görmezden gelinen bir tarafı daha var: sorun sadece Apple ile bankalar arasındaki
komisyon anlaşmazlığı değil. Türkiye'deki pek çok resmî ve yarı resmî dijital sistem —
bankacılık, e-devlet, imza altyapısı — hâlâ eski donanım ve yazılımlara bağımlı, ve bu bağımlılık
yalnızca kurumları değil, o sistemleri kullanmak zorunda olan sıradan kullanıcıları da güncel
olmayan araçlara mahkûm ediyor.

BDDK gibi kurumlar bu durumu genellikle "rekabeti korumak" ya da "veri güvenliğini sağlamak"
gerekçesiyle savunuyor. Ama pratikte olan şey düzenlemek değil, engellemek: yerelleştirme ve
onay süreçleri, modern kimlik doğrulama ve ödeme teknolojilerinin önüne set çekiyor, buna
karşılık eski, daha az denetlenen ve daha az güncellenen sistemlerin kullanılmaya devam etmesine
göz yumuyor. Sonuç, iddia edilenin tam tersi oluyor: modern teknolojiyi dışarıda tutmak güvenliği
artırmıyor, tam tersine eski ve güvenlik açıkları daha iyi bilinen sistemlere olan bağımlılığı
uzattığı için saldırı yüzeyini büyütüyor.

Bunun soyut bir endişe olmadığını 2016'da zaten gördük. Panama Belgeleri'nin dünya gündemini
sarstığı aynı ay içinde, Türkiye'de de yaklaşık 50 milyon vatandaşın T.C. kimlik bilgilerinin
internete sızdırıldığı ortaya çıktı — ülke nüfusunun neredeyse tamamına yakınının kimlik
verisiydi bu. O dönemki resmî tepki, altyapıyı modernize etmek ya da hesap verebilirliği
artırmak değil, olayı küçümsemek ve sızıntının kaynağını tartışmaktan ibaret kaldı. Yıllar sonra
bugün gelinen noktada da tercih hâlâ aynı yönde: dışa açılmak ve modernize olmak yerine içe
kapanmak, dış oyuncuları ve modern standartları dışarıda tutmak.

Bir mühendis olarak bunu şöyle okuyorum: bu tercihler halkın güvenliğini önceliklendirmiyor.
Bankaların marjlarını, yerli oyuncuların pazar payını ve düzenleyicinin kontrol alanını
koruyorlar — ki bunlar meşru kaygılar olabilir, ama halkın verisini korumakla aynı şey değil.
Kimlik verileri zaten bir kere büyük ölçekte çalınmışken, çözüm olarak modern, denetimi daha
sıkı ödeme ve kimlik doğrulama teknolojilerini dışarıda tutmayı seçmek, güvenliği değil,
statükoyu koruma tercihidir.

## Aslında sadece iki gerçekçi yol var

Bu çıkmazı çözmenin, ortada dolanıp duran birçok teknik detayın ötesinde, aslında sadece iki
gerçekçi yolu var — ve ikisi de dışarıdan, Türkiye'nin kendi tercihiyle gelmiyor.

Birincisi, Avrupa Birliği'nin izlediği yol: düzenleyici baskıyla Apple'ı NFC donanımını üçüncü
taraf uygulamalara açmaya zorlamak. AB'nin Dijital Pazarlar Yasası (Digital Markets Act)
kapsamında Apple, 2024 yılında Avrupa Komisyonu'na verdiği taahhütlerle iPhone'daki "temas et ve
geç" (tap-and-go) teknolojisini üçüncü taraf cüzdan ve ödeme uygulamalarına açmayı kabul etti.
Bu, Paycell veya Tosla gibi yerli uygulamaların, Apple'ın kendi cüzdanına hiç ihtiyaç duymadan
doğrudan NFC üzerinden ödeme alabilmesi anlamına geliyor — Apple'la komisyon pazarlığına
girmeden. BDDK ve BTK'nın elinde de teorik olarak buna benzer bir düzenleyici baskı aracı var;
kullanmayı tercih etmiyorlar.

İkincisi, çok daha basit olan yol: mevcut Apple Pay modelini, komisyon oranıyla birlikte olduğu
gibi kabul etmek. Bankalar için bu, marjlardan küçük bir pay vermek anlamına geliyor; ama
karşılığında kullanıcılar için gerçek NFC tabanlı bir cüzdan deneyimi, ve muhtemelen dolandırıcılık
ve kart bilgisi hırsızlığına karşı Apple'ın tokenizasyon altyapısının getirdiği ek güvenlik
katmanı geliyor.

Türkiye'nin şu ana kadar yaptığı seçim ise üçüncü, tanımlanmamış bir yol: ne AB tarzı bir
düzenleyici baskı uygulamak, ne de mevcut modeli kabul etmek — bunun yerine yıllarca süren bir
çıkmazı olduğu gibi bırakmak, ve bu boşluğu yerli QR tabanlı uygulamalarla doldurmak. Bu üçüncü
yol, ne bankaların ne de kullanıcıların gerçekten istediği bir sonuç; sadece hiçbir tarafın
diğer ikisini seçecek kadar baskı hissetmediği bir denge noktası.

## İçeriden bakınca görünen

Bunun aslında Apple'a veya bankalara özgü bir sorun olduğunu düşünmüyorum — yeterince düzenleyici
sürtünme, yeterince kur istikrarsızlığı ve yeterince yerleşik alternatif altyapı olduğunda, hiçbir
tarafın anlaşmazlığı kapatmak için gerçek bir baskı hissetmediği bir durumla karşı karşıyayız.
Paycell ve Tosla var ve çoğunlukla işe yarıyor; bu yüzden normalde bir anlaşmayı zorlayacak o
akut sıkıntı ortadan kalkmış durumda.

Yazılım tarafında yıllardır gözlemlediğim şu ki, "yeterince iyi" bir geçici çözüm genellikle asıl
entegrasyonu düzeltme baskısını sessizce ortadan kaldırıyor. Bir ülkenin tüm ödeme altyapısı
ölçeğinde de aynı dinamik işliyor; sadece geçici çözümün indirme sayısı çok daha yüksek oluyor.

## Kaynaklar

- [Turkey has world's most expensive iPhone as taxes and inflation push up tech prices — Turkish Minute](https://www.turkishminute.com/2026/07/15/turkey-has-worlds-most-expensive-iphone-as-taxes-and-inflation-push-up-tech-prices/)
- [iPhone Duo costs 137 pct more in Turkey than in the US — Turkish Minute](https://turkishminute.com/2026/09/10/iphone-duo-costs-137-pct-more-in-turkey-than-in-the-us/)
- [Apple Pay in Turkey: 2026 Status, Workarounds & Alternatives — Turkpidya](https://turkpidya.com/apple-pay-in-turkey-your-full-guide/)
- [2016 MERNIS scandal — Wikipedia](https://en.wikipedia.org/wiki/2016_MERNIS_scandal)
- [Commission accepts commitments by Apple opening access to 'tap and go' technology on iPhones — European Commission](https://ec.europa.eu/commission/presscorner/api/files/document/print/fin/ip_24_3706/IP_24_3706_EN.pdf)
- [FATF removes Turkey from money laundering 'gray list' — CNBC](https://www.cnbc.com/2024/06/28/fatf-removes-turkey-from-money-laundering-gray-list.html)
- [Turkey to investigate massive leak of personal data — Al Jazeera](https://www.aljazeera.com/news/2016/4/6/turkey-to-investigate-massive-leak-of-personal-data)
