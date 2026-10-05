---
title: Breville Dual Boiler 00–12 — iki haneli kodlar
description: Breville Dual Boiler BES920, 00–12 kodlarını gizli self-check menüsünde gösterir; blokların anlamı, buhar ve demleme tarafı, çözümler ve parça maliyetleri.
---

Breville'in espresso makineleri arızalarını çoğunlukla her zamanki ekrandan duyurur: Barista Touch ER kodları, Oracle "Error" yazısı, Oracle Jet E numaraları kullanır. **Dual Boiler BES920** bu konuda ayrı bir yol izler. Arıza tablosu düz iki haneli kodlardan oluşur — **00'dan 12'ye** — ve bunlar gündelik ekranda değil, gizli bir self-check menüsünde yaşar. Normal bir gün paneli izleyerek bu kodları göremezsiniz; tuş birleşimini bilmek gerekir.

Numaralandırmayı kavramak işe yarar, çünkü tablo düzgün kurgulanmıştır: bir kodun düştüğü blok arızanın türünü, bloğun içindeki numara ise şikâyet eden parçayı adlandırır.

## Hata kaydı nasıl okunur

Kayda self-check menüsünden ulaşılır:

1. Makineyi duvardaki şalterden kapatın.
2. Gücü geri verirken **EXIT** ve **MANUAL** tuşlarını basılı tutun; self-check menüsü ekrana gelir.
3. 3 numaralı madde olan hata kaydına inmek için **MENU** tuşuna basın; 4 numaralı madde kazan seviyesini LLL (düşük) veya HHH (yüksek) olarak gösterir.
4. Hata kaydında **MENU** ile 00-12 arası kodlar arasında gezinin; her kodun yanında saklanmış bir sayaç bulunur.
5. "ErSt" yazısında **MANUAL** tuşunu bip sesi gelene kadar basılı tutun; kayıtlı kodlar temizlenir, fincan sayacı sıfırlanmaz.

Kodlar kadar sayaçlar da konuşur. Geçen yıldan kalma ve sayacı bir olan arıza tarihtir; her hafta artan sayaçsa büyüyen bir canlı sorundur.

## 00 ailesinin kapsamı

Sıcaklık sensörü bloğu, **00 ile 05 arası** kodlardan oluşur ve üç çift hâlinde dizilmiştir. Her çiftte küçük numara sensörün **algılanmadığını** (kart onu açık devre olarak okur), büyük numara ise **kısa devre** okunduğunu söyler:

- **00 ve 01** — buhar kazanı sıcaklık sensörü; önce algılanmadı, sonra kısa devre.
- **02 ve 03** — kahve kazanı sıcaklık sensörü; önce algılanmadı, sonra kısa devre.
- **04 ve 05** — demleme grubu ısıtıcısının sıcaklık sensörü; önce algılanmadı, sonra kısa devre.

BES920 çift paslanmaz kazan ve ısıtılan bir demleme grubu taşıdığından, üç NTC sensörü makinenin üç ısıtmalı bölgesini karşılar. [00 kodu sayfası](https://tr.codefixcoffee.com/breville/dual-boiler-bes920/00/) buhar kazanı sensörünü ele alır; önerisi diğer beşine de aynen aktarılır: parça siparişi vermeden sensör fişini yeniden oturtup gözden geçirin ve nem arayın — bir konnektörün üzerinden geçen su, duruşuna göre açık ya da kısa devre olarak okunur. Orijinal NTC sensörü takımları hangisi olduğuna göre 25 € ile 90 € arasındadır; o-ring takımları 10-20 €'dur ve çoğu zaman gerçek suçlu zaten odur.

## Buhar tarafı ve demleme tarafı

Tablonun gerisi, sensör çiftlerini de ayıran donanım çizgisi boyunca bölünür:

- **Buhar kazanı:** 06 (başlangıçta pompa sorunu), 07 (su seviyesi veya pompa arızası) ve 11 (aşırı ısınma saptandı).
- **Kahve kazanı, yani demleme tarafı:** 08 (pompa veya akış sorunu), 09 (su seviyesi arızası) ve 10 (aşırı ısınma saptandı).
- **Demleme grubu:** 12 (aşırı ısınma saptandı).

### Birlikte gezen kodlar

Bu arızalar birbirine kenetlenmiştir; tek koda değil tüm kayda bakmak bu yüzden kazançlıdır. 08, pompanın çalıştığı ama debimetreğin hiçbir şey göremediği anlamına gelir — en sık nedenler debimetre paletindeki kireç ya da su hareket ettirmeden vızıldayan küçük bir pompadır ve her iki durumda da ilk hamle kireç çözmedir. 11'deki buhar kazanı aşırı sıcaklığı çoğunlukla doldurulmayan kazanını izler; 07 veya 08'de de sayaç var mı bakın — çünkü ısıtma elemanı düşük kazanı ısıtmayı sürdürür. Diğer neden, probla kazan arasındaki contanın sızdırmasıdır. Sipariş vermeden önce menüdeki 4. maddeyi okuyun: seviye durumu, makineyi doldururken duyduğunuzla çelişiyorsa arızanın gerçekte hangi tarafta olduğunu söyler.

12, yani demleme grubunun aşırı ısınması, tablonun seyrek görülen ucudur ve yinelenmenin en çok önem taşıdığı koddur — üst üste dönen bir aşırı ısınma, sensör kaymasından çok ısıtıcıyı açık kilitleyen güç kartına işaret eder. [12 kodu sayfası](https://tr.codefixcoffee.com/breville/dual-boiler-bes920/12/) konuyu baştan sona anlatır.

## Parçaların maliyeti

- Akış ve seviye kodları için kireç çözücü: yaklaşık 10 € — ve bu kodların gözle görülür bir bölümünü gerçekten çözer.
- Besleme pompası: 30-60 €.
- Buhar kazanı probu ve o-ring takımı: yaklaşık 85 €; tek başına o-ring takımı 10-20 €.
- Termal sigorta: 10-20 € — ama neden attığını öğrenmeden değiştirmeyin.
- Triyak veya güç kartı: 80-150 €.

Garanti dışı Breville servis teklifleri dahili arızalarda yaygın olarak 300 €'dan başlayıp yukarı gider; bir pompa ya da sensör kendiniz yapmaya değer, eski makinede kart için önce teklif alın. Su ile şebeke elektriği kazanın tepesinde aynı yeri paylaşır; problara dokunmadan önce fişi çekin.

## Türkiye'de bu makineye sahip olanlar

### İthal makine, İngiliz fişi

Dual Boiler Türkiye'de resmî bir Breville dağıtım ağıyla gelmez; makine genellikle İngiltere'den "Sage" etiketiyle ya da ithalatçılar üzerinden girer. Sage sürümleri 220-240 V olduğu için trafo gerekmez, ancak İngiliz tipi fiş Türk prizine oturmaz — makinenin çektiği akımı sorunsuz kaldıran kaliteli bir adaptör kullanın. Servis ya da garanti sürecine girmeden önce hata kaydındaki kodları ve sayaçları satıcıya iletmek işleri ciddi biçimde hızlandırır.

Kılavuz ve bakım notları için aynı makinenin İngiltere'deki kardeşi olan [Sage Appliances'ın resmi sitesine](https://www.sageappliances.co.uk/) bakabilirsiniz. Ailedeki diğer makinelerin kodları nasıl ifade ettiğini [Breville bölümü](https://tr.codefixcoffee.com/breville/) özetler — ER ailesi makineler tanıma fikrini paylaşır ama numaralandırmayı asla.
