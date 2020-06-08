<template>
<!-- Main content -->
<section class="content">
<!-- container-fluid -->       
<div class="container-fluid">   
<!-- Card section -->  
<div class="card vue-card">

	<!-- Card Header -->
	<div class="card-header">
	    <div class="row">
	        <div class="col-md-6">
	            <ol class="breadcrumb float-sm-left">
	                <li class="breadcrumb-item active">Dashboard </li>
	                <li class="breadcrumb-item"><a>Component Communication with VueX</a></li>
	            </ol>
	        </div>
	       <div class="col-md-6 text-right">Navigation</div>
	    </div>
	</div><!--/ Card Header -->

	<!-- Card Body -->
	<div class="card-body">

		<!-- {{VuexTest}} -->

		<div class="row">
			<div class="col-md-8">

				<div class="row pb-2">
					<div class="col-md-4">
						Category List
						<!-- <vxPerPage></vxPerPage> -->
					</div>
					<div class="col-md-4 text-left"></div>
					<div class="col-md-4">
						<vxSearchBox></vxSearchBox>						
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">										
						<vxDataList></vxDataList>
					</div>
				</div>

			</div>
			<div class="col-md-4">
				<div class="row"><div class="col-md-12">
					<vxFormBox></vxFormBox>					
				</div></div>

				<div class="row mt-0"><div class="col-md-12">
					<vxViewCategory></vxViewCategory>
				</div></div>

				<div class="row mt-0"><div class="col-md-12">		
					<vxChildCategory></vxChildCategory>
					<!-- <childCategory :listCategoryId="listCategoryId"></childCategory> -->
				</div></div>

			</div>
		</div>

		<!-- <div class="row">
			<div class="col-md-6 offset-md-3">				
				<ul >
					<li v-for="category in categories.data">{{ category.cat_name }}</li>
				</ul>
			</div>
		</div> -->

		
	

	</div><!--/ Card Body -->

</div><!--/ Card section -->
</div><!--/ container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	import { mapGetters } from 'vuex' //for user MapGatters
	//import { mapState } from 'vuex' //for user MapState


	import vxDataList from './vxDataList.vue'	
	import vxViewCategory from './vxViewCategory.vue'
	import vxChildCategory from './vxChildCategory.vue'

	import vxSearchBox from './vxSearchBox.vue'
	import vxFormBox from './vxFormBox.vue'
	//import vxPerPage from './vxPerPage.vue'

    export default {
    	//name: "vuexComponent",

    	computed: {
    		getVuexTest () {
			    return this.$store.getters.getVuexTest
			},
			// ...mapState( 
   //           'CategoryStore', ['pagination']

   //       	)
    	},  	

        components:{          
	      vxDataList,	      
	      vxViewCategory,
	      vxChildCategory,
	      vxSearchBox,
	      vxFormBox,
	      //vxPerPage,
	    },

	    methods:{    	
	    	
			
	    },

        mounted() {
            //console.log('Component mounted.')
        },

    }
</script>
