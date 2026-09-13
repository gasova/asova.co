---
layout: post.njk
title: "Türkiye'nin e-devlet altyapısı hâlâ 2005'in varsayımlarıyla çalışıyor"
description: Türkiye'nin resmi imza ve e-devlet altyapısının büyük kısmının hâlâ eski Java applet'lerine ve tarayıcıya özel araçlara neden dayandığı, ve bunun sadece bir sıkıntı değil bir güvenlik sorunu olduğu üzerine.
date: 2026-09-13
tags:
  - posts
  - turkiye
  - guvenlik
  - politika
---
Türk AKİS akıllı kartlarıyla ilgili teknik dokümantasyona ve kullanıcı deneyimlerine baktığınızda,
"resmî" yolun modern, platform bağımsız, birinci taraf bir çözümden ne kadar uzak olduğu hemen
göze çarpıyor. Ve nedenine baktığınızda, akıllı kart ara yazılımındaki bu boşluğun aslında çok
daha büyük bir sorunun belirtisi olduğunu görüyorsunuz.

## Java applet'lerinden neden vazgeçilmiyor ?

Dünyanın geri kalanında, belirli bir JRE sürümü isteyen, güvenilir şekilde yalnızca tek bir
tarayıcıda çalışan ve her yüklendiğinde bir güvenlik uyarısı çıkaran tarayıcı tabanlı Java
applet'i, on yıla yakın süredir tarih oldu. Chrome, NPAPI eklenti desteğini 2015'te kaldırdı.
Tüm büyük tarayıcılar bunu izledi. Sektörün geri kalanı, tarayıcı tabanlı kripto API'lerine,
PKCS#11 köprülerine veya bulut tabanlı imzalamaya geçti — çünkü applet tabanlı imzalama hem bir
uyumluluk kâbusuydu hem de kalıcı bir güvenlik riskiydi.

Türkiye'deki e-devlet ve e-imza araçlarının önemli bir kısmı — e-Devlet'e bağlı portallar,
e-fatura entegrasyonları, mahkeme ve noterlik sistemleri — bu geçişi hiçbir zaman tam olarak
yapmadı. Türkiye'de e-imza entegrasyonu için yardım arandığında, hâlâ Java applet yapılandırmasına
ve bazı durumlarda özel olarak Internet Explorer'a yönlendiren güncel rehberlerle karşılaşılıyor.
Bu, nadir görülen bir istisna değil; vergi beyannamesi vermeye veya bir belge imzalamaya çalışan
sıradan kullanıcılar için belgelenmiş, beklenen yol.

## "Hâlâ çalışıyor" yeterli değil

Bunu olduğu gibi bırakmanın gerekçesi hep aynı: "hâlâ çalışıyor, neden dokunalım." Ama bu bakış
açısı, kullanıcılardan aslında ne istendiğini gözden kaçırıyor: modern güvenlik tavsiyelerinin
kaldırılmasını önerdiği eski bir Java çalışma zamanını kurup bakımını yapmak, giderek daha zor
bulunan ve giderek daha az yama alan bir tarayıcı modunda çalışmak — hem de tüm bunları vergi
beyanlarınızı, hukuki imzalarınızı ve resmî kimliğinizi işleyen sistemlerle etkileşim kurmak için
yapmak.

Bu gerekliliklerin her biri aynı zamanda bir saldırı yüzeyi. Bakımı yapılmayan bir eklenti
mimarisi, tam olarak sektörün son on yıldır uzaklaşmaya çalıştığı türden bir şey — hiç işe
yaramadığı için değil, "hâlâ çalışıyor" ile "hâlâ güvenli" birbirinden farklı iddialar olduğu ve
bu ekosistem etrafındaki yaşlanma sürdükçe aradaki farkın büyüdüğü için.

## Düzenleyicinin ikilemi

BDDK ve BTK burada gerçekten zor bir konumda. Görevleri arasında standardizasyon ve
yerelleştirmeyi zorunlu kılmak var — Apple Pay çıkmazında ödeme verisini Türkiye sınırları
içinde tutan aynı içgüdü — ve bu, kendi başına savunulabilir bir güvenlik duruşu. Ama belirli
bir imzalama altyapısında erken standart belirleyip, dünyanın geri kalanındaki tarayıcı ve
kriptografi ekosistemi ilerlerken bu standardı güncellemeden bırakmak, tam tersi bir etki
yaratıyor: büyük bir kullanıcı kitlesini, standardın aslında onları korumak için var olduğu o
eski ve güvenliği daha zayıf araçlara kilitliyor.

Mahkemelerde, bankalarda ve vergi dairelerinde kullanılan bir imza standardını modernize etmek
küçük bir iş değil. Ama bunu yapmamanın maliyeti ortadan kalkmıyor; sadece daha sonra, daha çok
insana, bugün karşılaşılacak olandan daha büyük ve daha eskimiş bir saldırı yüzeyiyle ödeniyor.

## TÜBİTAK'ın burada olması gereken rolü

Bu tabloda asıl teknik otorite aslında BDDK ya da BTK bile değil, TÜBİTAK. Nitelikli e-imza
sertifikalarını veren ve e-imza uyumluluk standartlarını test eden resmi kurum, TÜBİTAK BİLGEM
bünyesindeki Kamu SM (Kamu Sertifikasyon Merkezi). Yani Java applet çağını kapatıp modern,
platform bağımsız bir imzalama standardına geçişi teknik olarak yönetmesi beklenen kurum,
zaten var olan bir kurum — yeni bir yetki ya da bütçe yaratmaya gerek yok.

Sorun şu ki TÜBİTAK, bağımsız bir standartlar kurumu gibi davranabilecek bir konumda değil.
Başkanı doğrudan Cumhurbaşkanlığı tarafından atanan, bütçesi ve yönetimi doğrudan devlete bağlı
bir kurum. Freedom House ve benzeri kuruluşların yıllardır raporladığı gibi, 2016 sonrası
dönemde Türkiye'deki kamu kurumlarının idari bağımsızlığı genel olarak zayıfladı; TÜBİTAK da bu
eğilimin dışında değil. Bir kurumun önceliği siyasi uyum ve mevcut düzenin sürdürülmesi
olduğunda, teknik modernizasyon gibi uzun vadeli, düşük görünürlüklü ama yüksek etkili bir işe
kaynak ayırmak, siyasi ajandada üst sıralara çıkmıyor.

Bunun sonucu, aslında yapması gereken işi yapmayan bir teknik otorite: kullanıcı güvenliğini
garanti altına almak ve standartları modernize etmek yerine, mevcut düzenin sorgusuz sürmesine
hizmet eden bir konumda kalıyor. Bir sertifikasyon otoritesinin asıl görevi budur — güvenliği
siyasi rahatlıktan önce koymak. Bu denge tersine döndüğünde, sonucu zaten yukarıda gördük: eski,
güvenliği zayıf bir imzalama altyapısı yıllarca değişmeden kalıyor.

## Kaynaklar

- [e-devlet uygulamalarındaki java kullanma ısrarı — ekşi sözlük](https://eksisozluk.com/e-devlet-uygulamalarindaki-java-kullanma-israri--6306653)
- [E-İMZA JAVA ENTEGRASYON AYARLARI — KTO](https://www.kto.org.tr/d/file/e-imza-java-entegrasyon-ayarlari.pdf)
- [Elektronik İmza — BTK](https://www.btk.gov.tr/en/news/elektronik-imza-yasamimizin-ayrilmaz-bir-parcasi)
- [E-Government in Turkey — Wikipedia](https://en.wikipedia.org/wiki/E-Government_in_Turkey)
- [Kamu SM — Kamu Sertifikasyon Merkezi (TÜBİTAK BİLGEM)](https://kamusm.bilgem.tubitak.gov.tr/)
- [Scientific and Technological Research Council of Turkey — Wikipedia](https://en.wikipedia.org/wiki/Scientific_and_Technological_Research_Council_of_Turkey)
- [Turkey: Freedom in the World 2025 Country Report — Freedom House](https://freedomhouse.org/country/turkey/freedom-world/2025)
