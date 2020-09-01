// şimdi bu interfacelerden bir araç üretelim. Araç üretmekten kastımız burada bir nesne üretmek. Tabiki saf js ile nesne üretirken fonksiyonları kullanıyorduk çünkü orada class gibi bir yapı es6 ile geldi öncesinde sadece fonksiyonlar vardı. Gerçi hala var ama biz sınıf üretmek için class keywordunu es6 ile kullanabilir hale geldik. şimdi burada interfacelerin bize kattığı şey üretecek olduğumuz class ın nasıl bir şemaya sahip olaması gerektiği konusunda yol gösterecek. Biz dilersek tabi ki sınıfları interfacesiz de üretebiliriz ama bize kattığı + burada bir şablona uygun olarak üretilmesi.
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (konum) {
        console.log("Arac\u0131n konumu " + konum.x + "-" + konum.y + " ");
    };
    return Taxi;
}());
var toyota = new Taxi();
// toyota.currentLocation.x = 10;
// toyota.currentLocation.y = 20;
toyota.currentLocation = { x: 10, y: 20 };
toyota.travelTo(this.currentLocation);
