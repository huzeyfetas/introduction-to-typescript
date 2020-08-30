// tipleri öğreniyoruz bu konuda
// js de let degisken = 5 diyoruz sonra degisken = 'huzeyfe' diyebiliyoruz yani dinamik olarak degisken tutabilyoruz ama typescript de öyle değil burada işler dinamik yürümüyor diğer dillerde olduğu gibi nesne yönelimli dillerde (js betik bir dil nesne tabanlı değil) şimdi typescripte statik olarak degisken belirliyoruz yani basta gidip let degisken = 5 dediysek js deki gibi sonra değiştiremeyiz bu bize bir hata olarak döner biz bu esnada gidip tsc ile ts dosyasının js cıksıtını almak istersek de buna müsade eder bir sıkıntı cıkartmaz zaten cıktı olan js dosyası aslında calısır da sıkıntı yok ama typescript için basta tip olarak ne verdiysen oradan ilerlemen lazım.
var degisken = 5;
degisken = "ali";
// şimdi bildiğimiz işlemlerin dışında değişik bir konu var burada daha önce ilk değer ataması yapmadığımız js kodlarımız vardı buna biz undefined diyorduk burada ise şimdilik anladığım kadarıyla bunun adi burada any yani herhangi bir tip olabilir anlamında yada şöyle diyeyim biz gidip de
var degisken_2;
//diye bir degisken tanımladık ve değer ataması yapmadık şimdi sonraki aşamalarda ilk baştaki değeri kontrol edecek ama ilk baştaki tip ne ? burada ilk baştaki tip any yani fark etmez ne istersen onu yaz anlamında
degisken_2 = 123;
degisken_2 = "sayı";
degisken_2 = true;
// gibi 3 değer ataması birden yaptık ve dikkat edersen herhangi bir kızgınlık söz konusu değil ama biz gidip de ilk başta
var degisken_3;
degisken_3 = 123;
degisken_3 = "sayı";
degisken_3 = true;
// deseydik görüldüğü gibi diğer seçeneklerde kızdı çünkü biz en başta dedik ki bak typescript bunu degisken_3 ün tipi number olacak. Sonra buna gidip string yada boolean değer atarsak hayliyle gelip bize de kızacak.
var a; // a degiskeni number olacak  tipini belirledik yani böylece
var b;
var c;
var d; // tipi any oldu yani d ye gidip önce 123 sonra string deger atayabiliriz.
d = 123;
d = "dasdas";
var e = [1, 2, 3, 4]; // e degiskeninin sadece sayıları barındıran bir array olduğunu söylüyoruz.
var f = [1, 2, 3, 4];
// e ile f tamamen aynı sadece yazım farkı var.
var g; // bu dizi de sadece stringleri barındıracak
var h = [1, "ali", true]; // tip fark etmeksizin bir array oluşturur
// yada istersek hangi indexin ne tip olacağını da özellikle söyleyebiliriz
var k = [1, "ali", false];
// şimdi sırada enum yapısı var.
// diyelim ki bankamadik için işlem seçme işlemi yaptıracağız buton 1 havale buton 2 eft buton 3 para çekmeyi ifade etsin istiyoruz tanımlamak için diyelim ki
var havale = 1;
var eft = 2;
var paraCek = 3;
// şimdi bunun yerine sanki bir obje tanımlıyormuşcasına enum tanımlayalım
var Secenekler_;
(function (Secenekler_) {
    Secenekler_[Secenekler_["havale_"] = 0] = "havale_";
    Secenekler_[Secenekler_["eft_"] = 1] = "eft_";
    Secenekler_[Secenekler_["paraCek_"] = 2] = "paraCek_";
})(Secenekler_ || (Secenekler_ = {})); //böyle yapabildiğimiz gibi başlangıc değeri vermezsek 0 dan başlar sırayla gider ama bir değer verirsek o değerden başlar diyelimki sonraki gelen ifadeye değer vermedik öncekinde ne değer varsa 1 fazlası ile başlar ama biz hataları önlemek için her zaman değer verme işlemi yapabiliriz
var Sececekler$;
(function (Sececekler$) {
    Sececekler$[Sececekler$["havale$"] = 1] = "havale$";
    Sececekler$[Sececekler$["eft$"] = 2] = "eft$";
    Sececekler$[Sececekler$["paraCek$"] = 3] = "paraCek$";
})(Sececekler$ || (Sececekler$ = {}));
var secenek_1 = Secenekler_.eft_; //0 değeri gelir
var secenek$1 = Sececekler$.eft$; // 1 den başlar cünkü değer verdik
console.log(secenek$1);
