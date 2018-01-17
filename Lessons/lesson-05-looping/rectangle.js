/* eslint-disable indent */
'use strict';

// write drawRectangle function here
function drawRectangle(w, h){
		let drawWidth = '';
		let drawFullRec ='';
		for (let j=1; j<=w; j++){
				drawWidth += '*';
		}
		for (let i=1; i<=h; i++){
				drawFullRec += drawWidth+'\n';
		}
		return drawFullRec;
}

function drawEmptyRectangle (w, h) {

		let drawFullRec = '';
		for (let i=1; i<=h;i++){
				for(let j=1; j<=w;j++){
						drawFullRec += 1 < i && i< h && 1 < j&& j < w ? ' ' : '*';
				}
				drawFullRec += "\n";
		}
		return drawFullRec;
}