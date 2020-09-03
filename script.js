$(window).scroll(function () {

    let WScroll = $(this).scrollTop();
    if ($(window).width() > 992 || $(window).innerWidth() > 992 || $(window).resize() > 992) {
        if (WScroll > 0)
            $(".navbar").css("background", "#e26e20");
        else
            $(".navbar").css("background", "transparent");

        $(".jumbotron h1").css({
            "transform": "translate(0px, " + WScroll / 1.3 + "% )"

        })
        $(".jumbotron h4").css({
            "transform": "translate(0px, " + WScroll / 0.9 + "% )"
        })
    }

    if (WScroll >= $("#about-us").offset().top - 400 && WScroll <= $("#organik").offset().top - 400) {
        $(".cont-about h2").css("opacity", 1);
        $(".cont-about hr").css("opacity", 1);
        $(".cont-about h2").css("transform", "translate(0, 0)");
        $(".cont-about hr").css("width", 20 + "%");
        $("#about-us .left").css("opacity", 1);
        $("#about-us .left").css("transform", "translate(0,0)");
        $("#about-us .right").css("opacity", 1);
        $("#about-us .right").css("transform", "translate(0,0)");
    } else {
        $(".cont-about h2").css("opacity", 0);
        $(".cont-about hr").css("opacity", 0);
        $(".cont-about h2").css("transform", "translate(0, -80px)");
        $(".cont-about hr").css("width", 0 + "%");
        $("#about-us .left").css("opacity", 0);
        $("#about-us .left").css("transform", "translate(-80px,0)");
        $("#about-us .right").css("opacity", 0);
        $("#about-us .right").css("transform", "translate(80px,0)");
    }

    if (WScroll >= $("#organik").offset().top - 400 && WScroll <= $("#anorganik").offset().top - 400) {
        $(".cont-content .h21").css("opacity", 1);
        $(".cont-content .hr1").css("opacity", 1);
        $(".cont-content .h21").css("transform", "translate(0, 0)");
        $(".cont-content .hr1").css("width", 20 + "%");
        $(".cont-content #organik .right").css({
            "transform": "translate(0,0)",
            "opacity": "1"
        });
        $(".cont-content #organik .left .panel-title").each(function (i) {
            setTimeout(function () {
                $(".cont-content #organik .left .panel-title").eq(i).css({
                    "transform": "translate(0,0)",
                    "opacity": "1"
                });
            }, 300 * (i + 1));
        })
    }
    if (WScroll >= $("#anorganik").offset().top - 400 && WScroll <= $("#about").offset().top - 350) {
        $(".cont-content .h22").css("opacity", 1);
        $(".cont-content .hr2").css("opacity", 1);
        $(".cont-content .h22").css("transform", "translate(0, 0)");
        $(".cont-content .hr2").css("width", 20 + "%");
        $(".cont-content #anorganik .left").css({
            "transform": "translate(0,0)",
            "opacity": "1"
        });

        $(".cont-content #anorganik .right .panel-title").each(function (i) {
            setTimeout(function () {
                $(".cont-content #anorganik .right .panel-title").eq(i).css({
                    "transform": "translate(0,0)",
                    "opacity": "1"
                });
            }, 300 * (i + 1));
        })
    }

    if (WScroll >= $("#about").offset().top - 350) {
        $(".cont-profil h2").css("opacity", 1);
        $(".cont-profil hr").css("opacity", 1);
        $(".cont-profil h2").css("transform", "translate(0, 0)");
        $(".cont-profil hr").css("width", 20 + "%");
        $(".cont-profil #about").css("opacity", 1);
    }

    const less = 250;


    $(".link-about-us").on("click", function (e) {
        let linkOrganik = $(this).attr("href");
        console.log(linkOrganik);
        let linkOrganikTarget = $("#about-us");

        $("html").scrollTop(linkOrganikTarget.offset().top - less);
        e.preventDefault();
    });


    $(".link-organik").on("click", function (e) {
        let linkOrganik = $(this).attr("href");
        console.log(linkOrganik);
        let linkOrganikTarget = $("#organik");

        $("html").scrollTop(linkOrganikTarget.offset().top - less);
        e.preventDefault();
    });

    $(".link-anorganik").on("click", function (e) {
        let linkOrganik = $(this).attr("href");
        console.log(linkOrganik);
        let linkOrganikTarget = $("#anorganik");

        $("html").scrollTop(linkOrganikTarget.offset().top - less);
        e.preventDefault();
    });

    $(".link-about").on("click", function (e) {
        let linkOrganik = $(this).attr("href");
        console.log(linkOrganik);
        let linkOrganikTarget = $("#about");

        $("html").scrollTop(linkOrganikTarget.offset().top - 200);
        e.preventDefault();
    });

});