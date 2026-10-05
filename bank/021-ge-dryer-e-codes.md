---
title: GE kurutma makinesi E kodları — termistörler, sigortalar ve takometre
description: GE kurutma makinesinde E1, E3-E6, E4, E8 ve E11 — kapı anahtarı, termistörler, termal sigorta ve motor takometresi, eski model farkları ve maliyetler.
---

GE, kurutma makineleri için resmî bir hata kodu listesi yayımlamayan az sayıdaki büyük üreticiden biri. Kodlar vardır, kontrol kartı bunları kaydeder; ama kullanıcılara anlamı hiçbir yerde anlatılmaz. Yine de desen öğrenilebilir: GE kurutma makinesi kodları dört bölgeye toplanır — kapı devresi, iki sıcaklık sensörü, ısıtma güvenlik sigortaları ve takometreli sürücü motoru. [GE kurutma makinesi bölümümüz](https://tr.codefixcoffee.com/ge/dryer/) her kodu tek tek ele alıyor; bu yazının işi, ailenin nasıl birbirine bağlandığını ve eski model tuzaklarının nerede saklandığını göstermek.

## Önce kayıtlı kodu okuyun

2016 ve sonrası GTD ile GFD serilerinde son hatayı kendiniz görüntüleyebilirsiniz. Makine kapalıyken **Signal** ve **Temp** tuşlarına aynı anda basılı tutun; yaklaşık beş saniye sonra servis modu açılır ve ekranda en güncel arıza belirir. SmartHQ destekli modellerde kayıtlı kodları uygulama da listeler. Amacınız yalnızca kartın hafızasını silmekse, makinenin fişini beş dakika çekmeniz yeterli.

## E1: kapı anahtarı

[E1](https://tr.codefixcoffee.com/ge/dryer/e1/), kartın kapıyı kapalı olarak görmediği anlamına gelir. Sorun çoğu zaman elektronikte değil mekaniktedir: aşınmış mandal, eğilmiş kanca pimi ya da artık tıklamayan bir anahtar.

- Kapağı iyice kapatıp Start'a basın; yarım kilitlenmiş kapı en sık karşılaşılan nedendir.
- Kapı üzerindeki mandal kanca pimini eğilmiş veya kırık kanatçık açısından inceleyin.
- Fişi çekin, ön paneli açın ve kapı anahtarı fişini kontrol edin; basıldığında tıklamayan anahtar değişmelidir. Parça fiyatı kabaca 10 € ile 25 € arasındadır.

## E3'ten E6'ya: termistörler

GE kurutma makineleri hava sıcaklığını iki termistörle izler: ısıtıcı gövdesindeki giriş sensörü ve fan gövdesindeki çıkış sensörü. [E3-E6 ailesi](https://tr.codefixcoffee.com/ge/dryer/e3-to-e6/), bunlardan biri açık devre ya da kısa devre okuttuğunda tetiklenir. Bu kodları bozuk sensör kadar sık tetikleyen bir neden de gevşek veya korozyonlu kablolamadır; gerçekten tıkalı bir baca hattı ise sağlıklı bir makineyi bile aşırı ısıtıp aynı kodları yakabilir.

1. Fişi 30 saniye çekin ve makineyi yeniden başlatın.
2. Tüy filtresini temizleyin, baca hattının tıkalı olmadığından emin olun.
3. Gövdeyi açın; termistör fişlerini ve kabloyu gevşek ya da oksitli kontaklar için inceleyin.
4. Termistörü multimetreyle ölçün — oda sıcaklığında yaklaşık 10k ohm sağlıklıdır; açık devre okuyan sensör değiştirilir.

Yedek termistör 10 € ile 25 € arasındadır. Dikkat: bazı modellerde E6 termistör değil, hava akışı kısıtlama kodudur; parça sipariş etmeden kendi modelinizdeki anlamı teyit edin.

## E4: termal sigorta

[E4](https://tr.codefixcoffee.com/ge/dryer/e4/) ısı yok kodudur: tambur döner ama çamaşır kurumaz, çünkü güvenlik sigortalarından biri atmıştır. Termal sigorta boşuna atmaz — tüy kaynaklı hava akışı kısıtı ya da tıkalı baca, ısıtıcı elemanı aşırı ısıtır. Önce hava akışını onarın; yoksa yeni sigorta da atar. Ve termal sigortayı asla devre dışı bırakmayın: gerçek bir aşırı ısınmayı yangına çevirmeyi önleyen parça odur.

1. Tüy filtresini ve dışarıya kadar giden tüm baca hattını temizleyin.
2. Termal sigortayı ve ısıtıcı gövdesindeki yüksek limit termostatı ölçün; hangisi açık devre okuyorsa onu değiştirin.
3. Isının geri döndüğünü kısa bir turda, bacayı geçici olarak ayırarak doğrulayın, sonra yeniden bağlayın.

Sigortanın kendisi 5 € ile 15 €; yüksek limit termostatı 10 € ile 25 € tutarındadır.

## E8 ve E11: takometre ve motor

[E8](https://tr.codefixcoffee.com/ge/dryer/e8/) güncel GE kurutma makinelerinde takometre kodudur: kart motoru çalıştırmış ama geriye hiç hız sinyali almamıştır. Takometre kablosu gevşemiş, tambur sıkışmış — kaymış kayış ya da arkasına kaçmış bir cisim — olabilir; ya da takometre veya motor arızalanmıştır. Takometre motor bloğunun parçası olduğundan, kesinleşen bir takometre arızası motor değişimi demektir: 80 € ile 150 €. Kayış ise 15 € ile 25 €.

E11 hemen yanında durur: motor, kartın istediği işi yapmıyordur — aşınmış kayış, tutulmuş tambur rulosu ya da motor çalıştırma anahtarı veya motorun kendisi. İlk iş tamburu elle çevirmektir; sertlik motordan çok ruloya işaret eder. Kayış çıkarılmışken vınlayıp dönmeye başlamayan motor, motor değişimidir; rulo takımı ise takım başına 20 € ile 40 €.

## Model yılı farkları

Üç tuzak kullanıcıyı yakalar. Birincisi, aynı numara her zaman aynı arıza değildir: bazı eski ve kombi modellerde E8 takometre değil tambur lambası ya da drenaj arızasıdır; parça almadan önce hangi makineye sahip olduğunuzu netleştirin. İkincisi, E6 bazı modellerde hava akışı, bazılarında termistör kodudur. Üçüncüsü, yukarıda anlatılan Signal+Temp servis modu 2016 sonrası GTD/GFD makineleri için geçerlidir; daha eski modellerde elinizde yalnızca arıza anındaki ekran görüntüsü kalır. Ailede ayrıca E7 — makinenin beslemenin iki bacağını da göremediği güç kaynağı sorunu — ve E14 — panelde takılı tuş — vardır; ikisi de ısıtmayla ilgili değildir. Bu arada [GE Appliances'ın kendi destek bölümünde](https://www.geappliances.com/ge/support/) bile kurutucu kodlarının kapsamlı bir listesi yoktur; orada model numaranızla arama yapmak zorunda kalırsınız.

### Türkiye'de pratik notlar

GE kurutma makineleri Türkiye'de resmî bir distribütör ağıyla satılmadığı için yedek parça çoğunlukla ithalatçı veya özel parça bayilerinden gelir; sipariş verirken kapı çerçevesinin içindeki model etiketini ve seri numarasını not edin, aynı görünen iki model farklı termistör kullanabilir. Kuzey Amerika üretimi makineler 120/240 V — 60 Hz şebekeler içindir; Türkiye'nin 230 V — 50 Hz şebekesinde bağlantıyı yetkili bir elektrikçiye doğrulatmadan çalıştırmayın. Balkon ve banyolarda kurulan uzun, kıvrımlı baca bağlantıları E4 ve E6'yı tetikleyen hava akışı kısıtlarının en sık kaynağıdır; hattı mümkün olduğunca kısa ve düz tutun.

## Tamirler ne tutuyor?

Sensör ve anahtar seviyesindeki onarımlar ucuzdur: kapı anahtarı 10-25 €, termistör 10-25 €, termal sigorta 5-15 €, kayış 15-25 €, tambur rulosu takımı 20-40 €. Pahalı kalem sürücü motordur — 80 € ile 150 €; yaşlı bir kurutucuda bu, otomatik bir evet değil, değerlendirme kararıdır. Teknisyenin eve gelmesi teşhis artı parça için kabaca 120 € ile 250 € tutar; gövdeyi açmak istemiyorsanız motor devresi işleri için bu ücrete değer.
