var isDone : boolean = true;

var age : number = 18;

var name :string =  "Jorge";
 
 var x:any;
 var nombre:number;
 
 var nombre:number ;
 var numberAndString:any;
 
numberAndString ='15';
numberAndString = 15;
numberAndString = '15'+10;

console.log(numberAndString);



 var list:number[];
 list =[1,2,3];
var lista:Array<number>;
lista =[2,2,5];
var arrayAny:Array<any>;

interface Person {
	name:string,
	id:number
}

var person :Person;
person ={name:'edson',id:15,age:15};

 // other way declare list
 var listGeneric : Array<number> =[1,2,3];  


 enum Color {Red, Green, Blue};

 var c: Color = Color.Red;

 enum Color1 {Red= 1, Green = 2 ,Blue=4};
 
 enum Color2 {Red= 1, Green ,Blue};

 var colorName : string = Color[2];

 var notSure : any = "1555";
 notSure =10;


 function warUser ():void {
 	// body...
 	alert("this is my message warning")
 }

 interface a{
	 x:number
 }
 interface b{
	 x:number
 }
 
 var t:a;
 t.x = 5;