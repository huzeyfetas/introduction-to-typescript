// şimdi diyelim ki bir aracın x koordinattan y kordinata gittiği bir metodunuz muvar

const travelTo = (params) => {};

// bu fonksiyona a ve b diye iki tane parametre gönderelim. a başlangıc b de varış koordinatını temsil etsin

const travelTo1 = (a, b) => {};

// işi biraz daha güzel yapmak istersek buraya 2 tane parametre göndermek yerine aslında bu bilgileri barındıran 1 tane obje göndermemiz daha güzel olur

// yada fonksiyonumuzu geliştirelim a ve b nin bir kalıp olarak gittiği bir yapıyı alan bir fonksiyon yazalım enum gibi bir yapı bu adına interface diyeceğiz. bizim için bir kalıp tutacak bu. içinde sadece tip belirlemesi yapacağız herhangi bir doldurma yapmayacağız.

// mesela fonksiyonumuz

const getDistance = (
	pointA: { a1: number; a2: number },
	pointB: { b1: number; b2: number },
) => {
	// .. işlemler
};

// şimdi burada bir obje gönderiyoruz ama objenin tipi genel itibariyle bir kalıp şeklinde bunun yerine şunu diyebiliriz.

const getDistance2 = (pointA: Point, pointB: Point) => {
	// şuan elimizde bir point yapısı yok bunu oluşturalım şimdi.
};

interface Point {
	x: number;
	y: number;
}

//burada point isminde bir obje gibi tanımlama yapıyoruz bu bizim için bir kalıp yapı tutacak. bizim için bir yeni bir tip gibi düşünebiliriz. bir kalıp.

// özetleyecek olursak aslında sistemde yapmak istediğimiz şey biraz da şu biz zaten typescript ile tip kontrolü yapıyoruz burada yaptığımız şey interface ile tipler topluluğu kontrolu bir kalıp kontrolü. diyoruz ki hey fonksiyon bak sana bir parametre gelecek gelen parametre Point şeylinde tanımlanmış ve kendi içinde kuralları var ona göre işlem yap.

interface Arac {
	// bir aracın nereden nereye gideceğini bir şema şeklinde tuttalım
	currentLocation: Point; // şuanki konum için tutalım
	pointOfDestionation: Point; // yine point interfacei kalıbına uygun bir varış noktası tutalım
	toTravel(pointA: Point, pointB: Point): void; // current ve destination u alan bir toTravel metodu yazdık aldığı parametreler de point formatında olacak ve herhangi bir şey return etmeyeceği için void tanımladık.
	getDistance(pointX: Point, pointY: Point): number; // yine aynı şekilde ama number dönen bir metot yazdık.

	// interface tanımlarken dikkat edersek arac burada baştan sona bir interface. Ve dediğimiz şey şu bu Araç şablonunda currentLocation pointOfDestination ve 2 adet fonksiyon bulunmaktadır.

	addPassenger(passenger: Passenger): void;

	removePassenger(passenger: Passenger): void;
}

// Passenger interface tanımlayalım

interface Passenger {
	name: string;
	surname: string;
	age: number;
}

// gördüğümüz gibi tanımladığımız bir aracaın varıs yeri gidilecek yol eklenecek yolcu silinecek yolcu gibi özelliklere sahip olacağının bu özelliklerin ne şekilde olacağı gibi sadece yapısal şeması çizildi. bunların ne yaptığı konusunda şuan için ilgilenmiyoruz ki interfacein amacı da ne yaptığı nedildir. yapacağı iş  sırasında alacağı yapının tipini imzasını sergilemektir.

// burada tanımaladığımız interfaceler bizim için bir şema görevi görecek biz bunları baz alıp insan , araç gibi şeyleri tanımlamak için class lara ihtiyacımız var.
