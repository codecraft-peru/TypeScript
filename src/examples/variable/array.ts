var names : string[] = ["James","Nick","Rebeca","Lili"];

interface Monument {
   name: string ;
   heightInMeters:number;
}


var monuments: Monument[] = [];
monuments.push({
	name: "Statue of Liberty",
	heightInMeters:46,
	location:"USA"
});
monuments.push({
	name: "Peter the Great",
	heightInMeters:96
});

monuments.push({
	name: "Angels of North",
	heightInMeters:20
});

function compareMonumentHeights (a:Monument, b:Monument) {
	if(a.heightInMeters>b.heightInMeters){
		return -1;
	}
	if(a.heightInMeters<b.heightInMeters){
		return 1;
	}
	return 0;
}
var monumentsOrderByHeight = monuments.sort(compareMonumentHeights);
var tallestMonument = monumentsOrderByHeight[0];

console.log(tallestMonument.name);