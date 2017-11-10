$(document).ready(function(){
	var url="http://192.168.1.112/children/auth.php?callback=?";
    
    //Login Function
    $("#login").click(function(){
    	
    	var name=$("#name").val();
    	var idnum=$("#idnum").val();
    	var dataString="name="+name+"&idnum="+idnum+"&login=";
    	if($.trim(name).length>0 & $.trim(idnum).length>0)
		{
			$.ajax({
				type: "POST",
				url: "http://192.168.1.112/children/auth.php",
				data: dataString,
				crossDomain: true,
				cache: false,
				beforeSend: function(){ $("#login").html('Connecting...');},
				success: function(data){
					if(data=="success")
					{
						localStorage.login="true";
						localStorage.name=name;
						window.location.href = "index.html";
					}
					else if(data="failed")
					{
						alert("Login error");
						$("#login").html('Login');
					}
				}
			});
		}return false;

    });

});