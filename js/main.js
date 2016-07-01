$(document).ready(function() {

    /* ------------------------------------------------------------------------------------------- *\
     [Funciones Control] Serialize Form
    \* ------------------------------------------------------------------------------------------- */

    $.fn.serializeFormJSON = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if(o[this.name]) {
                if(!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    /* ------------------------------------------------------------------------------------------- *\
     [Funciones Control] Currency Format
    \* ------------------------------------------------------------------------------------------- */

    Number.prototype.format = function(n, x) {
        var re = '(\\d)(?=(\\d{' + (x || 3) + '}) + ' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
    };

    /* ------------------------------------------------------------------------------------------- *\
     [Funciones Control] Hidding and Showing divs
    \* ------------------------------------------------------------------------------------------- */

    $(domEl.div_recurrent).on('click', '.panel .tools .fa', function () {
        var time, el;
        time = 100;
        el = $(this).parents(".panel").children(".panel-body");
        if($(this).hasClass("fa-chevron-down")) {
            $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(time);
        } else {
            $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(time); 
        }
    });


    /* ------------------------------------------------------------------------------------------- *\
     [Methods] 'TEST API'
    \* ------------------------------------------------------------------------------------------- */

    //------------ Inputs' Events ------------
    $(domEl.div_recurrent).on('keyup', domEl.input_test_api_input, testApiMethod.keyupInput);
    //$(domEl.div_recurrent).on('click', domEl.input_test_api_check, testApiMethod.clickCheck);

    //------------ Buttons' Events ------------
    $(domEl.div_recurrent).on('click', domEl.btn_test_api_save, testApiMethod.clickSave);
    $(domEl.div_recurrent).on('click', domEl.btn_test_api_clean, testApiMethod.clickClean);


    /* ------------------------------------------------------------------------------------------- *\
     [Methods] 'TEST REMOTE'
    \* ------------------------------------------------------------------------------------------- */

    //------------ Inputs' Events ------------
    $(domEl.div_recurrent).on('keyup', domEl.input_test_remote_input, testRemoteMethod.keyupInput);
    //$(domEl.div_recurrent).on('click', domEl.input_test_remote_check, testRemoteMethod.clickCheck);

    //------------ Buttons' Events ------------
    $(domEl.div_recurrent).on('click', domEl.btn_test_remote_save, testRemoteMethod.clickSave);
    $(domEl.div_recurrent).on('click', domEl.btn_test_remote_clean, testRemoteMethod.clickClean);

});