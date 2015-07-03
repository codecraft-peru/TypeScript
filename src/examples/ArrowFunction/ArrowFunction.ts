var scopePerservingExample = {
	text : 'Property from lexical scope',
	run:function name() {
		setTimeout(()=>{
			alert(this.text);
		},1000);
	}
};
scopePerservingExample.run();
