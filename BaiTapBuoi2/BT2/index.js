function DTB () {
	var diemhk1 = document.getElementById('diemhk1').value
	var diemhk2 = document.getElementById('diemhk2').value
	var Year = document.getElementById('year').value
	var heso = Number(Year) + 1 
	var dtb = (Number(diemhk1) +  Number(diemhk2)*heso) / (heso + 1)
	dtb=dtb.toFixed(2)
	document.getElementById('dtb').innerHTML = dtb 	

	if(dtb > 9) {
		document.getElementById('h2').innerHTML = 'xuat sac';
	}else if (dtb > 8) {
		document.getElementById('h2').innerHTML = 'tot';
	}else if (dtb > 7) {
		document.getElementById('h2').innerHTML = 'kha';
	}else if (dtb > 6) {
		document.getElementById('h2').innerHTML = 'trungbinh';
	}else {
		document.getElementById('h2').innerHTML = 'yeu'
	}
}
document.getElementById('ok').onclick = DTB