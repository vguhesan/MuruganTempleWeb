var mySwiper;
var galleryThumbs;

function loadSlider() {
    galleryThumbs = new Swiper('.gallery-thumbs1', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    mySwiper = new Swiper ('.gallery-top1', {
        // Optional parameters
        direction: 'horizontal',
        speed: 300,
        loop: true,

        autoplay: {
            delay: 9000,
        },

        autoHeight: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        //thumbs: {
        //  swiper: galleryThumbs,
        //  slideToClickedSlide: true,
        //}
    });

    //mySwiper.controller.control = galleryThumbs;
    //galleryThumbs.controller.control = galleryTop;
}

var imgPrefixPath1 = '/slider-images/';

jQuery(document).ready(function() {
    // Fetch all slides from server /slider-images/
    var imgFilesDirectory = imgPrefixPath1;
    var str = '';

    // get auto-generated page 
    $.ajax({url: imgFilesDirectory}).then(function(html) {
        // create temporary DOM element
        var document = $(html);

        // find all links ending with .jpg 
        document.find('a[href$=".jpg"], a[href$=".png"]').each(function() {
            var jpgName = $(this).text();
            var jpgUrl = $(this).attr('href');
            var newJpgUrl = jpgUrl.replace(/slider-images/g, 'slider-images');


            //console.log(jpgUrl);

            //$('#slidelist').prepend('<img id="' + jpgName + '" src="images/' + jpgUrl + '" />') 
            //<li class="touchcarousel-item">
            //<img src="/p/static/img/mainslider3/1.png"  width="400" />
            //</li>
            str += '<li class="touchcarousel-item"><img src="' + newJpgUrl + '" width="400"/></li>';

        });

        //console.log(str);
        $('#carousel1body').prepend(str);
        //$('#slidelist1bottom').prepend(str) ;

        //loadSlider();
        $("#carousel1").touchCarousel({
            autoplay: true,
            loopItems: true,
            autoplayDelay:3000,
            itemsPerMove: 3,     
        });
    });

});

var bannerHrefLinks = "{}";

function loadJSONLinksFromFile() {
    var rndNum = Math.floor(Math.random() * 100000);
    var jsonFile = '/banner-images/bannerlinksfile.json?rnd='+ rndNum;
    $.ajax({url: jsonFile}).then(function(jsonlinks) {
        console.log("jsonLinks:");
        console.log(jsonlinks);
        bannerHrefLinks = jsonlinks;
    });
}

var imgPrefixPath2 = '/banner-images/';
jQuery(document).ready(function() {
    // Load the links file for banners
    loadJSONLinksFromFile();
    // Fetch all slides from server /banner-images/
    var imgFilesDirectory = imgPrefixPath2;
    var str = '';

    // get auto-generated page 
    $.ajax({url: imgFilesDirectory}).then(function(html) {
        // create temporary DOM element
        var document = $(html);
        console.log("pos-A");
        // find all links ending with .jpg 
        document.find('a[href$=".jpg"], a[href$=".png"]').each(function() {
            console.log("pos-B");
            var jpgName = $(this).text();
            var jpgUrl = $(this).attr('href');
            var newJpgUrl = jpgUrl.replace(/banner-images/g, 'banner-images');
            var hrefBeginPortion = '';
            var hrefEndPortion = '';
            console.log("pos-C");
            $(bannerHrefLinks).each(function( i, val ) {
                console.log("pos-D");
                filename = val['filename'];
                linkUrl = val['link'];
                target = val['target'];
                if (jpgUrl.toLowerCase().indexOf(filename.toLowerCase()) > 0) {
                    console.log("pos-E");
                    console.log("Found a match on "+ jpgUrl);
                    hrefBeginPortion = "<a href=\"" + linkUrl + "\" target=\"" + target + "\" >";
                    hrefEndPortion = '</a>';
                }
            })

            //<div class="rsContent">
            //<img class="rsImg" src="/p/static/img/mainslider1/Brahmotsavam-webv2-1.jpg" alt="Brahmotsavam 2019" />
            //</div>
            str += '<div class="rsContent">' + hrefBeginPortion + '<img class="rsImg" src="' + newJpgUrl + '"/>' + hrefEndPortion + '</div>';

        });
        console.log("pos-F");
        console.log(str);
        $('#sliderone').prepend(str);

        $("#sliderone").royalSlider({
            // options go here
            // as an example, enable keyboard arrows nav
            keyboardNavEnabled: true,
            autoScaleSlider: true, 
            autoScaleSliderWidth: 1660,     
            autoScaleSliderHeight: 465,
            imageScaleMode: 'fit',
            loop: true,
            loopRewind: true,
            autoPlay: {
              // autoplay options go gere
              enabled: true,
              pauseOnHover: true,
              delay: 10000,
            },
        });
        
    });

});

