enum VehiculeType{
	PedalCycle, 
	MotorCycle,
	Car, 
	Bus, 
	Van,
	Lorry
}
var type = VehiculeType.Lorry;

var name = VehiculeType[type]; 

console.log(name+": "+ type);

enum BoxSize {
 Small,
 Medium
}
enum BoxSize {
 Large =2,
 XLarge,
 XXLarge
}

console.log(BoxSize);
console.log(BoxSize.);