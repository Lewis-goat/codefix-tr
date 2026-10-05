---
title: "De'Longhi Genel Alarm: gerçekte ne anlama geliyor"
description: "Genel Alarm teşhisten çok kapsayıcı bir uyarıdır; arka planda 1101 veya 1512 kodu olarak kaydedilir. Muhtemel nedenler ve on dakikalık infüzer çözümü."
---

Bir De'Longhi tam otomatik makinenin ekranına düşebilecek tüm mesajlar arasında Genel Alarm en korkutucu görünen ama en az şey söyleyenidir. Bu tesadüf değildir: De'Longhi makineleri çoğunlukla numara değil kelime gösterir; bir Magnifica, Dinamica veya PrimaDonna size servis kodu okutmak yerine sorunun hangi türde olduğunu söyler. Yeni modeller arka planda sayısal bir kayıt da tutar — 1101, 1454, 2257 gibi — ve makine servise geldiğinde teknisyen bu kaydı okur. Bu iki katman, yani kelimeler ve gizli numaralar, [Genel Alarm (kod 1101 / 1512) referans sayfamızla](https://tr.codefixcoffee.com/delonghi/magnifica-dinamica/general-alarm-code-1101-1512/) başlayarak De'Longhi bölümümüzün her sayfasında yan yana listelenir. Peki bu mesaj gerçekte ne anlama geliyor ve önce ne yapmalı?

## Bir teşhis değil, kapsayıcı bir uyarı

Genel Alarm aslında kontrol kartının şunu söylemesidir: bir arıza algıladım, ama hangi parçadan kaynaklandığını izole edemedim. Numara gösteren makinelerde bu durum 1101 veya 1512 koduyla kayda geçer. Gizli sayısal kayıt başka durumlarda daha spesifik olabilir — 1454 örneğin öğütücü takılma kodudur — ancak Genel Alarm bilinçli olarak geniş tutulur ve ekran da bilinçli olarak muğlak kalır.

Uygulamada, ECAM ve ESAM makinelerde on vakadan dokuzunda sorun **infüzer**dedir, yani çıkarılabilen demleme ünitesinde. İnfüzer sıkışmıştır, kirlemiştir ya da temizlik sonrası yerine tam oturmamıştır; bazen de konumunu okuyan küçük optik sensörün üzerine kahve tozu birikmiştir. Bir sonraki sık neden, su devresindeki kirecin pompayı zorlamasıdır; kart bunu da kesin bir arıza yerine genel arıza olarak raporlar.

Bu muğlaklığın içine gömülü iyi bir haber var: Genel Alarm vakalarının neredeyse tamamı, on dakika süren ve para tutmayan bir çözümle kapanır.

### On dakikalık rutin

1. Makineyi arkadaki ana düğmeden kapatın, 30 saniye bekleyin ve tekrar açın. Tek seferlik bir elektronik aksaklık bu adımda biter.
2. Servis kapağını açın, iki kırmızı düğmeye basın ve infüzeri dışarı çekin.
3. Sabun kullanmadan akan suyun altında durulayın, pistonu elle birkaç kez hareket ettirin ve kurumasını bekleyin.
4. İnfüzerin çıktığı boşluğa göz atın: içinde küçük bir sensör penceresi vardır; kuru bir bezle üzerindeki kahve tozunu silin.
5. Kolu tam aşağıda olacak şekilde infüzeri "klik" sesi gelene kadar yerleştirin, kapağı kapatın ve makineyi yeniden başlatın.

### Alarm yine de geri gelirse

Bir kireç çözme çevrimi çalıştırın. İnfüzer pırıl pırıl olsa bile kireç bağlamış bir su devresi alarmı tetikleyebilir; bir yılı aşkın süredir kireç çözülmeyen makinelerde çözüm çoğu kez budur. İnfüzer elle hareket etmiyorsa ya da üzerinde çatlak bir conta görüyorsanız uğraşmayı bırakıp parçayı değiştirin: söz konusu set modele göre 7313251451 veya 7313251441 numaralıdır ve değişimi beş dakikalık iştir. Modelinize özel resmi talimatlar için [De'Longhi'nin resmi web sitesindeki destek bölümüne](https://www.delonghi.com) de bakabilirsiniz.

## De'Longhi neden kod yerine kelime gösteriyor

Ekran tasarımının ardındaki fikir şudur: kelimeler eyleme çağırır, numaralar ise arama yaptırır. Servis tablosu olmadan "1101" ile hiçbir şey yapamazsınız; "Genel Alarm" ise en azından durup makineye bakmanızı söyler. Gizli sayısal katman, elinde tablo olan teknisyen içindir; bu yüzden sizden seçim yapmanızı istemeden ikisini de her sayfada listeliyoruz.

De'Longhi'nin diğer mesajları da aynı mantığı izler ve her biri sizden istediği eylemi adıyla anar. Pompa hava kapmış ve su çekemiyorsa [Su Devresi Boş / Devreyi Doldur](https://tr.codefixcoffee.com/delonghi/magnifica-dinamica/water-circuit-empty-fill-circuit/) mesajı belirir. Kahre kabının arkasındaki kontaklar ıslak telveyi ya da çamuru "kaba yok" diye okursa [Kabı Yerleştir / Kabı Boşalt](https://tr.codefixcoffee.com/delonghi/magnifica-dinamica/insert-grounds-container-empty-grounds-container/) görünür. Bunların hiçbiri kesin bir parça teşhisi değildir; hepsi birer talimattır.

Ters felsefayı görmek isterseniz Nespresso'ya bakın: Vertuo makineler arızaların çoğunu kelime yerine yanıp sönen ışık desenleriyle bildirir ve [ışık deseni çözücü sayfamız](https://tr.codefixcoffee.com/nespresso/vertuo-machines/blinking-lights/) tam bu yüzden vardır. De'Longhi'nin tüm yaklaşımı ve mesaj ailesinin tamamı [De'Longhi ana sayfasında](https://tr.codefixcoffee.com/delonghi/) toplanmıştır.

## Maliyet neye denk geliyor

- Çoğu durumda hiçbir şeye: çözüm bir durulama, sensör penceresinin silinmesi ve yeniden başlatmadan ibarettir.
- Tetikleyici kireçse, kireç çözücü: yaklaşık €10.
- Çatlak veya sıkışmış infüzer için yedek montaj seti: €35 ile €60 arası.
- Garanti dışı yetkili serviste tam otomatik makine tamiri: genellikle iade kargosu dahil €250 ile €500; tek parçalık işlerde bağımsız espresso tamircileri çoğunlukla daha ucuzdur.

### Türkiye'den pratik bir not

İstanbul, Ankara ve İzmir başta olmak üzere Türkiye'nin birçok ilinde musluk suyu orta ya da yüksek sertliktedir; bu, kireç birikiminin General Alarm'ın arkasındaki ikinci sıradaki nedeni Avrupa ortalamasına göre daha hızlı beslediği anlamına gelir. Alarm kireç kaynaklı tekrar ediyorsa kireç çözme aralığını yılda bir yerine iki-üç aya bir uygulayın. İnfüzer setleri ve sarf parçaları yetkili servis dışında, yurt içinde hizmet veren yedek parça satıcılarından da temin edilebilir.

Kısacası, Genel Alarm göründüğünde onu makinenin ölüm fermanı olarak okumayın. Bu, makinenin tam olarak nelerin bozulduğunu bilmediğini itiraf etmesidir — ve on vakadan dokuzunda temiz bir infüzer ve silinmiş bir sensör cevabın tamamıdır. Yukarıdaki rutini sırasıyla uygulayın; parça ve servis fikrine ancak alarm bir durulamayı ve bir kireç çözmeyi atlattıktan sonra geçin.
