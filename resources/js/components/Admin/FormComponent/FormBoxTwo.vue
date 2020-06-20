<template>


    <!-- vue-card-item -->
  <div class="card vue-card-item">

    <div class="card-header"><h4 @click="ClickMe">Form One</h4></div>
  

    <div class="card-body card-body-custome">
       	<table class="table-sm table table-striped">
        <div class="form-group" v-for="(input,k) in inputs" :key="k">
            
              <tr>
                <td>
                  <input type="text" class="form-control form-control-sm" v-model="input.name" placeholder="Name">
                </td>
                <td>
                  <input type="text" class="form-control form-control-sm" v-model="input.email" placeholder="Email">   
                </td>
                <td>
                  <input type="text" class="form-control form-control-sm" v-model="input.phone" placeholder="Phone">    
                </td>
                <td>
                  <i class="fas fa-minus-square p-1" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)"></i>
                  <i class="fas fa-plus-square p-1" @click="add(k)" v-show="k == inputs.length-1"></i>
                </td>
              </tr>
            
        </div>
        </table>

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
          inputs: [
              {
                  name: '',
                  email: '',
                  phone: '',
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
          alert('Opps!')
        },
        add(index) {
           this.inputs.push({ name: '', email: '', phone:'' });
           //alert('Kkk');
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },


      },

      created(){
   
      },
    
    }
   
</script>
