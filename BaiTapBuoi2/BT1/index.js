function Diem () {
	var name = document.getElementById('name').value 
	var number = document.getElementById('number').value 
	if (number >= 0 && number <= 100) {
		var grade
		if(number > 90) {
			grade = 'xuat sac';
		}else if (number > 80) {
			grade = 'tot';
		}else if (number > 70) {
			grade = 'kha';
		}else if (number > 60) {
			grade = 'trungbinh';
		}else {
			grade = 'yeu'
		}
	}else {
		grade = 'nhap diem tu 0 den 100';
	}
	document.getElementById('Grade').innerHTML = name + "so diem la <b>"+grade+'</b>';
}