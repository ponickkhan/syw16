function setPosition(checkAnim){
    //container and letter P
    var wrap = $(".loadAnimation"),
        template = $(".imageCenter"),
        //elements of animation
        orangeSquare = $("#orangeSquare"),
        blueTriangle = $("#blueTriangle"),
        yellowTriangle = $("#yellowTriangle"),
        redSquare = $("#redSquare"),

        //sizing of template (letter P)
        widthTemplate = template.width(),
        heightTemplate = template.height(),

        //size of container
        widthWrap = wrap.width(),
        heightWrap = wrap.height(),
        //offset of template(letter P)
        offsetBottom = parseInt(blueTriangle.css("border-top-width"), 10),

         topT = (heightWrap - heightTemplate)/2 - 45,
         leftT = (widthWrap - widthTemplate)/2,
        // right = widthWrap - left - widthTemplate,
        // bottom = heightWrap - top - heightTemplate,

        bottomDefigned = bottom + heightTemplate - offsetBottom;
        // topDefigned = top + orangeSquare.height(),
        // position = [top, left, right, bottomDefigned];
    template.css({"top": topT, "left": leftT});
    var top = template.position().top,
        left = template.position().left,
        right = template.position().left + orangeSquare.width(),
        bottom = template.position().top + orangeSquare.height();

    //define position of elements
    if(checkAnim == false){
    //     orangeSquare.css({"left": left});
    //     blueTriangle.css("top", top);
    //     yellowTriangle.css("right", right);
    //     redSquare.css("bottom", bottom);
    //     //show template
        wrap.animate({
            opacity: 1
        }, 500);
        template.animate({
            opacity: 1
        }, 1000);
         checkAnim = animateItems(orangeSquare, blueTriangle, yellowTriangle, redSquare, 500, wrap);
    }
    // else{
        orangeSquare.css({"top": top, "left": left});
        blueTriangle.css({"top": top, "left": right});
        yellowTriangle.css({"top": top, "left": right});
        redSquare.css({"top": bottom, "left": left});
    // }
}
function animateItems(first, second, third, fourth, duration, wrap){
    first.delay( duration/2 ).animate({
        opacity: 1,
        //top: "+=" + position[0]
    }, duration, function() {
        third.animate({
            opacity: 1,
           // bottom: "+=" + position[3]
        }, duration, function() {
        });
    });
    second.delay( duration ).animate({
        opacity: 1,
        //right: "+=" + position[2]
    }, duration, function() {
        fourth.animate({
            opacity: 1,
            //left: "+=" + position[1]
        }, duration, function() {
            var right = 0,
                strings = $(".additionalInfo p");
            wrap.css({"right": right, "left": "45%"}).addClass("ready");
            $(".static-content").css("opacity", 1);
            $(".aside.left").addClass(" animated fadeInDown");

            setTimeout('$(".grey-stripe").addClass(" animated fadeInDown")',  duration/2);
            setTimeout('$(".event-link").addClass(" animated fadeInRight")',  duration/2);
            setTimeout('$(".badge").addClass(" animated fadeIn")',  duration*2);

            setTimeout('$(".big-grey-stripe").addClass(" animated fadeInDown")',  duration);
            setTimeout('$(".event-left-link").addClass(" animated fadeIn")',  1.5*duration);

            setTimeout('$(".aside.right").addClass(" animated fadeInDown")',  2*duration);


            setTimeout('$(".mainTitle").addClass(" animated fadeInUp")',  duration*2.5);
            setTimeout('$(".note").addClass(" animated fadeInUp")',  duration*2.7);
            setTimeout('$(".date").addClass(" animated fadeInUp")',  duration*2.9);
            setTimeout('$(".city").addClass(" animated fadeInUp")',  duration*3.1);
            setTimeout('$(".company").addClass(" animated fadeInUp")',  duration*3.3);

            setTimeout('$(".bottom-link").addClass(" animated fadeInRight")',  duration*2);
            return true;
        });
    });
}

$(function() {
    var checkAnim = false;
    setPosition(checkAnim);
});

$( window ).resize(function(){
    setPosition();
});
