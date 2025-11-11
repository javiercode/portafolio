var $musicBarHeightTimer = 100;
function visualizer() {
    var e = function () {
        return anime.random(10, 50) + "px";
    };
    anime({ targets: ".c-music__bar", height: e, duration: $musicBarHeightTimer, loop: !1, easing: "linear" }),
        setTimeout(function () {
            anime({
                targets: ".c-music__bar",
                keyframes: [{ height: e }, { height: e }, { height: e }, { height: e }, { height: e }, { height: e }, { height: e }, { height: e }],
                duration: 1500,
                direction: "alternate",
                loop: !0,
                easing: "linear",
            });
        }, $musicBarHeightTimer);
}
function vizualizerEnd() {
    anime.remove(".c-music__bar"),
        setTimeout(function () {
            anime({ targets: ".c-music__bar", height: "1px", duration: 200, loop: !1, easing: "linear" });
        }, 1);
}
const soundCloudPlayer = () => {
        !(function () {
            $(this);
            var e = SC.Widget($("iframe")[0]);
            e.bind(SC.Widget.Events.READY, function () {
                e.bind(SC.Widget.Events.PLAY, function () {
                    e.getCurrentSound(function (e) {
                        var i = e.title,
                            s = e.user.username;
                        $(".js-radio-song").text(i), $(".js-radio-artist").text(s);
                    });
                });
            });
        })(),
            (function () {
                $(this);
                var e = SC.Widget($("iframe")[0]);
                $(".c-radio__play").click(function (i) {
                    i.preventDefault(),
                        $(".c-radio__play").hasClass("played")
                            ? (vizualizerEnd(), $(".c-radio__play").removeClass("played"), $(".c-radio").removeClass("is-playing"), e.pause())
                            : (visualizer(), $(".c-radio__play").addClass("played"), $(".c-radio").addClass("is-playing"), e.play()),
                        $(".c-radio__icon--play").toggleClass("u-d-none"),
                        $(".c-radio__icon--pause").toggleClass("u-d-none");
                });
            })(),
            (function () {
                $(this);
                var e = SC.Widget($("iframe")[0]);
                $(".c-radio__next").click(function (i) {
                    i.preventDefault(), $(".c-radio").hasClass("is-playing") && e.next();
                });
            })(),
            (function () {
                $(this);
                var e = SC.Widget($("iframe")[0]);
                $(".c-radio__prev").click(function (i) {
                    i.preventDefault(), $(".c-radio").hasClass("is-playing") && e.prev();
                });
            })();
    },
    acq = () => {
        $(".js-play-game").click(function (e) {
            e.preventDefault(), $(".c-acq__intro").addClass("u-d-none"), $("[data-module='1']").addClass("is-active");
        }),
            $(".c-acq__link").click(function (e) {
                e.preventDefault();
                var i = $(this);
                ($data = i.data("module-link")), $(".c-acq__module").removeClass("is-active"), $("[data-module='" + $data + "']").addClass("is-active");
            });
    },
    platformStart = () => {
        $(".js-os").text(platform.os), $(".js-color").text(screen.colorDepth), $(".js-enabled").text("Enabled");
    },
    cookieSupport = () => {
        navigator.cookieEnabled ? $(".js-cookies").text("Enabled") : $(".js-cookies").text("Disabled");
    },
    flashSupport = () => {
        var e = !1;
        try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0);
        } catch (i) {
            navigator.mimeTypes && null != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = !0);
        }
        0 == e ? $(".js-flash").text("Disabled") : $(".js-flash").text("Enabled");
    },
    adSupport = () => {
        $("#wrapfabtest").height() > 0 ? $(".js-blocker").text("Disabled") : $(".js-blocker").text("Enabled");
    },
    reduceMotion = () => {
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ? $(".js-motion").text("Prefers reduced") : $(".js-motion").text("No Preference");
    },
    screenDensity = () => {
        var e = window.devicePixelRatio;
        $(".js-density").text(e);
    },
    checkResolution = () => {
        var e = window.screen.availWidth,
            i = window.screen.availHeight;
        $(".js-resolution").text(e + " x " + i);
    },
    checkBrowser = () => {
        var e =
            Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth) +
            " x " +
            Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
        $(".js-browser-name").text(platform.name), $(".js-browser-version").text(platform.version), $(".js-browser-size").text(e);
    },
    printAndEmail = () => {
        ($printOs = $(".js-os").text()),
            ($printColor = $(".js-color").text()),
            ($printJs = $(".js-enabled").text()),
            ($printCookies = $(".js-cookies").text()),
            ($printFlash = $(".js-flash").text()),
            ($printMotion = $(".js-motion").text()),
            ($printBlocker = $(".js-blocker").text()),
            ($printDensity = $(".js-density").text()),
            ($printRes = $(".js-resolution").text()),
            ($printBrowser = $(".js-browser-overview").text()),
            $(".js-print-os").text($printOs),
            $(".js-print-color").text($printColor),
            $(".js-print-js").text($printJs),
            $(".js-print-cookies").text($printCookies),
            $(".js-print-flash").text($printFlash),
            $(".js-print-motion").text($printMotion),
            $(".js-print-blocker").text($printBlocker),
            $(".js-print-density").text($printDensity),
            $(".js-print-res").text($printRes),
            $(".js-print-browser").text($printBrowser);
    },
    fontLoader = () => {
        WebFont.load({ google: { families: ["Karla", "Rubik:500"] } });
    };
WebFont.load({ google: { families: ["Karla", "Rubik:500"] } });
const emailCompose = () => {
        var e = "Operating%20System:%20" + $printOs + "%0D%0A%0D%0A",
            i = "Color%20Depth:%20" + $printColor + "%0D%0A%0D%0A",
            s = "JavaScript:%20" + $printJs + "%0D%0A%0D%0A",
            t = "Cookies:%20" + $printCookies + "%0D%0A%0D%0A",
            o =
                "mailto: ?subject=My%20device%20details&body=Hi!%20My%20device%20details%20are%20as%20follows:%0D%0A%0D%0A" +
                (e +
                    s +
                    t +
                    i +
                    s +
                    t +
                    ("Flash:%20" + $printFlash + "%0D%0A%0D%0A") +
                    ("Web%20Browser:%20" + $printBrowser + "%0D%0A%0D%0A") +
                    ("Ad%20Blocker:%20" + $printBlocker + "%0D%0A%0D%0A") +
                    ("Motion:%20" + $printMotion + "%0D%0A%0D%0A") +
                    ("Screen%20DPI:%20" + $printDensity + "%0D%0A%0D%0A") +
                    ("Screen%20Resolution:%20" + $printRes + "%0D%0A%0D%0A"));
        $(".js-email-btn").attr("href", o);
    },
    themeSwitcher = () => {
        $(".js-coastal-shores").click(function () {
            $("body").removeClass(),
                $("body").addClass("s-home"),
                $("body").addClass("th-coastal-shores"),
                $("#js-game").show(),
                $("#js-game-dark").hide(),
                $("#js-game-red").hide(),
                $(".c-themer__button").removeClass("c-themer__button--active"),
                $(this).addClass("c-themer__button--active"),
                Beacon("config", { color: "#FFE1E7" });
        }),
            $(".js-alpine-nights").click(function () {
                $("body").removeClass(),
                    $("body").addClass("s-home"),
                    $("body").addClass("th-alpine-nights"),
                    $("#js-game").hide(),
                    $("#js-game-red").hide(),
                    $("#js-game-dark").show(),
                    $(".c-themer__button").removeClass("c-themer__button--active"),
                    $(this).addClass("c-themer__button--active"),
                    Beacon("config", { color: "#0F1D19" });
            }),
            $(".js-browso-nine-eight").click(function () {
                $("body").removeClass(),
                    $("body").addClass("s-home"),
                    $("body").addClass("th-browso-nine-eight"),
                    $("#js-game").show(),
                    $("#js-game-dark").hide(),
                    $("#js-game-red").hide(),
                    $(".c-themer__button").removeClass("c-themer__button--active"),
                    $(this).addClass("c-themer__button--active"),
                    Beacon("config", { color: "#142C69" });
            }),
            $(".js-sunset-drive").click(function () {
                $("body").removeClass(),
                    $("body").addClass("s-home"),
                    $("body").addClass("th-moonlight-drive"),
                    $("#js-game").show(),
                    $("#js-game-dark").hide(),
                    $("#js-game-red").hide(),
                    $(".c-themer__button").removeClass("c-themer__button--active"),
                    $(this).addClass("c-themer__button--active"),
                    Beacon("config", { color: "#FFF3DD" });
            }),
            $(".js-browso").click(function () {
                $("body").removeClass(),
                    $("body").addClass("s-home"),
                    $("body").addClass("th-browso"),
                    $("#js-game").show(),
                    $("#js-game-dark").hide(),
                    $("#js-game-red").hide(),
                    $(".c-themer__button").removeClass("c-themer__button--active"),
                    $(this).addClass("c-themer__button--active"),
                    Beacon("config", { color: "#FFFFFF" });
            }),
            $(".js-red-dawn").click(function () {
                $("body").removeClass(),
                    $("body").addClass("s-home"),
                    $("body").addClass("th-red-dawn"),
                    $("#js-game").hide(),
                    $("#js-game-dark").hide(),
                    $("#js-game-red").show(),
                    $(".c-themer__button").removeClass("c-themer__button--active"),
                    $(this).addClass("c-themer__button--active"),
                    Beacon("config", { color: "#DF7714" });
            }),
            anime
                .timeline()
                .add({
                    targets: ".c-loader",
                    duration: 1500,
                    easing: "linear",
                    delay: 0,
                    complete: function (e) {
                        $(".js-load-message").text("Cargando Tema Random ..."), $(".js-progress").css("width", "60%");
                    },
                })
                .add({
                    targets: ".c-loader",
                    easing: "linear",
                    duration: 500,
                    complete: function (e) {
                        !(function () {
                            var e = ["th-moonlight-drive", "th-coastal-shores"],
                                i = e[~~(Math.random() * e.length)];
                            if (($("body").removeClass(), $("body").addClass("s-home"), $("body").addClass(i), $("body").hasClass("th-coastal-shores")))
                                Beacon("config", { color: "#FFE1E7" }), $(".c-themer__button").removeClass("c-themer__button--active"), $(".js-coastal-shores").addClass("c-themer__button--active");
                            else if ($("body").hasClass("th-moonlight-drive"))
                                Beacon("config", { color: "#FFF3DD" }), $(".c-themer__button").removeClass("c-themer__button--active"), $(".js-sunset-drive").addClass("c-themer__button--active");
                            else if ($("body").hasClass("th-alpine-nights"))
                                Beacon("config", { color: "#0F1D19" }),
                                    $(".c-themer__button").removeClass("c-themer__button--active"),
                                    $(".js-alpine-nights").addClass("c-themer__button--active"),
                                    $("#js-game").hide(),
                                    $("#js-game-dark").show();
                            else {
                                if (!$("body").hasClass("th-browso")) return;
                                Beacon("config", { color: "#FFFFFF" }), $(".c-themer__button").removeClass("c-themer__button--active"), $(".js-browso").addClass("c-themer__button--active");
                            }
                        })(),
                            $(".js-progress").css("width", "70%");
                    },
                })
                .add({
                    targets: ".c-loader",
                    duration: 800,
                    easing: "linear",
                    delay: 0,
                    complete: function (e) {
                        $(".js-load-message").text("Obteniendo detalles de entorno ..."), $(".js-progress").css("width", "80%");
                    },
                })
                .add({
                    targets: ".c-loader",
                    duration: 800,
                    easing: "linear",
                    delay: 0,
                    complete: function (e) {
                        $(".c-nav").show(), $(".c-viewer--main").show(), $(".c-loader").hide(), "1" != $.cookie("cookie_accept") && $(".c-cookies").show();
                    },
                });
    },
    moveWindows = () => {
        $(".js-move").draggable({
            containment: ".s-home",
            start: function () {
                $(".js-move").removeClass("is-moving"), $(this).addClass("is-moving");
            },
        });
    },
    toggleWindow=(windowName, action = "show")=>{
        console.log("toggleWindow:", windowName, action);
        const e = $(window);
        const target = $(".c-" + windowName);
        const main = $(".c-viewer--main");

        if (!target.length) {
            console.warn("toggleWindow(): no se encontró la ventana .c-" + windowName);
            return;
        }

        if (action === "show") {
            const width = e.width();
            $(".c-modal, .c-viewer").removeClass("in-view is-moving");
            target.addClass("in-view is-moving");
            if (typeof Beacon === "function") Beacon("close");
            if (width < 992) main.hide();
        } else {
            target.removeClass("in-view is-moving");
            main.show();
        }
    },
    makeModalDraggable = (modalSelector, handleSelector) => {
        const modal = document.querySelector(modalSelector);
        const handle = modal.querySelector(handleSelector);

        if (!modal || !handle) return;

        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        handle.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - modal.offsetLeft;
            offsetY = e.clientY - modal.offsetTop;
            modal.style.transition = "none"; // evita salto por transición
        });

        window.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            modal.style.left = e.clientX - offsetX + "px";
            modal.style.top = e.clientY - offsetY + "px";
        });

        window.addEventListener("mouseup", () => {
            isDragging = false;
            modal.style.transition = "opacity 0.3s ease";
        });
    },
    // navBar2 = (windowName="") => {
    //     var e = $(window);
    //     if(windowName!==""){
    //         $(".js-hide-"+windowName).click(function () {
    //             $(".c-"+windowName).removeClass("in-view"), $(".c-viewer--main").show();
    //         }),
    //         $(".js-show-"+windowName).click(function () {
    //             var i = e.width();
    //             $(".c-"+windowName).addClass("in-view"),
    //                 $(".js-move").removeClass("is-moving"),
    //                 $(".c-"+windowName).addClass("is-moving"),
    //                 Beacon("close"),
    //                 i < 992 &&
    //                     ($(".c-viewer--main").hide(),
    //                     $(".c-viewer--print").removeClass("in-view"),
    //                     $(".c-forward").removeClass("in-view"),
    //                     $(".c-info").removeClass("in-view"),
    //                     $(".c-pong").removeClass("in-view"),
    //                     $(".c-music").removeClass("in-view"),
    //                     $(".c-acq").removeClass("in-view"));
    //         })
    //     }
    // },  
            
    navBar = () => {
        var e = $(window);
        $(".js-hide-themer").click(function () {
            $(".c-themer").removeClass("in-view"), $(".c-viewer--main").show();
        }),
            $(".js-show-themer").click(function () {
                var i = e.width();
                $(".c-themer").addClass("in-view"),
                    $(".js-move").removeClass("is-moving"),
                    $(".c-themer").addClass("is-moving"),
                    Beacon("close"),
                    i < 992 &&
                        ($(".c-viewer--main").hide(),
                        $(".c-viewer--print").removeClass("in-view"),
                        $(".c-forward").removeClass("in-view"),
                        $(".c-info").removeClass("in-view"),
                        $(".c-pong").removeClass("in-view"),
                        $(".c-music").removeClass("in-view"),
                        $(".c-acq").removeClass("in-view"));
            }),
            $(".js-hide-printer").click(function () {
                $(".c-viewer--print").removeClass("in-view"), $(".c-viewer--main").show();
            }),
            $(".js-show-printer").click(function () {
                var i = e.width();
                $(".c-viewer--print").addClass("in-view"),
                    $(".js-move").removeClass("is-moving"),
                    $(".c-viewer--print").addClass("is-moving"),
                    Beacon("close"),
                    i < 992 &&
                        ($(".c-viewer--main").hide(),
                        $(".c-themer").removeClass("in-view"),
                        $(".c-forward").removeClass("in-view"),
                        $(".c-info").removeClass("in-view"),
                        $(".c-pong").removeClass("in-view"),
                        $(".c-music").removeClass("in-view"),
                        $(".c-acq").removeClass("in-view"));
            }),
            $(".js-hide-forward").click(function () {
                $(".c-forward").removeClass("in-view"), $(".c-viewer--main").show();
            }),
            $(".js-show-forward").click(function () {
                var i = e.width();
                $(".c-forward").addClass("in-view"),
                    $(".js-move").removeClass("is-moving"),
                    $(".c-forward").addClass("is-moving"),
                    Beacon("close"),
                    i < 992 &&
                        ($(".c-viewer--main").hide(),
                        $(".c-viewer--print").removeClass("in-view"),
                        $(".c-themer").removeClass("in-view"),
                        $(".c-info").removeClass("in-view"),
                        $(".c-pong").removeClass("in-view"),
                        $(".c-music").removeClass("in-view"),
                        $(".c-acq").removeClass("in-view"));
            }),
            $(".js-hide-info").click(function () {
                $(".c-info").removeClass("in-view"), $(".c-viewer--main").show();
            }),
            $(".js-show-info").click(function () {
                var i = e.width();
                $(".c-info").addClass("in-view"),
                    $(".js-move").removeClass("is-moving"),
                    $(".c-info").addClass("is-moving"),
                    Beacon("close"),
                    i < 992 &&
                        ($(".c-viewer--main").hide(),
                        $(".c-viewer--print").removeClass("in-view"),
                        $(".c-themer").removeClass("in-view"),
                        $(".c-forward").removeClass("in-view"),
                        $(".c-pong").removeClass("in-view"),
                        $(".c-music").removeClass("in-view"),
                        $(".c-acq").removeClass("in-view"));
            }),
            // $(".js-hide-profile").click(function () {
            //     console.log("hide profile");
            //     $(".c-profile").removeClass("in-view"), $(".c-viewer--main").show();
            // }),
            // $(".js-show-profile").click(function () {
            //     console.log("show profile");
            //     var i = e.width();
            //     $(".c-profile").addClass("in-view"),
            //         $(".js-move").removeClass("is-moving"),
            //         $(".c-profile").addClass("is-moving"),
            //         Beacon("close"),
            //         i < 992 &&
            //             ($(".c-viewer--main").hide(),
            //             $(".c-viewer--print").removeClass("in-view"),
            //             $(".c-themer").removeClass("in-view"),
            //             $(".c-forward").removeClass("in-view"),
            //             $(".c-pong").removeClass("in-view"),
            //             $(".c-music").removeClass("in-view"),
            //             $(".c-info").removeClass("in-view"),
            //             $(".c-acq").removeClass("in-view"));
            // }),
            $(".js-hide-pong").click(function () {
                $(".c-pong").removeClass("in-view"), $(".c-viewer--main").show();
            }),
            $(".js-show-pong").click(function () {
                var i = e.width();
                $(".c-pong").addClass("in-view"),
                    $(".js-move").removeClass("is-moving"),
                    $(".c-pong").addClass("is-moving"),
                    Beacon("close"),
                    i < 992 &&
                        ($(".c-viewer--main").hide(),
                        $(".c-viewer--print").removeClass("in-view"),
                        $(".c-themer").removeClass("in-view"),
                        $(".c-forward").removeClass("in-view"),
                        $(".c-info").removeClass("in-view"),
                        $(".c-music").removeClass("in-view"),
                        $(".c-acq").removeClass("in-view"));
            }),
            $(".js-hide-music").click(function () {
                $(".c-music").removeClass("in-view"), $(".c-viewer--main").show();
            }),
            $(".js-show-music").click(function () {
                var i = e.width();
                $(".c-music").addClass("in-view"),
                    $(".js-move").removeClass("is-moving"),
                    $(".c-music").addClass("is-moving"),
                    Beacon("close"),
                    i < 992 &&
                        ($(".c-viewer--main").hide(),
                        $(".c-viewer--print").removeClass("in-view"),
                        $(".c-themer").removeClass("in-view"),
                        $(".c-info").removeClass("in-view"),
                        $(".c-forward").removeClass("in-view"),
                        $(".c-pong").removeClass("in-view"),
                        $(".c-acq").removeClass("in-view"));
            }),
            $(".js-hide-acq").click(function () {
                $(".c-acq").removeClass("in-view"), $(".c-viewer--main").show();
            }),
            $(".js-show-acq").click(function () {
                var i = e.width();
                $(".c-acq").addClass("in-view"),
                    $(".js-move").removeClass("is-moving"),
                    $(".c-acq").addClass("is-moving"),
                    Beacon("close"),
                    i < 992 &&
                        ($(".c-viewer--main").hide(),
                        $(".c-viewer--print").removeClass("in-view"),
                        $(".c-themer").removeClass("in-view"),
                        $(".c-info").removeClass("in-view"),
                        $(".c-pong").removeClass("in-view"),
                        $(".c-music").removeClass("in-view"));
            }),
            $(".js-hide-cookies").click(function () {
                $(".c-cookies").hide(), $.cookie("cookie_accept", "1", { expires: 60 });
            });
    },
    windowResizing = () => {
        $(window).on("resize", function () {
            $(this).width() < 992 && ($(".c-viewer--print").removeAttr("style"), $(".c-themer").removeAttr("style"), $(".c-forward").removeAttr("style"), $(".c-info").removeAttr("style"), $(".c-music").removeAttr("style"), $(".c-profile").removeAttr("style"));
        });
    },
    noise = () => {
        let e,
            i,
            s,
            t,
            o,
            a = [],
            n = 0;
        const r = () => {
                const e = i.createImageData(s, t),
                    o = new Uint32Array(e.data.buffer),
                    n = o.length;
                for (let e = 0; e < n; e++) Math.random() < 0.5 && (o[e] = 4278190080);
                a.push(e);
            },
            c = () => {
                9 === n ? (n = 0) : n++,
                    i.putImageData(a[n], 0, 0),
                    (o = window.setTimeout(() => {
                        window.requestAnimationFrame(c);
                    }, 40));
            },
            l = () => {
                (s = window.innerWidth), (t = window.innerHeight), (e.width = s), (e.height = t);
                for (let e = 0; e < 10; e++) r();
                c();
            };
        (e = document.getElementById("noise")), (i = e.getContext("2d")), l();
    };
$(document).ready(() => {
    themeSwitcher(),
        $(".js-os").text(platform.os),
        $(".js-color").text(screen.colorDepth),
        $(".js-enabled").text("Enabled"),
        navigator.cookieEnabled ? $(".js-cookies").text("Enabled") : $(".js-cookies").text("Disabled"),
        flashSupport(),
        adSupport(),
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ? $(".js-motion").text("Prefers reduced") : $(".js-motion").text("No Preference"),
        screenDensity(),
        checkResolution(),
        checkBrowser(),
        ($printOs = $(".js-os").text()),
        ($printColor = $(".js-color").text()),
        ($printJs = $(".js-enabled").text()),
        ($printCookies = $(".js-cookies").text()),
        ($printFlash = $(".js-flash").text()),
        ($printMotion = $(".js-motion").text()),
        ($printBlocker = $(".js-blocker").text()),
        ($printDensity = $(".js-density").text()),
        ($printRes = $(".js-resolution").text()),
        ($printBrowser = $(".js-browser-overview").text()),
        $(".js-print-os").text($printOs),
        $(".js-print-color").text($printColor),
        $(".js-print-js").text($printJs),
        $(".js-print-cookies").text($printCookies),
        $(".js-print-flash").text($printFlash),
        $(".js-print-motion").text($printMotion),
        $(".js-print-blocker").text($printBlocker),
        $(".js-print-density").text($printDensity),
        $(".js-print-res").text($printRes),
        $(".js-print-browser").text($printBrowser),
        emailCompose(),
        moveWindows(),
        navBar(),
        // navBar2(),
        toggleWindow(),
        windowResizing(),
        soundCloudPlayer(),
        acq(),
        setTimeout(function () {
            adSupport();
        }, 1e3);
        
    makeModalDraggable(".c-profile", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-skill", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-skill-soft", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-contact", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-education", ".c-viewer__address-bar--drag");
});

$(document).on("click", ".js-toggle-window", function () {
  const name = $(this).data("window");
  const action = $(this).data("action") || "show";
  toggleWindow(name, action);
});