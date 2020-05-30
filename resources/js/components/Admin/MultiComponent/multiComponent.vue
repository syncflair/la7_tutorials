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
	                <li class="breadcrumb-item"><a>Component Communication</a></li>
	            </ol>
	        </div>
	       <div class="col-md-6 text-right">Navigation</div>
	    </div>
	</div><!--/ Card Header -->

	<!-- Card Body -->
	<div class="card-body">
		<div class="row">
			<div class="col-md-8">
				<div class="row">
					<div class="col-md-8">Data List</div>
					<div class="col-md-4">
						<searchBox></searchBox>						
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">						
						<dataList></dataList>
					</div>					
				</div>

			</div>
			<div class="col-md-4">
				<formBox></formBox>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6 offset-md-3">
				
				<ul >
					<li v-for="category in categories.data">{{ category.cat_name }}</li>
				</ul>

			</div>
		</div>

	</div><!--/ Card Body -->

</div><!--/ Card section -->
</div><!--/ container-fluid --> 
</section><!-- Main content -->
</template>

<script>
	import dataList from './dataList.vue'
	import searchBox from './searchBox.vue'
	import formBox from './formBox.vue'

    export default {

    	data(){
    		return {
    			categories: {},

	    		form: new Form({
	    			id: '',
		        	cat_name: '',
	    		})
	    	}
    	},

    	

	    methods:{

	      fetchCategory(){
	        //this.$Progress.start(); //using progress-bar package
	        
	        axios.get('/spa/category')
	          .then( ( response ) => {
	            this.categories = response.data; // is an object... use when pagination	            
	            //this.$Progress.finish(); 
	          })
	          .catch( () => {  
	           // this.$Progress.fail(); 
	            //toastr.warning('Something is wrong!');
	          })
		  },

	    },

        mounted() {
            console.log('Component mounted.')
        },

        created(){
        	this.fetchCategory();
        },

        components:{
	      dataList,
	      searchBox,
	      formBox,
	    },

    }
</script>
