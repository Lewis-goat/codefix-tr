---
title: GE bulaşık makinesinde 888 ve CFE — kart arızaları
description: GE bulaşık makinesinde 888 veya CFE mi var? Ekranın tümünü saran 888'nin anlamı, kart üzerinde su kontrolü ve fişli kart değişiminin gerçekleri.
---

GE bulaşık makinesi kodlarının çoğu ıslak bir şeyi işaret eder: C1 bir drenaj zaman aşımıdır, C6 hiç ısınmayan sudur, H2O hiç su gelmemesidir. Bir de tamamıyla kuru ve elektronik iki kod vardır. [888](https://tr.codefixcoffee.com/ge/dishwasher/888/), ana kontrol kartının kendi özdenetiminden geçemediği anlamına gelir; [CFE](https://tr.codefixcoffee.com/ge/dishwasher/cfe/) ise kapıya monte kullanıcı arayüzü ile ana kartın haberleşmeyi bıraktığını. İkisi de tıkalı bir filtrenin kılık değiştirmiş hâli değildir. Bu yazı, ekranın el değiştirmesinin gerçekte ne demek olduğunu, kartı sipariş etmeden önce yapılacak su kontrollerini ve değişimin nasıl bir iş olduğunu anlatır.

## 888 ekran işgalinin anlamı

Segmentli bir ekranda 888, tüm basamak konumlarının aynı anda yanmasıdır. C kodu anlamında bir arıza numarası değildir; kart kendi denetimini geçemediği için normal programını çalıştıramamakta ve her şeyi yakmaktadır. [C1](https://tr.codefixcoffee.com/ge/dishwasher/c1/) "pompayı iki dakika çalıştırdım, kap yine dolu" derken 888, "bunu fark edecek bilgisayarın kendisi bozuk" demektir.

Tetikleyici genellikle mekanik değil elektrikseldir: fırtına ya da jeneratör kaynaklı bir voltaj sıçraması karttaki bir bellek yazmacını bozar; o andan itibaren özdenetim makine her açıldığında başarısız olur. Klasik öğüt — kesiciden 60 saniye elektriği kesip yeniden başlatmak — tam bir denemeye değer, ama yalnızca bir tanesine. Sıfırlama bir aksaklığı siler, bozulmuş belleği onarmaz. Sıfırlamaya rağmen 888 geri gelirse hasar yerleşmiştir ve kartın değişmesi gerekir. Ara sıra neden bir sıçrama değil, kartı ıslatmış bir kaçaktır; aşağıdaki kontroller tam olarak bunun için vardır. Kod tanımları için [GE Appliances'ın resmi sitesindeki](https://www.geappliances.com/) destek sayfalarına da başvurabilirsiniz.

## CFE — diğer kart kodu

CFE bir haberleşme arızasıdır: kapı içindeki kullanıcı arayüzü ile ana kontrol kartı arasındaki bağlantı kopmuştur. Olağan şüpheliler, kablonun kapı menteşesi bölgesinden geçtiği yerde gevşeme veya aşınma, ıslanmış bir konnektör ya da iki karttan birinin arızasıdır. İki kartın bedeli farklı olduğundan tanı sırası burada önem kazanır: önce kesiciden sıfırlama; ardından elektrik kesikken demetin iki ucunu gözden geçirip yeniden oturtma — kapı her çevrimde büküldüğü için aşınma noktasına özellikle bakın. Yalnızca demet sağlam çıkarsa kartlara geçilir ve kullanıcı arayüzü genellikle değiştirmesi daha ucuz olanışıdır.

## Kart üzerinde su kontrolü

Herhangi bir parça siparişinden önce on dakikanızı kaçak yolunu elemeye ayırın, çünkü ıslak bir makineye takılan yeni kart da ölür:

1. Bulaşık makinesini altını görebilecek kadar öne çekin ve makinenin altındaki zeminde su ya da su izleri arayın.
2. Öndeki alt paneli sökün ve tabanı el feneriyle inceleyin: taban teknesinde duran su, kaçanın kartın mahallesine ulaştığının kanıtıdır.
3. Bariz kaçak kaynaklarına bakın — yanlış deterjandan taşan köpük, hasarlı kapı contası, çatlamış hortum, sulanan drenaj pompası contası.
4. Islak bir şey varsa önce iyice kurutun ve kaçağı onarın, sonra sıfırlayıp yeniden test edin. Bir kez sıçrayıp kuruyan kart kimi zaman toparlanır; duran suda bekleyen kart asla toparlanmaz.

Her şey kupkuru olduğu ve 60 saniyelik kesici sıfırlamasına rağmen 888 ya da CFE döndüğü hâlde kartı sipariş edin.

## Fişli kart değişiminin gerçekleri

"Kontrol kartı" sözünün arkasında saklanan iyi haber şu: GE bulaşık makinelerinde kart lehimli değil, fişli bir modüldür. Modele göre alt panelin ardında ya da kapının içindedir ve işin özü şudur:

1. Herhangi bir paneli sökmeden önce elektriği kesiciden kesin — yalnızca makinenin kapalı konumu yetmez.
2. Alt paneli ya da kapı önünü açarak kartı görünür hâle getirin.
3. Kablolara dokunmadan önce konnektör düzeninin fotoğrafını çekin.
4. Eski karttaki tüm konnektörleri çıkarın, yenisini monte edin ve aynı konumlara geri takın.

Lehim yok, yeniden kablolama yok — ama konnektör sayısı çok ve üzerlerinde etiket yoktur; fotoğrafın para kazandığı yer tam burasıdır. Panel sökümünde adım adım rehber isterseniz [iFixit'in söküm kılavuzlarına](https://www.ifixit.com/) başvurabilirsiniz. Ana kontrol kartı 90-200 €, kullanıcı arayüzü kartı ise 60-120 € bandındadır; yani bu onarım gerçek bir karardır — altı-yedi yaşın altındaki makinede yapmaya değer, daha eskisinde yeni makine fiyatıyla karşılaştırılmaya değer. Kendi yapmayacaksanız teknisyenin ev ziyareti, tanı için 120-250 € artı parça fiyatı demektir.

## Kısa hâl

[GE bulaşık makinesi kod dizini](https://tr.codefixcoffee.com/ge/dishwasher/) her kodu kapsar, ama kart kodlarının karar ağacı kısadır: bir kesici sıfırlaması, on dakikalık kaçak kontrolü ve ardından ya demet yeniden oturtma (CFE) ya da kart değişimi. Hiç olmadığı şeyler ise şunlardır: filtre sorunu, deterjan sorunu ya da üçüncü bir sıfırlamayla düzelecek bir şey.

### Türkiye'de ithal GE makineleri

GE bulaşık makineleri Türkiye'de resmî kanallardan satılmaz; elinizdeki makine büyük olasılıkla ithalatçı ya da kişisel ithalat yoluyla gelmiştir. Bu nedenle makinenin etiketindeki voltaja mutlaka bakın: ABD spesifikasyonlu 120 V'luk bir makine, 230 V şebekesinde yeterli gücü karşılayan bir trafo olmadan çalıştırılırsa kontrol kartı ilk giden parçalardan olur. Trafo seçerken makinenin çektiği gücü rahatça karşılayan bir model alın; yetersiz bir trafo, kireç kadar hızlı kart öldürür.
