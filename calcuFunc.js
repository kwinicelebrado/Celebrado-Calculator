var latestAns = 0;
var mPlus = 0;
var mMinus = 0;
var latestMplus = 0;
var latestMminus = 0;

function deleteBtn(){
	document.getElementById("entry").innerHTML = "0";
}

function removeZero(){
	var item = document.getElementById("entry").innerHTML;
	if (item == "0"){
		item = ""
		document.getElementById("entry").innerHTML = item;
	}
}

function displayBtn(showValue){
	removeZero()
	document.getElementById("entry").innerHTML += showValue;
}

function solveBtn(){
	removeZero()
	var equation = document.getElementById("entry").innerHTML;
	var answer = eval(equation);
	document.getElementById("entry").innerHTML = answer;
	latestAns = answer;
}

function memPlusBtn(){
	mPlus = latestAns

	var equation = document.getElementById("entry").innerHTML

	if (isNaN(equation)){
		var answer = eval(equation)
		mPlus = answer	
	}else{
		mPlus = parseInt(equation);
	}	
	

	if (latestAns < 0) {
		mPlus = -Math.abs(latestAns);
		}
	latestMplus += mPlus
	document.getElementById("entry").innerHTML = latestMplus;
}

function memMinusBtn(){
	mMinus = latestAns

	if (true) {}
	var equation = document.getElementById("entry").innerHTML

	if (isNaN(equation)){
		var answer = eval(equation)
		mMinus = answer	
	}else{
		mMinus = parseInt(equation);
	}	


	if (latestAns < 0) {
		mMinus = latestAns * -1;
		console.log(mMinus + " yow")
	}if (latestAns > 0){
		mMinus = latestAns * -1;
		console.log(mMinus + " yah")
	}
	latestMminus -= mMinus;
	console.log(latestMminus + " bla")
	document.getElementById("entry").innerHTML = latestMminus;
}

function getMPlus(){
	return latestMplus
}
function getMMinus(){
	return latestMminus
}

function resetRecall(){
	mFinalAns = 0;
	latestAns = 0;
	mPlus = 0;
	mMinus = 0;
	latestMplus = 0;
	latestMminus = 0;
}

function memRecallBtn(){
	getMMinus()
	getMPlus()
	var mFinalAns = 0;

	if (latestMminus > 0) {
		latestMminus = "-" + latestMminus
		console.log(latestMminus + " hello")
	}else if (latestMminus < 0) {
		latestMminus = latestMminus * -1;
		latestMminus = "+" + latestMminus
		console.log(latestMminus + " hi")
	}else if (latestMminus == 0 || latestMminus == "") {
		latestMminus = ""}
	var res = String(getMPlus()) + String(getMMinus());
	mFinalAns = eval(res);
	resetRecall();
	console.log(mFinalAns)
	document.getElementById("entry").innerHTML = mFinalAns;
}

