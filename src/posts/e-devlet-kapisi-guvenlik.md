---
layout: post.njk
title: "e-Devlet Kapısı: doğru fikir, ama görünüşü ve altyapısı güveni zedeliyor"
description: Tüm idari işlemleri tek bir portalda toplama fikri iyi olsa da, e-Devlet Kapısı'nın eski görünümü ve altyapısı, kullanıcıları sahte kopyalara ve dolandırıcılığa karşı savunmasız bırakıyor.
date: 2026-09-14
tags:
  - posts
  - turkey
  - security
  - policy
---
Tüm resmi işlemleri — nüfus kayıtlarından vergi beyannamesine, sağlık raporlarından askerlik
durum belgesine kadar — tek bir portalda toplama fikri gerçekten iyi bir fikir. e-Devlet
Kapısı'nın (turkiye.gov.tr) arkasındaki vizyon doğru: vatandaşın onlarca farklı kurumun
onlarca farklı sistemiyle uğraşmak yerine, tek bir kimlik doğrulamasıyla hepsine erişebilmesi.
Sorun vizyonda değil, o vizyonun nasıl inşa edildiğinde.

## Görünüş de bir güvenlik sinyalidir

Bir mühendis olarak, bir web sitesinin "eski görünmesi"nin sadece estetik bir mesele olmadığını
düşünüyorum. Modern bankacılık ve devlet portalları, tutarlı bir tasarım dili, güncel TLS
sertifikaları, modern form doğrulama ve tutarlı bir marka kimliği üzerinden kullanıcıya
örtük bir güven sinyali veriyor — "burası gerçek" hissi, aslında arka planda çalışan mühendislik
disiplininin görünür yüzü.

e-Devlet Kapısı'nın arayüzü ise yıllardır büyük ölçüde aynı, eski nesil form odaklı, tutarsız
sayfa düzenlerinden oluşuyor. Bu sadece "çirkin" olması meselesi değil — asıl sorun, gerçek
sitenin görünümünün, taklit edilmesi bu kadar kolay bir kalıpta olması. Bir sahtekarın, gerçek
sitenin karmaşık, modern güvenlik katmanlarını taklit etmesi zor olurdu; ama sade, eski
tasarımlı bir form sayfasını birebir kopyalamak çok daha kolay.

## Sahte kopyalar gerçek bir tehdit

Bu teorik bir endişe değil. 2026'nın başında, sahte bir e-Devlet ve TOKİ web sitesi üzerinden
yürütülen bir dolandırıcılık şebekesi, 81 ilde "başvuru ücreti", "depozito" ve "sigorta işlem
bedeli" adı altında vatandaşlardan yaklaşık 1,5 milyar TL çaldı. Samsun Cumhuriyet
Başsavcılığı'nın yürüttüğü soruşturmada dokuz şüpheli gözaltına alındı. Bunun yanında, sahte
e-Devlet SMS'leri ve UETS (Ulusal Elektronik Tebligat Sistemi) tuzakları üzerinden kimlik
bilgisi çalma girişimleri artık kendi başına bir hukuki danışmanlık konusu haline geldi — bu da
sorunun ne kadar yaygın olduğunu gösteriyor.

Bu saldırıların işe yaramasının bir nedeni de şu: gerçek sitenin kendisi zaten sade, eski
moda ve tutarsız bir görünüme sahip olduğu için, kullanıcılar "gerçek" ile "sahte" arasındaki
farkı görsel olarak ayırt etmekte zorlanıyor. Modern, tutarlı bir tasarım sistemi tek başına
kimlik hırsızlığını önlemez, ama saldırganın işini kolaylaştıran bir faktörü ortadan kaldırır.

## Bu, 2016'daki sızıntıyla aynı örüntünün parçası

Bu konuyu [Türkiye'nin e-devlet altyapısı hâlâ 2005'in varsayımlarıyla çalışıyor](/posts/turkey-government-legacy-tech/)
yazımda da ele almıştım: 2016'da yaklaşık 50 milyon vatandaşın T.C. kimlik bilgileri
internete sızdırıldı. O olaydan bu yana geçen on yılda, e-Devlet'in temel kullanıcı deneyimi ve
görsel kimliği köklü bir şekilde değişmedi. Bir sistemin güvenlik mimarisini güncellemek başka
bir şey, kullanıcı arayüzünü ve kullanıcı deneyimini modernize etmek başka bir şey — ama ikisi
birbirine bağlı: kötü tasarlanmış bir arayüz, kullanıcıyı fark etmeden riskli davranışlara
(sahte bağlantılara tıklamak, sahte formlara bilgi girmek) sürüklemeyi kolaylaştırıyor.

## Mühendislik disiplini eksikliğinin gösterdiği şey

e-Devlet gibi bir sistemin arayüzünün yıllarca aynı kalması, kaynak eksikliğinden değil,
öncelik eksikliğinden kaynaklanıyor gibi görünüyor. Türkiye'nin bu ölçekte bir dijital
dönüşümü hayata geçirebilecek mühendislik kapasitesi olduğu açık — sorun kapasite değil,
kullanıcı deneyimini ve görsel güven sinyallerini bir güvenlik önceliği olarak görmemek.
Sonuç, iyi niyetli bir fikrin, onu koruyabilecek mühendislik disipliniyle desteklenmemesi:
vatandaşlar merkezi bir sisteme güvenmeye teşvik ediliyor, ama o sistemin görünümü ve
kullanıcı deneyimi, bu güveni istismar etmeyi kolaylaştıran bir zemin hazırlıyor.

## Kaynaklar

- [Sahte e-Devlet sitesiyle 1,5 milyar lira dolandırıcılık: Dokuz gözaltı — Diken](https://www.diken.com.tr/sahte-e-devlet-sitesiyle-15-milyar-lira-dolandiricilik-dokuz-gozalti/)
- [Sahte E-Devlet SMS Dolandırıcılığı — Hukuki Rehber 2026](https://bilalalyar.av.tr/sahte-e-devlet-sms-dolandiriciligi-rehber-2026/)
- [Dolandırıcıların e-Devlet ve UETS tuzağına dikkat — Yeni Şafak](https://www.yenisafak.com/gundem/e-devlet-ve-uets-tuzagina-dikkat-tek-tikla-tum-bilgileriniz-gidebilir-4846675)
- [2016 MERNIS scandal — Wikipedia](https://en.wikipedia.org/wiki/2016_MERNIS_scandal)
- [E-Government in Turkey — Wikipedia](https://en.wikipedia.org/wiki/E-Government_in_Turkey)
