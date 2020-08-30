// typescript de tür dönüşümlerini inceliyoruz
// şimdi diyelim ki bir değişlen tanımladık ve içine hello word yazdık
var message = "Hello World";
// typescript bunun string olduğunu şu anda biliyor. mouse üzerine götürdüğümüz zaman tipinin string olduğunu anladığini görüyoruz. Elimnizde string bir değer varsa biz gidip string metotlarını kullanabiliriz. editörde intellisense kullanıyorsak hemen otomatik olarak lenght spline slice toUpperCase gibi metotlar direk geliyor.
var messageLength = message.length; // burada . işaretiyle hemen değerler geliyor
// ama biz gidip message değerini tanımlayıp bir değer atması yapmasaydık önceki dersten biliyoruz ki burada message değişkeni any tipinde olurdu
var message_2;
message_2 = "Hello World";
var message_2_length_1 = message_2.length;
// şimdi burada . işaretiyle otomatik olarak length metodu gelmedi çünkü typescript şuan bu değişkenin tipini any olarak tanımladığı için string olduğunu bizim burada özellikle söylüyor olmamız lazım. Hey typescript bu message_2 değişkeni string olacak ona göre işlem yap dememiz lazım. Bunu söylemenin 2 yöntemi var.
// yöntem 1
var message_2_length_2 = message_2.length;
// yöntem 2
var message_2_length_3 = message_2.length;
// ya <> içinde tip belirlemesi yapacağız yada as keywordu ile tip belirteceğiz. her türlü parantez ile sarmalamalıyız.
