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
        msg = "사용가능";
    }else{
        msg = "사용중인 ID";
    }

        var spanChk = $("#uID").next().is("span");

        if(spanChk){
            $("span#idChkMsg").remove();
        }

        $("<span id='idChkMsg'>" + msg + "</span>").insertAfter("#uID");

//        $("<span>제이쿼리에서 테스트</span>").insertAfter("#uID");
        // 요소A를 요소 B뒤로 이동하세요

    });

        $("button[type=reset]").click(function(){
           $("span#idChkMsg").remove();
        });


});
