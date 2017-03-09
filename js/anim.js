class PathAnimation {

  static setlog0(target) {
    $(target).each(function(index, path) {
      var length = path.getTotalLength();

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';

      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;
    });
  }

  static log1(target, finishedCallback) {
    var $target = $(target);

    // install event handler
    $target.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
      finishedCallback();
    });

    $target.each(function(index, path) {
      var length = path.getTotalLength();

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';

      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = length;

      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();

      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 2s ease-in-out';

      // Go!
      path.style.strokeDashoffset = '0';
    });
  }

  static log0(target, finishedCallback) {
    var $target = $(target);

    // install event handler
    $target.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
      finishedCallback();
    });

    $target.each(function(index, path) {
      var length = path.getTotalLength();

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';

      // Set up the starting positions
      path.style.strokeDasharray = length + ' ' + length;
      path.style.strokeDashoffset = '0';

      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();

      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'stroke-dashoffset 2s ease-in-out';

      // Go!
      path.style.strokeDashoffset = length;
    });
  }

  static tpd(target) {
    var $target = $(target);

    // install event handler
    $target.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
      this.style.visibility = 'hidden';
    });

    $target.each(function(index, path){
      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
        'none';
      path.style.visibility = 'visible';

      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        'transform 2s ease-in-out';
      path.style.transformOrigin =
        '45% 50%';
      path.style.transform =
       'rotate(360deg)';
    });
  }
}
