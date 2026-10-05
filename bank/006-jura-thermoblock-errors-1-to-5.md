---
title: "Jura Error 1-5: termoblok ailesinin tamamı"
description: "Jura'nın 1-5 arası hata kodları termoblok, NTC sensörü ve termal sigorta kablolarına işaret eder. Kod-parça eşleşmesi ve Error 2 soğuk makine tuzağı."
---

Jura'da 1'den 5'e kadar olan hata kodları ilk bakışta rastgele numaralar gibi görünse de hepsinin tek bir ortak konusu vardır: ısı. Kodların tamamı ya termobloklara — kahve suyunu ve buharı hazırlayan kompakt ısıtıcılara — ya da onları izleyen sensörlere ve koruma kablolarına dayanır. Bu aileyi okumayı bir kez öğrendiğinizde, kod size hangi ısıtıcının rahatsız olduğunu ve sorunun ölçüm, sıcaklık yoksa güç kaynaklı olduğunu söyleyebilir.

## İki ısıtıcı, beş kod

Bir Jura'da iki termoblok bulunur: kahve termobloğu demleme suyunu, buhar termobloğu ise buhar ve sıcak su tarafını besler. Her ikisinin üzerinde, değeri sıcaklıkla değişen bir NTC sensörü vardır ve kontrol kartına rapor verir; ayrıca blok aşırı ısınırsa gücü kesen termal sigorta kabloları ikisini de korur. Error 1-5, kartın bu elemanlardan birinin düzgün çalışmadığını bildirme biçimidir:

- **Error 1 ve 2**, kahve termobloğunun sensör devresine işaret eder.
- **Error 3 ve 4**, buhar termobloğuna — ya düşük okuma ya da aşırı ısınma.
- **Error 5**, ısıtıcı elemanının gerekli ısıyı üretemediğini söyler.

## Kahve tarafının kodları

### Error 1: kahve termobloğu sensör arızası

[Error 1](https://tr.codefixcoffee.com/jura/automatic-machines/error-1/), kontrol kartının kahve termobloğu üzerindeki sıcaklık sensöründen tutarlı bir değer alamaması demektir. S, X, J ve Z ailelerinde klasik sensör arızasıdır; F ve E80'de ise tipik olarak hasarlı sensör anlamına gelir. Bilinmesi gereken bir ayrıntı: soğuk bir arabadan ya da garajdan yeni getirilen makine, içinde hiçbir şey kırık olmasa da bu kodu verebilir. Kod sıcak bir makinede çıkıyor ve yeniden başlatmadan hemen sonra geri geliyorsa sensör devresi açıktır — sorun sensörün kendisi, kablosu veya bloğa giden termal sigorta kablolarıdır.

### Error 2: sensör kesintisi — ya da makine sadece soğuk

[Error 2](https://tr.codefixcoffee.com/jura/automatic-machines/error-2/) Jura'nın en sık görülen kodudur ve iki yüzlüdür. İyi senaryoda makine yaklaşık 10 °C'nin altındadır ve ısıtıcı, makine ısınana kadar bilerek kilitlenmiştir; kışın teslim edilen ya da soğuk bir odada bekleyen makinelerde bu yaygındır. Kötü senaryoda ise kahve termobloğu sensörü veya termal sigorta kabloları açık devre olmuştur.

Bu yüzden tanının anahtarı ısıtma testidir. Makineyi oda sıcaklığına getirin — kullanıcılar su haznesi boşluğuna düşük ayarda beş dakika saç kurutucusu tutar ya da hazneyi ılık (sıcak değil) suyla doldurur — sonra yeniden başlatın. Kod temizleniyorsa hiçbir şey kırık değildir; makineyi daha sıcak bir yerde tutmanız yeterlidir. Sıcak makinede de sürüyorsa sensör devresi açıktır ve içeride NTC ile sigorta kablolarının kontrolü gerekir.

## Buhar tarafının kodları

### Error 3: buhar termobloğu düşük okuyor

[Error 3](https://tr.codefixcoffee.com/jura/automatic-machines/error-3/), Error 1'in buhar tarafındaki aynasıdır: buhar termobloğu sıcaklık bildirmiyordur ve bunun nedeni sensörü, kablosu ya da hâlâ soğuk olan makinedir. Ek bir açı: yoğun kireç bazı yazılımlarda ısınmayı, bu kontrolü tetikleyecek kadar yavaşlatabilir; bu yüzden hiçbir şey sökülmeden önce tam bir kireç çözme işlemi listeye eklenmelidir. Makine açıldığında sensör kablosunun bükülme noktaları da incelemeye değer.

### Error 4: buhar termobloğu aşırı ısınıyor

[Error 4](https://tr.codefixcoffee.com/jura/automatic-machines/error-4/), ciddiye alınması gereken koddur. Buhar termobloğu kartın beklediğinden daha sıcak çalışmıştır; ya sensör düşük okuyordur (kireç yalıtımı, korozyona uğramış temas noktaları) ya da güç kartı ısıtıcıyı kesememiştir. Jura, Error 2 ve 4'ü en sık yapılan iki onarım olarak listeler. Soğuma ve kireç çözmenin ardından ilk değiştirilecek parça sensördür; yeni NTC takılmasına rağmen blok yine aşırı ısınırsa güç kartı ısıtıcıyı kapatmıyor demektir ve değiştirilmelidir (bütçe €120–€250). Sönmeyen bir ısıtıcı yangın riskidir: bu kod görünüyorken makineyi gözetimsiz ve prize takılı bırakmayın.

### Error 5: ısıtıcı sıcaklığa ulaşmıyor

[Error 5](https://tr.codefixcoffee.com/jura/automatic-machines/error-5/), ısıtıcının çalıştırıldığı ama sıcaklığın hiç yükselmediği durumdur. Bir Jura'da bu neredeyse her zaman termobloğu koruyan termal sigorta kablolarıdır — bir aşırı ısınmadan sonra ya da yalnızca yaşla atarlar; diğer neden ise ölü termoblok ısıtma elemanıdır. Çok soğuk bir makine de bu kodu tetikleyebildiği için önce makineyi ısıtın. İçeride her iki sigorta kablosunu da ve elemanı multimetreyle ölçün: açık okuyan, değiştirilecek parçadır — sonra da sigortaların neden attığını bulun (kireç, yapışan bir röle veya hazne boşken çalışma).

## Hepsini birleştiren parça

Bu aile boyunca sürekli karşınıza çıkan iki parça vardır: termal sigorta kabloları ve NTC sensörleri. Orijinal bir Jura NTC yaklaşık €25–€40, sigorta kablosu seti €15–€30, termoblok ise €90–€180 civarındadır. Sensör değişiminde uygulayıcılar sigorta kablolarını da aynı anda yeniler. Dikkat edilmesi gereken bir örüntü: yeni kablo günler içinde yine atıyorsa bu şansızlık değil, güç kartının ısıtıcıyı sürekli açık tutmasıdır.

Ayrıca Jura gövdeleri güvenlik vidalarıyla kapatılır ve termobloklar şebeke gerilimi taşır — bu aile, gerekli donanımınız yoksa tezgâh işidir. S, Z, GIGA ve yeni E serisi makinelerde tamir genellikle değer; on yıllık bir Impressa'da ise teklifi yenilenmiş bir makineyle karşılaştırmak mantıklı olur. Serinin geri kalanının tam listesi [Jura hata kodu merkezinde](https://tr.codefixcoffee.com/jura/) derlendi; modelinize ait kılavuz ve orijinal parçalar için [Jura'nın resmi sitesine](https://www.jura.com) bakabilirsiniz.

### Türkiye'den pratik bir not

Türkiye'de makinesini kışın kapalı bir yazlıkta, ısıtmasız balkonda ya da kilerde bırakan kullanıcı, Error 2'nin "soğuk kilit" versiyonuyla sıkça karşılaşır; makineyi oda sıcaklığına gelmeden çalıştırmamak bu kodun en basit ilacıdır. Ayrıca birçok ilde musluk suyu serttir ve kireç, termobloğun ısınmasını ve sensör okumalarını doğrudan etkiler; yazılımın önerdiği sıklıkta kireç çözme programını atlamamak Error 3 ve 4 riskini belirgin biçimde azaltır.
