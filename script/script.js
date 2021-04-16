$(function(){
    $("button[type=button]").click(function(){
        var inputUID = $("#uID").val().trim(); // form 화면에서 입력한 ID


       var regIDList = ["test01", "guest", "member03"]; // 가입된 ID를 의미
        // regIDList 라는 배열은 인덱스 번호가 0, 1 , 2로 구성됨

        var idUseChk = true;


        $.each(regIDList, function(i, v){
            if(inputUID == v){
                idUseChk = false;
               }
        });

    if(idUseChk){
        alert("사용가능");
    }else{
        alert("사용중인 ID입니다.")
    }

    });



});
