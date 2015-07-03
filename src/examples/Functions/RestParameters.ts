function getAverage (...a:number[]):string {
	var total:number= 0;
	for (var i = 0; i < a.length; i++) {
		total+=a[i];
	};
	var average = total/ a.length;
	return "the average is "+average;
}
function getData(a:number,...b:string[]){
	
}

var result = getAverage(10,15,20);
console.log(result);