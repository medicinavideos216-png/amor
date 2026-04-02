// Utility functions
var requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           function(callback) {
               setTimeout(callback, 1000 / 60);
           };
})();

// Typewriter effect for text
jQuery.fn.typewriter = function() {
    this.each(function() {
        var self = $(this), str = self.html(), progress = 0;
        self.html('');
        var timer = setInterval(function() {
            if (progress < str.length) {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                self.html(str.substring(0, progress));
            } else {
                clearInterval(timer);
            }
        }, 75);
    });
    return this;
};

// Simple animation helper
function animateValue(obj, prop, start, end, duration) {
    var startTime = Date.now();
    var difference = end - start;
    
    var animate = function() {
        var elapsed = Date.now() - startTime;
        var progress = Math.min(elapsed / duration, 1);
        obj[prop] = start + difference * progress;
        
        if (progress < 1) {
            requestAnimFrame(animate);
        }
    };
    
    animate();
}

// Update clock display
function updateClock() {
    // Calculate days elapsed (can be customized)
    var startDate = new Date(2017, 4, 20); // May 20, 2017
    var today = new Date();
    var diff = today - startDate;
    
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((diff / (1000 * 60)) % 60);
    var seconds = Math.floor((diff / 1000) % 60);
    
    var timeStr = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
    document.getElementById('clock').textContent = timeStr;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
