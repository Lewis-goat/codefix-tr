---
title: Miele F77 — vana başlatma kodu ve kullanıcı sınırı
description: Miele CM ve CVA kahve sistemlerinde F77, açılışta vana başlatma sırasında yakalanan iç arızadır. Önce elektrik kesme; tekrarlayan F77 servise aittir.
---

Miele kahve sistemleri arızalarını saklayan markalar arasında değildir: F kodları makinenin kendi kendini teşhisinden gelir ve anlamları kullanım kılavuzlarında yazılıdır — [miele.com](https://www.miele.com/) üzerinden indirilebilen kılavuzlar dahil. F77, karşılaşmayı ummadığınız koddur ve tabelanın ciddi ucunda durur: açılış sırasında **tespit edilen iç arıza** için kullanılan genel koddur, pratikte ise çoğunlukla suyu makine içinde yönlendiren vana sisteminin başlatılamamasına işaret eder. Tezgah üstü CM modellerinde (CM 5510, CM 6150) ve gömme CVA ünitelerinde (CVA 6401, CVA 6805) görülür; iki serideki ifade hafifçe farklıdır. [F77 arıza sayfamız](https://tr.codefixcoffee.com/miele/cm-cva-machines/f77/) tamir tarafını adım adım anlatır; bu yazının konusu ise başlatmanın ne demek olduğu ve kullanıcı olarak nerede durmanız gerektiği.

## Başlatma sırasında tam olarak ne olur

Miele kahve makinesi açıldığında sadece ısınıp beklemekle yetinmez. Kontrol devresi her açılışta bir başlatma dizisi çalıştırır ve ilk içeceği sunmadan önce iç bileşenlerin beklendiği gibi yanıt verip vermediğini kontrol eder. F77 tam bu dizinin içinde kayda geçer: kart, makine başlatılırken bir iç arıza tespit etmiştir ve suyu makine içinde yönlendiren vana sistemi bu arızanın en sık kaynağıdır. Kılavuzdaki ifadenin bilerek geniş tutulmuş olması ("iç arıza"), aynı numaranın vana, pompa veya kontrol kartı arızasını kapsamasına yol açar.

İşte bu genişlik, F77'i Miele'nin daha zararsız kodlarından ayırır. [F10 ve F17](https://tr.codefixcoffee.com/miele/cm-cva-machines/f10-f17/), makinenin su çekmeye çalışıp başaramadığını bildirir: CM modellerinde boş, yerine oturmamış veya takılı kalmış çıkarılabilir hazne; tesisata bağlı CVA'larda kapalı besleme vanası veya tıkalı filtre. Bunlar gerçekten kullanıcı eliyle çözülür. F77 ise yüksek ciddiyet sınıfındadır ve kendi kendine tamir önerilmez; kılavuzun verdiği tek çare elektrik kesme denemesidir.

## İlk adım — Miele'nin önerdiği elektrik kesme denemesi

Kılavuz, kendi kendine çarenin sınırını açıkça belirtir; her şeyden önce bu denemeyi düzgün biçimde yapın:

1. Makineyi açma/kapama sensöründen kapatın; yalnızca bekleme modunda bırakmayın.
2. Fişi prizden çekin.
3. Makineyi birkaç dakika kapalı tutun. F77 daha önce kısa bir kesmeden sonra döndüyse tam bir saat bekleyin; bazı Miele kılavuzları tam olarak bunu önerir.
4. Fişi takıp makineyi açın ve tek bir şeye bakın: arıza başlatma sırasında hemen mi, yoksa bir içecek istendiğinde mi ortaya çıkıyor?

Gözlemleyebileceğiniz en değerli bilgi bu zamanlamadır. Temizlenen ve bir daha dönmeyen F77 geçiciydi demektir; elektrik kesme tek başına çözümdü. Buna karşılık her seferinde başlatma dizisinin aynı noktasında geri gelen F77, kartın bir kereliğine şaşırmasından değil, bir bileşenin kendi kontrolünü geçemediğinden söz eder. Servisi aramadan önce not almak yeter.

### Türkiye'de elektrik ve su koşulları

Türkiye şebekesi 230 V / 50 Hz olduğundan AB pazarındaki Miele makineleri için voltaj dönüşümü gerekmez; yine de F77 gibi açılış arızalarında makineyi topraklı ve kararlı bir prize bağlamak, sık gerilim dalgalanması yaşanan bölgelerde regülatör kullanmak koruma sağlar. Elektrik kesintisinden hemen sonraki ilk açılışta beliren F77 çoğu zaman geçicidir ve tek başına panik nedeni değildir. Sert su şehirlerinde tesisata bağlı CVA modellerinde filtre değişimini aksatmamak ise vana ve pompanın ömrünü belirgin biçimde uzatır.

## Vana grubu gerçekten servise gitmeliyse

Elektrik kesme denemesi tutmazsa geriye üç gerçekçi aday kalır: vana grubu, pompa veya kontrol kartı — en pahalısı karttır. Bu noktada doğru hareket durmak ve makineyi uzmanlara teslim etmektir:

- **Kapağı açmayın.** Miele dış kabuğun sökülmemesi gerektiğini açıkça yazar: makine iç gerilimler ve basınçlı bir su sistemi taşır. Bu uyarı doğrudan bu tür arızalar için konmuştur.
- **Servisi ararken model numarasını söyleyin.** CM 5510/6150 ile CVA 6401/6805 iç yapı olarak farklıdır; hangisine sahip olduğunuzu bilmek teşhisi hızlandırır.
- **Kapalı teklif değil, parça bazlı fiyat bekleyin.** Vana grubu kabaca €50 ile €120 arasında değişir; kontrol kartı daha pahalıdır. Garanti dışı üretici servisi süper otomatik makinelerde kargo dahil genellikle €250–€500 bandına oturur; tek parçalık işlerde bağımsız espresso tamircileri çoğunlukla daha uygundur.

Bu fiyat aralığı, F77'i genellikle "değiştir" değil "tamir et" kodu yapar: CM ve CVA sistemleri, hizmet aralığının üst ucu bile yeni bir gömme üniteye karşı mantıklı kalacak kadar değerlidir; üstelik soruyu kesinleştiren elektrik kesme denemesi hiçbir şeye mal olmaz.

## Genel kod tablosunda F77'in yeri

[Geniş Miele kod tablosuna](https://tr.codefixcoffee.com/miele/) bakıldığında desen tutarlıdır: su besleme kodları lavabo başında sizin işinizdir, vana ve demleme grubu kodları Miele servisine aittir ve F77 ikinci grubun en net örneğidir. Tezgahınızda ayrıca bir Sage veya Breville makine varsa onların kodları bambaşka çalışır; üreticinin hiçbir yerde yayınlamadığı servis tablosundan gelirler ve [Breville ve Sage rehberimiz](https://tr.codefixcoffee.com/breville/) bu tabloyu çözümler.
