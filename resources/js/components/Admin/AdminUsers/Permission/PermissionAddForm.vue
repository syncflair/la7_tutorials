<template>
<span>
<!-- <form> -->
  <div class="row">
  	
	<div class="col-md-4 col-sm-12">
        <div class="form-group row">
          <label class="col-3" for="role_id">Role *</label>
          <div class="col-9">
            <select @change="changeRole($event)" v-model="formData.role_id" class="form-control form-control-sm" id="role_id" name="role_id">
          	  <option disabled value="">Select Role ..</option>                
              <option v-for="role in roles" v-bind:value="role.id">
              	{{role.name}}
              </option>			                  
            </select>
            <span class="text-danger">{{ errors.get('role_id') }}</span>	
           </div>		                      
        </div>
        <!-- <div class="row">
          <div class="col-12">
            <div class="form-group titleBox">
                <label class="titleText" for="exampleInputPassword1">Checked all for first time if you need</label>    
                <input @click="selectAllCheckbox($event)" v-model="allSelected" class="select_all mycheckbox TitelBoxInput" type="checkbox">
                {{allSelected}}
            </div>            
          </div>
        </div> -->
	</div><!--End col-3-->

	<div class="col-md-8 col-sm-12">

	  <table class="table table-striped table-sm table-responsive-">
	    <thead>
	      <tr>
            <th style="width: 30%;" scope="col">Module</th>
	          <th style="width: 30%;" scope="col">name</th>

	          <th style="width: 5%;" scope="col">View</th>             
	          <th style="width: 5%;" scope="col">Read</th>
	          <th style="width: 5%;" scope="col">Write</th>
	          <th style="width: 5%;" scope="col">Update</th>
	          <th style="width: 5%;" scope="col">Delete</th>
	      </tr>
	    </thead>

	    <tbody>
	    	<tr v-for="(r, i) in resources" :key="i">
              <!-- <td>{{i}}</td> -->
	            <td>{{i}}</td>
	            <td>{{r.module}}</td>
	            <td><input class="mycheckbox" type="checkbox" v-model="r.view"></input></td>
	            <td><input class="mycheckbox" type="checkbox" v-model="r.read"></input></td>
	            <td><input class="mycheckbox" type="checkbox" v-model="r.write"></input></td>
	            <td><input class="mycheckbox" type="checkbox" v-model="r.update"></input></td>
	            <td><input class="mycheckbox" type="checkbox" v-model="r.delete"></input></td>
	        </tr>
	    </tbody>
	  </table>	  

	</div><!--End col-9-->

	
  </div><!--End Row-->
  <div class="row">
  	<div class="col-12 align-center form-group">
  		<!-- <button type="btn btn-primary btn-sm" @click.prevent="assignPermission">Save Permission</button> -->  		
  		<button v-if="editMode===false" type="btn btn-danger btn-flat btn-sm" @click.prevent="assignPermission">
  			Save Permission
  		</button>
  		<button v-if="editMode===true" type="btn btn-danger btn-flat btn-sm" @click.prevent="updatePermission">
  			Update Permission
  		</button>
  	</div>
  </div>
  <!-- {{defaultResources['role']['read']}} -->
  <!--{{defaultResources}} -->
  

<!-- </form> -->
</span>
</template>

<script>
  //class for error handeling
  class Erorrs {
	constructor(){
		this.errors = {};
	}
	//this field get from form input error field like errors.get('name')
	get(field){
		if(this.errors[field]){
			return this.errors[field][0];
		}
	}
	record(errors){
		this.errors = errors.errors;
	}
  }//end Erorrs class

  import { mapState } from 'vuex' //for user MapState
  export default {
  	name: "PermissionAddMaster",

    data () {
      return {   
        editMode: false, //Use this for add edit using the same form 
        roles: [],
        errors: new Erorrs(),

        allSelected: false,
        view:[],

        formData:{
        	id:'',
        	role_id:'',
        	//permission: '' 
        },
        

        resources: {
          BranchInfo: {module: 'BranchInfo', view:false, read:false, write:false, update:false, delete:false, name:'BranchInfo'},
          permission : {module: 'permission', view:false, read:false, write:false, update:false, delete:false, name:'permission'},
          role: {module: 'role', view:false, read:false, write:false, update:false, delete: false, name:'role'},
          user: {module: 'user', view:false, read:false, write:false, update:false, delete:false, name:'user'},
        },

        defaultResources: {
          BranchInfo: {module: 'BranchInfo', view:false, read:false, write:false, update:false, delete:false, name:'BranchInfo'},
          permission : {module: 'permission', view:false, read:false, write:false, update:false, delete:false, name:'permission'},
          role: {module: 'role', view:false, read:false, write:false, update:false, delete: false, name:'role'},
          user: {module: 'user', view:false, read:false, write:false, update:false, delete:false, name:'user'},
        },


        // },
        // resources: [
        //   {module: 'user', view:false, read:false, write:false, update:false, delete:false, name:'user'},
        //   {module: 'role', view:false, read:false, write:false, update:false, delete: false, name:'role'},
        //   {module: 'permission', view:false, read:false, write:false, update:false, delete:false, name:'permission'},
        // ],
        // defaultResources:[
        //   {module: 'user', view:false, read:false, write:false, update:false, delete:false, name:'user'},
        //   {module: 'role', view:false, read:false, write:false, update:false, delete: false, name:'role'},
        //   {module: 'permission', view:false, read:false, write:false, update:false, delete:false, name:'permission'},
        // ],
      }
    },//end data

    computed: {
          // ...mapState( 
          //    'CountryStore', ['Countries', 'pagination','autoCompleteData']
          // ),
    },	

	methods:{

    // selectAllCheckbox(event){
    //     //alert(event.target.checked);
    //     //this.view = [];
    //     // if (!this.allSelected) {
    //     //     //console.log(true)
    //     //     for (r in this.resources) {
    //     //     }
    //     // }else{
    //     //     //console.log(false)
    //     // }
    //  },

	  fetchRole(){
      this.$Progress.start(); //using progress-bar package
      axios.get('/spa/Roles-Info')
        .then( ( response ) => {
          this.roles = response.data; // is an object... use when pagination
          this.$Progress.finish(); 
        })
        .catch( (error) => {  
          this.$Progress.fail(); 
          toastr.warning('Something is wrong!');
        })
     },

     changeRole(event){
     	  //alert(event.target.value)
     	  let role_id = event.target.value;
     	  axios.get('/spa/Permissions-Info/'+role_id)
     	  .then(({data}) => {
     	  	if(!data){
     	  		//console.log('No data'); 
     	  		this.editMode = false;      	  		
     	  		this.resources = this.defaultResources;        	  		
     	  		//this.resources = this.resources;        	  		
     	  	}else{
     	  		//console.log('data');  
     	  		this.editMode = true;       	  		 	  		
     	  		this.resources = JSON.parse(data.permission);  
     	  		this.formData.id = data.id;       	  		      	  		
     	  	}
     	  	//console.log(JSON.parse(data.permission));
     	  }).catch((error) =>{ })
     },

     assignPermission(){
     	this.$Progress.start(); //using progress-bar package
     	// alert(this.formData.role_id); //alert(JSON.stringify(this.resources));
     	//let permission = JSON.stringify(this.resources)
     	let permission = this.resources;

      this.$Progress.start(); //using progress-bar package
      axios.post('/spa/Permissions-Info', {'permission':permission, 'role_id': this.formData.role_id})
        .then( ( { data } ) => {
        	if(data.success){ 
        	  FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
        	  toastr.success(data.success);
        	  this.resources = this.defaultResources; 
        	  this.formData.role_id = "";
        	  this.errors.errors={};          	  t
            this.$Progress.finish();
          }
          if(data.errors){
	      toastr.warning(data.errors); 
	    } 
        }).catch( (error) => {  
          this.$Progress.fail();
      	if(error.response){
      		this.errors.record(error.response.data); //send data to Erorrs class
      	}
        	// console.log(error.response);
        })
     },

     updatePermission(){
     	 this.$Progress.start(); //using progress-bar package
     	// alert(this.formData.role_id); //alert(JSON.stringify(this.resources));
     	// let permission = JSON.stringify(this.resources)
     	let permission = this.resources;

      this.$Progress.start(); //using progress-bar package
      axios.put('/spa/Permissions-Info/'+this.formData.id, {'permission':permission, 'role_id': this.formData.role_id})
        .then( ( { data } ) => {
        	if(data.success){ 
        	  FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
        	  toastr.success(data.success);
        	  this.resources = this.defaultResources; 
        	  this.formData.id = "";
        	  this.formData.role_id = "";
        	  this.errors.errors={}; 
            this.$Progress.finish();
            this.editMode = false; 
          }
          if(data.errors){
	      toastr.warning(data.errors); 
	    } 
        }).catch( (error) => {  
          this.$Progress.fail();
      	if(error.response){
      		this.errors.record(error.response.data); //send data to Erorrs class
      	}
            // console.log(error.response);
        })
     }

	}, //end Methods

	created(){
		this.fetchRole();

		FireEvent.$on('AfterChange', () => {
          this.fetchRole();
    });

		//console.log(JSON.parse(this.authUser.role.permission.permission));
        //console.log(this.authUser); //get data from commonGlobal.js
        //console.log(JSON.parse(this.authPermissions.permission));
	},

  }

</script>

<style>
  .mycheckbox{width: 18px; position: relative; height: 18px; display: block;}

  /*Title Box Design*/
   .titleBox{border:1px solid pink; border-radius: 3px;}
   .titleText{position:relative; top:-0.9em; margin-left:1em; display:inline; background-color:white; padding:2px 5px 2px 5px; }
   .TitelBoxInput{margin-left:15px;  margin-bottom:5px;}
   /*--/Title Box Design*/
</style>