<?php
function urlsApi() {
    //Especial Actions
    $new = 'new';
    $del = 'del';
    $set = 'set';
    $get = 'get';
    $search = 'search';
    $wri = 'wri';

    //
    $det = 'detail';

    //Tables
    //$tbl = 'table_name';
    $ven = 'vendors';

    //Root Api url
    $root = '../api/v1';

    //rootURL + 'carts/update/'

    return array(
        //TEXT
        "test_api" => "$root/test/api",
        "test_remote" => "$root/test/remote",
    );
}