(function() {
    
    // Variables
    var contentBox = $('div.content-box'),
        activeContent = contentBox.find('div.active-content'),
        pageTransitionOverlay = contentBox.find('div.page-transition-overlay'),
        navBtn = $('a.nav-btn'),
        hiddenContent = $('div.hidden-content');
    
    navBtn.on('click', function(e) {
        var self = $(this),
            moveToActive = hiddenContent.find('div.' + self.data('target-class'));
        
        contentBox.addClass('transitionEffect');
        pageTransitionOverlay.fadeIn(300, function() {
            // Change content
            self.closest('div.content-wrapper').appendTo(hiddenContent);
            moveToActive.appendTo(activeContent);
            
            // Transition effect
            contentBox.removeClass('transitionEffect');
            pageTransitionOverlay.fadeOut(300);
        });
        e.preventDefault();
    });
    
    
    
    
    
    
})();