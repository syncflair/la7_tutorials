<template>


    <!-- vue-card-item -->
  <div class="card vue-card-item">

    <div class="card-header"><h4 @click="ClickMe">Form One</h4></div>
  

    <div class="card-body card-body-custome">
      <!-- <form> -->
       	<table class="table-sm table table-striped">
        
          <span class="form-group" v-for="(input, key) in inputs" :key="key">
              
                <tr>
                  <td>
                    <input type="text" class="form-control form-control-sm" v-model="input.cat_name" ref="cat_name" name="cat_name" placeholder="Name">       
                  </td>
                  <td>
                    <input type="text" class="form-control form-control-sm" v-model="input.cat_desc" ref="cat_desc" name="cat_desc" placeholder="Description">   
                  </td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="remove(key)" v-show="key || ( !key && inputs.length > 1)"><i class="fas fa-minus-square"></i> Remove</button>
                    <button class="btn btn-sm btn-success" @click="add(key)" v-show="key == inputs.length-1"><i class="fas fa-plus-square"></i> Add </button>                    
                  </td>
                </tr> 

                <tr v-if="errors" ><td colspan="6">                  
                  <!-- Display error, key is from  -->
                  <span class="alert- alert-danger- text-center- red m-0-" role="alert">
                      {{ errors[key+'.cat_name'] }}
                  </span>
                </td></tr> 

          </span>

          
        </table>
        <button @click.prevent="SaveData" class="btn btn-sm btn-primary">Save</button>
      <!-- </form> -->

      <!-- <span v-for="(error, key) in errors"> {{ key }}</span> -->
    </div>

  </div><!-- /vue-card-item -->


</template>

<script>
  import { mapState } from 'vuex' //for user MapState
    export default {
      name: "FormBoxOne",
      data () {
        return {
          // Create a new form instance
          // form: new Form({
          //   id: '',
          //   cat_name: '',
          //   //remember: false
          // }),
          errors:[],

          inputs: [
              {
                  cat_name: '',
                  cat_desc: '',
              }
          ]
        }
      },    
      computed: {
         ...mapState( 
             'CategoryStore', ['categories','pagination']
          )
      },
      methods:{
        ClickMe(){
           let CountInputs = this.inputs.length;
            alert(CountInputs); 
        },
        add() {
           this.inputs.push({ cat_name: '', cat_desc: '' });
           //alert('Kkk');
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },

        SaveData(){
          //let CountInputs = this.inputs.length;
          //console.log(this.inputs);
          this.$Progress.start(); //using progress-bar package

          axios.post('/spa/save-multi-field/', this.inputs )
          //axios.post('/spa/save-multi-field/', { multiField: JSON.stringify(this.inputs) })

            .then( ({data}) => { 

              //console.log(data.data);  
                        

              if(data.success){ 
                //alert(this.CountInputs); 
                //this.$store.dispatch('CategoryStore/fetchCategory', this.pagination.per_page);
                //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update  

                if(this.inputs.length > 1){
                  this.inputs.splice(0, this.inputs.length - 1);  
                  //this.inputs =[];              
                }
                this.errors =[]; 

                setTimeout(() => {
                  this.$refs.cat_name = '';
                  this.$refs.cat_desc = '';
                  //this.$refs.cat_name.focus(); //ret focus to first input filed. ref="cat_name" tag must be use
                }, 50);
                
                

                this.$Progress.finish(); 
                
                toastr.success(data.success);      
                 

                
              }
              if(data.errors){
                toastr.danger(data.errors); 
              }
            })
            .catch( (error) => {
              this.$Progress.fail();
              toastr.warning('Something is wrong!');
              if (error.response.status == 422){
                this.errors = error.response.data.errors;
              }
            }) 

        },

        

      },

      watch:{

      },

      created(){

         // var array1 = ['a', 'b', 'c'];

         //  array1.forEach(function(element) {
         //    console.log(element);
         //  });
      },
    
    }
   
</script>
