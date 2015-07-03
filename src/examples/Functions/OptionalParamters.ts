function getAverage (a:number, b:number, c?:number):string {
	var total = a+b;
	var count = 2;
	if (typeof c !=="undefinded"){
		total += c;
		count++;
	}
	var average = total/count;
   return "the average is "+average;
}

var result = getAverage(5,7);
getAverage(5,2,3);