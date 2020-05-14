var tl = new TimelineMax();

//Logos
TweenMax.set(".wp-logo", { scale: 1 });
TweenMax.set(".weebly-logo", { scale: 1 });

// Pages
TweenMax.set(".dashboard-page", { display: "block" });
TweenMax.set(".hosting-page", { display: "none" });
TweenMax.set(".marketplace-page", { display: "none" });
TweenMax.set(".domain-page", { display: "none" });
TweenMax.set(".message-page", { display: "none" });
TweenMax.set(".manage-account-page", { display: "none" });

TweenMax.to(".mobile-nav", 0, { x: -300 });

$(".hamburger-icon").on("click", function () {
  if ($(this).attr("data-click-state") == 1) {
    $(this).attr("data-click-state", 0);
    tl.to(".bar-one", 0.3, { y: 0, rotation: 0 })
      .to(".bar-two", 0, { opacity: 1 }, "-=.3")
      .to(".bar-three", 0.3, { y: 0, rotation: 0 }, "-=.3")
      .to(".mobile-nav", 0.3, { x: -300 }, "-=.3");
  } else {
    $(this).attr("data-click-state", 1);
    tl.to(".bar-one", 0.3, { y: 6, rotation: 45 })
      .to(".bar-two", 0, { opacity: 0 }, "-=.3")
      .to(".bar-three", 0.3, { y: -6, rotation: -45 }, "-=.3")
      .to(".mobile-nav", 0.3, { x: 0 }, "-=.3");
  }
});

/* Search STARTS */
$(".search-btn").on("click", function () {
  $(".overlay").css({ display: "block" });
  $(".search-input").css({ display: "block" });
});

$(".overlay").on("click", function () {
  $(".overlay").css({ display: "none" });
  $(".search-input").css({ display: "none" });
});

/* Search ENDS */

/* Message Btn Starts */
$(".message-btn").on("click", function () {
  $(".dashboard-page").css({ display: "none" });
  $(".hosting-page").css({ display: "none" });
  $(".marketplace-page").css({ display: "none" });
  $(".domain-page").css({ display: "none" });
  $(".manage-account-page").css({ display: "none" });
  $(".message-page").css({ display: "block" });
  $(".manage-account-page").css({ display: "none" });
});
/* Message Btn Ends */

// Manage Account Btn STARTS
$(".manage-account-btn").on("click", function () {
  $(".dashboard-page").css({ display: "none" });
  $(".hosting-page").css({ display: "none" });
  $(".marketplace-page").css({ display: "none" });
  $(".domain-page").css({ display: "none" });
  $(".message-page").css({ display: "none" });
  $(".manage-account-page").css({ display: "block" });
  $(".account-info-drop-down").css({ display: "none" });
});

// Manage Account Btn ENDS

// $('.mysites-card').on('mouseenter',this, function () {
//   tl
//     .to('.arrow-head', .2, { left: '20px' })
//     .to('.arrow-steam', .2, { width: '29px' }, '-=.2');

// }).on('mouseleave',this,  function(){
//   tl
//     .to('.arrow-head', .2, { left: '2px' })
//     .to('.arrow-steam', .2, { width: '12px' }, '-=.2')
// });

// Hover For My Sites STARTS //
$(".mysites-card").each(createEffect);

function createEffect(i, element) {
  var tl = new TimelineMax({ paused: true });
  var arrowHead = $(this).find(".arrow-head");
  var arrowSteam = $(this).find(".arrow-steam");
  var wpLogo = $(this).find(".wp-logo");
  var weeblyLogo = $(this).find(".weebly-logo");

  tl.to(arrowHead, 0.2, { left: "20px" })
    .to(arrowSteam, 0.2, { width: "29px" }, "-=.2")
    .to(wpLogo, 0.2, { scale: 0.9 }, "-=.2")
    .to(weeblyLogo, 0.2, { scale: 0.9 }, "-=.2");
  $(element).hover(over, out);

  function over() {
    tl.play();
  }

  function out() {
    tl.reverse();
  }
}
// Hover For My Sites ENDS //

// Hover Table List Items STARTS //
$(".invoice-table").each(createTableHover);

function createTableHover(i, element) {
  var tl = new TimelineMax({ paused: true });
  // var arrowHeadTable = $(this).find('.arrow-head');
  // var arrowSteamTable = $(this).find('.arrow-steam');
  // tl.to(arrowHeadTable, 0.2, { rotation: 45, marginTop: '3px' })
  //   .to(arrowSteamTable, 0.2, { rotation: 90, marginLeft: '1px' }, '-=.2');

  var arrowGroup = $(this).find(".arrow-group");
  tl.to(arrowGroup, 0.2, { rotation: 90, transformOrigin: "10%" });
  $(element).hover(over, out);

  function over() {
    tl.play();
  }

  function out() {
    tl.reverse();
  }
}

// Hover Table List Items ENDS //

$(".dashboard-btn").on("click", function () {
  $(this).addClass("active").removeClass("nav-btn");
  $(".marketplace-btn").removeClass("active").addClass("nav-btn");
  $(".domain-btn").removeClass("active").addClass("nav-btn");
  $(".hosting-btn").removeClass("active").addClass("nav-btn");
  $(".message-btn").removeClass("active-icon").addClass("not-active-icon");

  $(".dashboard-page").css({ display: "block" });
  $(".hosting-page").css({ display: "none" });
  $(".marketplace-page").css({ display: "none" });
  $(".domain-page").css({ display: "none" });
  $(".message-page").css({ display: "none" });
  $(".manage-account-page").css({ display: "none" });
});

$(".hosting-btn").on("click", function () {
  $(this).addClass("active").removeClass("nav-btn");
  $(".dashboard-btn").removeClass("active").addClass("nav-btn");
  $(".marketplace-btn").removeClass("active").addClass("nav-btn");
  $(".domain-btn").removeClass("active").addClass("nav-btn");
  $(".message-btn").removeClass("active-icon").addClass("not-active-icon");

  $(".dashboard-page").css({ display: "none" });
  $(".hosting-page").css({ display: "block" });
  $(".marketplace-page").css({ display: "none" });
  $(".domain-page").css({ display: "none" });
  $(".message-page").css({ display: "none" });
  $(".manage-account-page").css({ display: "none" });
});

$(".marketplace-btn").on("click", function () {
  $(this).addClass("active").removeClass("nav-btn");
  $(".hosting-btn").removeClass("active").addClass("nav-btn");
  $(".dashboard-btn").removeClass("active").addClass("nav-btn");
  $(".domain-btn").removeClass("active").addClass("nav-btn");
  $(".message-btn").removeClass("active-icon").addClass("not-active-icon");

  $(".dashboard-page").css({ display: "none" });
  $(".hosting-page").css({ display: "none" });
  $(".marketplace-page").css({ display: "block" });
  $(".domain-page").css({ display: "none" });
  $(".message-page").css({ display: "none" });
  $(".manage-account-page").css({ display: "none" });

  // tl.to('.dashboard-page', .1, { display: 'none', x: '100%' })
  //   .to('.hosting-page', .1, { display: 'none', x: '100%' })
  //   .to('.domain-page', .1, { display: 'none', x: '100%' })
  //   .to('.marketplace-page', .1, { display: 'block', x: '0%'})
});

$(".domain-btn").on("click", function () {
  $(this).addClass("active").removeClass("nav-btn");
  $(".hosting-btn").removeClass("active").addClass("nav-btn");
  $(".dashboard-btn").removeClass("active").addClass("nav-btn");
  $(".marketplace-btn").removeClass("active").addClass("nav-btn");
  $(".message-btn").removeClass("active-icon").addClass("not-active-icon");

  $(".dashboard-page").css({ display: "none" });
  $(".hosting-page").css({ display: "none" });
  $(".marketplace-page").css({ display: "none" });
  $(".domain-page").css({ display: "block" });
  $(".message-page").css({ display: "none" });
  $(".manage-account-page").css({ display: "none" });

  // tl.to('.dashboard-page', .1, { display: 'none', x: '100%' })
  //   .to('.hosting-page', .1, { display: 'none', x: '100%' })
  //   .to('.marketplace-page', .1, { display: 'none', x: '100%' })
  //   .to('.domain-page', .1, { display: 'block', x: '0%'})
});

$(".search-btn").on("click", function () {
  // $(this).removeClass('active-icon').addClass('not-active-icon');
  $(".message-btn").addClass("not-active-icon").removeClass("active-icon");
  $(".profile-btn").addClass("not-active-icon").removeClass("active-icon");

  //      if($(this).attr('data-click-state') == 1) {
  //      $(this).attr('data-click-state', 0)
  //             $(this).removeClass('active-icon').addClass('not-active-icon');

  //     } else {
  //      $(this).attr('data-click-state', 1)
  //            $(this).addClass('active-icon').removeClass('not-active-icon');

  //     }

  $(".dashboard-btn").removeClass("active").addClass("nav-btn");
  $(".marketplace-btn").removeClass("active").addClass("nav-btn");
  $(".domain-btn").removeClass("active").addClass("nav-btn");
  $(".hosting-btn").removeClass("active").addClass("nav-btn");
});

$(".message-btn").on("click", function () {
  // $(this).addClass('active-icon').removeClass('not-active-icon');
  $(".message-btn").addClass("active-icon").removeClass("not-active-icon");
  $(".search-btn").addClass("not-active-icon").removeClass("active-icon");
  $(".profile-btn").addClass("not-active-icon").removeClass("active-icon");

  $(".dashboard-btn").removeClass("active").addClass("nav-btn");
  $(".marketplace-btn").removeClass("active").addClass("nav-btn");
  $(".domain-btn").removeClass("active").addClass("nav-btn");
  $(".hosting-btn").removeClass("active").addClass("nav-btn");

  $(".dashboard-page").css({ display: "none" });
  $(".hosting-page").css({ display: "none" });
  $(".marketplace-page").css({ display: "none" });
  $(".domain-page").css({ display: "none" });
  $(".message-page").css({ display: "block" });
  $(".manage-account-page").css({ display: "none" });
});

$(".profile-btn").on("click", function () {
  $(this).addClass("active-icon").removeClass("not-active-icon");
  $(".message-btn").addClass("not-active-icon").removeClass("active-icon");
  $(".search-btn").addClass("not-active-icon").removeClass("active-icon");

  if ($(this).attr("data-click-state") == 1) {
    $(this).attr("data-click-state", 0);
    $(".account-info-drop-down").addClass("hidden");
    $(".profile-btn").addClass("not-active-icon").removeClass("active-icon");
    $(".account-info-drop-down").css({ display: "none" });

    // tl
  } else {
    $(this).attr("data-click-state", 1);
    $(".account-info-drop-down").removeClass("hidden");
    $(".profile-btn").removeClass("not-active-icon").addClass("active-icon");
    $(".account-info-drop-down").css({ display: "block" });
  }
});

// Closes Mobile Nav if Link is clicked
$(".mobile-dashboard-link").on("click", function () {
  tl.to(".bar-one", 0.3, { y: 0, rotation: 0 })
    .to(".bar-two", 0, { opacity: 1 }, "-=.3")
    .to(".bar-three", 0.3, { y: 0, rotation: 0 }, "-=.3")
    .to(".mobile-nav", 0.3, { x: -300 }, "-=.3");
});

$(".show-invoice-info").on("click", function () {
  if ($(this).attr("data-click-state") == 1) {
    $(this).attr("data-click-state", 0);
    $(".invoice-info").addClass("hidden");
  } else {
    $(this).attr("data-click-state", 1);
    $(".invoice-info").removeClass("hidden");
  }
});
