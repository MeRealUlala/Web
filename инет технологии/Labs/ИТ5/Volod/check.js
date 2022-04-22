function check() { 
msg=""
if(document.getElementsByName('name')[0].value == '') msg=msg+"Имя\n"
if(document.getElementsByName('surname')[0].value == '') msg=msg+"Фамилия\n"
if(document.getElementsByName('otch')[0].value == '') msg=msg+"Отчество\n"
if(document.getElementsByName('email')[0].value == '') msg=msg+"Электронная почта\n"
if(document.getElementsByName('goro')[0].value == '') msg=msg+"Город отправления\n"
if(document.getElementsByName('gorop')[0].value == '') msg=msg+"Город прибытия\n"
if (!(document.getElementsByName('gender')[0].checked) && !(document.getElementsByName('gender')[1].checked)){
			msg=msg+"Пол";
		}
if(msg != "") alert('Необходимо заполнить данные: \n'+msg);
else alert ('Информация принята!');


} 