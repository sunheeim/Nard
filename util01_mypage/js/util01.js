$(function () {
    //searchBox----
    let searchBtn = document.getElementsByClassName('search')[0];
    let searchBox = document.getElementsByClassName('search_box')[0];


    searchBtn.addEventListener('click', () => {
        if (getComputedStyle(searchBox).display === 'none') {
            searchBox.style.display = 'block';
        } else {
            searchBox.style.display = 'none';
        }
    });

    /* 링크 방지 */
    /* $('a').click(function (e) {
        e.preventDefault();
    }); */

    let depth01 = $('.header .inner .gnb-pc .depth01');
    let depth02 = $('.header .inner .gnb-pc .depth02');

    let menuBtn = $('.menu_btn');
    let closeBtn = $('.gnb-moblie .close-btn')
    let nav = $('.gnb-moblie');

    let cartBtn = $('.section03 .inner .list .item .info .btn');

    /* menu ----- */
    depth01.mouseenter(function () {
        $(this).children().stop().slideDown();
    });
    depth01.mouseleave(function () {
        depth02.stop().slideUp();

    });

    /* side menu ---- */
    menuBtn.click(function () {
        nav.animate({
            'right': '0'
        })
        closeBtn.css({
            'display': 'block'
        })
    });
    closeBtn.click(function () {
        nav.animate({
            'right': '-100%'
        });
        closeBtn.css({
            'display': 'none'
        })
    });

    $('.header .gnb-moblie .gnb02 .depth01 > a').click(function () {
        if ($(this).next().css('display') === 'none') {
            $('.header .gnb-moblie .gnb02 .depth02').slideUp();
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });
    $('.header .gnb-moblie .gnb02 .drop_menu > a').click(function(){
        $(this).toggleClass('on');
        
    });

    cartBtn.click(function (){
        swal("장바구니에 담겼습니다!", "", "success");
    });

    /* footer----*/
    $('.footer .info-mobile').click(function () {
        $(this).next().toggle();
    });
});