<?php
$admin = null;
if (session()->has('admin')) {
$admin = session()->get('admin');
}
?>
<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel" style="border-bottom:1px solid #ddd;">

            <div class="pull-left image">
                <?php if($admin != null && !empty($admin->image)): ?>
                    <img src="<?php echo e(asset('storage/'.$admin->image)); ?>" class="img-circle" alt="User Image">
                <?php else: ?>
                    <img src="<?php echo e(asset('admin/dist/img/user2-160x160.jpg')); ?>" class="img-circle" alt="User Image">
                <?php endif; ?>
            </div>
            <div class="pull-left info" style="top:1px;">
                <?php if($admin != null): ?>
                    <h4 style="color:black"><?php echo e(explode(' ', trim($admin->name))[0]); ?></h4>
                <?php endif; ?>
                <a style="color:green" href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>



        </div>
        <br />

        <ul class="sidebar-menu" data-widget="tree">


            <li class="treeview">
                <a to="/"><i class="fa fa-dashboard"></i> <span><router-link :to="{name:'dashboard'}">Dashboard</router-link></span> </a>
             </li>

            <?php if($admin->can('manage Order')): ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-first-order"></i> <span>Order</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link :to="{ name: 'addOrder'}"><i class="fa fa-plus"></i>Add</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'order'}"><i class="fa fa-eye"></i>Manage</router-link>

                    </li>


                </ul>
            </li>
            <?php endif; ?>

             <?php if($admin->can('manage Sale')): ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-list-alt"></i> <span>Sales</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                     </span>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link :to="{ name: 'WholeSaleOrder'}"><i class="fa fa-eye"></i>WholeSale </router-link>

                    </li>

                    <li>
                        <router-link :to="{ name: 'AddSaleExchange'}"><i class="fa fa-exchange"></i>Sale Exchange</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'officeSale'}"><i class="fa fa-eye"></i>Office Sale </router-link>
                    </li>
                     <li>
                        <router-link :to="{ name: 'compnaySale'}"><i class="fa fa-eye"></i>Company Sale </router-link>
                    </li>

                </ul>
            </li>
            <?php endif; ?>





            <?php if($admin->can('manage purchase')): ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-list-alt"></i> <span>Purchase & Supplier</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>


                    </span>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link :to="{ name: 'purchase'}"><i class="fa fa-eye"></i>Product Purchase </router-link>

                    </li>

                    <li>
                        <router-link :to="{ name: 'ManagePurchaseFabrics'}"><i class="fa fa-eye"></i>Fabrics Purchase</router-link>

                    </li>

                     <li>
                        <router-link :to="{ name: 'supplier'}"><i class="fa fa-eye"></i>Product Supplier</router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'FabricsSupplier'}"><i class="fa fa-eye"></i>Fabrics Supplier</router-link>
                    </li>

                </ul>
            </li>
            <?php endif; ?>


             <?php if($admin->can('Manage accounts')): ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-money"></i> <span>Accounts</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link :to="{ name: 'credit'}"><i class="fa fa-eye"></i> Credit</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'debit'}"><i class="fa fa-eye"></i>Debit</router-link>
                    </li>
                     <li>
                        <router-link :to="{ name: 'CreditDue'}"><i class="fa fa-eye"></i>Due</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'fondtransfer'}"><i class="fa fa-eye"></i>Fund Transfer</router-link>
                    </li>

                </ul>
            </li>
            <?php endif; ?>


            <?php if($admin->can('manage product')): ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-cogs"></i> <span>Product</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">

                    <li>
                        <router-link :to="{ name: 'productAdd'}"><i class="fa fa-plus"></i>Add</router-link>
                        <router-link :to="{ name: 'product',params:{page_no:1}}"><i class="fa fa-eye"></i>Manage</router-link>

                    </li>
                </ul>
            </li>
            <?php endif; ?>
            <?php if($admin->can('manage category')): ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-list-alt"></i> <span>Category</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link :to="{ name: 'category'}"><i class="fa fa-circle-o"></i> category</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'SubCategory'}"><i class="fa fa-circle-o"></i>sub category
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'subSubCategory'}"><i class="fa fa-circle-o"></i>sub sub category
                        </router-link>
                    </li>
                </ul>
            </li>
            <?php endif; ?>


             <?php if($admin->can('manage attribute')): ?>
            <li class="treeview">
                    <a href="#">
                        <i class="fa fa-tint"></i> <span>Color</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <router-link :to="{ name: 'colorAdd'}"><i class="fa fa-plus"></i> Add</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'color'}"><i class="fa fa-eye"></i>Manage</router-link>
                        </li>

                    </ul>
            </li>

            <li class="treeview">
                    <a href="#">
                        <i class="fa fa-deviantart"></i> <span>Product Attribution</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <router-link :to="{ name: 'attributeAdd'}"><i class="fa fa-plus"></i> Add</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'attribute'}"><i class="fa fa-eye"></i>Manage</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'variant'}"><i class="fa fa-circle-o"></i>Variant</router-link>
                        </li>

                    </ul>
            </li>
        <?php endif; ?>
          <?php if($admin->can('create and manage slider')): ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-sliders"></i> <span>Slider</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link :to="{ name: 'sliderAdd'}"><i class="fa fa-plus"></i>Add</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'slider'}"><i class="fa fa-eye"></i>Manage</router-link>
                    </li>
                      <li>
                        <router-link :to="{ name: 'category_slider'}"><i class="fa fa-eye"></i>Category Slider</router-link>
                    </li>
                </ul>
            </li>
            <?php endif; ?>



            <li class="treeview">
                <a href="#">
                    <i class="fa fa-users"></i> <span>Users</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <?php if($admin->can('manage admin')): ?>
                        <li>
                            <router-link :to="{ name: 'admin'}"><i class="fa fa-user-secret"></i>Admins</router-link>
                        </li>
                    <?php endif; ?>


                    <?php if($admin->can('manage users')): ?>
                    <li>
                        <router-link  :to="{ name: 'user'}"  > <i class="fa fa-user-circle"></i>Users</router-link>
                    </li>
                    <?php endif; ?>
                    <?php if($admin->can('manage customers')): ?>
                    <li>
                        <router-link :to="{ name: 'customer'}"  > <i class="fa fa-user-circle"></i> Customers</router-link>
                    </li>
                    <?php endif; ?>

                    <?php if($admin->can('create and manage merchant')): ?>
                      <li>
                        <router-link :to="{ name: 'merchant'}"><i class="fa fa-user"></i>Merchant</router-link>
                    </li>
                      <?php endif; ?>


                   <?php if($admin->can('manage reseller')): ?>
                    <li>
                        <router-link :to="{ name: 'resellerHome'}"><i class="fa fa-user"></i>Reseller</router-link>
                    </li>
                   <?php endif; ?>


                </ul>
            </li>




            <?php if($admin->can('manage reseller')): ?>

              <li class="treeview">
                    <a href="#">
                        <i class="fa fa-hand-o-right"></i> <span>Showroom Management</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                         <li>
                            <router-link :to="{ name: 'showroom'}"><i class="fa fa-list-alt"></i>Showroom List</router-link>
                        </li>
                           <li>
                            <router-link :to="{ name: 'showroom_manager'}"><i class="fa fa-user-secret"></i>Showroom Managers</router-link>
                        </li>
                         <li>
                            <router-link :to="{ name: 'product_transfer'}"><i class="fa fa-exchange"></i>Transfer Products</router-link>
                        </li>
                         <li>
                            <router-link :to="{ name: 'product_return'}"><i class="fa fa-exchange"></i>Put Back Products</router-link>
                        </li>
                    </ul>
                </li>



            <?php endif; ?>
             <?php if($admin->can('manage reseller')): ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-user"></i> <span>Reseller Payment</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                     <li>
                        <router-link :to="{ name: 'UnpaidPayment'}"><i class="fa fa-plus"></i>Unpaid</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'paidPayment'}"><i class="fa fa-eye"></i>Paid</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'PaymentInvoice'}"><i class="fa fa-eye"></i>Invoice</router-link>
                    </li>


                </ul>
            </li>
            <?php endif; ?>


            <?php if($admin->can('manage reports')): ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-file"></i> <span>Report</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link :to="{ name: 'OrderReport'}"><i class="fa fa-eye"></i> Order Report</router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'OfficeSaleReport'}"><i class="fa fa-eye"></i>Office Sale Report
                        </router-link>
                    </li>
                     <li>
                        <router-link :to="{ name:'OrderProfite'}"><i class="fa fa-eye"></i>Order Profit</router-link>

                    <li>
                     <li>
                        <router-link :to="{ name: 'SaleProfite'}"><i class="fa fa-eye"></i>Sale Profit
                        </router-link>
                    </li>

                      <li>
                        <router-link :to="{ name: 'PurchaseReport'}"><i class="fa fa-eye"></i>Purchase Report
                        </router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'SupplierReport'}"><i class="fa fa-eye"></i>Supplier Report</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'AccountReport'}"><i class="fa fa-eye"></i>Account Report
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'productStcok'}"><i class="fa fa-eye"></i>Stock Report</router-link>

                    <li>
                   <li>
                        <router-link :to="{ name: 'ProfiteReport'}"><i class="fa fa-eye"></i>Profite Report</router-link>

                    <li>



                </ul>
            </li>
            <?php endif; ?>
            <?php if($admin->can('manage basic set up')): ?>

            <li class="treeview">
                <a href="#">
                    <i class="fa fa-bullhorn"></i> <span>Sale Campaign </span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link :to="{ name: 'sale_campaign'}"><i class="fa fa-eye"></i> General Campaign </router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'occasional_campaign'}"><i class="fa fa-eye"></i> Occation Campaign </router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'seasonal_campaign'}"><i class="fa fa-eye"></i> Seasonal Campaign </router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'buy_one_get_one'}"><i class="fa fa-fire"></i>Landing Page offer Banner </router-link>
                    </li>

                     <li>
                        <router-link :to="{ name: 'banner'}"><i class="fa fa-list-alt"></i> Banners </router-link>
                    </li>
                     <li>
                        <router-link :to="{ name: 'coupon'}"><i class="fa fa-gift"></i> Cupon Code </router-link>
                    </li>

                </ul>
            </li>

                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-cogs"></i> <span>Basic setup</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li> <router-link :to="{ name: 'account_purpose'}" > <i class="fa fa-list"></i> Account purpose </router-link> </li>
                        <li>
                            <router-link :to="{ name: 'city'}"><i class="fa fa-plus"></i>City</router-link>
                        </li>
                         <li>
                            <router-link :to="{ name: 'sub_city'}"><i class="fa fa-plus"></i>Sub City</router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'courier'}"><i class="fa fa-eye"></i>Courier</router-link>
                            <router-link :to="{ name: 'company'}"><i class="fa fa-eye"></i>Company</router-link>

                            <router-link :to="{ name: 'comment'}"><i class="fa fa-eye"></i>Comment</router-link>
                            <router-link :to="{ name: 'offer'}"><i class="fa fa-eye"></i>Category/Offer</router-link>
                        <?php if($admin->can('View Role')): ?>
                        <router-link :to="{ name: 'role'}"><i class="fa fa-eye"></i>Role</router-link>
                        <?php endif; ?>


                        </li>

                    </ul>
                </li>


                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-cog"></i> <span>Setting</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li>
                            <router-link :to="{ name: 'general_setting'}"><i class="fa fa-eye"></i>General Setting</router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'footer_setting'}"><i class="fa fa-eye"></i>Footer Setting</router-link>
                        </li>


                        <li>
                            <router-link :to="{ name: 'theme_setting'}"><i class="fa fa-tint "></i> Color Setting</router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'about_and_contact'}"><i class="fa fa-eye "></i> About And Contact Info. </router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'order_shipment_return'}"><i class="fa fa-eye "></i> Oder Shipment and Return Info </router-link>
                        </li>

                    </ul>
                </li>
            <?php endif; ?>
            <?php if($admin->can('manage carieer')): ?>
                <li class="treeview">
                <a href="#">
                    <i class="fa fa-briefcase "></i> <span>Carrier</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                     <li>
                        <router-link :to="{ name: 'add_carrier'}"><i class="fa fa-plus"></i> Add</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home_carrier'}"><i class="fa fa-eye"></i> Manage</router-link>
                    </li>

                </ul>
            </li>
            <?php endif; ?>
             <?php if($admin->can('manage carieer')): ?>
            <li class="treeview">
                <router-link  :to="{ name: 'sms_campaign'}"  > <i class="fa fa-inbox"></i>SMS Campaign</router-link>
            </li>
           <?php endif; ?>


           <?php if($admin->can('manage team')): ?>

           <li class="treeview">
                <a href="#">
                   <i class="fa fa-home"></i> <span> Company </span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                   <ul class="treeview-menu">

                        <li>
                        <router-link :to="{ name: 'loan'}"><i class="fa fa-money"></i>Manage Loan</router-link>
                        </li>

                        <li>
                        <router-link :to="{ name: 'investment'}"><i class="fa fa-dollar"></i>Manage Investment</router-link>
                        </li>
                        <li>
                          <router-link :to="{ name: 'company_assets'}"><i class="fa fa-eye"></i>Manage Assets</router-link>
                        </li>
                        <li>
                        <router-link :to="{ name: 'print_house'}"><i class="fa fa-print"></i>Manage Print House</router-link>
                        </li>
                         <li>
                        <router-link :to="{ name: 'team_member'}"><i class="fa fa-users"></i> Manage Team</router-link>
                         </li>

                         <li>
                         <router-link :to="{ name: 'bill_statement'}"><i class="fa fa-money"></i>Bill Statements </router-link>
                         </li>

                   </ul>
             </li>


            <?php endif; ?>

        </ul>
    </section>
</aside>
<?php /**PATH D:\project\glam_touch_web_app\resources\views/admin/partials/sidebar.blade.php ENDPATH**/ ?>