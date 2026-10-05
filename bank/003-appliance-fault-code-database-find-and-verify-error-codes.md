---
title: Cihaz arıza kodunu bulmak ve doğrulamak
description: Arıza kodunun gerçek anlamı nerede bulunur: üretici listeleri, forumların servis dokümanlarıyla çaprazlanması ve aynı kodun farklı anlam verme tuzağı.
---

Ekrandaki kod cevabın yalnızca yarısıdır: makine bir arıza algıladığını söyler, hangi parçanın alınacağını nadiren. Kod, kontrol kartını programlayan mühendisin yazdığı bir belirti tanımıdır; üstelik arızayı algılayan kart, onu yanlış bildiren kart da olabilir. Bu yüzden sipariş vermeden önce kodun tam olarak markanızda, cihaz tipinizde ve modelinizde ne demek olduğunu — birden fazla kaynaktan — öğrenmeniz gerekir.

## Üretici listeleri vardır ama ya gizlidir ya yoktur

İlk sürpriz, resmî bir listenin hiç yayımlanmamış ya da sahiplerin asla bakmadığı bir yerde gizlenmiş olmasıdır.

- Bazı markalar hiçbir şey yayımlamaz. GE bulaşık makineleri C kodları, H2O ve 888 gösterir ama GE'nin resmî bir hata kodu sayfası yoktur; boşluğu onarım siteleri doldurur. 888 bir kontrol kartı arızasıdır — bunu GE'den öğrenemezsiniz.

- Bazı markalar bilgiyi ikiye böler. De'Longhi makineleri çoğunlukla Genel Alarm gibi kelimeler gösterir; daha yeni modeller ayrıca normalde yalnızca teknisyenlerin gördüğü 1101 veya 1512 gibi sayısal kodları da kaydeder. İki katman birlikte [Genel Alarm ve sayısal kodlar sayfasında](https://tr.codefixcoffee.com/delonghi/magnifica-dinamica/general-alarm-code-1101-1512/) listelenir.

- Bazı markalar yalnızca kullanıcı dostu alt kümeyi yayımlar. Philips, espresso makineleri için kullanıcının kendi çözebileceği küçük bir kod setini listeler ve gerisini desteğe yönlendirir — oysa "servis" kodlarının da tanımlanabilir nedenleri vardır.

- Kılavuzda tablo varsa genelde arkadadır: arıza tarama bölümünde, kod başına tek satır; parça adı ve çözüm adımı yoktur.

Bilgi çoğu zaman vardır — yeter ki hızlı başlangıç kılavuzunun ötesine bakmayı bilin.

## Bir teknisyen gibi doğrulama

### Ekranda ne görünüyorsa aynen kaydedin

Tam dizgiyi, cihaz tipini, etiket üzerindeki tam model numarasını ve kodun ne zaman çıktığını not edin. Yanlış okunan tek bir hane sizi yanlış alt sisteme yollar. Samsung ocak veya ankastre fırındaki "SE", dokunmatik membrandaki sıkışmış tuş arızasıdır — ayrıntısı [Samsung SE açıklamasında](https://tr.codefixcoffee.com/samsung/range-wall-oven/se/) — ve benzer görünümlü dizeler başka cihaz tiplerinde bambaşka yerleri gösterir.

Kodun açılışta mı çevrim ortasında mı çıktığını da not edin: açılış arızalarını açılış self-testi yakalar; çevrim ortası arızaları çoğunlukla o anda aktif olan parçayı ilgilendirir — pompa, ısıtıcı veya vana. Kodun neyle kaybolduğuna da bakın: Samsung fırınlar kodu, neden giderilene ya da sigortadan üç dakika güç kesilene kadar ekranda tutar; markanın fırın kodlarının tamamı [Samsung fırın kodları sayfasında](https://tr.codefixcoffee.com/samsung-oven-error-codes/) dizinlidir.

### Önce üreticinin anlamını bulun

Forumlara dokunmadan önce kılavuzun arıza tarama bölümüne, markanın parça-servis portalına ve modelinize ait servis bülteni PDF'lerine bakın. Resmî anlam temeldir; gerisi yorumdur. Markaların kullanım kılavuzlarının çoğu çevrim içidir — örneğin [Jura](https://www.jura.com/) ve [Philips](https://www.philips.com/) kılavuzlarını kendi sitelerinde sunar.

### Forumları servis dokümanlarıyla çaprazlayın

Asıl neyin bozulduğunu forumlarda öğrenirsiniz. Servis tablosu bir kodun "demleme grubu arızası" olduğunu söyler; forum, sizin modelinizde bunun çoğu zaman sıkışmış kahve tortusu ve on beş dakikalık bir temizlik olduğunu söyler. Konuları kanıt olarak görün, kesin gerçek olarak değil:

- Tam modelinizi adlandıran ve haftalar sonra hâlâ tutan bir onarımdan söz eden mesajlara ağırlık verin.

- Her kodda her makineye aynı parçayı öneren konulardan uzak durun.

- Forum iddiası ile servis dokümanı çelişirse, anlamda servis dokümanı kazanır; olasılıkta forum.

## Tuzak: aynı kod, başka anlam

Kendi kendine teşhisin çoğu bu noktada yoldan çıkar, çünkü hata kodları standart değildir — markalar arasında olmadığı gibi bazen aynı markanın ürün gamı içinde de değildir.

- Aynı sayı ilgisiz şeyler demektir. Jura'da Error 2, kahve termobloğu sensör arızası ya da yalnızca ısıtamayacak kadar soğuk bir makinedir ([ayrıntı](https://tr.codefixcoffee.com/jura/automatic-machines/error-2/)); Philips veya Saeco'da Error 02 ise doğrudan servise yönlendirilen bir iç arızadır. Aynı numara, aynı kategori; farklı alt sistem, farklı fatura.

- Kelimeler kod saklayabilir. De'Longhi'nin "Genel Alarm"ının, teknisyenler için kaydedilen sayısal bir ikizi vardır; işi iyi yapmak iki katmanı bilmektir.

- Kategori, marka kadar önemlidir. Bir ocaktaki kod dizisi aynı markanın bulaşık makinesinde bambaşka bir yeri gösterir. Önce cihaz tipine, sonra modele göre filtreleyin.

Anlamı belirtiyle sağlama alın: hâlâ ısıtan bir makinede ısıtıcı kodu ya da hâlâ boşaltan bir makinede drenaj kodu görüyorsanız, genelde yanlış kaydı — ya da yanlış modelin kaydını — okuyorsunuzdur.

## Beş adımlı doğrulama listesi

1. Ekranı fotoğraflayın ve etiketten tam model numarasını not edin.

2. Üreticinin anlamını kılavuzdan veya servis dokümanından alın.

3. Modelinizi adlandıran ve kalıcı bir onarım rapor eden en az iki forum konusuyla teyit edin.

4. Anlamı bağımsız bir referansta çaprazlayın — örneğin [Philips 11 veya 19](https://tr.codefixcoffee.com/philips-saeco/espresso-machines/error-11-or-19/) her kaynakta aynı okunmalıdır; iki kaynak çelişirse servis dokümanından alıntı yapana güvenin.

5. Makineyi bir kez sıfırlayın, sonra karar verin: kod hemen geri gelirse gerçektir; ucuz parça, temizlik veya teknisyen arasında seçim yapın.

## Araştırmayı ne zaman bırakmalı

İki bağımsız kaynak anlamda uzlaşıp belirti de uyuyorsa sekmeleri kapatın. Sıfırlamadan hemen sonra geri gelen bir kodu başka hiçbir okuma değiştirmez — oradan sonrası pratik bir karardır: parçanın fiyatı karşısında makinenin yaşı.

### Türkiye'de araştırma pratikleri

Türkiye'de satılan cihazların kullanım kılavuzlarının Türkçesi genelde kutudan çıkar; yine de en güncel PDF'ler ve servis bültenleri üreticinin uluslararası destek sayfalarında yayımlanır. Yetkili servisi aramadan önce kodu, tam model numarasını ve satış faturanızı elinizin altına alın: Türkiye'de servis kaydı genellikle bu bilgilerle açılır ve çağrı ciddi biçimde kısalır. Model etiketi çoğu cihazda kapının iç kenarında, arkada veya alttadır; telefonla okumaya çalışmadan önce fotoğrafını çekin.
