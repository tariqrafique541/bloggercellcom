<script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js' type='text/javascript'/>
<script>
    $(window).load(function(){
        $(&#39;.social-buttons .social-icon&#39;).mouseenter(function(){
            $(this).stop();
            $(this).animate({width:&#39;160&#39;}, 500, &#39;easeOutBounce&#39;,function(){}); 
        });
        $(&#39;.social-buttons .social-icon&#39;).mouseleave(function(){
            $(this).stop();
            $(this).animate({width:&#39;43&#39;}, 500, &#39;easeOutBounce&#39;,function(){});
        });
    });
</script>