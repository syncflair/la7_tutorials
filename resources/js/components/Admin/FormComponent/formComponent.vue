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
	                <li class="breadcrumb-item"><a>Form Component Communication with VueX</a></li>
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
				<div class="row pb-5">
					<div class="col-md-4">Serach App</div>
					<div class="col-md-8">					
						<SearchComponent/>
					</div>				
				</div>


				<div class="row pt-5 pb-5">
					<div class="col-md-12">					
						<swithc-app></switch-app>
					</div>				
				</div>	

				<div class="row pt-5 pb-5">
					<div class="col-md-12">					
						<MultiSelect></MultiSelect>
					</div>				
				</div>	

				<div class="row">
					<div class="col-md-12">					
						<FormBoxOne></FormBoxOne>
					</div>				
				</div>	

			</div>
			<div class="col-md-4">
				<div class="row">
					<DataList />
				</div>
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
	import { mapState } from 'vuex' //for user MapState


	import DataList from './DataList.vue'	
	import FormBoxOne from './FormBoxOne.vue'
	import FormBoxTwo from './FormBoxTwo.vue'
	import FormBoxThree from './FormBoxThree.vue'
	import SearchComponent from './SearchComponent.vue'
	import MultiSelect from './multiSelect.vue'


    export default {
    	//name: "vuexComponent",

    	computed: {
    		...mapState( 
             'CategoryStore', ['autoSearchData','pagination']
          	)
    	},  	

        components:{          
	      DataList,	      
	      FormBoxOne,
	      FormBoxTwo,
	      FormBoxThree,
	      SearchComponent,
	      MultiSelect,
	    },

	    methods:{    	
	    	
			
	    },

        mounted() {
            //console.log('Component mounted.')
        },

        created(){
        	
        	
        }

    }
</script>
