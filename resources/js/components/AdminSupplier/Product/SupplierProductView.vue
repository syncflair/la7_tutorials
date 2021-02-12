<template>
<span>
		
	<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true" data-backdrop="static" >
  <div class="modal-dialog modal-lg modal-xl- " role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="">
        	<span>{{productInfo.sys_pro_name}}</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
      	<!-- {{productInfo.pro_category}} -->

      	<ul class="list-unstyled">
      		<li v-for="(category, index) in selectedProductCategoryList " :key="index"> 
      			{{category.cat_name}}
      		</li>
      	</ul>
      </div>


      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>


    </div>
  </div>
</div>


</span>	
</template>
<script>

	import { mapState } from 'vuex' //for user MapState

	export default {
		 data () {
	      return {
	      	productInfo:{},
	      	ProductCategoryList:{},
	      }
	    },//end data

	    computed: {
          ...mapState( 'AuthenticationForSupplier', ['selectedProductCategoryList'] ),
        },

	    methods:{

	    	// SupplierProductDataView(data){
	    	// 	this.productInfo = data;  		
	    	// },

	    },

	    created(){

	    	FireEvent.$on('SupplierProductDataView', (data) => {
              // this.SupplierProductDataView(data);
              this.productInfo = data;
              this.$store.dispatch('AuthenticationForSupplier/fetchProductCategoryListData', data.pro_category );
            });

	    }

	}//End Exprot Default
</script>
<style></style>