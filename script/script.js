$(function () {
    /* 아이디 중복 체크 */
    $("button[type=button]").click(function () {
        var inputUID = $("#uID").val().trim(); // form 화면에서 입력한 ID


        var regIDList = ["test01", "guest", "member03"]; // 가입된 ID를 의미
        // regIDList 라는 배열은 인덱스 번호가 0, 1 , 2로 구성됨

        var idUseChk = true;


        $.each(regIDList, function (i, v) {
            if (inputUID == v) {
                idUseChk = false;
            }
        });

        if (idUseChk) {
            msg = "사용가능";
        } else {
            msg = "사용중인 ID";
        }

        var spanChk = $("#uID").next().is("span");

        if (spanChk) {
            $("span#idChkMsg").remove();
        }

        $("<span id='idChkMsg'>" + msg + "</span>").insertAfter("#uID");

        //        $("<span>제이쿼리에서 테스트</span>").insertAfter("#uID");
        // 요소A를 요소 B뒤로 이동하세요

    });
    /* 아이디 중복 체크 */

    /*입력취소 버튼 클릭 아이디 중복 메시지 제거*/
    $("button[type=reset]").click(function () {
        $("span#idChkMsg").remove();
    });
    /*입력취소 버튼 클릭 아이디 중복 메시지 제거*/

    /*비밀번호 보기*/
    $("input[type=checkbox]").click(function () {
        var chkTF = $(this).prop("checked");
        if (chkTF) {
            $("input.uPW").attr("type", "text");
        } else {
            $("input.uPW").attr("type", "password");
        }

        //   $("input[type=password]").attr("type", "text");
    });
    /*비밀번호 보기*/

    /* 비밀번호 일관성검사, 동일성검사, 일치 , 불일치 점검*/
    $("button[type=button]").click(function () {

        var pwChkMsg = "";

        var uPW = $("#uPW").val().trim();
        var uPW_Re = $("#uPW_Re").val().trim();

        if (uPW == uPW_Re) {
            pwChkMsg = "비밀번호 일치";
        } else {
            pwChkMsg = "불일치";
        }

        var pwSpanChk = $("#uPW_Re").next().is("span");

        if (pwSpanChk) {
            $("span#pwSpanChk").remove();
        }
        $("<span id='pwSpanChk'>" + pwChkMsg + "</span>").insertAfter("#uPW_Re");

    });
    /* 비밀번호 일치 , 불일치 점검*/


    /* 추가 내용 */
    $("#uID").focusout(function () {
        /* 아이디 중복 체크 */
        $("button[type=button]").click(function () {
            var inputUID = $("#uID").val().trim(); // form 화면에서 입력한 ID


            var regIDList = ["test01", "guest", "member03"]; // 가입된 ID를 의미
            // regIDList 라는 배열은 인덱스 번호가 0, 1 , 2로 구성됨

            var idUseChk = true;


            $.each(regIDList, function (i, v) {
                if (inputUID == v) {
                    idUseChk = false;
                }
            });

            if (idUseChk) {
                msg = "사용가능";
            } else {
                msg = "사용중인 ID";
            }

            var spanChk = $("#uID").next().is("span");

            if (spanChk) {
                $("span#idChkMsg").remove();
            }

            $("<span id='idChkMsg'>" + msg + "</span>").insertAfter("#uID");

            //        $("<span>제이쿼리에서 테스트</span>").insertAfter("#uID");
            // 요소A를 요소 B뒤로 이동하세요

        });
        /* 아이디 중복 체크 */
    });


    /* 추가 내용 (포커스 아웃 이벤트 적용)*/

});
