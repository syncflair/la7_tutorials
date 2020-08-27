<template>
<span>
  <!-- Nav Item -->
  <div class="nav-head-title">
    <div class="row">
      <div class="col-6">Bank Accounts</div>
      <div class="col-6 text-right">
        <a @click="addData" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#formModal"> 
          <i class="icon fas fa-plus"></i> Add New</a>
      </div>
    </div>
  </div>  
  <nav class="mt-0">
    <!-- /Nav Ul -->
    <ul class="nav nav-pills- nav-sidebar- flex-column" data-widget="treeview-" role="menu" data-accordion="false">

      <li class="">
        <router-link to="/spa/ReportMaster" class="">
            Reports Master
        </router-link>
      </li>      
      <li class="">
        <strong>
            Sales Report
        </strong>
      </li>
      <li class="">
        <router-link to="/spa/SalesReportMaster" class="">
            Sales Report
        </router-link>
      </li>
    </ul><!-- /Nav Ul -->
  </nav><!-- /Nav Item -->
</span> 
</template>