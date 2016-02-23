var CountDown = (function ($) {

    // Length ms 
    var TimeOut = 10000;
    // Interval ms
    var TimeGap = 1000;

    var CurrentTime = ( new Date() ).getTime();
    var EndTime = ( new Date() ).getTime() + TimeOut;

    var GuiTimer = $('#countdown');
    var GuiPause = $('#pause').hide();
    var GuiResume = $('#resume').hide();
    var GuiStart = $('#begin');
    var GuiEnd = $('#end').hide();

    var Running = false;

    var UpdateTimer = function() {
        // Run till timeout
        if( CurrentTime + TimeGap < EndTime ) {
            setTimeout( UpdateTimer, TimeGap );
        }
        // Countdown if running
        if( Running ) {
            CurrentTime += TimeGap;
            if( CurrentTime >= EndTime ) {
                GuiTimer.css('color','red');
                GuiEnd.show();
                GuiPause.hide();
            }
        }
        // Update Gui
        var Time = new Date();
        Time.setTime( EndTime - CurrentTime );
        var Minutes = Time.getMinutes();
        var Seconds = Time.getSeconds();

        GuiTimer.html( 
            (Minutes < 10 ? '0' : '') + Minutes 
            + ':' 
            + (Seconds < 10 ? '0' : '') + Seconds );
    };

    var Pause = function() {
        Running = false;
        GuiPause.hide();
        GuiResume.show();
        GuiStart.hide();
        GuiEnd.hide();
    };

    var Resume = function() {
        Running = true;
        GuiPause.show();
        GuiResume.hide();
        GuiStart.hide();
        GuiEnd.hide();
    };

    var Start = function( Timeout ) {
        GuiPause.hide();
        GuiResume.hide();
        GuiStart.show();
        GuiEnd.hide();
        //Running = true;
        TimeOut = Timeout;
        CurrentTime = ( new Date() ).getTime();
        EndTime = ( new Date() ).getTime() + TimeOut;
        UpdateTimer();
    };

    return {
        Pause: Pause,
        Resume: Resume,
        Start: Start
    };
})(jQuery);

jQuery('#begin').on('click',CountDown.Resume);
jQuery('#pause').on('click',CountDown.Pause);
jQuery('#resume').on('click',CountDown.Resume);

// ms
CountDown.Start(10000);
