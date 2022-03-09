<?php

use Illuminate\Support\Facades\Route;


Route::group([
        'namespace' => 'Outlet'
], function () {

//route for manager login and registration and authorization
Route::post('api/outlet/login', 'LoginController@check_login') ;
Route::get('api/outlet/login/session/check', 'LoginController@check_session') ;
Route::post('api/outlet/register', 'LoginController@register_manager')->name('manager.register');
Route::post('api/outlet/password/reset/send/code', 'LoginController@send_reset_code');
Route::post('api/outlet/verify/reset/code/{phone}', 'LoginController@manager_reset_code_verified');
Route::post('api/outlet/new/password/set/{phone}', 'LoginController@manager_set_new_password');
Route::post('api/admin/to/showroom/login', 'LoginController@admin_to_showroom_login');
});

Route::group([
             'middleware' => 'manager',
             'namespace' => 'Outlet'
            ],function(){

        //accounts routes
        Route::get('api/showroom/credits','AccountController@credits');
        Route::post('api/showroom/credit/add','AccountController@creditStore');
        Route::get('api/showroom/credit/edit/{id}','AccountController@creditItem');
        Route::get('api/showroom/credit/delete/{id}','AccountController@creditDelete');
        Route::post('api/showroom/credit/update/{id}','AccountController@creditUpdate');
        Route::get('api/showroom/credit/due','AccountController@getCustomerDue');
        Route::get('api/showroom/due/to/paid/{id}','AccountController@duePaid');
        Route::get('/api/showroom/balance/transfer','AccountController@transferMoney');
        Route::post('/api/showroom/balance/add','AccountController@addTransferMoney');

        Route::get('api/showroom/debits','AccountController@debits');
        Route::post('api/showroom/debit/add','AccountController@debitStore');
        Route::get('api/showroom/debit/edit/{id}','AccountController@debitItem');
        Route::get('api/showroom/debit/delete/{id}','AccountController@debitDelete');
        Route::post('api/showroom/debit/update/{id}','AccountController@debitUpdate');

        Route::get('api/product/transaction/list','TransactionController@productTransactions');
        Route::get('api/get/product/transaction/details/{id}','TransactionController@transactionDetails');
        Route::get('api/approved/product/transaction/{transfer_id}','TransactionController@approvedTransaction');
;
         //route for search product
        Route::get('api/showroom/products','ProductController@index');
        Route::get('api/search/showroom/product/{search}','ProductController@search_products');
        Route::get('api/search/product/with/{code}','ProductController@searchWithCode');
        Route::get('api/put/back/showroom/product/head/office/{id}/{put_back_item}','ProductController@putBackProduct');
        Route::get('api/product/put/back/list','ProductController@putBackTransactinList');

        // route for dashboard data
         Route::get('api/get/dashboard/data','DashboardController@dashboardData');

        //start the others  route . to load other data of products
        Route::get('api/product/others', 'OthersController@others');

       //depended route
        Route::get('api/category/wise/subCategory/{id}', 'CategoryController@categoryWiseSubCategory');
        Route::get('api/subCategory/wise/subSubCategory/{id}', 'SubCategoryController@subCategoryWiseSubCategory');
        Route::get('api/attribute/wise/variant/{id}', 'AttributeAndVariantController@attributeWiseVariant');

        //route for manager order
        Route::get('api/search/customer/{mobile_no}','SaleController@searchCustomer');
        Route::post('api/showroom/sale/add','SaleController@storeSale');
        Route::get('api/showroom/sales/list','SaleController@sales');
        Route::get('api/showroom/retailsales/list','SaleController@retailSales');
        Route::get('api/showroom/wholesales/list','SaleController@wholeSales');
        Route::get('api/sale/details/{id}','SaleController@saleDetails');
        Route::get('api/manager/order/view/{id}','SaleController@manager_order_details');
        Route::get('api/print/sale/recipient/{id}','SaleController@invoicePrint');
        Route::get('api/export/sales/record/{start_date}/{end_date}','SaleController@exportSalesRecord');
        // Route::get('api/invoice/small/print/{id}','SaleController@invoicePrintSmall');

        Route::get('api/manager/logout','LoginController@logout') ;
        //manager profile route
        Route::get('api/get/general/setting','HomeController@generalSetting') ;
        Route::get('api/get/manager','HomeController@get_manager') ;
        Route::post('api/manager/info/update','HomeController@manager_update') ;
        Route::post('api/manager/password/update','LoginController@manager_password_update') ;

});
















?>