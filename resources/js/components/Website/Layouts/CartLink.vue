<template>
	<div id="sidebarCartToggler" class="text-gray-90 position-relative d-flex " 
    	data-toggle="tooltip" data-placement="top"                            	 
    	title="Cart"
        aria-controls="sidebarCartContent"
        aria-haspopup="true"
        aria-expanded="false"
        data-unfold-event="click"

        data-unfold-target="#sidebarCartContent"
        data-unfold-type="css-animation"
        
        data-unfold-hide-on-scroll="false"
        data-unfold-animation-in="fadeInRight"
        data-unfold-animation-out="fadeOutRight"
        data-unfold-duration="500"
        style="cursor: pointer;">
        <i class="font-size-22 ec ec-shopping-bag"></i>
        
        <span class="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12">3</span>
        <span class="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">$1785.00</span>

    </div>
</template>
<script></script>