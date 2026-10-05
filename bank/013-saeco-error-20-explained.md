---
title: "Saeco Error 20: demleme grubu ve kapı switch'leri sorunu"
description: "Saeco Error 20, demleme grubunun ya da bir kapı switch'inin tam oturmadığını gösterir. Resmi sıfırlama, grubun temizliği ve motor ihtimali burada."
---

Philips ve Saeco tam otomatik kahve makinelerinde görülen Error 20, kulağa büyük gelse de çoğu zaman öyle değildir. Philips'in Error 01'den 22'ye uzanan hata ailesinin parçası olarak LatteGo 2200/3200/4300/5400, Xelsis, Incanto ve eski Saeco modellerinde karşınıza çıkar; kılavuzlar bu aileyi iki noktaya yönlendirir: demleme grubu ve damlama tepsisiyle posa kabının oturmasını, servis kapısının kapanmasını izleyen switch'ler. Konunun tamamı [Error 20 referans sayfamızda](https://tr.codefixcoffee.com/philips-saeco/espresso-machines/error-20/) duruyor; bu yazıda her şeyin yerine oturmasının neden bu kadar önemli olduğunu ve sorunun ne zaman daha derinde olduğunu anlatıyoruz.

## Error 20 tam olarak neyi bildiriyor?

Philips servis kodları için model model açıklayan resmi bir tablo yayınlamaz; bu yüzden servis departmanı dışındaki hiç kimse Error 20'nin her modelde hangi parçayı adlandırdığını vaat edemez. Kılavuzların netleştirdiği şey yöndür: bu aralıktaki sayısal hatalar, demleme grubunun konumda algılanamamasına ya da damlama tepsisi, kahve posası kabı veya servis kapısı gibi bir parçanın yerine tam oturmamasına işaret eder.

Her demleme döngüsünden önce ve sırasında makine bir dizi güvenlik kontakını ve demleme grubu pozisyon sensörünü yoklar; herhangi biri "sorun var" derse döngü durur ve ekranda Error 20 belirir:

- demleme grubu yerinde ve dinlenme konumunda durmalı
- damlama tepsisi sonuna kadar itilmiş olmalı
- kahve posası kabı tepsinin üstüne tıklayarak oturmalı
- servis kapısı tam kapanmış olmalı

Bunların hiçbiri kapris değildir. Tam otomatik bir makine demleme grubunu gerçek bir mekanik döngüden geçirir; kapı açıkken veya grup yarım takılıyken bunu denemez. Pratikte birçok Error 20, tık sesi duyulacak kadar itilmemiş bir tepsiye ya da kontaklar arasında köprü kuran ıslak posaya indirgenebilir.

## Beş dakikalık resmi sıfırlama: parça yok

1. Makineyi kapatın ve fişini çekin.
2. Damlama tepsisiyle kahve posası kabını çıkarın ve ikisini de tık sesi gelene kadar sıkıca yeniden takın.
3. Servis kapısını tam olarak kapatın.
4. Makineyi yeniden açın.

Kılavuzun bu arıza ailesi için yazdığı sıfırlama budur ve parçaları yeniden oturtup baştan başlatma dizisi vakaların gerçekten çoğunu temizler. Kod sonrasında kaybolduysa işiniz bitmiştir; yine de alttaki bölümü okuyun, çünkü geri dönüp gelen Error 20 size bir şey söylemeye çalışıyordur.

### Kod geri gelirse: demleme grubunu temizleyin

Demleme grubu çıkarılabilen modellerde (çoğu LatteGo ve Incanto) sıradaki şüpheli grubun kendisidir:

1. Makineyi kapatıp servis kapısını açın ve demleme grubunu çıkarın.
2. Sabun kullanmadan ılık suyun altında iyice durulayın, sonra kendi kendine kurumasını bekleyin.
3. Kılavuz raylara ve piston contasına az miktarda gıda güvenli silikon gres sürün.
4. Raylar boyunca ilerletip tıklayana kadar oturtun, kapıyı kapatın ve makineyi açın.

Ardından bir durulama programı çalıştırın. Kod temizlenirse makinenin temizleme programıyla devam edin: kahve yağlarıyla yapış hale gelmiş bir demleme grubu, tekrarlayan Error 20'lerin olağan alt nedenidir ve bunu adresleyen temizleme programıdır.

Bir uyarı: demleme grubu çıkarılabilir değil de dahili olan Xelsis modellerinde parçaya ulaşmak için servis kapısını zorlamayın; o onarım biçimi servis tezgâhının işidir.

Komşu kodlar da benzer bir hikâye anlatır — Error 03 "demleme grubu fazla kirli", Error 04 "demleme grubu doğru yerleştirilmemiş" anlamına gelir — ve ailenin bütünü [Philips / Saeco bölümümüzde](https://tr.codefixcoffee.com/philips-saeco/) işlenmiştir.

## Gerçek sorun motor veya pozisyon sensörü olduğunda

Tepsi, kap ve kapının gerçekten oturduğu, grubun temiz ve yağlanmış olduğu doğrulandığı hâlde Error 20 sürüyorsa tablo değişir: ya demleme grubu motoru kendi döngüsünü tamamlayamıyordur ya da pozisyon sensörü konumu geri okuyamıyordur. İkisi de dahili onarımdır — [Philips desteği](https://www.philips.com/support) bu vakaları servis yönlendirmesine alır — ve kullanıcı düzeyinde denemeye değer bir çözüm yoktur.

Bunu diğer ciddi Saeco ailesiyle karıştırmayın: Error 02, 10, 15 ve 22, Philips'in doğrudan servis gerektiğini söylediği dahili elektronik, pompa ve vana arızalarıdır. İşe yarar bir ipucu zamanlamadır; açılışta beliren kodlar çoğunlukla demleme grubu tahrikine veya bir vanaya, demleme ortasında belirenler pompa ya da basınç tarafına işaret eder. Ayrıntılar [Error 02, 10, 15 ve 22 sayfamızda](https://tr.codefixcoffee.com/philips-saeco/espresso-machines/error-02-10-15-or-22/) yer alır.

### Türkiye'den pratik notlar

Türkiye'de musluk suyunun sertliği bölgeden bölgeye ciddi fark gösterir; sert su, kahve yağlarına ek olarak grup içindeki birikintileri hızlandırır ve temizlik aralıklarını kısaltır. Filtreli veya kaliteli kaynak suyu kullanmak hem demleme grubunun yapışmasını hem de kireç çözme ihtiyacını azaltır. Gıda güvenli silikon gres, Türkiye'deki beyaz eşya yedek parça mağazalarında ve çevrim içi pazaryerlerinde kolayca bulunur; küçük bir tüp yıllarca yeter.

## Maliyet

- Silikon gres: yaklaşık €10 — çoğu Error 20'nin gerektirdiği tek "parça" budur.
- Hasarlıysa yeni bir demleme grubu: kabaca €80 ile €140 arası.
- Garanti dışı üretici servisi: genellikle iade kargo dahil €250–500; tek parçalık işlerde bağımsız espresso tamircileri çoğunlukla daha ucuzdur.

Xelsis veya LatteGo sınıfı bir makinede bu onarım yapmaya değer — ve üçüncü maddeye kadar ilerleme ihtimaliniz düşüktür. [Error 20 sayfasıyla](https://tr.codefixcoffee.com/philips-saeco/espresso-machines/error-20/) başlayın, sıfırlamayı sırasıyla uygulayın ve telefonu ancak her şey temiz, yağlanmış ve yerine tıkışmışken elinize alın.
