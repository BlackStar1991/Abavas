window.onload = function () {

    var blackWrapper = $(".blackWrapper"),
        body = $("body"),
        active = "active";
    var $window = $(window);

    ///  sliderEffect
    function sliderEffectForButtons(button, element, duration) {
        button.click(function () {
            element.slideToggle(duration);
        });
    }

    //  hideShowEffect
    function hideShowEffect(button, element) {
        button.click(function () {
            element.toggleClass("hidden");
        });
    }


    function slideSubMenu(btn, fieldUnderBtn, displayView){
        btn.each(function(){
            $(this).on({
                click: function (){
                    if ($window.width() <= displayView) {
                        fieldUnderBtn.slideToggle(400);
                    }
                }
            });
        });
    }



    var buttonLanguage = $(".bl_language__active"),
        fieldWithOtherLanguage = $(".bl_language__variables"),
        buttonChooseRigthLanguage = $(".bl_language__variables_item");

    hideShowEffect(buttonLanguage, fieldWithOtherLanguage);
    hideShowEffect(buttonChooseRigthLanguage, fieldWithOtherLanguage);

// Menus for Mobile
    function activeMenuForMobile(btn, field) {
        btn.on("click", function () {
            field.toggleClass("active");
        });
    }

    activeMenuForMobile($(".nav_main__button"), $(".nav_menu_mobile"));
    activeMenuForMobile($(".bl_search__button"), $(".bl_search"));


    var headerNavigationButton = $(".bl_navGroup__button");
        headerNavigationButton.on("click", function () {
        $(".bl_navGroup").toggleClass("active");
        $(this).toggleClass("icon-bar icon-close");
    });


    var btnShowMoreFooterInformation = $(".bl_navigation__show");
        btnShowMoreFooterInformation.on("click", function () {
        $(this).toggleClass("active");
        $(".bl_navigation__full").slideToggle(300);

    });

    ///// Caterories
    var btnMobileCategories = $(".bl_catalog__button"),
        fieldCategories = $(".bl_catalog__full");

    slideSubMenu(btnMobileCategories, fieldCategories, 991);


    var btnCategories = $(".bl_catalog__btn");/// min button

    btnCategories.click(function () {
        $(this).toggleClass(active);
        $(this).parent(".bl_catalogs__item").toggleClass(active);
        $(this).siblings("ul").eq(0).slideToggle(400);
    });

////////// FILTERS
    var btnMobileFilters = $(".bl_filters__button"),
        fieldFilters = $(".bl_filters__full"),
        btnFilters =$(".bl_filters__btn");

    btnFilters.click(function () {
        $(this).toggleClass(active);
        $(this).next(".bl_filters__section").slideToggle(400);
    });

    slideSubMenu(btnMobileFilters, fieldFilters, 991);


    //// Main-slider

    $(".bl_mainSlider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: true,
        dots: true,
        autoplay: false,
        stopOnHover: true,
        // margin: 0,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            992: {
                items: 1,
                dots: true
            },
            320: {
                items: 1,
                dots: false
            }
        }
    });


//    slider Partners - Слайдер Партнеры

    $(".bl_sliderPartners").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        // margin: 24,
        smartSpeed: 1000,
        autoplayTimeout: 4000,
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 5
            },
            992: {
                items: 4
            },
            768: {
                items: 3
            },
            550: {
                items: 2
            },
            320: {
                items: 1
            }

        }
    });

////// slider_newProducts

    function sliderHits() {

        var currentItems = 4,
            sliderItems = $(".bl_slider__item").length,
            currentLoop;
        if (sliderItems > currentItems) {
            currentLoop = true;
        }else {
            currentLoop = false;
        }


        $(".bl_sliderHits").owlCarousel({
            items: currentItems,
            loop: currentLoop,
            nav: true,
            navText: true,
            dots: false,
            autoplay: false,
            stopOnHover: true,
            // margin: 6,
            smartSpeed: 1000, //Время движения слайда
            autoplayTimeout: 4000, //Время смены слайда
            pagination: false,
            responsiveClass: true,
            responsive: {
                1200: {
                    items: 4
                },
                992: {
                    items: 3,
                    center: true
                },
                550: {

                    dots: false,
                    items: 2
                },
                320: {
                    dots: false,
                    items: 1,
                    center: true
                }

            }
        });
    }

    sliderHits();

//// Main Product Slider
    function sliderMainProduct() {

        var currentItems = 4,
            sliderItems = $(".bl_mainProduct__item").length,
            currentLoop;
        if (sliderItems > currentItems) {
            currentLoop = true;
        }else {
            currentLoop = false;
        }


        $(".bl_mainProduct__slider").owlCarousel({
            items: currentItems,
            loop: currentLoop,
            nav: true,
            navText: true,
            dots: false,
            autoplay: false,
            stopOnHover: true,
            // margin: 6,
            smartSpeed: 1000,
            autoplayTimeout: 4000,
            pagination: false,
            responsiveClass: true,
            responsive: {
                1200: {
                    items: 4
                },
                992: {
                    items: 3,
                    center: true
                },
                550: {

                    dots: false,
                    items: 2
                },
                320: {
                    dots: false,
                    items: 1,
                    center: true
                }

            }
        });
    }

    sliderMainProduct();



// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask("+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});


    ////////////////// POPUPS LOGIC

    function popupWindowShow(btn, field) {
        btn.on("click", function () {

            field.removeClass("hidden");
            blackWrapper.removeClass("hidden");
            blackWrapper.animate({opacity: 0.6}, 300);
        });
    }

    function closePopupWindow(btn, field) {
        btn.on("click", function () {
            field.addClass("hidden");
            blackWrapper.addClass("hidden");
            blackWrapper.animate({opacity: 0}, 400);
        });
    }

 //////////////// Catalog VIEW GRID/LIST

    var catalogField = $(".bl_products"),

        btnGrid =$(".js-grid"),
        btnList =$(".js-list"),


        viewGrid = "view-grid",
        viewList = "view-list";


    btnList.on("click", function(){

        catalogField.removeClass(viewGrid);
        catalogField.addClass(viewList);

    });


    btnGrid.on("click", function(){
        catalogField.removeClass(viewList);
        catalogField.addClass(viewGrid);

    });


    ////////// CallBack PopUp

    function popupWindowCallBack() {
        var buttonCallback = $(".js-callBack"),
            fieldCallBack = $(".bl_callback"),
            buttonClose = $(".bl_callback__close");

        popupWindowShow(buttonCallback, fieldCallBack);
        closePopupWindow(buttonClose, fieldCallBack);
        closePopupWindow(blackWrapper, fieldCallBack);
    }

    popupWindowCallBack();


    //// Succsess PopUp

    function popupWindowSuccsess() {

        var fieldSuccess = $(".bl_success");

        closePopupWindow(blackWrapper, fieldSuccess);
        closePopupWindow(fieldSuccess, fieldSuccess);
    }

    popupWindowSuccsess();


};


