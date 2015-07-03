function concatenate (items:string[], separator:string=",", beginAt:number=0,endAt:number=items.length):string {
	var result:string="";
	for (var i = beginAt; i < endAt; i++) {
		result+= items[i];
		if(i<(endAt-1))
			result+=separator;
	};
	return result;
}

var items:string[] = ["A","B","C"];
var result = concatenate(items);
console.log(result);

var partialResult= concatenate(items,'-',1);
console.log(partialResult);
