/* ------------------------------------------------------------------------------------------- *\
 [Metodos] Variables
\* ------------------------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------------------------- *\
 [Metodos] 'Zone'
 var Method = {
 function_name: function (event) {}
 }
\* ------------------------------------------------------------------------------------------- */

function validateEmail(email) {
    var re = /^(([^<>()[\]\\., ;:\s@\"] + (\.[^<>()[\]\\., ;:\s@\"] + )*)|(\". + \"))@((\[[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\])|(([a-zA-Z\-0-9] + \.) + [a-zA-Z] {2, }))$/;
    //return re.test(email);
    return true;
}

/* ------------------------------------------------------------------------------------------- *\
    [Metodos] Alert Custom
\* ------------------------------------------------------------------------------------------- */

function resetAlert () {
    alertify.set({
        labels : {
            ok     : "OK",
            cancel : "Cancel"
        },
        delay : 5000,
        buttonReverse : false,
        buttonFocus   : "ok"
    });
}

/* ------------------------------------------------------------------------------------------- *\
 [Methods] Test Api
\* ------------------------------------------------------------------------------------------- */

var testApiMethod = {
    testApi: function () {
        var dataTestApi, dataTestRenamed;
        dataTestApi = $(domEl.form_test_api).serializeFormJSON();
        console.log(dataTestApi);

        dataTestRenamed = MAXT.renameArrayObjKeys([dataTestApi], {
            'lastname': 'apellido',
            'comment': 'comentarios',
            'name': 'nombre',
            'email': 'correo',
            'product': 'producto',
            'phone': 'telefono'
        });
        dataTestRenamed = dataTestRenamed[0];

        console.log(dataTestRenamed);
        /*
        dataTestApi['web_max'] = 'medigraf.com.mx';
        dataTestApi['news'] = '1';
        dataTestApi['business_max'] = '0';
        dataTestApi['origen_type'] = '2';
        dataTestApi['exit_web'] = 'http://google.com';
        dataTestApi['campaign_max'] = 'Capaña de prueba';
        */
        /*
        dataTestApi = {
            "business_max": "0",
            "campaign_max": "Capaña de prueba",
            "comment": "Borrar este lead",
            "email": "melna@mail.com",
            "exit_web": "http://google.com",
            "lastname": "Navarro",
            "name": "Javier",
            "news": "1",
            "origen_type": "2",
            "phone": "3367102341",
            "product": "Corona",
            "web_max": "medigraf.com.mx"
        }
        */
        dataTestRenamed['web_max'] = 'medigraf.com.mx';
        dataTestRenamed['news'] = '1';
        dataTestRenamed['business_max'] = '0';
        dataTestRenamed['origen_type'] = '2';
        dataTestRenamed['exit_web'] = 'http://google.com';
        dataTestRenamed['campaign_max'] = 'Capaña de prueba';
        console.log(dataTestRenamed);
        //return MAXT.postalService('http://max-app.net/api/v1/remote/action', dataTestRenamed);
    },
    fillingControl: function () {
        var validFieldName, dataTestApi, isFull, isNoEmpty;
        validFieldName = ['name', 'lastname', 'email', 'phone', 
                          'product', 'comment', /*'news',*/ /*'web_max',*/ 
                          /*'business_max',*/ /*'origen_type',*/ /*'exit_web'*/];
        dataTestApi = $(domEl.form_test_api).serializeFormJSON();
        console.log(dataTestApi);
        isFull = MAXT.validFormFull(dataTestApi, validFieldName);
        isFull = true;
        $(domEl.btn_test_api_save).attr('disabled', !isFull);
        isEmpty = MAXT.validFormEmpty(dataTestApi, validFieldName);
        $(domEl.btn_test_api_clean).attr('disabled', isEmpty);
    },
    resetTestApi: function () {
        MAXT.resetForm(domEl.form_test_api);
    },
    keyupInput: function (event) {
        testApiMethod.fillingControl();
    },
    /*
    clickCheck: function (event) {
        testApiMethod.fillingControl();
    },
    */
    clickSave: function (event) {
        resetAlert();
        alertify.set({
            labels: {
                ok: 'Aceptar',
                cancel: 'Cancelar'
            }
        });
        alertify.confirm('¿Seguro que desea guardar?', function (e) {
            if(e) {
                var testApiPromise;
                testApiPromise = testApiMethod.testApi();
                testApiPromise.success( function (data) {
                    console.log(data);
                    testApiMethod.resetTestApi();
                    testApiMethod.fillingControl();
                    alertify.success('Test api agregado.');
                });
                testApiPromise.error( function (data) {
                    console.log(data);
                    alertify.error('No se ha podido agregar el Test api <br /> Inténtelo más tarde.');
                });
            }
        });
    },
    clickClean: function (event) {
        testApiMethod.resetTestApi();
        testApiMethod.fillingControl();
    }
}

/* ------------------------------------------------------------------------------------------- *\
 [Methods] Test Remote
\* ------------------------------------------------------------------------------------------- */

var testRemoteMethod = {
    testRemote: function () {
        var dataTestRemote;
        dataTestRemote = $(domEl.form_test_remote).serializeFormJSON();
        dataTestRemote['web_max'] = 'medigraf.com.mx';
        dataTestRemote['news'] = '1';
        dataTestRemote['business_max'] = '0';
        dataTestRemote['origen_type'] = '2';
        dataTestRemote['exit_web'] = 'http://google.com';
        dataTestRemote['campaign_max'] = 'Capaña de prueba';
        return MAXT.postalService('http://max-app.net/remote.php', dataTestRemote);
    },
    fillingControl: function () {
        var validFieldName, dataTestRemote, isFull, isNoEmpty;
        validFieldName = ['name', 'lastname', 'email', 'phone', 
                          'product', 'comment', /*'news',*/ /*'web_max',*/ 
                          /*'business_max',*/ /*'origen_type',*/ /*'exit_web'*/];
        dataTestRemote = $(domEl.form_test_remote).serializeFormJSON();
        isFull = MAXT.validFormFull(dataTestRemote, validFieldName);
        $(domEl.btn_test_remote_save).attr('disabled', !isFull);
        isEmpty = MAXT.validFormEmpty(dataTestRemote, validFieldName);
        $(domEl.btn_test_remote_clean).attr('disabled', isEmpty);
    },
    resetTestRemote: function () {
        MAXT.resetForm(domEl.form_test_remote);
    },
    keyupInput: function (event) {
        testRemoteMethod.fillingControl();
    },
    /*
    clickCheck: function (event) {
        testRemoteMethod.fillingControl();
    },
    */
    clickSave: function (event) {
        resetAlert();
        alertify.set({
            labels: {
                ok: 'Aceptar',
                cancel: 'Cancelar'
            }
        });
        alertify.confirm('¿Seguro que desea guardar?', function (e) {
            if(e) {
                var testRemotePromise;
                testRemotePromise = testRemoteMethod.testRemote();
                testRemotePromise.success( function (data) {
                    console.log(data);
                    testRemoteMethod.resetTestRemote();
                    testRemoteMethod.fillingControl();
                    alertify.success('Test Remote agregado.');
                });
                testRemotePromise.error( function (data) {
                    console.log(data);
                    alertify.error('No se ha podido agregar el Test Remote <br /> Inténtelo más tarde.');
                });
            }
        });
    },
    clickClean: function (event) {
        testRemoteMethod.resetTestRemote();
        testRemoteMethod.fillingControl();
    }
}

/* ------------------------------------------------------------------------------------------- *\
 [Methods] DOM Elements Format
\* ------------------------------------------------------------------------------------------- */

var domElementsFormatMethods = {

    //-------------------- Real Number --------------------

    numberReal: function (number) {
        var real, elements;
        real = +number;
        real = real.toFixed(2);
        elements = real.split('.');
        (elements.length === 1) ? elements[1] = '00' : elements = elements;
        real = elements.join('.');
        real = +real;
        real = real.toFixed(2);
        return real;
    },
    valueNumberReal: function (element) {
        $(element).each( function (idx) {
            var value, real;
            value = MAXT.getValue($(this));
            real = domElementsFormatMethods.numberReal(value);
            MAXT.setValue($(this), real);
        });
    },
    htmlNumberReal: function (element) {
        $(element).each( function (idx) {
            var html, real;
            html = MAXT.getHTML($(this));
            real = domElementsFormatMethods.numberReal(html);
            MAXT.setHTML($(this), real);
        });
    },

    //-------------------- Real Number --------------------

    currency: function (number) {
        var currency;
        currency = number;
        currency = MAXT.currencyFormat(currency);
        return currency;
    },
    valueCurrency: function (element) {
        $(element).each( function (idx) {
            var value, currency;
            value = MAXT.getValue($(this));
            currency = domElementsFormatMethods.currency(value);
            MAXT.setValue($(this), currency);
        });
    },
    htmlCurrency: function (element) {
        $(element).each( function (idx) {
            var html, currency;
            html = MAXT.getHTML($(this));
            currency = domElementsFormatMethods.currency(html);
            MAXT.setHTML($(this), currency);
        });
    },

    //-------------------- Percentage Decimal --------------------

    percentageDecimal: function (number) {
        var percentage;
        percentage = +number;
        percentage *= 100;
        percentage = percentage.toFixed(2);
        percentage += '%';
        return percentage;
    },
    valuePercentageDecimal: function (element) {
        $(element).each( function (idx) {
            var value, percentage;
            value = MAXT.getValue($(this));
            percentage = domElementsFormatMethods.percentageDecimal(value);
            MAXT.setValue($(this), percentage);
        });
    },
    htmlPercentageDecimal: function (element) {
        $(element).each( function (idx) {
            var html, percentage;
            html = MAXT.getHTML($(this));
            percentage = domElementsFormatMethods.percentageDecimal(html);
            MAXT.setHTML($(this), percentage);
        });
    },

    //-------------------- Date Roman --------------------

    dateRoman: function (date, language) {
        var dateFormat, elements;
        dateFormat = MAXT.momentToRoman(date, language);
        elements = dateFormat.split(',');
        dateFormat = elements[1];
        dateFormat = $.trim(dateFormat);
        elements = dateFormat.split(' ');
        elements.splice(2,1);
        dateFormat = elements.join(' de ');
        return dateFormat;
    },
    valueDateRoman: function (element) {
        $(element).each( function (idx) {
            var value, dateFormat;
            value = MAXT.getValue($(this));
            dateFormat = domElementsFormatMethods.dateRoman(value, 'es');
            MAXT.setValue($(this), dateFormat);
        });
    },
    htmlDateRoman: function (element) {
        $(element).each( function (idx) {
            var html, dateFormat;
            html = MAXT.getHTML($(this));
            dateFormat = domElementsFormatMethods.dateRoman(html, 'es');
            MAXT.setHTML($(this), dateFormat);
        });
    },

    //-------------------- Date Human --------------------

    dateHuman: function (date, language) {
        var dateFormat;
        dateFormat = MAXT.momentToHuman(date, language);
        return dateFormat;
    },
    valueDateHuman: function (element) {
        $(element).each( function (idx) {
            var value, dateFormat;
            value = MAXT.getValue($(this));
            dateFormat = domElementsFormatMethods.dateHuman(value, 'es');
            MAXT.setValue($(this), dateFormat);
        });
    },
    htmlDateHuman: function (element) {
        $(element).each( function (idx) {
            var html, dateFormat;
            html = MAXT.getHTML($(this));
            dateFormat = domElementsFormatMethods.dateHuman(html, 'es');
            MAXT.setHTML($(this), dateFormat);
        });
    },

    //-------------------- UC WORDS --------------------

    ucWords: function (element) {
        $(element).each( function (idx) {
            var html, ucWords;
            html = MAXT.getHTML($(this));
            ucWords = MAXT.ucWords(html);
            MAXT.setHTML($(this), ucWords);
        });
    }
}

/* ------------------------------------------------------------------------------------------- *\
 [Methods] inputVal
\* ------------------------------------------------------------------------------------------- */

var inputValMetdods = {
    isIntegerKP: function (event) {
        var key, numeros, teclado, especiales, teclado_especial, i;

        key = event.keyCode || event.which;
        teclado = String.fromCharCode(key);
        numeros = '0123456789';
        especiales = [8,9,37,38,39,40,46];//array
        teclado_especial = false;

        for(i in especiales) {
            if(key == especiales[i]) {
                teclado_especial = true;
            }
        }
        if(numeros.indexOf(teclado) == -1 && !teclado_especial) {
            return false;
        }
    },
    //http://www.lawebdelprogramador.com/foros/JavaScript/1074741-introducir_solo_numero_dos_decimales.html
    isDecimalKP: function (event) {
        var key, value;
        value = $(this).val();
        key = event.keyCode ? event.keyCode : event.which;

        //backspace
        if(key == 8) {
            return true;
        }
        //0-9
        if(key > 47 && key < 58) {
            if(value == '') {
                return true;
            }
            regexp = /.[0-9]{15}$/;
            return !(regexp.test(value));
        }
        //.
        if(key == 46) {
            if(value == '') {
                return false;
            }
            regexp = /^[0-9]+$/;
            return regexp.test(value);
        }
        //other key
        return false;
    },
    roundDecimalBlur: function (event) {
        var value;
        value = $(this).val();
        value = MAXT.roundNDecimalFormat(value, 2);
        $(this).val(value);
    }
}
