$(document).ready(function(e) {
	$('#submit').on('click',function(event){
		var username=$('#username').val();
		var password=$('#password').val();
		var name=$('#name').val();
		var surname=$('#surname').val();
		var email=$('#email').val();
		
		var data=new FormData();
		data.append('username',username);
		data.append('password',password);
		data.append('name',name);
		data.append('surname',surname);
		data.append('email',email);
		
		
		if(username == "" || password == "" || email == ""){
				$("#registerErrorMessage").text("Fields can not be empty!");
               	$("#badRegisterModal").modal();
			}
		$.post('RegisterServlet',{'username':username,'password':password,'name':name,'surname':surname,'email':email},function(data){
			
			if(data.status == "success"){
				btnCancel();
			}
			else{
				$("#registerErrorMessage").text("User with username exists!");
               	$("#badRegisterModal").modal();
			}
		});
		event.preventDefault();
		return false;
	});

});
function btnCancel() {
	window.location.replace('index.html');
}