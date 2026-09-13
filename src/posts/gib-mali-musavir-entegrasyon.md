---
layout: post.njk
title: "gib.gov.tr ile mali müşavirler arasındaki eksik entegrasyon, bize PIN kodu paylaştırıyor"
description: Küçük işletmeler ve bireysel girişimciler için zorunlu olan mali müşavirlik hizmeti, gib.gov.tr ile düzgün bir entegrasyon eksikliği yüzünden mükelleflerin e-Devlet PIN kodunu paylaşmasına dayanıyor — ve bu, göründüğünden çok daha ciddi bir güvenlik açığı.
date: 2026-09-14
tags:
  - posts
  - turkey
  - security
  - fintech
---
Türkiye'de küçük işletme sahipleri ve bireysel girişimciler için mali müşavir (SMMM) tutmak
çoğu zaman zorunlu — vergi beyannamelerinin belirli bir usule göre, yetkili bir meslek mensubu
aracılığıyla verilmesi gerekiyor. Bu, prensipte makul bir düzenleme: karmaşık vergi mevzuatını
her esnaf ve girişimcinin tek başına takip etmesini beklemek gerçekçi değil. Ama bu zorunluluğun
pratikte nasıl işlediğine bakınca, karşımıza tuhaf bir güvenlik açığı çıkıyor.

## Resmi bir mekanizma var, ama kapsamı dar

GİB'in aslında bunun için resmi bir çözümü var: "Elektronik Beyanname Aracılık ve Sorumluluk
Sözleşmesi." Bu sözleşmeyle bir mükellef, kendi e-Devlet şifresini hiç paylaşmadan, yetkili bir
mali müşavirin kendi kimlik bilgileriyle beyannamelerini GİB sistemine göndermesini sağlayabiliyor.
Yani teoride, PIN paylaşımına hiç gerek yok — sistem bunun için zaten tasarlanmış.

Sorun şu ki bu sözleşme yalnızca elektronik beyanname gönderimini kapsıyor. Bir mali müşavirin
günlük işinin çoğu bunun dışında kalıyor: SGK işlemleri, e-Devlet üzerinden yapılan çeşitli
sorgulamalar, geçmiş yazışmaların kontrolü, tebligatların takibi ve benzeri işlemler için resmi
sözleşme kapsamı yetersiz kalıyor. Bu boşluk, pratikte mükelleflerin mali müşavirlerine kendi
e-Devlet şifrelerini vermesiyle dolduruluyor — ki bu, ne GİB'in ne de mali müşavirlik mesleğinin
resmi olarak önerdiği bir yöntem.

## PIN paylaşımı normalleşmiş bir pratik haline geldi

Bunun ne kadar yaygın olduğunu, "muhasebeciye e-Devlet şifresi verilir mi" konusunun yıllardır
forumlarda ve tartışma platformlarında dönen, defalarca sayfa süren bir tartışma konusu olmasından
anlıyoruz. Bu, marjinal bir istisna değil — küçük işletme sahiplerinin çoğunun günlük olarak
karşılaştığı, "böyle yapılıyor çünkü alternatifi yok" diye kabullenilen bir pratik.

Sorun şu ki bir e-Devlet şifresi sadece vergi beyannamesine erişim sağlamıyor — kimlik bilgileri,
sağlık kayıtları, tapu ve gayrimenkul işlemleri, adli sicil, araç kayıtları dahil olmak üzere
neredeyse tüm resmi kimliğinizin dijital karşılığına tam erişim anlamına geliyor. Dar bir işlem
için (beyanname gönderimi) bu kadar geniş bir yetkiyi paylaşmak, orantısız bir risk almak demek.

## Somut risk: PIN paylaşımı sadece teorik bir tehlike değil

Bunun soyut bir endişe olmadığını gösteren vakalar var. Gaziantep'te polis, çalınan bir e-Devlet
şifresiyle kimlik benzeri biri kullanılarak 5.100 metrekarelik bir arazinin dolandırıcılar
tarafından satılmaya çalışıldığı, 100.000 TL'lik bir kapora tahsil edildiği bir vakayı
duyurmuştu. Bu, e-Devlet şifresinin tek başına ne kadar geniş yetkiler verdiğinin ve çalındığında
ne kadar ciddi zararlara yol açabileceğinin somut bir örneği.

Bir mali müşavirin kendisi kötü niyetli olmasa bile, her paylaşılan şifre bir ek risk noktası
demek: müşavirin kendi sistemlerinin güvenliği, çalışanlarının erişim disiplini, ya da basit bir
oltalama saldırısına karşı savunmasızlığı, doğrudan mükellefin tüm kimlik verisini riske atıyor.
Zorunlu bir hizmet için mükelleflerin bu riski kabul etmek zorunda bırakılması, sistemin
tasarımındaki bir eksikliğin faturasının kullanıcıya kesilmesi anlamına geliyor.

## Asıl çözüm: kapsamlı ve kapsam sınırlı bir yetkilendirme sistemi

Bunun mühendislik açısından çözümü aslında yeni bir icat gerektirmiyor — modern OAuth benzeri
yetkilendirme akışlarında onlarca yıldır kullanılan bir desen: kapsam sınırlı (scoped) erişim
delegasyonu. Bir mükellef, mali müşavirine "sadece vergi beyannamesi görüntüleme ve gönderme",
"sadece SGK işlemleri" gibi belirli, sınırlı yetkiler verebilmeli — kimlik, sağlık ya da
gayrimenkul verilerine erişimi hiç açmadan. Bu tür bir sistem, hem mevcut "Aracılık ve
Sorumluluk Sözleşmesi" mekanizmasının kapsamını genişletir hem de PIN paylaşımı gibi güvensiz
bir geçici çözümü tamamen gereksiz hale getirir.

GİB'in ve e-Devlet altyapısının bunu teknik olarak hayata geçirebilecek kapasitesi zaten var.
Eksik olan, bunu bir öncelik haline getirmek — çünkü şu anki durumda, zorunlu bir hizmeti almak
için vatandaşlardan istenen güven, sistemin kendisinin sağlaması gereken güvenlik garantisinden
çok daha büyük.

## Kaynaklar

- [ELEKTRONİK BEYANNAME ARACILIK VE SORUMLULUK SÖZLEŞMESİ — GİB duyurusu](https://intvrg.gib.gov.tr/elektronik_beyanname_aracilik_ve_sorumluluk_sozlemesi_bilgi_girisine_iliskin_duyuru.doc)
- [muhasebeciye e-devlet şifresi verilir mi sorunsalı — ekşi sözlük](https://eksisozluk.com/muhasebeciye-e-devlet-sifresi-verilir-mi-sorunsali--7396921)
- [Emniyet uyardı: e-Devlet şifresiyle dolandırıcılığa dikkat! — Cumhuriyet](https://www.cumhuriyet.com.tr/turkiye/emniyet-uyardi-e-devlet-sifresiyle-dolandiriciliga-dikkat-1886212)
- [E-Devlet turkiye.gov.tr Kimlik Bilgileri Şikayetleri — Şikayetvar](https://www.sikayetvar.com/e-devlet-turkiyegovtr/kimlik/kimlik-bilgileri)
