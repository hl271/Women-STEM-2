/* eslint-disable indent */
function validString(str) {
	return typeof str ==='string';
}
function validAge(age){
	return !isNaN(age) && age > 0 && age % 1 === 0;
}