// bir hesaplama işlemi yapan fonksiyon yazalım
function getAvarage(a, b, c) {
    var result = (a + b + c) / 3;
    return result;
}
getAvarage(1, 2, 3);
// böyle basit bir toplama işleminin ortalamasını veren bir fonksiyon yazabiliriz şimdi gelelim bunun typescript ile modern yazımını geliştirmeye. Bu adımda öncelikle gelen parametrelerin tiplerini belirleyebiliriz.
function getAvarage1(a, b, c) {
    var result = (a + b + c) / 3;
    return result;
}
getAvarage1(1, 2, 3);
// parametre tiplerini belirleyebildiğimiz gibi return tipini de belirleyebiliriz.
function getAvarage2(a, b, c) {
    var result = (a + b + c) / 3;
    return "result " + result; // böylece string değer oluşturduk
}
getAvarage2(1, 2, 3);
// parametreyi opsiyonel yapmak için '?' ni kullanabiliriz. böylece belli bir sayıdan sonraki parametreleri opsiyonel yani tercihe bırakılmış yapabiliriz.
function getAvarage3(a, b, c) {
    var result = (a + b + c) / 3;
    return "result " + result; // böylece string değer oluşturduk
}
// c parametresini tercihe bağlı yaptık
getAvarage3(1, 2);
getAvarage3(1, 2, 3);
getAvarage3(1, 2, 3, 4); //hatalı 4.parametre diye bir şey yok
getAvarage3(1); //hatalı 2.parametre zorunluydu. sadece 3.parametre tercihe bağlıydı
// tabi üstteki kodda result kısmında +c dediğimiz için undefined ile toplarsak NaN döner bunun için toplama işlemini de dinamik yapmamız gerekiyor. fonksiyonu güncelleyelim.
function getAvarage3(a, b, c) {
    var total = a + b;
    var count = 2;
    if (c != undefined) {
        total += c;
        count++;
    }
    var result = total / count;
    return "result " + result;
}
getAvarage3(1, 2);
getAvarage3(1, 2, 3);
getAvarage3(1, 2, 3, 4);
getAvarage3(1);
// böyle daha doğru bir yaklaşım sergilemiş olduk
// şimdi sınırlı sayıda parametre ile çalıştık aslında işi bir tık ileriye götürelim ve arguments ile çalışalım. yani fonksiyonumuz gelen tüm parametrelere saygı göstersin. onlara gör şekil alsın istiyorsak es5 de arguments kullanıyorduk es6 için ... rest parametreslerini kullanıp yazım yapalım. rest parametterslarin bir dizi olarak gelebileceğini göz önünde bulundurmakta fayda var.
function getAvarage4() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return "result " + result;
}
getAvarage4(1, 2);
getAvarage4(1, 2, 3);
getAvarage4(1, 2, 3, 4);
getAvarage4(1, 2, 3, 4, 5);
getAvarage4(1);
// typescript içinde sadece ts yazmak zorunda değiliz istersek es5 es6 gibi yazım yöntemlerini de kullanabiliriz.
// fonksiyonumuzu es6 yazımı ile güncelleyelim. arrow funcktions şeklinde yazılım ->
var getAvarage5 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var result = total / count;
    return "result " + result;
};
//es6 şeklinde bir başka basit fonksiyon yazalım ve returnü olmayan bir şey yazalım eğer yanlışlıkla return edersek hata versin diye void anahatar kelimesini kullanalaım.
var voidFunction = function () {
    console.log("parametre almayan ve her hangi bir şey return etmeyen sadece log basan bir fonksiyon olan voidFunction metodu çalıştı");
};
