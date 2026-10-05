---
title: Breville ve Sage Oracle buhar kodları — önce ne kontrol edilmeli
description: Oracle'ın buhar tarafındaki Error ve ER kodları ne anlatıyor? Önce denenmesi gereken purge rutini ve kirecin gerçek arıza olduğu durumlar.
---

Breville Oracle'ın buhar tarafı makinenin en meşgul bölgesidir: paslanmaz buhar kazanı, otomatik köpürten çubuk, seviye probları ve bir dolum pompası, hepsi her gün ısı altındadır. Makinenin hata kodlarının da büyük bölümü buradan çıkar. Oracle ailesi, Breville'in yayınlamadığı 32 girişli servis tablosunu kullanır; İngiltere'de aynı donanım **Sage** rozetini taşır ve kodlar birebir aynıdır. Kırık parça varsayımına geçmeden önce ucuz kontrolleri çalışın: buhar tarafındaki duruşların çoğunun nedeni tıkalı bir çubuk ucu, yapılmamış bir purge ya da prob üzerindeki kireçtir.

## Buhar kodları Oracle tablosunda nerede durur

Oracle (BES980) ve Oracle Touch (BES990) tek bir tablo paylaşır; BES980 girişleri "Error 1"–"Error 32", BES990 ise ER önekiyle gösterir. Buharla ilgili girişler beş yerde toplanır:

- **Error 1–4** — buhar kazanı sıcaklık sensörü: açılışta açık devre, çalışırken sinyal kaybı, iki durum için de kısa devre. Tek sensör, dört anlatım biçimi.
- **Error 13–16** — buhar çubuğunun kendi sıcaklık sensörü için aynı dörtlü: otomatik köpürtmeyi doğru süt sıcaklığında durduran problar. Bunlar makinenin en ıslak köşesinde yaşar.
- **Error 18** — buhar kazanının normal şekilde ısınmaması.
- **Error 20 ve 21** — buhar kazanı su seviyesi veya dolum pompası sorunları; kartın beklediğiyle uyuşmayan seviye probu okuması.
- **Error 26** — buhar kazanı hedefin üzerine ısındı; **Error 32** ise buhar kazanı kaçağı veya dolum başarısızlığı.

Çubuğa yakın görünen her kod buhar tarafına ait değildir: 5–8 arası kahve kazanının sensörünündür ve [Error 8](https://tr.codefixcoffee.com/breville/oracle-bes980/error-8/) çalışma sırasındaki kısa devre girişidir. Aileleri ayırt etmenin yolu kayıtlı günlüğü okumaktır — BES980'de makine kapalıyken 1 CUP, 2 CUP ve POWER birlikte basılarak Error Storage açılır ve 32 kodun tamamı sayaçlarıyla gezilir.

## Önce bunu deneyin — purge rutini

Zayıf ya da tükürerek gelen buhar, ya da bir süt içeceğinin hemen ardından beliren kod, çoğu zaman kazandan değil uçtan söz eder:

1. Fişi çekin ve çubuğun soğumasını bekleyin.
2. Buhar ucunu sökün; az miktarda kireç çözücü eklenmiş sıcak suda bekletin, temizlik aracındaki iğneyle her deliği tek tek açın.
3. Purge çalıştırın — uç takılı değilken damlama tepsisine yaklaşık on saniye buhar, sonra uç takılıyken yine on saniye.
4. Bu andan itibaren her süt kullanımının ardından çubuğu purge'layın; uçta kuruyan süt, bu duruşların çoğunu başlatan şeydir.

Oracle Jet gibi buhar basıncını da izleyen bir modelde (E16 kodu) kabuk tutmuş bir uç, buharın zayıfladığını siz fark etmeden kodu tetikleyebilir.

## Sertlik, kireç ve seviye probları

Suyun sert olduğu yerlerde kireç kendi hata kodlarını yazar. Buhar kazanı seviye probları sürekli sıcak su içindedir; kaplayan kireç tabakası onları yalıtır ve kazan tamken karta "su yok" okutur — Error 20 veya 21'in klasik yolu budur ve Error 32'nin dolum hatası da aynı kökene bağlanır. Kireç, çubuk yolunda ve dolum pompasının girişinde de birikir. Buhar kazanı çevrimini de içeren tam bir kireç çözme, yapabileceğiniz en ucuz teşhistir ve bu kodların şaşırtıcı bir kısmını tek başına temizler.

Aynı serinin kardeşi de aynı dersi verir: Dual Boiler 00–12 kodlarını kendi kendine test menüsünde saklar ve [kod 00](https://tr.codefixcoffee.com/breville/dual-boiler-bes920/00/) — buhar kazanı sensörü algılanmadı — sert su altında birebir aynı davranan seviye ve dolum girişlerinin başında oturur. Çubuk bakımı ve kireç çözme rutinleri için Sage'in [destek sayfalarındaki](https://www.sageappliances.co.uk/) rehberler ve videolar da iyi bir başlangıçtır.

### Türkiye'de su sertliği

Türkiye'de şebeke suyunun sertliği şehre, hatta semte göre ciddi ölçüde değişir; İç Anadolu ve Ege'de sert su, Karadeniz'de ise yumuşak su yaygındır. Sert su bölgelerinde kireç çözme aralığını üreticinin önerdiği süreden kısa tutmak, buhar kazanı problarının ve dolum pompasının ömrünü belirgin biçimde uzatır. Mümkünse sürahi başı filtre kullanmak, kazana giren kireç yükünü baştan azaltır.

## Ne zaman sökmeli — kireç çözmenin sınırı

Önce kireç çözme, sonra sökme; ama sınırı bilin:

- **Kireç çözme ile başlayın:** seviye, prob ve dolum kodlarında (20, 21, 32), koda bağlanmamış zayıf buharda ve son çevriminden üzerinden üç aydan fazla geçmiş makinede. Maliyet: bir şişe kireç çözücü.
- **Kireç çözme çözmez:** yeni kireç çözülmüş, ısınmış makinede anında geri dönen sensör kodu — ister 1–4 arasındaki buhar girişi ister kahve tarafındaki [Error 8](https://tr.codefixcoffee.com/breville/oracle-bes980/error-8/) olsun. Kireç çözmeden sağ çıkan kod, sensörün kendisini, kablosunu veya konektörünü işaret eder.
- **Error 26 tekrarlıyorsa durup contalara bakın:** kaçırılan bir buhar probu o-ring'i buharı sensör kablosuna ısıtır ve kontrolden çıkan kazanı taklit eder. Yeni prob o-ring'leri ucuzdur; ısıtıcıyı kapatmayı reddeden bir triac kartı öyle değildir.
- **Error 18**, artık hiç buhar ısıtmayan makinede genelde ısıtıcı tarafındadır — termal sigorta, ısıtma elemanı veya kart — kireç değil; bu bir temizlik değil tamir işidir. Sökme gerektiren işlerde [iFixit'in onarım kılavuzları](https://www.ifixit.com/) multimetre kullanımı ve güvenlik adımları için iyi bir kaynaktır.

## Parçalar ne kadara gelir

Orijinal sıcaklık sensörü takımları, hangi sensör olduğuna göre yaklaşık €25–€95 aralığındadır; kendi sensörünü de içeren buhar çubuğu takımları €60–€95 civarındadır, prob ve o-ring kiti yaklaşık €85, dolum pompası €30–€60. Karşı tarafta garanti dışı üretici teklifleri iç arızalarda yaygın olarak €300–€500'dür; önce bir şişe kireç çözücü, ardından sensör seviyesinde bir tamir neredeyse her zaman daha iyi aritmetiktir. Aynı tabloların Sage etiketli anlatımı için sitemizin [İngiltere sürümüne](https://tr.codefixcoffee.com/uk/) göz atabilirsiniz.
