<!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ URL::to('/dashboard') }}" class="brand-link">
      <img src="{{ asset('FilesStorage/CommonFiles/favicon.png') }}" alt="Sorboraho Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light orange"> {{ OrganizationInformation()->org_name }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel pl-2 mt-2 pb-2 mb-1 d-flex">
        <div class="image">
          @if(!empty( UserAvatar() ))
            <img src="{{asset( UserAvatar() ) }}" class="img-circle elevation-2" alt="User Image">           
          @else
            <img src="{{asset('FilesStorage/CommonFiles/avatar.png')}}" class="img-circle elevation-2" alt="User Image">
          @endif
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ Auth::user()->name }}</a>
          <i class="nav-icon fas fa-circle success"> </i><span><small> {{ RoleName() }} </small></span>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
                   
          <li class="nav-item">
            <!-- {{ Request::is('dashboard*') ? 'active' : '' }} -->
            <a href="{{URL::to('/dashboard')}}" class="nav-link {{Request::is('dashboard*') ? 'router-link-active' : '' }}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </a>
          </li>

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
             <i class="nav-icon fas fa-tags"></i>
              <p>
                Catalog
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">

              <li class="nav-item">
                <router-link to="/spa/ProductMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Products
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/Categories" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Category
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/AttirbuteMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Attributs
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/spa/AttributeValueMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Attribut Values
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/SpecificationMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Spacifications
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/BrandMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Brands
                  </p>
                </router-link>
              </li>


              <li class="nav-item">
                <router-link to="/spa/Category-demo" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Category Demo
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/reviews" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Reviews
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/spa/GiftVoucher" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Gift Vouchers
                  </p>
                </router-link>
              </li>

            </ul>
          </li><!--/Catalog-->

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-cart-plus"></i>
              <p>
                Sales
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/spa/orders" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Orders
                  </p>
                </router-link>
              </li>


              <li class="nav-item">
                <router-link to="/spa/completed-orders" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Completed Orders
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/delivery-line" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Delivery Line
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/returns" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    returns
                  </p>
                </router-link>
              </li>

              
            </ul>
          </li><!--/Sales-->


          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-store-alt"></i>
              <p>
                Purchase
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">

              <li class="nav-item">
                <router-link to="/spa/Purchase" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    PUrchase
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/Store" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Store
                  </p>
                </router-link>
              </li>

            </ul>
          </li><!--/Purchase-->

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>
                User Management
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">

              <li class="nav-item">
                <router-link to="/spa/UserMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Users
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/RoleMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Role
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/PermissionMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Permission
                  </p>
                </router-link>
              </li>

            </ul>
          </li><!--/customer-->

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Customers
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">

              <li class="nav-item">
                <router-link to="/spa/CustomerMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Customers
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/CustomerGroupMaster" class="nav-link">
                  <i class="nav-icon fas fa-boxes"></i>
                  <p>
                    Customer Group
                  </p>
                </router-link>
              </li>

            </ul>
          </li><!--/customer-->


          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-user-friends info-"></i>
              <p>
                Suppliers
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </a>
            <ul class="nav nav-treeview">

              <li class="nav-item">
                <router-link :to="{name: 'SupplierMaster', params:{} }" class="nav-link">
                <!-- <router-link to="/spa/Parties" class="nav-link">            -->
                  <i class="nav-icon fas fa-user-friends"></i>
                  <p>
                    Suppliers
                    <span class="right badge badge-danger">New</span>
                  </p>
                </router-link>
              </li>

            </ul>
          </li> <!--/Suppliers-->         

          


          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!--<i class="nav-icon fas fa-chart-pie"></i>-->
              <i class="nav-icon fas fa-boxes blue"></i>
              <p>
                Vue Components
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/spa/multiComponent" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Multi Components</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/spa/vuexComponent"  class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Components whit Vuex</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/spa/FormComponent"  class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>FormComponent Vuex</p>
                </router-link>
              </li>
            </ul>
          </li>

          


          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <!--<i class="nav-icon fas fa-chart-pie"></i>-->
              <i class="nav-icon fas fa-cart-plus warning"></i>
              <p>
                Purchase
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/charts/chartjs.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Purchase Bill</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/flot.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Purchase Order</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/inline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Payment Out</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/charts/inline.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Purchase Return</p>
                </a>
              </li>
            </ul>
          </li>


          <li class="nav-item">
            <a href="pages/widgets.html" class="nav-link">
              <i class="nav-icon fas fa-hand-holding-usd danger"></i>
              <p>
                Expences
              </p>
            </a>
          </li>

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-university success"></i>
              <p>
                Accounting <!-- Bank & Cash  -->
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/spa/chartOfAccounts" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Chart Of Accounts
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <a href="pages/UI/general.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Bank Account</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/icons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Cash In Hand</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/buttons.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Petty Cash</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/sliders.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Check</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/UI/modals.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Loan Account</p>
                </a>
              </li>

            </ul>
          </li>

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-user-tie"></i>
              <p>
                HRM
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/spa/EmployeeMaster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Employee
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/spa/JobTitleMaster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Job Title
                  </p>
                </router-link>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sallery</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Leave</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Attendent</p>
                </a>
              </li>
            </ul>
          </li>


          <li class="nav-item">
            <router-link to="/spa/ReportMaster" class="nav-link">
              <i class="nav-icon fas fa-info-circle"></i>
              <p>
                Reports
              </p>
            </router-link>
          </li>

          
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-cogs yellow"></i>
              <p>
                Settings
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              
             <!--  <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-cogs yellow"></i>
                  <p>
                    Localization
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link to="/spa/OrganizationInfo" class="nav-link">
                      <i class="nav-icon fas fa-info-circle"></i>
                      <p>
                        Organization Info
                      </p>
                    </router-link>
                  </li>
                </ul>
              </li> -->


              <li class="nav-item">
                <router-link to="/spa/OrganizationInfo" class="nav-link">
                  <!-- <i class="nav-icon fas fa-boxes"></i> -->
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Organization Info
                  </p>
                </router-link>
              </li>

              <!-- @if(GetAuthUserRolePermission()->BranchInfo->view == true) -->
              <li class="nav-item">
                <router-link to="/spa/BranchInfo" class="nav-link">
                  <!-- <i class="nav-icon fas fa-boxes"></i> -->
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Branch Info
                  </p>
                </router-link>
              </li>
              <!-- @endif -->

              <li class="nav-item">
                <router-link to="/spa/CurrencyMarster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Currency
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/LanguageMaster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Language
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/LengthUnit" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Length Units
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/WeightUnit" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Weight Units
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/PackageUnit" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Package Units
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/UserStatus" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    User Status
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/VatRate" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Vat Rate
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/StatusMaster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Status Master
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/PaymentMethod" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Payment Method
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/DepartmentMaster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Departments
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/CountryMaster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Country
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/DivisionMaster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Division
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/DistrictMaster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    District
                  </p>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/spa/DistrictZoneMaster" class="nav-link">
                  <i class="nav-icon fas fa-info-circle"></i>
                  <p>
                    Zone / Area
                  </p>
                </router-link>
              </li>


             
            </ul>
          </li>

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-hdd pink"></i>
              <p>
                Backup/Restore
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/forms/general.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Backup to Computer</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/forms/advanced.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Backup to Drive</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/forms/editors.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Restore Backup</p>
                </a>
              </li>
            </ul>
          </li>




          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-wrench purple"></i>
              <p>
                Utilies
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Import Parties</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Import Items</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Export Items</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Close Financial Year</p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-envelope blue"></i>
              <p>
                Mailbox
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/mailbox/mailbox.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/mailbox/compose.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Compose</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/mailbox/read-mail.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-plus-square"></i>
              <p>
                Events
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/examples/login.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Extra</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/examples/pace.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Extra</p>
                </a>
              </li>
            </ul>
          </li>


          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <!--<li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="./index.html" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li> -->

               
          <!--
          <li class="nav-header">LABELS</li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-danger"></i>
              <p class="text">Important</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-warning"></i>
              <p>Warning</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-circle text-info"></i>
              <p>Informational</p>
            </a>
          </li> -->


        </ul>
      </nav>
      <!-- /.sidebar-menu -->



    </div>
    <!-- /.sidebar -->


   
  </aside>