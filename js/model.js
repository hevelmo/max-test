/*
    Here are functions and methods that are models whose performance is used in all the Project
    to invoke some of this models it's necessary to call with the prefix, and then te name of the
    model and its arguments, for example MAXT.momentToHuman(date, language);
    Each method has a large explanation.

    NOTE: the prefix MAXT will change depends on the specific Project.

    For the correct performance of almost all of the methods
    it's necesary to includ JQuery library
**/
/* ################################################################################################### *\

    Project Name: core models
    Proyect Version: 2.0
    Author: *******
    Update: hevelmo

    CONTENT MODELS
        [MODELS] Moment Español
        [MODELS] MOMENT's Models
            [FUNCTION] momentToRoman(date, language)
            [FUNCTION] momentToHuman(date, language)
        [MODELS] Selects Birthday
            [FUNCTION] selectDay($domElement, $hasClass, $dataElement, $element)
            [FUNCTION] selectMonth($domElement, $hasClass, $dataElement, $element)
            [FUNCTION] selectYear($domElement, $hasClass, $dataElement, $element)
        [MODELS] Handlebars's Models
            [FUNCTION] getTemplate(name, filler)
            [FUNCTION] loadTemplate(name, wrapper, filler)
        [MODELS] DOM's Models
            [FUNCTION] getValue(domElement)
            [FUNCTION] setValue(domElement, newValue)
            [FUNCTION] exist(domElement)
            [FUNCTION] existInDOM(domElement)
            [FUNCTION] trimValue(domElement)
            [FUNCTION] getHTML(domElement)
            [FUNCTION] setHTML(domElement, information)
            [FUNCTION] cryptElement(domElement)
            [FUNCTION] appendOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag)
            [FUNCTION] appendMulti(domElement, elements)
            [FUNCTION] prependOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag)
            [FUNCTION] prependMulti(domElement, elements)
        [MODELS] DATE TIME PICKER's Models
            [FUNCTION] setDateTPCalendar(wrapper, futureDays, setterMode)
        [MODELS] FORMS's Models
            [FUNCTION] validFormFull(enteredInputs, requiredInputsNames)
            [FUNCTION] validFormEmpty(enteredInputs, requiredInputsNames)
            [FUNCTION] resetForm(form)
        [MODELS] AJAX's Models
            [FUNCTION] postalService(customUrl, json)
            [FUNCTION] getInternalJSON(url)
        [MODELS] get Serialize form
            [FUNCTION] getSerializeFormJSON(domElement, urlPostal)
        [MODELS] OBJECTS's Models
            [FUNCTION] hasOwnPropertyOptimized(obj, property)
            [FUNCTION] filterArrayObjByKey(arrayObj, key, value, equal)
            [FUNCTION] sumArrayObjByKey(arrayObj, numKey)
            [FUNCTION] avgArrayObjByKey(arrayObj, numKey)
            [FUNCTION] renameArrayObjKeys(arrayObj, renameKeys)
            [FUNCTION] withoutArrayObjAND(arrayObj, withoutObj)
            [FUNCTION] withoutArrayObjOR(arrayObj, withoutObj)
        [MODELS] NUMBER FORMATS's Models
            [FUNCTION] currencyFormat(number)
            [FUNCTION] roundNDecimalFormat(number, nDecimals)
        [MODELS] STRING Models
            [FUNCTION] advancedTrim(string)
            [FUNCTION] replaceAll(string, found, replace)
            [FUNCTION] ucWords(string)
            [FUNCTION] ucFirst(string)
        [MODELS] OTHER Models
            [FUNCTION] picturesLoader(domElement, barElement, urlHandler, urlApi)
            [FUNCTION] randomString(name)
        [MODELS] Returning all Models

\* ################################################################################################### */
//[Models] Modelos
var MAXT = {};

MAXT = (function() {
    var $this = this;
    /*
     ###################################################################################################
     Moment Español
     ###################################################################################################
    */
        moment.lang('es', {months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"), monthsShort: "ene._feb._mar_abr._may_jun_jul._ago_sep._oct._nov._dic.".split("_"), weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"), weekdaysShort: "dom._lun._mar._mier._juev._vie._sab.".split("_"), weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Hoy a las] LT", nextDay: '[Mañanaalas]LT', nextWeek: 'dddd[a]LT', lastDay: '[Ayera]LT', lastWeek: 'dddd[hasta]LT', sameElse: 'L'}, relativeTime: {future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d dias", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años"}, ordinal: function(number) {returnnumber + (number === 1 ? 'er' : 'a');}, week: {dow: 1, doy: 6}});
    /*
     ###################################################################################################
     MOMENT's Models
     ###################################################################################################
    */
        /*
         *This function transforms a date in a friendly format to read to an human
         *PARAMS:
         *   date: Is a string with the date that will be transformed (mandatory).
         *   language: Is the selected language (es, en, fr, etc) (mandatory).
         *
         *RETURN: string
         *   New date fromat
         *EXAMPLE:
         *   '2015-02-16 17:18:00' is changed into 'Lunes, 16 de febrero de 2015, 5:18 PM'
         *   It depends on the selected language
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'moment.js' or 'moment.min.js' library before including 'model.js'
         *
        **/
            function momentToRoman(date, language) {
                moment.lang(language);
                return moment(date).format('dddd[,] LL');
            }
        /*
         *This function returns the time (in friendly human format)
         *that has lapsed from an date in the past until now
         *
         *PARAMS:
         *   date: Is a string with the date it will be calculated the lapsed thime (mandatory).
         *   language: Is the selected language (es, en, fr, etc) (mandatory).
         *
         *RETURN: string
         *   Lapsed time in new format
         *EXAMPLE:
         *   From '2015-02-16 17:18:00' until now '2015-02-16 17:39:00' was 'hace 21 minutos'
         *   It depends on the selected language
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'moment.js' or 'moment.min.js' library before including 'model.js'
         *
        **/
            function momentToHuman(date, language) {
                moment.lang(language);
                return moment(date, "YYYY-MM-DD hh:mm:ss").fromNow(true);
            }
    /*
     ###################################################################################################
     Selects Birthday
     ###################################################################################################
    */
        /**
         *  Note: The functions selectDay, selectMonth and selectYear,
         *        are used only for the set of dropdown selects birthday.
        **/
        /**
         *  This function returns the day of the month, it is used only to select the birthday
         *
         *  @param {string} $domElement  - Is a string with the id or class ('#domElement', '.domElement')
         *                                 of the DOM element whose value will be returned (mandatory).
         *  @param {string} $hasClass    - The class name to search for.
         *  @param {string} $dataElement - Assigns a data element of the DOM element to search for.
         *  @param {string} $element     - It is the html tag that is assigned day of the month.
         *
         *  @output {string} [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
         *
         *  Auxiliar functiom
         *      appendOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag)
        **/
            function selectDay($domElement, $hasClass, $dataElement, $element) {
                var $d, $dd, day;
                for($d = 1; $d <= 31; $d++) {
                    if($d < 10) {
                        $dd = '0' + $d;
                    } else {
                        $dd = $d;
                    }
                    day = $($domElement);
                    if(day.hasClass($hasClass)) {
                        selecet_day_attr = {$dataElement : $dd}
                        appendOne(day, $element, selecet_day_attr, $dd, 1);
                    }
                }
            }
        /**
         *  This function returns the months, it is used only to select the month birthday
         *
         *  @param {string} $domElement  - Is a string with the id or class ('#domElement', '.domElement')
         *                                 of the DOM element whose value will be returned (mandatory).
         *  @param {string} $hasClass    - The class name to search for.
         *  @param {string} $dataElement - Assigns a data element of the DOM element to search for.
         *  @param {string} $element     - It is the html tag that is assigned months.
         *
         *  @output {string} [enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre]
         *
         *  Auxiliar functiom
         *      appendOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag)
        **/
            function selectMonth($domElement, $hasClass, $dataElement, $element) {
                var $m, $me, $mes, month;
                for($m = 1; $m <= 12; $m++) {
                    if($m < 13) {
                        $me = '0' + $m;
                    }
                    switch ($me) {
                        case "01": $mes = "Enero"; break;
                        case "02": $mes = "Febrero"; break;
                        case "03": $mes = "Marzo"; break;
                        case "04": $mes = "Abril"; break;
                        case "05": $mes = "Mayo"; break;
                        case "06": $mes = "Junio"; break;
                        case "07": $mes = "Julio"; break;
                        case "08": $mes = "Agosto"; break;
                        case "09": $mes = "Septiembre"; break;
                        case "010": $mes = "Octubre"; break;
                        case "011": $mes = "Noviembre"; break;
                        case "012": $mes = "Diciembre"; break;
                    }
                    month = $($domElement);
                    if(month.hasClass($hasClass)) {
                        selectmonth_attr = {$dataElement : $me}
                        appendOne(month, $element, selectmonth_attr, $mes, 1);
                    }
                }
            }
        /**
         *  This function determines the year of birth
         *
         *  @param {string} $domElement  - Is a string with the id or class ('#domElement', '.domElement')
         *                                 of the DOM element whose value will be returned (mandatory).
         *  @param {string} $hasClass    - The class name to search for.
         *  @param {string} $dataElement - Assigns a data element of the DOM element to search for.
         *  @param {string} $element     - It is the html tag that is assigned birth years.
         *
         *  @return {string} 55 years old max until 18 years old min
         *
         *  @output {string} [1961, ... , 1998]
         *
         *  Note:
         *      The var f return the full day current format. Example: 'Sat Mar 12 2016 13:45:12 GMT-0600 (CST)'.
         *      Tha var $tope gets the current year. Example: '2016',
         *      The var $agemax can be changed.
         *      The var $agemin can't be changed is the age min 18.
         *
         *  Auxiliar functiom
         *      appendOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag)
        **/
            function selectYear($domElement, $hasClass, $dataElement, $element) {
                var $tope, $agemax, $agemin, $a;
                f = new Date();
                $tope = f.getFullYear();
                $agemax = 55;
                $agemin = 18;
                for($a = $tope - $agemax; $a <= $tope - $agemin; $a++) {
                    year = $($domElement);
                    if(year.hasClass($hasClass)) {
                        select_year_attr = {$dataElement : $a}
                        appendOne(year, $element, select_year_attr, $a, 1);
                    }
                }
            }
    /*
     ###################################################################################################
     Handlebars's Models
     ###################################################################################################
    */
        /*
         *This function generates a handlebars' template (previously compiled) 
         *in a specific element from the DOM
         *
         *PARAMS:
         *   name: Is a string with the template's name (mandatory).
         *   filler: Is a JSON with the necesary dinamic info to be loaded in the template (optional).
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'handlebars.runtime.min.js' library and 
         *   'templates.min.js' generated by precomplileing
         *   before including 'model.js'
         *
         *RETURN: string
         *   HTML value
        **/
            function getTemplate(name, filler) {
                var template = Handlebars.templates[name];
                return (filler) ? template(filler) : template;
            }
        /*
         *This function loads a handlebars' template (previously compiled) 
         *in a specific element from the DOM
         *
         *PARAMS:
         *   name: Is a string with the template's name (mandatory).
         *   wrapper: Is a string with the id or class ('#domElement', '.domElement') 
         *            where the template will be loaded (mandatory).
         *   filler: Is a JSON with the necesary dinamic info to be loaded in the template (optional).
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'handlebars.runtime.min.js' library and 
         *   'templates.min.js' generated by precomplileing
         *   before including 'model.js'
         *
        **/
            function loadTemplate(name, wrapper, filler) {
                $(wrapper).html(getTemplate(name, filler));
            }
    /*
     ###################################################################################################
     DOM's Models
     ###################################################################################################
    */
        /*
         *This function gets the value from an especific DOM element
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the DOM element whose value will be returned (mandatory).
         *   newValue: Is a string with the value that will update 'domElement' vaue (mandatory).
         *
         *RETURN: string
         *   domElement value
        **/
            function getValue(domElement) {
                return $(domElement).val();
            }
        /*
         *This function updates the value from an especific DOM element
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the DOM element whose value will be updated (mandatory).
         *   newValue: Is a string with the value that will update 'domElement' vaue (mandatory).
        **/
            function setValue(domElement, newValue) {
                $(domElement).val(newValue);
            }
        /*
         *This function detects if value is or not defined by id or class
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the DOM element whose value will be updated (mandatory).
         *   newValue: Is a string with the value that will update 'domElement' vaue (mandatory).
         *
         *RETURN: boolean
         *   true: if it has value
         *   false: if it doesn't have a value
         *
        **/
            function exist(domElement) {
                return ($(domElement).val()) ? true : false;
            }
        /*
         *This function detects if elemnt defined by id or class, exist in DOM
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
                         Is going to look for in the DOM.
         *
         *RETURN: boolean
         *   true: if element exist in DOM
         *   false: if element doesn't exist in DOM
        **/
            function existInDOM(domElement) {
                return ($(domElement).length > 0) ? true : false;
            }
        /*
         *This function trims the value from an especific DOM element
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the DOM element whose value will be trimmed (mandatory).
        **/
            function trimValue(domElement) {
                var value, clean;
                value = $(domElement).val();
                clean = $.trim(value);
                $(domElement).val(clean);
            }
        /*
         *This function returns the HTML content wrapped in an specific DOM element
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the DOM element whose HTML will be returned (mandatory).
         *
         *RETURN: string
         *   domElement HTML
        **/
            function getHTML(domElement) {
                return $(domElement).html();
            }
        /*
         *This function updates the HTML content wrapped in an especific DOM element
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the DOM element whose HTML will be updated (mandatory).
        **/
            function setHTML(domElement, information) {
                $(domElement).html(information);
            }
        /*
         *This function crypts the value from an especific DOM element
         *It's sha512 crypting
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the DOM element whose value will be crypted (mandatory).
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'sha512.js' library before including 'model.js'
         *
        **/
            function cryptElement(domElement) {
                var pass, passSha;
                pass = $(domElement).val();
                passSha = hex_sha512(pass);
                $(domElement).val(passSha);
            }
        /*
         *This function appends one new element to an existent domElement
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the element where we can't append the new element (mandatory).
         *   newElType: Is a string with the html type (div, input, etc) of the element
         *              be careful it's a correct one, because the method doesn't
         *              doesn't distinguish is it's correct or not (mandatory).
         *   newElAttributes: Is an objetc with the attributes to the new element, they
         *                    will be included in the exactly order they are in the object,
         *                    be careful to use correct attributes because the method doesn't
         *                    distinguish if they are or not correct (mandatory).
         *                    if you don't want atributes send an empty object {}
         *   newElContent: Is a string with the content of the element (mandatory).
                           if you don't want content send an empty string.
         *   hasClosingTag: Is an integer who idicates if the element has (1) or not(2) a
         *                  closing tag.
         *EXAMPLE:
         *   Imagine we have the empty element <div id='my_div'></div>
         *
         *   newElAttributes = {'id': 'myId', 'class': 'myClass', 'value' : '2'}
         *   appendOne('div#my_div', 'div', newElAttributes, 'Hello Div', 1);
         *
         *   The result is:
         *
         *   <div id='my_div'>
         *       <div id='myId' class='myClass' value='2'>Hello Div</div>
         *   </div>
         *
         *   Imagine the same empty element.
         *
         *   newElAttributes = {'id': 'myId', 'class': 'myClass', 'value' : '2', 'data-my-data' : '2', 'name' : 'myName'}
         *   appendOne('div#my_div', 'div', newElAttributes, '', 0);
         *
         *   The result is:
         *
         *   <div id='my_div'>
         *       <input id='myId' class='myClass' value='2' data-my-data='2' name='myName' />
         *   </div>
         *
        **/
            function appendOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag) {
                var newDomElement;
                newDomElement = '<' + newElType;
                for(var key in newElAttributes) {
                    newDomElement += (newElAttributes.hasOwnProperty(key))
                            ? ' ' + key + "='" + newElAttributes[key] + "'"
                            : '';
                }
                if(hasClosingTag) {
                    newDomElement += '>';
                    newDomElement += newElContent;
                    newDomElement += '</' + newElType + '>';
                } else {
                    newDomElement += ' >';
                    newDomElement += newElContent;
                }
                $(domElement).append(newDomElement);
            }
        /*
         *This function appends multiple new elements to an existent domElement.
         *It uses de performance of the appenOne method. The elements are appended
         *in the exact order they are declared.
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the element where we can't append the new elements (mandatory).
         *   elements: is an array of type [newElType, newElAttributes, newElContent, hasClosingTag]
         *             each one of this elements are explained in the appendOne method.
         *
         *EXAMPLE:
         *   <div id='my_div'></div>
         *
         *   elements = [
         *       ['div', {'id' : 'element1', 'class':'multiDiv'}, 'Hello element 1', 1],
         *       ['input', {'id' : 'element2', 'class':'inputDiv', 'value' : 1, 'name' : 'input_1'}, 'Text input', 0],
         *       ['input', {'id' : 'element3', 'class':'inputDiv', 'value' : 3, 'name' : 'input_2'}, '', 0],
         *       ['div', {'id' : 'element4', 'class':'multiDiv'}, 'Hello element 4', 1]
         *   ];
         *
         *   appendMulti(''div#my_div', elements);
         *
         *   The result is:
         *
         *   <div id='my_div'>
         *       <div id='element1' class='multiDiv'>Hello element 1</div>
         *       <input id='element2' class='inputDiv' value='1' name='input_1' />Text input
         *       <input id='element3' class='inputDiv' value='3' name='input_2' />
         *       <div id='element4' class='multiDiv'>Hello element 4</div>
         *   </div>
         *
        **/
            function appendMulti(domElement, elements) {
                for(var i = 0; i < elements.length; i++) {
                    appendOne(domElement,
                        elements[i][0], //newElType
                        elements[i][1], //newElAttributes
                        elements[i][2], //newElContent
                        elements[i][3]  //hasClosingTag
                    );
                }
            }
        /*
         *This function prepends one new element to an existent domElement
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the element where we can append the new element (mandatory).
         *   newElType: Is a string with the html type (div, input, etc) of the element
         *              be careful it's a correct one, because the method doesn't
         *              doesn't distinguish is it's correct or not (mandatory).
         *   newElAttributes: Is an objetc with the attributes to the new element, they
         *                    will be included in the exactly order they are in the object,
         *                    be careful to use correct attributes because the method dosen't
         *                    distinguish if they are or not correct (mandatory).
         *                    if you don't want atributes, send an empty object {}
         *   newElContent: Is a string with the content of the element (mandatory).
                             if you don't want content send an empty string.
         *   hasClosingTag: Is an integer who idicates if the element has (1) or not(0) a
         *                  closing tag.
         *EXAMPLE:
         *   Imagine we have the empty element <div id='my_div'></div>
         *
         *   newElAttributes = {'id': 'myId', 'class': 'myClass', 'value' : '2'}
         *   prependOne('div#my_div', 'div', newElAttributes, 'Hello Div', 1);
         *
         *   The result is:
         *
         *   <div id='my_div'>
         *       <div id='myId' class='myClass' value='2'>Hello Div</div>
         *   </div>
         *
         *   Imagine the same empty element.
         *
         *   newElAttributes = {'id': 'myId', 'class': 'myClass', 'value' : '2', 'data-my-data' : '2', 'name' : 'myName'}
         *   prependOne('div#my_div', 'div', newElAttributes, '', 0);
         *
         *   The result is:
         *
         *   <div id='my_div'>
         *       <input id='myId' class='myClass' value='2' data-my-data='2' name='myName' />
         *   </div>
         *
        **/
            function prependOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag) {
                var newDomElement;
                newDomElement = '<' + newElType;
                for(var key in newElAttributes) {
                    newDomElement += (newElAttributes.hasOwnProperty(key))
                            ? ' ' + key + "='" + newElAttributes[key] + "'"
                            : '';
                }
                if(hasClosingTag) {
                    newDomElement += '>';
                    newDomElement += newElContent;
                    newDomElement += '</' + newElType + '>';
                } else {
                    newDomElement += ' />';
                    newDomElement += newElContent;
                }
                $(domElement).prepend(newDomElement);
            }
        /*
         *This function prepends multiple new elements to an existent domElement.
         *It uses de performance of the appenOne method. The elements are prepended
         *in the exact order they are declared.
         *
         *PARAMS:
         *   domElement: Is a string with the id or class ('#domElement', '.domElement')
         *               of the element where we can prepend the new elements (mandatory).
         *   elements: is an array of type [newElType, newElAttributes, newElContent, hasClosingTag]
         *             each one of this elements are explained in the prependOne method.
         *
         *EXAMPLE:
         *   <div id='my_div'></div>
         *
         *   elements = [
         *       ['div', {'id' : 'element1', 'class':'multiDiv'}, 'Hello element 1', 1],
         *       ['input', {'id' : 'element2', 'class':'inputDiv', 'value' : 1, 'name' : 'input_1'}, 'Text input', 0],
         *       ['input', {'id' : 'element3', 'class':'inputDiv', 'value' : 3, 'name' : 'input_2'}, '', 0],
         *       ['div', {'id' : 'element4', 'class':'multiDiv'}, 'Hello element 4', 1]
         *   ];
         *
         *   prependMulti(''div#my_div', elements);
         *
         *   The result is:
         *
         *   <div id='my_div'>
         *       <div id='element1' class='multiDiv'>Hello element 1</div>
         *       <input id='element2' class='inputDiv' value='1' name='input_1' />Text input
         *       <input id='element3' class='inputDiv' value='3' name='input_2' />
         *       <div id='element4' class='multiDiv'>Hello element 4</div>
         *   </div>
         *
        **/
            function prependMulti(domElement, elements) {
                for(var i = 0; i < elements.length; i++) {
                    prependOne(domElement,
                        elements[i][0], //newElType
                        elements[i][1], //newElAttributes
                        elements[i][2], //newElContent
                        elements[i][3]  //hasClosingTag
                    );
                }
            }
    /*
     ###################################################################################################
     DATE TIME PICKER's Models
     ###################################################################################################
    */
        /*
         *This function sets the data of a 'DateTimePicker' calendar
         *
         *PARAMS:
         *   wrapper: Is a string with the id of the input ('input#wrapper')
         *            that wraps the 'DateTimePicker' calendar.
         *   futureDays: Is an integer with the number of days we want to advance
         *               from the current date.
         *   setterMode: It's a flag that determins the properties to be setted
         *               0) Only date.
         *               1) Date and min date.
         *               2) Only min date.
        **/
            function setDateTPCalendar(wrapper, futureDays, setterMode) {
                var today, yesterday, year, month, day, future;
                today = new Date();
                yesterday = new Date(today);
                yesterday.setDate(today.getDate() + futureDays);
                year = yesterday.getFullYear();
                month =+ yesterday.getMonth();
                month = month + 1;
                day = yesterday.getDate();
                future = year + '-' + month + '-' + (+day + 1);
                $(wrapper).datetimepicker({pickTime: false});
                switch(setterMode) {
                    case 0:
                        $(wrapper).data('DateTimePicker').setDate(future);
                        break;
                    case 1:
                        $(wrapper).data('DateTimePicker').setMinDate(yesterday);
                        $(wrapper).data('DateTimePicker').setDate(future);
                        break;
                    case 2:
                        $(wrapper).data('DateTimePicker').setMinDate(yesterday);
                }
            }
    /*
     ###################################################################################################
     FORMS's Models
     ###################################################################################################
    */
        /*
         *This function validates if an specific form is full
         *
         *PARAMS:
         *   enteredInputs: Is a JSON with the entered inputs from the form (mandatory).
         *   requiredInputsNames: Is an array with the names of the required inputs from the form (mandatory).
         *
         *RETURN: boolean
            true: if it is full
            false: if it is not full
        **/
            function validFormFull(enteredInputs, requiredInputsNames) {
                var size;
                for(var key in enteredInputs) {
                    enteredInputs[key] = $.trim(enteredInputs[key]);
                }
                size = _.size(_.compact(_.pick(enteredInputs, requiredInputsNames)));
                return (size === requiredInputsNames.length) ? true : false;
            }
        /*
         *This function validates if an specific form is not empty
         *
         *PARAMS:
         *   enteredInputs: Is a JSON with the entered inputs from the form (mandatory).
         *   requiredInputsNames: Is an array with the names of the required inputs from the form (mandatory).
         *
         *RETURN: boolean
            true: if it is empty
            false: if it is not empty
        **/
            function validFormEmpty(enteredInputs, requiredInputsNames) {
                var size;
                for(var key in enteredInputs) {
                    enteredInputs[key] = $.trim(enteredInputs[key]);
                }
                size = _.size(_.compact(_.pick(enteredInputs, requiredInputsNames)));
                return (!size) ? true : false;
            }
        /*
         *This function resets an specific form
         *
         *PARAMS:
         *   form: Is a string with the id or class ('form#some_form', 'form.some_form')
         *   of the for that will be rested
        **/
            function resetForm(form) {
                $(form).each ( function() {
                    this.reset();
                });
            }
    /*
     ###################################################################################################
     AJAX's Models
     ###################################################################################################
    */
        /*
         *This function sends a JSON to an especific url, using AJAX and POST method
         *It expects a JSON when it's succesful
         *
         *PARAMS:
         *   customUrl: Is the url where 'json' will be sent (mandatory).
         *   json: Is the JSON that will be sent to customUrl (mandatory).
         *
         *RETURN: $.ajax
            Shipping outcome.
            It doesn't have 'error' neither 'success' method, in order to customize the
            in every place where postalService is invoked
        **/
            function postalService(customUrl, json) {
                return $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: customUrl,
                    dataType: "json",
                    data: JSON.stringify(json)
                });
            }
        /*
         *This function gets an internal JSON from an especific url, using AJAX
         *
         *PARAMS:
         *   url: Is the url from an internal json will be gotten (mandatory).
         *RETURN: JSON
            With the information from the url
        **/
            function getInternalJSON(url) {
                var extJSON;
                extJSON = (function() {
                    var intJSON = null;
                    $.ajax({
                        async: false,
                        global: false,
                        url: url,
                        dataType: 'json',
                    }).done(function(data) {
                        intJSON = data;
                    });
                    return intJSON;
                })();
                return extJSON;
            }
    /*
     ###################################################################################################
     get Serialize form
     ###################################################################################################
    */
        /**
         *
         *  **
         *
         *  @param {string} domElement  - Is a string with the id or class ('#domElement', '.domElement')
         *                                of the DOM element whose value will be returned (mandatory).
         *  @param {string} urlPostal   - Is the url where 'json' will be sent (mandatory).
         *  @param {string} dataForm    - get form data
         *
         *  Example
         *      SEG.getSerializeFormJSON(domEl.form_int_new_register, urlsApi.intranetRegister, data);
        **/
            function getSerializeFormJSON(domElement, domApi, domData) {
               var form, urlApi, url, postal;
                form = domElement;
                urlApi = domApi;
                domData = $(form).serializeFormJSON();
                url = urlApi, domData;
                postal = postalService(url);
                return postal;
            }
    /*
     ###################################################################################################
     OBJECTS's Models
     ###################################################################################################
    */
        /*
         *This function is an optimization of the 'hasOwnProperty', a native JavaScript method.
         *This optimization validates if the variable, in which the property will be sought is an object.
         *
         *PARAMS:
         *   obj: Is an expected variable to be an object, in which the property will be sought.
         *   property: Is a string variable with the name of the property it's necessary 
                       to look for in obj, in case obj is an objet.
         *RETURN: boolean
         *   true: In case obj is an objet, and property is inside it.
         *   false: In case obj is not an objet, or in case obj is an objtect but property is not inside it.
        **/
            function hasOwnPropertyOptimized(obj, property) {
                return ((typeof(obj) === 'object')) ? obj.hasOwnProperty(property) : false;
            }
        /*
         *This function look for all the values from an array object while the especific
         *key has the same or difrent value (it depends on de condition) that the value
         *searched.
         *
         *PARAMS:
         *   arrayObj: Is an array of objects (mandatory).
         *   key: Is a string with the name of the key through which will filter arrayObj (mandatory).
         *   value: Is a string with the value we seek in the specified key (mandatory).
         *   equal: Is an integer that determines whether looking values whose key has
         *          the same (1) or different value (0) (mandatory).
         *
         *RETURN: array
         *   An array of values that fullfills the before mentioned condition.
         *
         *EXAMPLE:
         *   arrayObj = [
         *      {'key' : 'a', 'key2' : 'a', 'key3' : '1'},
         *      {'key' : 'b', 'key2' : 'c', 'key3' : '1'},
         *      {'key' : 'a', 'key2' : 'a', 'key3' : '2'},
         *      {'key' : 'a', 'key2' : 'd', 'key3' : '3'}
         *   ];
         *
         *   filterArrayObjByKey(arrayObj, 'key2', 'a', 1);
         *   returns ["a", "a"];
         *
         *   filterArrayObjByKey(arrayObj, 'key2', 'a', 0);
         *   returns ["c", "d"];
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
         *
        **/
            function filterArrayObjByKey(arrayObj, key, value, equal) {
                return _.filter(
                        _.pluck(arrayObj, key),
                        function(currentElement) {
                            return (equal)
                                ? currentElement === value
                                : currentElement !== value;
                        }
                );
            }
        /*
         *This function sums all the values in an especific numeric key in an arrays of objects
         *
         *PARAMS:
         *   arrayObj: Is an array of objects where we expect there are a key whose all values
         *             are integer type (mandatory).
         *   numKey: Is a string with the name of the key whose numeric value we want to obtain,
         *           be careful all the values in the key are numeric, because the result couldn't
         *           be the expected one (mandatory).
         *
         *RETURN: number
         *   The result of the sum of the values in the key.
         *
         *EXAMPLE:
         *   arrayObj = [
         *      {'key' : true, 'key2' : 'd', 'key3' : 1.1},
         *      {'key' : false, 'key2' : 1, 'key3' : 1.78},
         *      {'key' : true, 'key2' : 'a', 'key3' : 2.67},
         *      {'key' : false, 'key2' : 'd', 'key3' : 3.11}
         *   ];
         *
         * sumArrayObjByKey(arrayObj, 'key3');
         * returns 8.66;
        **/
            function sumArrayObjByKey(arrayObj, numKey) {
                return _.reduce(
                        _.pluck(arrayObj, numKey),
                        function(sum, num) {
                            return (+sum) + (+num);
                        }
                );
            }
        /*
         *This function averages all the values in an especific numeric key in an arrays of objects
         *
         *PARAMS:
         *   arrayObj: Is an array of objects where we expect there are a key whose all values
         *             are integer type (mandatory).
         *   numKey: Is a string with the name of the key whose numeric value we want to obtain,
         *           be careful all the values in the key are numeric, because the result couldn't
         *           be the expected one (mandatory).
         *
         *RETURN: number
         *   The result of the sum of the values in the key.
         *
         *EXAMPLE:
         *   arrayObj = [
         *      {'key' : true, 'key2' : 'd', 'key3' : 1.1},
         *      {'key' : false, 'key2' : 1, 'key3' : 1.78},
         *      {'key' : true, 'key2' : 'a', 'key3' : 2.67},
         *      {'key' : false, 'key2' : 'd', 'key3' : 3.11}
         *   ];
         *
         * avgArrayObjByKey(arrayObj, 'key3');
         * returns 2.165;
        **/
            function avgArrayObjByKey(arrayObj, numKey) {
                var sum, length;
                length = arrayObj.length;
                sum = sumArrayObjByKey(arrayObj, numKey);
                return sum/length;
            }
        /*
         *This function rename the keys in an array of objects, it only gets the specified keys
         *and ignore the rest of them.
         *
         *PARAMS:
         *   arrayObj: An array of objects whose keys whe want to rename (mandatory).
         *   renameKeys: An object whit the old and new names of the keys
         *   {'new_name' : 'old_name'} (mandatory).
         *RETURN: Array of objets
         *   This new array has the objects with only the specified renamed keys an their
         *   related values.
         *EXAMPLE:
         *   arrayObj = [
         *       {'k1' : 'Javier', 'k2' : 'a', 'k3' : 25, 'k4' : 1.83},
         *       {'k1' : 'Melissa', 'k2' : 'b', 'k3' : 20, 'k4' : 1.60},
         *       {'k1' : 'Juan', 'k2' : 'c', 'k3' : 31, 'k4' : 1.75},
         *       {'k1' : 'Alicia', 'k2' : 'd', 'k3' : 17, 'k4' : 1.64}
         *   ];
         *   renameKeys = {
         *       'name' : 'k1',
         *       'age' : 'k3',
         *       'height' : 'k4'
         *   }
         *
         *   renameArrayObjKeys(arrayObj, renameKeys);
         *   returns [
         *       {'name' : 'Javier', 'age' : 25, 'height' : 1.83},
         *       {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *       {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *       {'name' : 'Alicia', 'age' : 17, 'height' : 1.64}
         *   ];
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
         *
        **/
            function renameArrayObjKeys(arrayObj, renameKeys) {
                var newArrayObj, pairs;
                newArrayObj = [];
                pairs = _.pairs(renameKeys);
                for(var i = 0; i < arrayObj.length; i++) {
                    newArrayObj[i] = {};
                    for(j = 0; j < pairs.length; j++) {
                        newArrayObj[i][pairs[j][0]] = arrayObj[i][pairs[j][1]];
                    }
                }
                return newArrayObj;
            }
        /*
         *This function removes from an array of objects, the objects
         *whose key values are the same to the specified in withoutObj
         *this fuction performs like AND.
         *
         *PARAMS:
         *   arrayObj: Is an array of objects tha we will clean of objects with
                       the specific values in one or more specific keys (mandatory).
         *   withoutObj: Is an objet with the keys and values we don't want (mandatory).
         *
         *RETURN: Array of objects
         *   The array without the objects with the specific values in the specific keys
         *
         *EXAMPLE:
         *   arrayObj = [
         *        {'name' : 'Javier', 'age' : 25, 'height' : 1.83},
         *        {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *        {'name' : 'Alicia', 'age' : 25, 'height' : 1.64}
         *   ];
         *
         *   //Remove all the objects whose 'age' is 25
         *   withoutObj = {'age' : 25};
         *   withoutArrayObjAND(arrayObj, withoutObj);
         *   returns [
         *        {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *   ];
         *
         *   //Remove all the objects whose 'age' is 25 and whose 'name' is 'Javier'
         *   withoutObj = {'age' : 25, 'name' : 'Javier'};
         *   withoutArrayObjAND(arrayObj, withoutObj);
         *   returns [
         *        {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *        {'name' : 'Alicia', 'age' : 25, 'height' : 1.64}
         *   ];
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
         *
        **/
            function withoutArrayObjAND(arrayObj, withoutObj) {
                var length, newLength;
                do{
                    length = arrayObj.length;
                    arrayObj = _.without(
                        arrayObj,
                        _.findWhere(
                            arrayObj,
                            withoutObj
                        )
                    );
                    newLength = arrayObj.length;
                } while(length !== newLength);
                return arrayObj;
            }
        /*
         *This function removes from an array of objects, the objects
         *whose key values are the same to the specified in withoutObj
         *this fuction performs like OR.
         *For each 'key' : 'value', it uses the performance from
         *'withoutArrayObjAND' method.
         *
         *PARAMS:
         *   arrayObj: Is an array of objects tha we will clean of objects with
         *             the specific values in one or more specific keys (mandatory).
         *   withoutObj: Is an objet with the keys and values we don't want (mandatory).
         *
         *RETURN: Array of objects
         *   The array without the objects with the specific values in the specific keys.
         *
         *EXAMPLE:
         *   arrayObj = [
         *        {'name' : 'Javier', 'age' : 25, 'height' : 1.83},
         *        {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *        {'name' : 'Alicia', 'age' : 25, 'height' : 1.64}
         *   ];
         *
         *   //Remove all the objects whose 'age' is 25 or whose 'name' is 'Melissa'
         *   withoutObj = {'age' : 25, 'name' : 'Javier'};
         *   withoutArrayObjOR(arrayObj, withoutObj);
         *   returns [
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *   ];
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
         *
        **/
            function withoutArrayObjOR(arrayObj, withoutObj) {
                pairs = _.pairs(withoutObj);
                withoutArrayObj = [];
                for(var idx=0; idx < pairs.length; idx++) {
                    withoutArrayObj[idx] = new Object();
                    withoutArrayObj[idx][pairs[idx][0]] = pairs[idx][1];
                }
                for(idx = 0; idx < withoutArrayObj.length ; idx++) {
                    arrayObj = withoutArrayObjAND(arrayObj, withoutArrayObj[idx]);
                }
                return arrayObj;
            }
    /*
     ###################################################################################################
     NUMBER FORMATS's Models
     ###################################################################################################
    */
        /*
         *This function transfors a numeric value in money format
         *It's sha512 crypting
         *
         *PARAMS:
         *   number: Is a number that value will be changed in money format (mandatory).
         *
         *RETURN: string
         *   With number in money format
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'sha512.js' library before including 'model.js'
        **/
            function currencyFormat(number) {
                var formattedQuantity;
                formattedQuantity = accounting.formatMoney(number);
                return formattedQuantity;
            }
        /*
         *This function transfors a numeric value in money format
         *
         *PARAMS:
         *   number: Is a number which value will be changed into a ceil rounded format,
                     whitn an especific number of decimals
         *   nDecimals: Is the number of decimals that the number will have
         *
         *RETURN: number
         *   With the raounde number
         *
        **/
            function roundNDecimalFormat(number, nDecimals) {
                var numberParts, integerPart, decimalPart, decimalPartDiv,
                    divisor, roundedNumber, extra0s;

                roundedNumber = NaN;

                if(!isNaN(number)) {

                    //Convert the number value in a String
                    number = '' + number;

                    //Separate in Integer and Decimal Part
                    numberParts = number.split('.');
                    //There will alway be an integer part, the first in the array
                    integerPart = numberParts[0];

                    //By default the decimal part is 0
                    decimalPart = '0';

                    //If there is not a decimal part
                    if(numberParts.length === 2) {

                        //The decimal part is taken, the second one in the array
                        decimalPart = numberParts[1];

                        //Whe need the nDecimals first digits to be the integer and the rest to remain decimal
                        divisor = Math.pow(10, decimalPart.length - nDecimals);
                        decimalPartDiv = +decimalPart / divisor;

                        //The new decimal part is rounded ceil
                        decimalPart = Math.ceil(decimalPartDiv);

                        //Now this new decimal part y converted to a string
                        decimalPart = '' + decimalPart;

                        //If the length of the new decimal part is necessary to complete with 0s at the begining
                        for(idx = 0; idx < nDecimals - decimalPart.length; idx ++) {
                            decimalPart = '0' + decimalPart;
                        }

                    }

                    //The next step is joining the integer and the decimal part, in order to get a string with the new number
                    roundedNumber = integerPart + '.' + decimalPart;
                    //The is necessary to transform the value ina number
                    roundedNumber = +roundedNumber;
                    //Now the number is fixed with the number of decimals
                    roundedNumber = roundedNumber.toFixed(nDecimals);
                }

                //The new formatted number is returnd
                return roundedNumber;
            }
    /*
     ###################################################################################################
     STRING Models
     ###################################################################################################
    */
        /*
         *This function replaces all the ocurrences in a string with a new value
         *
         *PARAMS:
         *   string: The string with the original value.
         *   found: A string with the found value.
         *   replace: A string with the new value to replace the found value
         *
         *RETURN: string
         *   With number in money format
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'sha512.js' library before including 'model.js'
        **/
            function replaceAll(string, found, replace) {
                expReg = new RegExp(found, 'g');
                return string.replace(expReg, replace);
            }
        /*
         *
        **/
            function ucWords(string) {
                var arrayWords, returnString, len, i;
                arrayWords = string.split(" ");
                len = arrayWords.length;
                returnString = "";
                for(i = 0; i < len; i++) {
                    if(i != (len - 1)) {
                        returnString = returnString + ucFirst(arrayWords[i]) + " ";
                    } else {
                        returnString = returnString + ucFirst(arrayWords[i]);
                    }
                }
                return returnString;
            }
        /*
         *
        **/
            function ucFirst(string){
                return string.substr(0, 1).toUpperCase() + string.substr(1, string.length).toLowerCase();
            }
        /*
         *This function trims a string, also eliminates 
         *all intermediate spaces between words, converting them into one.
         *
         *PARAMS:
         *   string: The string with the original value.
         *
         *RETURN: string
         *   With the trimed content
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
        **/
            function advancedTrim(string) {
                var newString, newStringElements;
                newString = $.trim(string);
                newStringElements = newString.split(' ');
                newStringElements = _.without(newStringElements, '');
                newString = newStringElements.join(' ');
                newString = $.trim(newString);
                return newString;
            }
    /*
     ###################################################################################################
     OTHER Models
     ###################################################################################################
    */
        /*
         *
        **/
            function picturesLoader(domElement, barElement, urlHandler, urlApi) {
                'use strict';
                $(domElement).fileupload({
                    url: urlHandler,
                    dataType: 'json',
                    done: function (e, data) {
                        var picPromise, files;
                        files = data.result.files;
                        picPromise = postalService(urlApi, files);

                        picPromise.success( function (data) {
                            $.each(files, function (index, file) {
                                $('<p/>').text(file.name).appendTo('#files');
                            });
                        });

                    },
                    progressall: function (e, data) {
                        var progress = parseInt(data.loaded / data.total * 100, 10);
                        $(barElement).css(
                            'width', progress + '%',
                            'background-color', '#5cb85c'
                        );
                    }
                });

                /*
                $(domElement).prop('disabled', !$.support.fileInput)
                    .parent().addClass($.support.fileInput ? undefined : 'disabled');
                */
            }
        /*
         *This function
         *
         *PARAMS:
         *   name:
        **/
            function randomString(name) {
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
                var stringLength = 4;
                var randomStrinGb = '';
                for(var i = 0; i < stringLength; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomStrinGb += chars.substring(rnum, rnum + 1);
                }
                randomStrinGb;
                $(name).val(randomStrinGb);
            }
    /*
     ###################################################################################################
     Returning all Models
     ###################################################################################################
    */
    return {
                  momentToHuman : momentToHuman,
                  momentToRoman : momentToRoman,
                      selectDay : selectDay,
                    selectMonth : selectMonth,
                     selectYear : selectYear,
                    getTemplate : getTemplate,
                   loadTemplate : loadTemplate,
                       getValue : getValue,
                       setValue : setValue,
                          exist : exist,
                     existInDOM : existInDOM,
                        getHTML : getHTML,
                        setHTML : setHTML,
                      appendOne : appendOne,
                    appendMulti : appendMulti,
                     prependOne : prependOne,
                   prependMulti : prependMulti,
                      trimValue : trimValue,
                   cryptElement : cryptElement,
              setDateTPCalendar : setDateTPCalendar,
                  validFormFull : validFormFull,
                 validFormEmpty : validFormEmpty,
                      resetForm : resetForm,
                  postalService : postalService,
                getInternalJSON : getInternalJSON,
           getSerializeFormJSON : getSerializeFormJSON,
        hasOwnPropertyOptimized : hasOwnPropertyOptimized,
            filterArrayObjByKey : filterArrayObjByKey,
               sumArrayObjByKey : sumArrayObjByKey,
               avgArrayObjByKey : avgArrayObjByKey,
             renameArrayObjKeys : renameArrayObjKeys,
             withoutArrayObjAND : withoutArrayObjAND,
              withoutArrayObjOR : withoutArrayObjOR,
                 currencyFormat : currencyFormat,
            roundNDecimalFormat : roundNDecimalFormat,
                   advancedTrim : advancedTrim,
                     replaceAll : replaceAll,
                        ucWords : ucWords,
                        ucFirst : ucFirst,
                 picturesLoader : picturesLoader,
                   randomString : randomString
    }
}());
