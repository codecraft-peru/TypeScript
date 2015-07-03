interface House{
    bedrooms: number;
    bathrooms: number;
}

interface Mansion {
    bedrooms: number;
    bathrooms: number;
    butlers: number;  
}

var avenueRoad: House = {
	bedrooms:11,
	bathrooms:10
};
//Error

var mansion:Mansion = avenueRoad;

// work
var mansion:Mansion = <Mansion> avenueRoad;


var name:string ="15";

var bedrooms:number = <number> name;

var bedrooms:number = <number> <any> name;
