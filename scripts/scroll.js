$('a[data-anchor="true"]').on('click', function (e) {
    e.preventDefault();
    let stop = $(this).attr('data-stop');
    let time = $(this).attr('data-time');
    let section = $(this.hash);
    anima();
    function anima() {
        if (stop == undefined) {
            stop = parseInt(0);
        } else {
            stop = parseInt(stop);
        }  
        if (time == undefined) {
            time = parseInt(2000);
        } else {
            time = parseInt(time);
        };      
        if (section.length != 0) {
            let distance = section.offset().top - stop;
            $('html,body').animate({
                scrollTop: distance
            }, time);
        }
        stop = time = section = "";
    }
});