function panggilnamabuah(){
	var buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
	console.log(buah);

	buah.pop();
	return buah
}

var namabuah = panggilnamabuah();

function panggilshift(){
	namabuah.shift();
	return namabuah
}



console.log(namabuah)
console.log(panggilshift())
