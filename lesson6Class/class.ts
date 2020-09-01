interface Konum {
	x: number;
	y: number;
}

interface Arac {
	currentLocation: Konum;
	travelTo(konum: Konum): void;
}

// şimdi bu interfacelerden bir araç üretelim. Araç üretmekten kastımız burada bir nesne üretmek. Tabiki saf js ile nesne üretirken fonksiyonları kullanıyorduk çünkü orada class gibi bir yapı es6 ile geldi öncesinde sadece fonksiyonlar vardı. Gerçi hala var ama biz sınıf üretmek için class keywordunu es6 ile kullanabilir hale geldik. şimdi burada interfacelerin bize kattığı şey üretecek olduğumuz class ın nasıl bir şemaya sahip olaması gerektiği konusunda yol gösterecek. Biz dilersek tabi ki sınıfları interfacesiz de üretebiliriz ama bize kattığı + burada bir şablona uygun olarak üretilmesi.

class Taxi implements Arac {
	currentLocation: Konum;
	travelTo(konum: Konum): void {
		console.log(`Aracın konumu ${konum.x}-${konum.y} `);
	}
}

let toyota = new Taxi();
// toyota.currentLocation.x = 10;
// toyota.currentLocation.y = 20;
toyota.currentLocation = { x: 10, y: 20 };
toyota.travelTo(this.currentLocation);
