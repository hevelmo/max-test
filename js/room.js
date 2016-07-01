/* ------------------------------------------------------------------------------------------- *\
 [Route] The Highway
\* ------------------------------------------------------------------------------------------- */

Finch.route('/', {
    setup: function(bindings) {
    },
    load: function(bindings) {
    },
    unload: function(bindings) {
        //Always clean the editable divs used, before lave the current route
        MAXT.setHTML(domEl.div_recurrent, '');
    }
});

/* ------------------------------------------------------------------------------------------- *\
 [Route] API
\* ------------------------------------------------------------------------------------------- */

Finch.route('test/api', {
    setup: function(bindings) {   
    },
    load: function(bindings) {
        MAXT.loadTemplate(tempsNames.test_api_form, domEl.div_recurrent);
        //Disable buttons
        $(domEl.btn_test_api_save).attr('disabled', true);
        $(domEl.btn_test_api_clean).attr('disabled', true);
    },
    unload: function(bindings) {
        //Always clean the editable divs used, before lave the current route
        MAXT.setHTML(domEl.div_recurrent, '');
    }
});

/* ------------------------------------------------------------------------------------------- *\
 [Route] Remote
\* ------------------------------------------------------------------------------------------- */

Finch.route('test/remote', {
    setup: function(bindings) {   
    },
    load: function(bindings) {
        MAXT.loadTemplate(tempsNames.test_remote_form, domEl.div_recurrent);
        //Disable buttons
        $(domEl.btn_test_remote_save).attr('disabled', true);
        $(domEl.btn_test_remote_clean).attr('disabled', true);
    },
    unload: function(bindings) {
        //Always clean the editable divs used, before lave the current route
        MAXT.setHTML(domEl.div_recurrent, '');
    }
});

Finch.listen();
