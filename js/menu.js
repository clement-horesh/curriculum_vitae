        $("#link1").click(function() {
        scrollToAnchor('id1');
        });
        $("#link2").click(function() {
        scrollToAnchor('id2');
        });
        $("#link3").click(function() {
        scrollToAnchor('id3');
        });
        $("#link4").click(function() {
        scrollToAnchor('id4');
        });
        $("#link5").click(function() {
        scrollToAnchor('id5');
        });
    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 0 && scroll < 1100) {
            //clearHeader, not clearheader - caps H
            $("#link1").addClass("active_menu");
            $("#link2").removeClass("active_menu");
            $("#link3").removeClass("active_menu");
            $("#link4").removeClass("active_menu");
            $("#link5").removeClass("active_menu");
        }
        else if (scroll >= 1100 && scroll < 2300){
            $("#link1").removeClass("active_menu");
            $("#link2").addClass("active_menu");
            $("#link3").removeClass("active_menu");
            $("#link4").removeClass("active_menu");
            $("#link5").removeClass("active_menu");
        }

        else if (scroll >= 2300 && scroll < 3500){
            $("#link1").removeClass("active_menu");
            $("#link2").removeClass("active_menu");
            $("#link3").addClass("active_menu");
            $("#link4").removeClass("active_menu");
            $("#link5").removeClass("active_menu");
        }

        else if (scroll >= 3500 && scroll < 4700){
            $("#link1").removeClass("active_menu");
            $("#link2").removeClass("active_menu");
            $("#link3").removeClass("active_menu");
            $("#link4").addClass("active_menu");
            $("#link5").removeClass("active_menu");
        }

        else if (scroll >= 4700 && scroll < 5900){
            $("#link1").removeClass("active_menu");
            $("#link2").removeClass("active_menu");
            $("#link3").removeClass("active_menu");
            $("#link4").removeClass("active_menu");
            $("#link5").addClass("active_menu");
        }
    });
