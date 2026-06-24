window.Beacon = window.Beacon || function() {};
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
        ($printOs = platform.os || $(".js-os").text()),
            ($printColor = screen.colorDepth || $(".js-color").text()),
            ($printJs = "Enabled"),
            ($printCookies = navigator.cookieEnabled ? "Enabled" : "Disabled"),
            ($printFlash = $(".js-flash").text()),
            ($printMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "Prefers reduced" : "No Preference"),
            ($printBlocker = $(".js-blocker").text()),
            ($printDensity = window.devicePixelRatio || $(".js-density").text()),
            ($printRes = window.screen.width + " x " + window.screen.height),
            ($printBrowser = platform.name + " " + platform.version),
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
                            // Cargar por defecto Browso 98 (th-browso-nine-eight)
                            var defaultTheme = "th-browso-nine-eight";
                            $("body").removeClass();
                            $("body").addClass("s-home");
                            $("body").addClass(defaultTheme);

                            if (typeof Beacon === "function") {
                                Beacon("config", { color: "#142C69" });
                            }
                            $(".c-themer__button").removeClass("c-themer__button--active");
                            $(".js-browso-nine-eight").addClass("c-themer__button--active");

                            $("#js-game").show();
                            $("#js-game-dark").hide();
                            $("#js-game-red").hide();
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
            
            // RESETEAR estilos en línea previos (de arrastres anteriores) al volver a abrirla!
            target.css({
                left: "",
                top: "",
                transform: ""
            });

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
            
            // Get actual on-screen coordinates using getBoundingClientRect() to avoid CSS translate offset jumps!
            const rect = modal.getBoundingClientRect();
            modal.style.transform = "none";
            modal.style.position = "fixed";
            modal.style.left = rect.left + "px";
            modal.style.top = rect.top + "px";

            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
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
                printAndEmail();
                emailCompose();
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
                printAndEmail();
                emailCompose();
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

// --- DICCIONARIOS DE TRADUCCION NATIVOS (Fallback Offline para file://) ---
const enDictionary = {
  "nav": {
    "work_experience": "Experience",
    "my_projects": "Projects",
    "references": "References",
    "support_chat": "💬 Contact Me",
    "ask_me": "💬 Ask Me",
    "themes": "Themes",
    "game": "Retro Pong",
    "music": "Music Player",
    "info": "Site Info"
  },
  "cards": {
    "profile": {
      "title": "Cover Letter",
      "entry": "Javier Elvis Canqui Llusco"
    },
    "contact": {
      "title": "Contact",
      "entry": "How to contact me"
    },
    "education": {
      "title": "EDUCATION",
      "entry": "always studying"
    },
    "technical": {
      "title": "TECHNICAL",
      "entry": "SKILLS"
    },
    "soft": {
      "title": "SOFT",
      "entry": "SKILLS"
    },
    "experience": {
      "title": "WORK EXPERIENCE",
      "entry": "years"
    },
    "projects": {
      "title": "MY PROJECTS",
      "entry": "personal highlights"
    },
    "references": {
      "title": "REFERENCES",
      "entry": "personal and professional"
    },
    "environment": {
      "title": "YOUR ENVIRONMENT",
      "entry": "device details"
    }
  },
  "chat": {
    "title": "Javier's Interactive Q&A Chat (AI)",
    "qa_tab": "Questions & Answers",
    "contact_tab": "Direct Contact",
    "name_label": "Your Name:",
    "email_label": "Your Email:",
    "message_label": "Message:",
    "send_btn": "Send Direct Email",
    "whatsapp_btn": "Send via WhatsApp 💬",
    "placeholder_name": "e.g. John Doe",
    "placeholder_email": "e.g. john@email.com",
    "placeholder_msg": "Hi Javier, I would like to...",
    "welcome_msg": "🤖 [Javier_AI]: Hello recruiter! I am Javier's virtual assistant. Click on any question below to learn about my Senior Software / AI Engineer capabilities.",
    "q_exp": "💼 What is your experience as a Senior?",
    "a_exp": "I have over 12 years of full-stack development experience, leading teams in the financial and government sectors. I have designed distributed architectures, billing engines, massive mobile apps, and predictive Machine Learning models that directly impact business results.",
    "q_tech": "🛠️ What technologies do you mainly master?",
    "a_tech": "Backend: Node.js, .NET Core, Java (Spring Boot), Python, and PHP. Frontend: React, React Native, Angular, Vue, and TypeScript. Databases: Oracle, SQL Server, MongoDB, PostgreSQL, MySQL. DevOps: Docker, Jenkins, Kubernetes, Grafana, and AWS.",
    "q_leader": "👥 How do you handle leadership and methodologies?",
    "a_leader": "I have led teams under agile (SCRUM/Kanban) and traditional (ICONIX) methodologies. I strongly believe in mentorship, thorough code reviews, test automation, and designing clean, well-documented APIs to ensure long-term scalability.",
    "q_ml": "🧠 What experience do you have in AI / ML?",
    "a_ml": "Yes, I obtained a post-graduate degree in Machine Learning. I have deployed predictive models of customer behavior in production for credit placement and customer acquisition, as well as interactive chatbots with advanced conversational flows in Dialogflow.",
    "q_remote": "🏠 Are you available for remote work?",
    "a_remote": "Yes, I have extensive experience working remotely with distributed teams. I adapt perfectly to different time zones, am self-managed, and focused on practical business results.",
    "q_contact": "📞 How can we contact you?",
    "a_contact": "You can write to me directly at javier.elvis.code@gmail.com, call me at +591 60609024, or connect on LinkedIn: linkedin.com/in/javier-elvis-canqui-llusco-34630b42. I'd be delighted to chat!"
  }
};

const esDictionary = {
  "nav": {
    "work_experience": "Experiencia",
    "my_projects": "Proyectos",
    "references": "Referencias",
    "support_chat": "💬 Contáctame",
    "ask_me": "💬 Pregúntame",
    "themes": "Temas"
  },
  "cards": {
    "profile": {
      "title": "Carta de Presentación",
      "entry": "Javier Elvis Canqui Llusco"
    },
    "contact": {
      "title": "Contacto",
      "entry": "Cómo contactarme"
    },
    "education": {
      "title": "Educación",
      "entry": "Siempre estudiando"
    },
    "technical": {
      "title": "Hab. Técnicas",
      "entry": "Habilidades"
    },
    "soft": {
      "title": "Hab. Blandas",
      "entry": "Habilidades"
    },
    "experience": {
      "title": "Experiencia Laboral",
      "entry": "años"
    },
    "projects": {
      "title": "Mis Proyectos",
      "entry": "Hitos personales"
    },
    "references": {
      "title": "Referencias",
      "entry": "Personales y profesionales"
    },
    "environment": {
      "title": "Tu Entorno",
      "entry": "Detalles de dispositivo"
    }
  },
  "chat": {
    "title": "Chat interactivo de Javier (AI)",
    "qa_tab": "Preguntas y Respuestas",
    "contact_tab": "Contacto Directo",
    "name_label": "Tu Nombre:",
    "email_label": "Tu Correo:",
    "message_label": "Mensaje:",
    "send_btn": "Enviar Correo Directo",
    "whatsapp_btn": "Enviar por WhatsApp 💬",
    "placeholder_name": "Ej. Juan Pérez",
    "placeholder_email": "Ej. juan@correo.com",
    "placeholder_msg": "Hola Javier, me gustaría...",
    "welcome_msg": "🤖 [Javier_AI]: ¡Hola reclutador! Soy el asistente virtual de Javier. Haz clic en cualquier pregunta abajo para conocer mis capacidades de Ingeniero de Software / IA Senior.",
    "q_exp": "💼 ¿Cuál es tu experiencia como Senior?",
    "a_exp": "Tengo más de 12 años de experiencia en desarrollo full-stack, liderando equipos en el sector financiero y gubernamental. He diseñado arquitecturas distribuidas, motores de cobranzas, apps móviles masivas y modelos predictivos de Machine Learning que impactan directamente en el negocio.",
    "q_tech": "🛠️ ¿Qué tecnologías dominas principalmente?",
    "a_tech": "Backend: Node.js, .NET Core, Java (Spring Boot), Python y PHP. Frontend: React, React Native, Angular, Vue y TypeScript. BD: Oracle, SQL Server, MongoDB, PostgreSQL, MySQL. DevOps: Docker, Jenkins, Kubernetes, Grafana y AWS.",
    "q_leader": "👥 ¿Cómo manejas liderazgo y metodologías?",
    "a_leader": "He liderado equipos bajo metodologías ágiles (SCRUM/Kanban) y tradicionales (ICONIX). Creo firmemente en la mentoría, revisiones de código exhaustivas, automatización de pruebas y en el diseño de APIs limpias y bien documentadas para garantizar escalabilidad a largo plazo.",
    "q_ml": "🧠 ¿Qué experiencia tienes en IA / ML?",
    "a_ml": "Sí, obtuve un postgrado en Machine Learning. He implementado en producción de modelos predictivos de comportamiento de clientes para captación y colocación de créditos, además de chatbots interactivos con flujos conversacionales avanzados en Dialogflow.",
    "q_remote": "🏠 ¿Estás disponible para trabajo remoto?",
    "a_remote": "Sí, tengo amplia experiencia trabajando de forma remota con equipos distribuidos. Me adapto perfectamente a diferentes zonas horarias, soy autogestionado y enfocado a resultados prácticos de negocio.",
    "q_contact": "📞 ¿Cómo podemos contactarte?",
    "a_contact": "Puedes escribirme directamente a javier.elvis.code@gmail.com, llamarme al +591 60609024 o conectar en LinkedIn: linkedin.com/in/javier-elvis-canqui-llusco-34630b42. ¡Estaré encantado de conversar!"
  }
};

window.currentLang = "en"; // Por defecto Inglés
window.currentTranslations = enDictionary;

const applyTranslations = (translations) => {
    $("[data-i18n]").each(function() {
        const key = $(this).data("i18n");
        const parts = key.split(".");
        let value = translations;
        for (const part of parts) {
            if (value) value = value[part];
        }
        if (value) {
            $(this).html(value);
        }
    });

    $("[data-i18n-placeholder]").each(function() {
        const key = $(this).data("i18n-placeholder");
        const parts = key.split(".");
        let value = translations;
        for (const part of parts) {
            if (value) value = value[part];
        }
        if (value) {
            $(this).attr("placeholder", value);
        }
    });
    
    // Actualizar experiencia dinámica
    const years = new Date().getFullYear() - 2013;
    const experienceSuffix = translations.cards.experience.entry || "years";
    $(".years-experience").text(years + " " + experienceSuffix);
};

const loadLanguage = (lang) => {
    window.currentLang = lang;
    
    // Actualizar estados visuales de los botones de idioma
    $(".js-lang-btn").css("opacity", "0.5");
    $(`.js-lang-btn[data-lang="${lang}"]`).css("opacity", "1");
    
    // Actualizar esquina superior izquierda
    $(".js-selected-lang-indicator").text(lang.toUpperCase());
    
    // Intentar cargar asíncronamente desde JSON
    $.ajax({
        url: `public/i18n/${lang}.json`,
        dataType: 'json',
        success: function(data) {
            window.currentTranslations = data;
            applyTranslations(data);
        },
        error: function() {
            // Fallback local robusto (offline friendly)
            const fallbackData = lang === "es" ? esDictionary : enDictionary;
            window.currentTranslations = fallbackData;
            applyTranslations(fallbackData);
        }
    });
};

$(document).on("click", ".js-lang-btn", function() {
    const lang = $(this).data("lang");
    loadLanguage(lang);
});

$(document).ready(() => {
    // Cargar idioma inglés por defecto al iniciar
    loadLanguage("en");
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

    // document.querySelector(".years-experience").textContent = (new Date().getFullYear() - 2013)+" years"; // Manejado dinámicamente por la traducción
    makeModalDraggable(".c-profile", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-skill", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-skill-soft", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-contact", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-education", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-experience", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-projects", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-references", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-chat", ".c-viewer__address-bar--drag");
    makeModalDraggable(".c-support", ".c-viewer__address-bar--drag");

    // Helpscout Beacon senior developer configurations
    if (typeof window.Beacon === "function") {
        window.Beacon("navigate", "/ask/message");
        window.Beacon("config", {
            color: "#142C69",
            docsEnabled: false, // Disables Answers / search option!
            display: {
                style: "manual" // Hides the default modern floating button!
            },
            translation: {
                howCanWeHelp: "¿En qué te puedo ayudar?",
                contactFormButton: "Enviar mensaje a Javier"
            }
        });

    }
});

$(document).on("click", ".js-trigger-beacon", function() {
    if (typeof window.Beacon === "function") {
        window.Beacon("toggle");
    }
});

$(document).on("click", ".js-toggle-window", function () {
  const name = $(this).data("window");
  const action = $(this).data("action") || "show";
  toggleWindow(name, action);
});

// Interactive Q&A Tab Switching for Chat Modal
$(document).on("click", ".js-chat-tab", function() {
    $(".js-chat-tab").removeClass("active");
    $(this).addClass("active");

    const tabId = $(this).data("tab");
    $(".js-tab-content").addClass("u-d-none");
    $("#tab-" + tabId).removeClass("u-d-none");
});

// Interactive Q&A Answers
$(document).on("click", ".js-chat-ask", function() {
    const key = $(this).data("q");
    const qText = $(this).text();
    let ans = "";
    
    if (window.currentTranslations && window.currentTranslations.chat && window.currentTranslations.chat["a_" + key]) {
        ans = window.currentTranslations.chat["a_" + key];
    } else {
        switch(key) {
            case "exp":
                ans = "Tengo más de 12 años de experiencia en desarrollo full-stack, liderando equipos en el sector financiero y gubernamental. He diseñado arquitecturas distribuidas, motores de cobranzas, apps móviles masivas y modelos predictivos de Machine Learning que impactan directamente en el negocio.";
                break;
            case "tech":
                ans = "Backend: Node.js, .NET Core, Java (Spring Boot), Python y PHP. Frontend: React, React Native, Angular, Vue y TypeScript. BD: Oracle, SQL Server, MongoDB, PostgreSQL, MySQL. DevOps: Docker, Jenkins, Kubernetes, Grafana y AWS.";
                break;
            case "leader":
                ans = "He liderado equipos bajo metodologías ágiles (SCRUM/Kanban) y tradicionales (ICONIX). Creo firmemente en la mentoría, revisiones de código exhaustivas, automatización de pruebas y en el diseño de APIs limpias y bien documentadas para garantizar escalabilidad a largo plazo.";
                break;
            case "ml":
                ans = "Sí, obtuve un postgrado en Machine Learning. He implementado en producción de modelos predictivos de comportamiento de clientes para captación y colocación de créditos, además de chatbots interactivos con flujos conversacionales avanzados en Dialogflow.";
                break;
            case "remote":
                ans = "Sí, tengo amplia experiencia trabajando de forma remota con equipos distribuidos. Me adapto perfectamente a diferentes zonas horarias, soy autogestionado y enfocado a resultados prácticos de negocio.";
                break;
            case "contact":
                ans = "Puedes escribirme directamente a javier.elvis.code@gmail.com, llamarme al +591 60609024 o conectar en LinkedIn: linkedin.com/in/javier-elvis-canqui-llusco-34630b42. ¡Estaré encantado de conversar!";
                break;
        }
    }
    
    const chatBox = $("#chat-box");
    const userPrefix = (window.currentLang === "es") ? "👤 Reclutador" : "👤 Recruiter";
    const botPrefix = "🤖 [Javier_AI]";
    
    chatBox.append(`<div class="c-chat-message c-chat-message--user">${userPrefix}: ${qText}</div>`);
    chatBox.append(`<div class="c-chat-message c-chat-message--bot">${botPrefix}: ${ans}</div>`);
    chatBox.scrollTop(chatBox[0].scrollHeight);
});

// Dynamic pre-formatted Mailto Contact Form trigger
$(document).on("click", ".js-contact-send", function() {
    const name = $("#contact-name").val().trim();
    const email = $("#contact-email").val().trim();
    const msg = $("#contact-message").val().trim();
    
    if(!name || !email || !msg) {
        alert("Por favor completa todos los campos del formulario para enviar el correo.");
        return;
    }
    
    const subject = "Contacto Portafolio - " + name;
    const body = `Hola Javier,

Mi nombre es ${name} (${email}).

Te escribo para lo siguiente:
--------------------------------------------------
${msg}
--------------------------------------------------

Quedo atento a tus comentarios. Saludos cordiales.`;
    
    const mailtoUrl = "mailto:javier.elvis.code@gmail.com" +
                      "?subject=" + encodeURIComponent(subject) +
                      "&body=" + encodeURIComponent(body);
                      
    window.location.href = mailtoUrl;
});

// Dynamic pre-formatted WhatsApp Contact Form trigger
$(document).on("click", ".js-contact-whatsapp", function() {
    const name = $("#contact-name").val().trim();
    const email = $("#contact-email").val().trim();
    const msg = $("#contact-message").val().trim();
    
    if(!name || !email || !msg) {
        alert("Por favor completa todos los campos del formulario para enviar por WhatsApp.");
        return;
    }
    
    const text = `Hola Javier, mi nombre es ${name} (${email}).

Te escribo por lo siguiente:
--------------------------------------------------
${msg}
--------------------------------------------------`;
    
    const whatsappUrl = "https://wa.me/59160609024?text=" + encodeURIComponent(text);
    window.open(whatsappUrl, "_blank");
});
