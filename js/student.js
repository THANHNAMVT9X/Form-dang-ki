function emailIsValid(email){
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}



function Check() {
	let fullname = document.getElementById('fullname').value;
	let email = document.getElementById('email').value;
	let phone = document.getElementById('phone').value;
	let address = document.getElementById('address').value;	
	let gt = '';


	if(document.getElementById('male').checked){
		gt =document.getElementById('male').value;
	}else if (document.getElementById('famale').checked){

		gt =document.getElementById('famale').value;
	}








	if(_.isEmpty(fullname)){
		document.getElementById('fullname-error').innerHTML = 'Nhập họ và tên.';
	}else if(fullname.trim().length <=5){
		document.getElementById('fullname-error').innerHTML ='Không được nhỏ hơn 5 kí tự';
	}
else if(fullname.trim().length > 25){
		document.getElementById('fullname-error').innerHTML ='Không được lớn hơn 25 kí tự';
	}
	else{
		document.getElementById('fullname-error').innerHTML ='';
	}












	if(_.isEmpty(email)){
		document.getElementById('email-error').innerHTML = 'Nhập email của bạn.';
	}else if (!emailIsValid(email)){
		document.getElementById('email-error').innerHTML ='Email định dạng không đúng';
	}

	else{
		document.getElementById('email-error').innerHTML ='';
	}
	














	if(_.isEmpty(phone)){
		document.getElementById('phone-error').innerHTML = 'Vui lòng nhập số điện thoại.';
	}else if(phone.trim().length > 10){
		document.getElementById('phone-error').innerHTML ='Số điện thoại không đúng.';
	}

	else{
		document.getElementById('phone-error').innerHTML ='';
	}












	if(_.isEmpty(address)){
		document.getElementById('address-error').innerHTML = 'Nhập địa chỉ của bạn.';
	}
	else{
		document.getElementById('address-error').innerHTML ='';
	}


	if(_.isEmpty(gt)){
		document.getElementById('gt-error').innerHTML = 'Vui lòng chọn giới tính.';
	}
	else{
		document.getElementById('gt-error').innerHTML ='';
	}


}
