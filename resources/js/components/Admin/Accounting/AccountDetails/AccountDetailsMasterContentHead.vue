<template>
<span>

  <div class="card">
	<div class="card-head"></div>

	<div class="card-body pt-1 pb-1 pl-1 pr-1">
		<!-- {{ headData }} -->
		<div class="row" style="height: 84px;">
			<div class="col-md-8 col-sm-12">
				<span v-if="headData">
					<p class="mb-0 border-bottom-1-">
					{{headData.account_name}} 
						<span class="text-bold green" v-if="headData.opening_balance != null"> ( {{headData.opening_balance}} 
							<small>{{systemSettings.belongs_to_currency.currency_short_code}} ) </small>
						</span> 
						<span class="text-bold red" v-if="headData.opening_balance === null"> ( 0.00 
		                  <small>{{systemSettings.belongs_to_currency.currency_short_code}} </small> )
		                </span>
					</p>
					
					<p class="mb-0 border-bottom-1-">
					  <small class="text-bold"> COA: {{headData.belongs_to_account_head.ah_name}} ({{headData.belongs_to_account_head.ah_code}})</small>
					  <small class="text-bold" v-if="headData.belongs_to_branch != null">, Branch: {{headData.belongs_to_branch.branch_name}}</small>
					</p>

					<p class="mb-0 border-bottom-1-"><small>{{headData.account_desc}}</small></p>

				</span>
				<span v-if="!headData">
					<span class="mt-3">Please Select bank account</span>
				</span>				
			</div>
			<div class="col-md-4 col-sm-12 text-right">
				<!-- <a @click="adjustBankAccount" class="btn btn-primary btn-flat btn-sm" data-toggle="modal" data-target="#AdjustBankAccountModal"> 
            		<i class="fas fa-sliders-h"></i> Adjust Account
            	</a> -->
			</div>			
		</div>
		

	</div>
  </div>

</span>
</template>

<script>
	
	export default {
	    name: "AccountDetailsMasterContentHead",
	    
	    components:{  },

	    data () {
	      return {
	      	headData:'',
	      }
	    },//end data	

		methods:{
			// adjustBankAccount(){
			// 	//alert('Ok');
			// },

		}, //end Methods

		created(){

			FireEvent.$on('AccountDetailsMasterContentHead', (data) => {
				//alert(data);
	            this.headData = data;
	        });
		},
		

  	} //end export default
</script>