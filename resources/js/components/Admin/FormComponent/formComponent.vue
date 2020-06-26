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
				<div class="row pb-2">
					<div class="col-md-4">Serach App </div>
					<div class="col-md-8">					
						<SearchComponent/>
					</div>				
				</div>

				<div class="row pb-2">
					<div class="col-md-4">Auto Complete App

						<button v-tooltip.auto="{content: messageTooltip, classes:'info'}">Hover me</button>
						<i class="fas fa-info-circle pointer" v-tooltip.auto="{content: 'this is test Tooltip', classes:'info'}" ></i>
					</div>
					<div class="col-md-8">					
						<auto-complete-app
						:options="autoSearchData" 
						:filterBy="filterBy"
						/>
					</div>				
				</div>


				<div class="row pt-2 pb-1">
					<div class="col-md-4">	
						<!-- Normal Code-->
						<!-- <switch-app :switch-value="switchValue" @changeSwithValue="switchValue=!switchValue"/> -->
						<!-- Advance code with V-model -->
						<div><switch-app v-model="switchValue"/>  
						{{ switchValue }} </div>
					</div>
					<div class="col-md-4">					
						<div><switch-app v-model="switch1"/>  
						{{ switch1 }} </div>
					</div>
					<div class="col-md-4">					
						<div><switch-app v-model="switch2"/>  
						{{ switch2 }} </div>
					</div>					
				</div>	

				<div class="row pt-5 pb-5">
					<div class="col-md-12">	
						{{selectedItem}}				
						<multi-select-app
							:options="Options" 
							:filterBy="filterBy"
							:place-holder="placeHolder"
							:value-property="valueProperty"
							v-model="selectedItem"
						/>
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
	// import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
	// Vue.config.productionTip = false;


	import { mapState } from 'vuex' //for user MapState

	import DataList from './DataList.vue'	
	import FormBoxOne from './FormBoxOne.vue'
	import FormBoxTwo from './FormBoxTwo.vue'
	import FormBoxThree from './FormBoxThree.vue'
	import SearchComponent from './SearchComponent.vue'




    export default {
    	name: "formComponent",
    	data(){
    		return{
    			//for global switch component
    			switchValue: false, switch1: true, switch2: false,

    			//For Multiselect 
    			filterBy:'cat_name',
    			placeHolder:'Select Category',
    			valueProperty: 'id',
    			Options:[
    				{'id':1, 'cat_name':'Electronic'},
    				{'id':2, 'cat_name':'Lifestyle'},
    				{'id':3, 'cat_name':'Home Applience'},
    				{'id':4, 'cat_name':'Vehicle'},
    				{'id':5, 'cat_name':'Agriculture'},
    				{'id':6, 'cat_name':'TV'},
    				{'id':7, 'cat_name':'Refregerator'},
    				{'id':8, 'cat_name':'AC'}
    			],
    			selectedItem:[3, 5],
    			messageTooltip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    		}
    	},

    	computed: {
    		...mapState( 
             'CategoryStore', ['categories','autoSearchData','pagination']
          	)
    	},  	

        components:{          
	      DataList,	      
	      FormBoxOne,
	      FormBoxTwo,
	      FormBoxThree,
	      SearchComponent,
	    },

	    methods:{    	
	    	
			
	    },

        mounted() {
            //console.log('Component mounted.')
        },

        created(){
        	
        	FireEvent.$on('AutoCompleteSearch', (data) => {
        		//alert(data);
	            this.$store.dispatch('CategoryStore/AutoCompleteSearch', {key1: data, key2: 'ta'}); 
	        });
        }

    }
</script>

<style>

</style>