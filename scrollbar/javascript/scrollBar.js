
"use strict";

function drag(selector) {

    (function (Draggable) {

        var x = 0 , y = 0;
        var move_x = 0, move_y = 0;
        var moving = false;
        var start_x = 0, start_y = 0;

        var element = document.querySelector(selector);
        
        var features = {
            start: function (ui) {},
            drag: function (ui) {},
            end: function (ui) {},
            axis: "s"
        };

        var style = window.getComputedStyle(element);

        var ui = {
            top: function (val) {

                if (val === undefined)
                {
                    var t = style.getPropertyValue('top').toString();
                   if(t=="auto")
                       t = "0px";
                    return parseInt(t.substring(0, t.length - 2));
                }

                element.style.top = val + "px";
            },
            left: function (val) {
                if (val === undefined)
                {
                    var t = style.getPropertyValue('left').toString();
                    if(t=="auto")
                       t = "0px";
                    return parseInt(t.substring(0, t.length - 2));
                    
                }

                element.style.left = val + "px";
            }
        };

        Draggable.create = function (func)
        {
            extend();

            element.addEventListener("mousedown", function (event) {

                x = event.clientX;
                y = event.clientY;
                start_x = ui.left();
                start_y = ui.top();
                moving = true;
                features.start(ui);

            });

            element.addEventListener("mousemove", function (event) {
                if (moving) {
                    moveValue(event);
                    move();
                    features.drag(ui);
                }
            });
            window.addEventListener("mousemove", function (event) {
                if (moving) {
                    moveValue(event);
                    move();
                    features.drag(ui);
                }
            });
            element.addEventListener("mouseup", function (event) {
                features.end(ui);
                moving = false;
            });
            window.addEventListener("mouseup", function (event) {
                features.end(ui);
                moving = false;
            });

            function moveValue(event)
            {
                move_x = event.clientX;
                move_y = event.clientY;

                move_x = move_x - x + start_x;
                move_y = move_y - y + start_y;
            }

            function move()
            {
                if(features.axis=="y" || features.axis=="s") 
                   ui.top(move_y);
                if(features.axis=="x" || features.axis=="s")
                   ui.left(move_x);
            }
            function extend()
            {
                for (var key in func)
                {
                    features[key] = func[key];
                }
            }
        }
    }(this.Draggable = {}))
};


(function ($) {

    var scroll_id = 0;

    $.fn.scrollBar = function () {

        scroll_id++; 
        
        
        var methods = {
                scrollTosliderTop : function()
                {
                    return height_scroll * scroll / height_all;
                }
                ,scrollAnimate:function()
                {
                     now.animate({top: scroll}, {
                        easing: 'linear',
                        duration: 'fast',
                        queue: false
                    });

                    now_slider.animate({top: -slider_top}, {
                        easing: 'linear',
                        duration: 'fast',
                        queue: false
                    });
                }
                ,limit : function(value , min , max)
                {
                    if(value < min)
                       value = min;
                   if(value > max)
                       value = max;
                   return value;
                }
                ,selectProhibit:function(prohibit)
                {
                    if(prohibit == true)
                    {
                        document.onselectstart = function() { return false; };
                        document.body.style.MozUserSelect = 'none';
                    }
                    else if(prohibit == false)
                    {
                        document.onselectstart = null;
                        document.body.style.MozUserSelect = '';
                    }
                }
                
        };
        var newContentId = "scrollBar-all-" + scroll_id
                , newContentClass = "scrollBar-all-class";

        var scrollBarObj = document.querySelector($(this).selector);
        var parent = scrollBarObj.parentNode;
        var newContent = document.createElement("div");

        newContent.id = newContentId;
        newContent.class = newContentClass;

        parent.replaceChild(newContent, scrollBarObj);
        newContent.appendChild(scrollBarObj);

        var allcontentname = "#" + newContentId;

        $(allcontentname).append("<div id=scroll-" + scroll_id + "><div id=slider-" + scroll_id + "></div></div>");

        var scroll = 0
            , now = $(this)
            , now_obj = $(allcontentname)
            , now_scroll = $('#scroll-' + scroll_id)
            , now_slider = $('#slider-' + scroll_id)
            , slider_top = 0
            , draging = false
            , leave = true
            , last_obj_height = height_all;

        now_obj.css({
            position: 'relative',
            overflow: 'hidden',
        });

        var height_all = now.height()
                , height_scroll = now_obj.height();

        now_scroll.css({
            background: 'rgba(200,200,200,0.8)',
            borderRadius: '15px',
            width: '7px',
            height: now_obj.height(),
            maxHeight: '100%',
            position: 'absolute',
            right: '0px',
            top: '0px'
        });

        now_slider.css({
            position: 'absolute',
            width: '7px',
            background: '#555',
            right: '0px',
            borderRadius: '15px',
            height: (height_scroll / height_all) * height_scroll + 'px'
        });

        now_slider.hide();
        now_scroll.hide();

        var obj = document.querySelector(allcontentname);
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        var MutationObserverConfig = {
            childList: true,
            subtree: true,
            characterData: true
        };

        var observer = new MutationObserver(function (mutations) {
            height_all = now.height();
            now_slider.css('height', ((height_scroll / height_all) * height_scroll) + 'px');

            if (now_slider.height() >= now_obj.height())
            {
                now_slider.hide();
                slider_top = scroll = 0;
                now_obj.css({top: scroll});
                now_slider.css({top: -slider_top});
            }
        });

        observer.observe(obj, MutationObserverConfig);

        var d = new drag(now_slider.selector);

        d.Draggable.create({axis: "y"
            ,start:function(ui)
            {                
                methods.selectProhibit(true);
            }
            ,drag: function (ui)
            {                
                if (ui.top() < 0)
                {
                    ui.top(0);
                }
                if (ui.top() + now_slider.height() > now_scroll.height())
                {
                    ui.top(now_scroll.height() - now_slider.height());
                }
                scroll = -ui.top() * height_all / height_scroll;

                now.css({top: scroll});
                now_slider.show();
                draging = true;
                
            }
            , end: function () {
                draging = false;
                if (leave)
                {
                    now_slider.hide('fast');
                    now_scroll.hide('fast');
                }
                methods.selectProhibit(false);
            }
        });

        var touchScreen = document.querySelector(allcontentname);
        var startY = 0;
        var changeY = 0 , oldChangeY = 0;

        touchScreen.addEventListener("touchstart", touchStartEvent, false);
        touchScreen.addEventListener("touchmove", touchMoveEvent, false);
        touchScreen.addEventListener("touchend", touchEndEvent, false);

        function touchStartEvent(event) {
            event.preventDefault();
            var touch = event.touches[0];
            startY = touch.pageY;
        }
        function touchMoveEvent(event)
        {
            event.preventDefault();
            var touch = event.touches[0];
            changeY = touch.pageY - startY;
            scroll = scroll + changeY - oldChangeY;
            oldChangeY = changeY;

            scroll = methods.limit(scroll , 0 , now_obj.height()-height_all);
            
            slider_top = methods.scrollTosliderTop();

            now.css({top: scroll});
            now_slider.css({top: -slider_top});
        }
        function touchEndEvent(event) {
            event.preventDefault();
            startY = changeY = oldChangeY = 0;
        }

        now_obj.on('wheel', function (e) {

            if (height_scroll < height_all)
            {
                if (e.originalEvent.deltaY < 0)
                {
                    scroll = scroll + (scroll + 200 > 0 ? -scroll : 200);
                } else
                {
                    scroll = scroll - 200;
                    scroll = Math.max(scroll, -height_all + now_obj.height());
                }

                slider_top = methods.scrollTosliderTop();
                methods.scrollAnimate();                            
                return false;
            }
        });
        $(allcontentname).hover(function () {
            if (!(height_scroll > height_all))
            {
                now_slider.show('fast');
                now_scroll.show('fast');
            }
            leave = false;
        }
        ,function () {
            if (!draging)
            {
                now_slider.hide('fast');
                now_scroll.hide('fast');
            }
            leave = true;
        });
    };
})(jQuery);

