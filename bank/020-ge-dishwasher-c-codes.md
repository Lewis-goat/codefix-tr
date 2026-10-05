---
title: GE bulaşık makinesi C kodları — drenaj, dolum ve ısınma arızaları
description: GE bulaşık makinelerinde C1–C8 drenaj, dolum ve ısınma arızalarını, 888 ile CFE kart kodlarını kapsar; son hatayı okuyan servis menüsü hilesi dahil.
---

GE bulaşık makineleri arızaları ekranda C kodlarıyla bildirir: C1'den C8'e, dolum sorunlarında H2O'ya ve kartlar memnun olmadığında 888 ya da CFE'ye kadar. Çoğu üreticinin tersine GE, her kodun ne demek olduğuna dair resmî bir liste yayınlamaz; kullanıcı iki karakterlik kodu belirtiyle kendi eşleştirmek zorunda kalır — [GE'nin kendi destek sayfalarında](https://www.geappliances.com/) bile bu tablo bulunmaz. [GE bulaşık makinesi bölümümüz](https://tr.codefixcoffee.com/ge/dishwasher/) her kodu tek tek kapsar; bu yazı aileleri, karşılaşma olasılığınızın en yüksek olduğu sırayla geziyor ve sonda makinenin en son sakladığı hatayı gösteren servis menüsü hilesiyle bitiyor.

## Drenaj ailesi — C1'den C3'e

Üç kod, tek sistem. C1, drenaj pompasının kabı iki dakikadan uzun sürede boşaltamadığını söyler (bazı eski modellerde bunun yerine takılı kalmış bir tuşu bildirir); C2 pompanın hiç çalışmadığını ya da hattın tamamen tıkandığını; C3 ise "gerektiği gibi boşalmıyor" genel girişidir. Şüpheliler hiç değişmez: tıkalı filtre ve taban haznesi, burkulmuş drenaj hortumu, yakın zamanda takılmış ve knockout tıpası sökülmemiş bir çöp öğütücü ya da ölmüş bir drenaj pompası. [C1 sayfamızdaki](https://tr.codefixcoffee.com/ge/dishwasher/c1/) ücretsiz işlerle başlayın: alt sepeti çekin, filtre ile taban haznesini temizleyin, lavabo altındaki hortumu kontrol edin. Pompa vızıldıyorsa ya da tamamen sessizse, yenisinin €40–€80 aralığında olduğunu bilin.

## Dolum arızaları — C4, C5 ve H2O

- **C4** — fazla dolum veya elektrik kesintisinden sonra makinenin iki kez doldurması. Giriş vanası tam kapanmıyordur ya da dolumu durduracak şamandıra anahtarı kireç veya yabancı madde yüzünden takılı kalmıştır. Şamandıra kontrolü [C4 sayfasında](https://tr.codefixcoffee.com/ge/dishwasher/c4/) anlatılır; makine kapalıyken bile tekne doluyorsa giriş vanası içeriden kaçırıyor demektir ve değişmelidir (€25–€50).
- **C5** — az dolum: tanınan süre içinde yeterli su gelmemiştir. Besleme vanası kısmen kapalı, giriş filtresi tıkalı ya da giriş vanası zayıftır.
- **H2O** — hiç su gelmemesi. Başka her şeyden önce lavabo altındaki vananın açık ve hortumun buruk olmadığını kontrol edin.

## Isınma arızaları — C6'dan C8'e

C6, uzatılmış ısıtma süresinin sonunda bile suyun yaklaşık 49 °C'ye (120 °F) ulaşamadığını bildirir. Çevrimi başlatmadan önce mutfak musluğunu sıcak akıtın; makineye giren su soğuksa ısıtma elemanı basitçe yetişemeyebilir. Bulaşıklar soğuk ve ıslak çıkıyorsa ısıtma elemanının sürekliliğini multimetreyle ölçün — [iFixit'in onarım kılavuzları](https://www.ifixit.com/) multimetre kullanımında iyi bir kaynaktır. Elemanlar €30–€60, yüksek limit termostat €10–€20 civarındadır. C7 su sıcaklık sensörü (termistör) devresinin bozulmasıdır: gevşek bir fiş veya ucuz bir sensör; bazı modellerde aynı kod bunun yerine bulanıklık sensörünü kapsar. C8 genelde ısıl değil mekaniktir: deterjan haznesi açılamamıştır, çünkü bir tabak yolu kapatmıştır ya da kurumuş deterjan mandalı kilitlemiştir.

## 888 ve CFE — kart kodları

Arıza hidrolikten çok elektronik olduğunda GE lafı dolandırmaz. [888](https://tr.codefixcoffee.com/ge/dishwasher/888/) ana kontrol kartının kendi öz denetimini geçemediğini bildirir; çoğu zaman fırtına kaynaklı bir gerilim sıçraması bellek yazmacını bozmuştur, ara sıra da bir sızıntı kartı ıslatmıştır. [CFE](https://tr.codefixcoffee.com/ge/dishwasher/cfe/) kapıya monte kullanıcı arayüzü ile ana kartın konuşmayı bırakmasıdır: genellikle menteşe bölgesinde aşınmış bir kablo demeti ya da ıslak bir konektör. İkisinde de ilk adım sigortadan güç kesip sıfırlamaktır; kod geri dönerse iş kartla biter — ana kart €90–€200, arayüz €60–€120.

## Servis menüsü hilesi — son hatayı okuyun

Haftalardır arada duran bir bulaşık makinesi, önüne geçtiğinizde ekranda hiçbir şey göstermeyebilir. Kart hatırlar; çoğu GE modelinde sorabilirsiniz de:

1. Kapağı tam açın.
2. Start düğmesini beş saniye basılı tutarak servis menüsüne girin.
3. Ekran kapı pervazının arkasında gizli modellerde bunun yerine Select Cycle ve Start düğmelerine birlikte beş saniye basın.
4. Ekranda beliren son kayıtlı hatayı okuyun, sonra kapağı kapatın.
5. Kartın kendisini sıfırlamak için sigortadan 60 saniye boyunca elektriği kesin.

Kodu not edin, temizleyin, bir çevrim çalıştırın: üç hafta önce kaydedilmiş bir C3'ün yanında bugün taze bir C3 daha varsa, bu geçici bir aksaklık değil gerçek bir drenaj arızasıdır.

### Türkiye'de ithal GE makinesi kullananlar için

ABD pazarı için üretilen GE bulaşık makineleri 120 V / 60 Hz üzerinedir; Türkiye şebekesi 230 V / 50 Hz olduğu için bu cihazlar uygun güçte bir transformatör olmadan çalıştırılamaz ve 50 Hz'de pompa ile motorun performansı tasarlandığı gibi olmayabilir. Resmî bir GE servis ağı Türkiye'de bulunmadığından bu kodlarla gelen onarımlar bağımsız beyaz eşya tamircilerine kalır. Bir de Türk mutfaklarında lavabo altına çöp öğütücü takılması yaygın değildir; C1–C3 tedavisinde knockout tıpası yerine drenaj hortumunun sifon bağlantısını ve hortum yüksekliğini kontrol etmek daha doğru ilk adımdır.

## Onarımların maliyeti neye benzer

Neredeyse her C kodu çözümü bir pompa, bir vana, bir sensör veya deterjan haznesidir — parçalar €10 ile €80 arasında — artı elektriği kesip panel sökebiliyorsanız kendi emeğiniz. Kartlar istisnadır: €90–€200. Bir teknisyenin eve gelmesi teşhis artı parça olarak €120–€250 tutar; buna kart kodlarında değer, tıkalı bir filtre için nadiren ihtiyaç duyulur.
