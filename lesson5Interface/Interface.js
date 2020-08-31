// şimdi diyelim ki bir aracın x koordinattan y kordinata gittiği bir metodunuz muvar
var travelTo = function (params) { };
// bu fonksiyona a ve b diye iki tane parametre gönderelim. a başlangıc b de varış koordinatını temsil etsin
var travelTo1 = function (a, b) { };
// işi biraz daha güzel yapmak istersek buraya 2 tane parametre göndermek yerine aslında bu bilgileri barındıran 1 tane obje göndermemiz daha güzel olur
// yada fonksiyonumuzu geliştirelim a ve b nin bir kalıp olarak gittiği bir yapıyı alan bir fonksiyon yazalım enum gibi bir yapı bu adına interface diyeceğiz. bizim için bir kalıp tutacak bu. içinde sadece tip belirlemesi yapacağız herhangi bir doldurma yapmayacağız.
// mesela fonksiyonumuz
var getDistance = function (pointA, pointB) {
    // .. işlemler
};
// şimdi burada bir obje gönderiyoruz ama objenin tipi genel itibariyle bir kalıp şeklinde bunun yerine şunu diyebiliriz.
var getDistance2 = function (pointA, pointB) {
    // şuan elimizde bir point yapısı yok bunu oluşturalım şimdi.
};
// gördüğümüz gibi tanımladığımız bir aracaın varıs yeri gidilecek yol eklenecek yolcu silinecek yolcu gibi özelliklere sahip olacağının bu özelliklerin ne şekilde olacağı gibi sadece yapısal şeması çizildi. bunların ne yaptığı konusunda şuan için ilgilenmiyoruz ki interfacein amacı da ne yaptığı nedildir. yapacağı iş  sırasında alacağı yapının tipini imzasını sergilemektir.
// burada tanımaladığımız interfaceler bizim için bir şema görevi görecek biz bunları baz alıp insan , araç gibi şeyleri tanımlamak için class lara ihtiyacımız var.
