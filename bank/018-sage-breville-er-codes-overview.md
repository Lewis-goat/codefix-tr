---
title: Sage ve Breville ER kodları — gizli servis tablosunu okumak
description: Sage ve Breville makinelerindeki ER kodları üreticinin yayınlamadığı servis tablosundan gelir. ER01–ER18 düzeni ve Oracle'daki fark anlatılıyor.
---

Breville espresso makineniz durup panelde ER05 gösterdiğinde kullanım kılavuzu size ne olduğunu söylemez. Bu bir ihmal değil: Breville'in hata kodları, şirketin tamirlerde kullandığı ve sahiplerine açmadığı iç servis tablolarından gelir. Aynı donanım İngiltere'de **Sage** etiketiyle satılır — makineler birebir aynıdır — dolayısıyla bir Sage Barista Touch'ta gördüğünüz ER kodu, Breville'deki ikiziyle tam olarak aynı anlama gelir. [Breville / Sage bölümümüz](https://tr.codefixcoffee.com/breville/) güncel model ailesini kapsar; bu yazının işi ise numaralandırmanın nasıl kurgulandığını göstermek, öyle ki hayatınızda ilk kez gördüğünüz bir kod bile size bir şeyler söylesin.

## Breville kodlarını neden yayınlamıyor

Kullanım kılavuzu temizlik ve kireç çözme içindir, teşhis için değil; Sage'in [İngiltere destek sayfalarında](https://www.sageappliances.co.uk/) da ER tabloları yerine bakım rehberleri bulursunuz. Tam kod listeleri her makinenin servis modunun arkasında yaşar: teknisyenlere yönelik şifreli ekranlar, kayıtlı hata sayaçları ve canlı sensör okumaları. Kodlar bir tüketici özelliği değil tamir aracı olduğundan Breville bunları hiçbir resmi belgeye koymamıştır; bir sahibin gördüğü tek şey, kapanmaya yol açan o tek koddur. Karşıtlık çarpıcıdır: Miele F kodlarının anlamlarını kullanım kılavuzlarına basar, bu yüzden [Miele kod sayfalarımız](https://tr.codefixcoffee.com/miele/) kılavuzdan doğrudan alıntılayabilir.

## Barista Touch tablosu — ER01'den ER18'e

Barista Touch (BES880) ve aynı kontrol kartı ailesini paylaşan Barista Touch Impress (BES881) 18 girişli bir tablo kullanır. Yapı bir kez kavrandığında okuması kolaydır: sensör kodları **dörderli gruplar** hâlinde gelir ve her grup tek bir sensöre aittir — açılışta açık devre, çalışma sırasında açık devre, açılışta kısa devre, çalışma sırasında kısa devre.

- **ER01–ER04** — ThermoJet ("ferro") ısıtıcısının sıcaklık sensörü, dört açık/kısa devre varyantıyla. [ER01](https://tr.codefixcoffee.com/breville/barista-touch-bes880/er01/) açılıştaki açık devre girişidir.
- **ER05–ER08** — süt haznesi sıcaklık sensörü: çubuk sütü köpürtürken hazneyi okuyan, damlama tepsisi bölgesindeki küçük problar. ER05 en sık bildirilen Barista Touch kodudur ve dört girişin tamamı tek bir çözümü paylaşır.
- **ER09–ER12** — hat içi (demleme suyu) sıcaklık sensörü, aynı dört varyantlı desen.
- **ER13 ve ER14** — debimetre sayım hataları, açılışta ve çalışma sırasında: pompa çalıştı ama makineden geçen suyu sayamadı.
- **ER15** — iç elektronik modüller arası iletişim arızası; çoğu zaman ölü bir kart değil, yerinden çıkmış bir flex kablo ya da ıslanmış bir konektör.
- **ER16 ve ER17** — öğütücü: motor önce aşırı ısınıp korumaya girmiş, ardından görevini bitirmeden zaman aşımına uğramıştır.
- **ER18** — E-fast koruması; kaçak akım gibi elektriksel veya güvenlik arızasıdır ve prizdeki diferansiyel röleyi (RCD/GFCI) tetikleyebilen kod budur.

## Oracle ailesi farklı numaralar kullanır

Oracle'a geçince aynı fikir daha uzun bir tabloya dönüşür. Oracle (BES980) ve Oracle Touch (BES990) 32 girişli bir listeyi paylaşır; ancak BES980 girişleri "Error 1"–"Error 32" olarak gösterirken BES990 önlerine ER ekler. İlk on altı giriş dört sensör boyunca dörtlü mantığı izler: buhar kazanı 1–4, kahve kazanı 5–8 ([Error 8](https://tr.codefixcoffee.com/breville/oracle-bes980/error-8/), çalışma sırasında kahve kazanı sensörünün kısa devresi), ısıtmalı grup başı 9–12, buhar çubuğu 13–16. Kalanlar şöyledir: kazanların ısınmaması (17–19), buhar kazanı seviye ve dolum arızaları (20–21), debimetre sorunları (22–23), seviye probları ve aşırı ısınma (24–27), 28'de kartlar arası iletişim arızası, 29–30 öğütücü, 31 sıkma motoru ve 32 buhar kazanı kaçağı ya da dolum başarısızlığı.

Aileyi iki küçük tablo tamamlar: Oracle Jet (BES985) kendine özgü daha kısa bir E1–E19 listesi kullanır; Dual Boiler (BES920) ise 00–12 arası iki haneli kodlarını normal ekranda değil kendi kendine test menüsünde saklar. Yani bir Dual Boiler, ekranda hiç görmediğiniz bir arıza üzerinde sessizce durabilir.

## Gizli hata kaydını kendiniz okuyun

Tablolar servis verisi olduğuna göre, makinenizin geçmişini okumanın yolu da aynı servis ekranlarından geçer. Giriş yolları teknisyen mantığındadır ama tamirciler tarafından iyi belgelenmiştir:

- **Barista Touch ve Oracle Touch** — duvardaki priz anahtarından kapatın, ön Power düğmesini basılı tutarak elektriği geri verin, logo belirdiğinde düğmeyi bırakın ve servis şifresi 00000'i girin; kayıtlı hatalar için Error Counter'ı, canlı sıcaklık ve su seviyesi için Live Debug'u açın.
- **Barista Touch Impress** — tuş dizisi aynıdır, servis şifresi 02015'tir.
- **Oracle BES980** — makine fişte ama kapalıyken 1 CUP, 2 CUP ve POWER düğmelerine en az bir saniye birlikte basın; uzun bip sesinden sonra SELECT düğmesi Error Storage'ı açar ve 1'den 32'ye kodları kayıtlı sayılarıyla gezebilirsiniz.

Bu ekranları salt okunur kullanın: kayıtlı olanı not edin, ayarlara dokunmayın ve kaydı yalnızca onarımdan sonra temizleyin; böylece kodun geri dönüp dönmediğini görebilirsiniz.

### Türkiye'de Sage cihazı kullanıyorsanız

Sage markası resmî olarak İngiltere ve İrlanda pazarında satılır; Türkiye'de bulunan Sage cihazları ithal gelir ve İngiliz tipi fişli olduklarından takma adaptör yerine kaliteli bir fiş dönüşümü yaptırmak daha güvenlidir. Cihazlar 220–240 V olduğundan voltaj uyumu sorun değildir; ancak İngiltere garantisi Türkiye'ye taşınmadığından arıza durumunda genellikle bağımsız espresso tamircilerine başvurmanız gerekir. Satın almadan önce bu servis gerçeğini hesaba katmak, ER koduyla karşılaştığınız gün işinizi ciddi biçimde kolaylaştırır.

## Onarımlar genelde ne kadara mal olur

Tablo gizli olsa da maliyet tarafı tahmin edilebilirdir. Sıcaklık sensörü takımları, hangi sensör olduğuna bağlı olarak yaklaşık €25–€95 aralığındadır (buhar çubuğu ve süt haznesi sensörleri pahalı olanlardır); o-ring takımları €10–€20'dir ve €30–€50 civarındaki bir süt sensörü tamir kiti, €80–€95 isteyen orijinal takıma karşı makul bir seçenektir. Garanti dışı üretici teklifleri iç arızalarda yaygın olarak €300–€500 bandındadır; bağımsız bir tamircide sensör seviyesinde çözüm genelde daha iyi hesaptır. Sage etiketli cihazlar için aynı tabloların İngiltere ağırlıklı anlatımını sitemizin [İngiltere sürümünde](https://tr.codefixcoffee.com/uk/) bulabilirsiniz.
