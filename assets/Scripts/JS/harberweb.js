$(document).ready(function(){
    $("#btnsearch").click(functions(e)){
        var txtInput = $("srchInv").val();
        $("infoinvaccr").html("Nama anda : " + txtInput);
        $.ajax({
            type:"POST",
            url: "/assets/scripts/ajax/getcurl.php",
            data:"",
            success:function(response){
                $("infoinvaccr").html("<br/>Response<br/>"+response);
            }
        });
    }
});












// $.ajax({
      //    type: "POST"
      //    url: /assets/scripts/ajax/getcurl.php/
      //    data: "",
      //    success: function (response) {
      //        $("infoinvaccr").html("Response<br/>"+  response);
      //    }
      // }};       