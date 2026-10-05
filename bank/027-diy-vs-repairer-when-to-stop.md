---
title: Kendin onar mı, servise mi? Zorluğu dürüstçe okumak
description: Hata koduna kendiniz mi bakmalısınız? Ciddiyet ile zorluğu ayırmak, dur sinyalleri, güvenlik vidaları ve şebeke gerilimi ile maliyet hesabı.
---

Ekranda bir kod var, kullanım kılavuzundaki öneri çözmedi ve soru artık kişisel görünüyor: bunu kendim mi onarayım, para mı ödeyeyim? Bu çoğunlukla yeteneğinizle ilgili bir soru değildir; arızayla ilgili bir sorudur. Üstelik birbirinden bağımsız ele alınması gereken iki ayrı yargıya ayrılır: bu arıza ne kadar tehlikeli ve bu tamir ne kadar zor?

## Ciddiyet, zorluk demek değildir

**Ciddiyet**, makineyi ne kadar acil durdurmanız gerektiğini anlatır: yangın riski, su basması riski ya da arızanın yol boyunca başka parçaları da götürme riski. **Zorluk** ise tamirin sizden ne istediğidir: alet, erişim ve söküm sırasında ters gidebilecek her şey. Bu iki ölçek birbirinden bağımsızdır; karıştırmak hem gereksiz paniğe hem tehlikeli gevşekliğe yol açar.

- **Ciddi ama yönetilebilir.** [GE bulaşık makinesinde E1](https://tr.codefixcoffee.com/ge/dishwasher/e1-leak/), kaide içindeki su taşırma şamandırasının devreye girdiğini bildirir; ciddiyet yüksektir ve makine, taban kuruyana kadar ve kaçak bulunana kadar çalışmaz. Yine de ilk hamleler basittir: suyu kapatın, elektriği kesin, alt paneli çekin ve her şeyi kurulayın.
- **Etkileyici görünen ama ılımlı.** [Jura Error 8](https://tr.codefixcoffee.com/jura/automatic-machines/error-8/), demleme grubu çevrimini tamamlayamadığı için makineyi tamamen durdurur. Büyük bir arıza gibi okunur ama çoğunlukla bir temizlik işidir: Error 8'lerin çoğu bir kutu tablete mal olur.
- **Hem ciddi hem gerçekten zor.** [Jura Error 7](https://tr.codefixcoffee.com/jura/automatic-machines/error-7/), vana kartın komut ettiği konuma hiç ulaşmadı demektir ve kullanıcı düzeyinde güvenilir çözümü bulunan çok az Jura kodundan biridir.
- **Baştan menü dışı.** [Miele F77](https://tr.codefixcoffee.com/miele/cm-cva-machines/f77/) dahili bir vana arızasıdır; resmi çözüm yeniden başlatmayla sınırlıdır ve kasanın açılmaması açıkça belirtilir, çünkü içeride hem yüksek gerilim hem basınçlı su sistemi vardır.

Çalışma kuralı şu: ciddiyet **durup durmayacağınızı**, zorluk **işi kimin yapacağını** belirler.

## Kodun dur sinyali olduğu anlar

Bazı durumlar, özgüveniniz ne düzeyde olursa olsun, henüz alet çıkmadan kendin-yap aşamasını bitirir:

- **Elektronik bulunan yerde su.** E1 gibi bir taşırma şamandırası kodu, taban kuruyana ve kaçak izlenene dek makinenin yeniden çalıştırılmaması demektir; "bir program daha deneyelim" demek değildir.
- **Kapanmayan ısıtıcı.** Yinelenen aşırı sıcaklık kodunun ciddi versiyonu, güç kartının ısıtıcıyı kesememesidir. Bunu yangın riski olarak değerlendirin: fişi çekin ve makineyi gözetimsiz şekilde şebekeye takılı bırakmayın.
- **Üreticinin koyduğu sınır.** Bir kodun belgelenmiş çözümü yeniden başlatma ve ardından "servisle görüşün" ise ve kılavuz kasanın açılmayacağını söylüyorsa, üretici kendi sınırını ve sizin güvenlik payınızı size bildiriyordur.
- **Düzgün sıfırlamaya rağmen yinelenme.** Kahve makinesini beş dakika fişten çekin ya da bulaşık makinesini sigortadan altmış saniye kesin. Çevrimin aynı noktasında geri gelen kod, geçici bir aksaklık değil, kendi testini geçemeyen bir parçadır.

## Şebeke gerilimi ve güvenlik vidaları

Kahve makinelerinde zorluğun en dürüst tarafı erişimdir. Jura kasaları oval başlı Torx-Plus güvenlik vidalarıyla tutulur ve içerideki termoblok uçları şebeke gerilimi taşır. Error 7 için gereken vana parçaları herkese satılır; ancak takmak, güvenlik vidaları, gerilimli tarafta çalışma farkındalığı ve ardından mekanizmayı yeniden kalibre etme demektir. Bu kod için dürüst hüküm şudur: bu makineleri zaten servis etmiyorsanız iş tezgâh işidir. Söz konusu tornavidaya sahip değilseniz kasayı kapalı kabul edin.

Aynı disiplin evdeki her cihaz için geçerlidir. Yalıtımı prizden ya da sigortadan yapın, makinenin kendi düğmesiyle değil. Ve bir güvenlik elemanını asla devre dışı bırakmayın: termal sigorta patlamak için vardır; ısıtıcıyı denemek için kabloyu köprülemek, öğrenmek istediğiniz hiçbir şeyi öğretmez. Alet ve söküm rehberleri için [iFixit'in rehberleri](https://www.ifixit.com), bulaşık makinesi tarafında ise [GE'nin destek bölümü](https://www.geappliances.com) güvenilir kaynaklardır.

## Maliyet hesabı

Yol seçmeden önce üç seçeneği de fiyatlayın:

1. **Ücretsiz deneme.** Sıfırlama, temizlik programı, parçayı yeniden takma, kireç çözme. Maliyeti sıfırdır ve günlük kodların büyük kısmını tek başına geçiştirir.
2. **Kendin yap tamiri.** Parça, alet ve yanlış teşhis riskini ekleyin. Temizlik tabletleri 15-25 €, Jura demleme grubu 80-150 €, seramik vana grubu modele göre 60-150 € civarındadır.
3. **Servis.** Garanti dışı üretici servisi, süper otomatiklerde tipik olarak kargo dahil 250-500 € bandına gelir; tek parçalık işlerde bağımsız espresso tamircileri genellikle daha ucuzdur. Eve gelen beyaz eşya teknisyeni ise teşhis artı parça olarak 120-250 € ister.

Sonra toplamı makinenin kendisiyle tartın. Üst segment [Jura](https://tr.codefixcoffee.com/jura/) Z ve GIGA makinelerde servis aralığının tavanı bile genellikle mantıklıdır; on yıllık bir E veya ENA'da teklifi yenilenmiş bir makineyle karşılaştırın. İşçiliğin ağır bastığı yere de bakın: Error 7'de servis işçiliği tipik olarak parçanın kendisini geçer.

Kod, arızalı devreyi adıyla söyleyerek işini zaten yaptı. Önce ciddiyete bakın; dur diyorsa durun. Zorluğa sonra bakın ve alet kutunuzla tamir arasında kalan boşluk, işi kimin yapacağına karar versin.

### Türkiye'den pratik not

Türkiye'de şebeke gerilimi 220-230 V olduğundan Avrupa'dan getirilen makineler transformatörsüz çalışır; asıl mesele, marka servis ağının büyük şehirlerde yoğunlaşması ve Anadolu'daki kullanıcıların makineyi çoğu zaman kargoyla göndermek zorunda kalmasıdır. Kargoya vermeden önce hazneyi boşaltın, damla tepsisini kurulayın ve makineyi mümkünse orijinal kutusunda, içinde sabitlenmiş olarak paketleyin. Servis çağrısında makinenin model ve seri numarasını koddan önce hazır bulundurmak hem telefonu hem teşhisi kısaltır.
