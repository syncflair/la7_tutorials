<template>

    <div class="container-fluid" style="margin-top:20px;">
        <div class="vld-parent">
            <loading :active.sync="isloading"
                     :can-cancel="true"

                     :is-full-page="fullpage"></loading>
        </div>

        <div class="col-md-12" >
            <div class="card card-default">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-3">
                            <button style="width:100%;margin-top:-7px;color: green;" type="button" class="pull-right"
                            @click="newvoucher">new Debit voucher
                            </button>
                        </div>
                        <div class="col-md-9">
                            <h4 class="text-right">Debit voucher</h4>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                        <table class="table" style="width:100%;border-collapse: collapse;border:2px solid #fff;">
                            <tr>
                                <td>voucher no</td>
                                <td>
                                    <input type="text" class="form-control" v-model='lg_voucher_no'
                                           placeholder="voucher number" readonly="readonly">
                                </td>
                                <td>
                                    <button style="width:100%;color: green;" type="button"   @click="showAllVoucherNumber">search
                                    </button>
                                </td>
                                <td>date</td>
                                <td>
                                    <input type="date" v-model='lg_voucher_date' class="form-control">
                                    <span class="error_span_red">{{lg_voucher_date_required}}</span>
                                </td>
                                <td>prepraed by</td>
                                <td>
                                    <input type="text" class="form-control" readonly="readonly" v-model="lg_usr">
                                </td>
                                <td>bill ref no.</td>
                                <td>
                                    <input type="text" ref="" class="form-control" id="lg_bill_ref"
                                           v-model='lg_bill_ref' name="lg_bill_ref" placeholder="bill ref no.">
                                </td>
                            </tr>
                            <tr>
                                <td>naration</td>
                                <td colspan="8">
                                    <textarea type="text" class="form-control" v-model='lg_naration'
                                              placeholder="naration"></textarea>
                                </td>
                            </tr>
                        </table>

                        <div class="row card" style="margin-top: 8px;">
                            <table class="table">
                                <thead> 
                                    <tr v-if="posted_flag==0" v-for="(journal,index) in new_journal_rows">
                                        <th>
                                            <input type="text" name="ac_id" v-model="journal.ad_code" readonly="readonly" class="form-control" >
                                        </th>
                                        <th>
                                            <input type="text" name="ad_name" v-model="journal.ad_name" placeholder="Double Click for Account Search" class="form-control" v-on:dblclick="showAccountDetails('add',index,journal.dr_cr_identify,'','')" >
                                        </th>
                                        <th>
                                            <select class="form-control" v-model="journal.branch_id">
                                                <option v-for="branch in branches" :value="branch.id"
                                                    :title="branch.bm_name">{{branch.bm_name}}
                                            </option>
                                            </select>
                                        </th>
                                        <th>
                                            <input type="text" name="lg_lc_mr" class="form-control" v-model="journal.lg_lc_mr" placeholder="Double Click for Mr Number" v-on:dblclick="showAccountBaseMrNumber('add',index,journal.dr_cr_identify,'','')">
                                        </th>
                                        <th>
                                            <input type="text" name="lg_inv" v-model="journal.lg_inv" placeholder="Double Click For Invoice Number" class="form-control" v-on:dblclick="showAccountBaseinvoiceNumber('add',index,journal.dr_cr_identify,'','')" >
                                        </th>
                                        <th>
                                            <input type="text" name="lg_chq_no" v-model="journal.lg_chq_no" class="form-control" placeholder="Check Details">
                                        </th>
                                        <th>
                                            <input type="date" name="lg_chq_date" v-model="journal.lg_chq_date" class="form-control">
                                        </th>
                                        <th>
                                            <input type="number" min="0" step="any" name="lg_dr_amt" class="form-control text-right" v-model="journal.lg_dr_amt" 
                                            @keyup="keyupAmount('add',index,journal.dr_cr_identify,'lg_dr_amt',journal.lg_dr_amt)"
                                            placeholder="Enter Debit Amount" :readonly="journal.readonly" >
                                        </th>
                                        <th>
                                            <input type="number" min="0" step="any" name="lg_cr_amt" 
                                            @keyup="keyupAmount('add',index,journal.dr_cr_identify,'lg_cr_amt',journal.lg_cr_amt)"
                                            class="form-control text-right" v-model="journal.lg_cr_amt" placeholder="Enter Credit Amount" :readonly="journal.readonly" >
                                        </th>
                                        <th v-if="index==0" rowspan="2" style="text-align: center;">
                                           <button v-if="savebutton==1" style="margin-bottom: 30%;" type="button" 
                                           class="btn-submit" @click="addtodebitvoucherlist" >+
                                            </button>
                                        </th>
                                    </tr>
                                    <tr style="text-align: center;">
                                        <th style="background-color: #5f9ea0">A/C Number</th>
                                        <th style="background-color: #5f9ea0">A/C details</th>
                                        <th style="background-color: #5f9ea0">branch</th>
                                        <th style="background-color: #5f9ea0">lc/mr no</th>
                                        <th style="background-color: #5f9ea0">invoice number</th>
                                        <th style="background-color: #5f9ea0">cheque number/dtls</th>
                                        <th style="background-color: #5f9ea0">cheque date</th>
                                        <th style="background-color: #5f9ea0">debit</th>
                                        <th style="background-color: #5f9ea0">credit</th>
                                        <th style="background-color: #5f9ea0">action</th>
                                    </tr>
                                </thead>
                            </table>
                            <div class="product_section" >
                                <table class="table"
                                       style="width: 100%; border-collapse: collapse; border:2px solid #fff;">
                                   
                                    <tbody v-for="(v_info,v_index) in voucherInfos" style="border-bottom: 7px solid #fff;">
                                        <tr v-for="(v_d_f,vdf_index) in v_info">
                                           <td>
                                               <input type="text" class="form-control" readonly="readonly" v-model="v_d_f.account_name.ad_code">
                                           </td>
                                           <td>
                                               <input type="text" class="form-control" :disabled="post_disabled" v-model="v_d_f.account_name.ad_name"
                                               v-on:dblclick="showAccountDetails(v_index,vdf_index,v_d_f.dr_cr_identify,'','')" >
                                           </td>
                                           <td>
                                                <select :disabled="post_disabled" class="form-control" v-model="v_d_f.branch_id">
                                                    <option v-for="branch in branches" :value="branch.id"
                                                        :title="branch.bm_name">{{branch.bm_name}}
                                                    </option>
                                                </select>
                                           </td>
                                           <td>
                                               <input type="text" class="form-control" 
                                               v-on:dblclick="showAccountBaseMrNumber(v_index,vdf_index,v_d_f.dr_cr_identify,'lg_dr_amt','')"
                                               :disabled="post_disabled" v-model="v_d_f.lg_lc_mr">
                                           </td>
                                           <td>
                                               <input type="text" class="form-control"
                                               v-on:dblclick="showAccountBaseinvoiceNumber(v_index,vdf_index,v_d_f.dr_cr_identify,'','')"
                                                :disabled="post_disabled" v-model="v_d_f.lg_inv">
                                           </td>
                                           <td>
                                               <input type="text" class="form-control" :disabled="post_disabled" v-model="v_d_f.lg_chq_no">
                                           </td>
                                           <td>
                                               <input type="date" class="form-control" :disabled="post_disabled" v-model="v_d_f.lg_chq_date">
                                           </td>
                                           <td>
                                               <input type="number" class="form-control text-right" v-model="v_d_f.lg_dr_amt" min="0" step="any"
                                               @keyup="keyupAmount(v_index,vdf_index,v_d_f.dr_cr_identify,'lg_dr_amt',v_d_f.lg_dr_amt)"
                                                :disabled="post_disabled">
                                           </td>
                                           <td>
                                               <input type="number" class="form-control text-right" 
                                               v-model="v_d_f.lg_cr_amt" min="0" step="any"
                                               @keyup="keyupAmount(v_index,vdf_index,v_d_f.dr_cr_identify,'lg_cr_amt',v_d_f.lg_cr_amt)"
                                                 :disabled="post_disabled">
                                           </td>
                                           <td v-if="vdf_index ==0"  rowspan="2" style="text-align: center;">
                                               <button v-if="posted_flag ==0" style="margin-top: 30%;" type="button" class="btn-danger" @click="delete_voucher(v_d_f,vdf_index)" >X
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>
                                            <button style="width: 100%;cursor: none" v-if="posted_flag ==0" type="button"
                                                    class="btn-cancel">unposted
                                            </button>
                                            <button style="width: 100%;cursor: none" v-if="posted_flag ==1" type="button"
                                                    class="bt-submit">posted
                                            </button>
                                        </td>
                                        <td style="text-align:center">
                                            <input v-if="posted_flag ==0" class="form-control" type="checkbox" value="1"
                                                   v-model="vm_post_flag">
                                            <span v-if="posted_flag ==0">check for lock</span>
                                        </td>
                                        <td>total</td>
                                        <td>
                                            <input type="text" v-model="total_debit_amount" disabled
                                                   style="font-weight: bold; text-align: right; width: 100%;">
                                        </td>
                                        <td>
                                            <input type="text" v-model="total_credit_amount" disabled
                                                   style="font-weight: bold; text-align: right; width: 100%;">
                                        </td>
                                        <td  v-if="user_permissions.includes('voucher_entry_jv_add')  || user_permissions.includes('voucher_entry_jv_edit')"></td>
                                    </tr>
                                    <tr>
                                        <td colspan="7" v-if="user_permissions.includes('voucher_entry_jv_add')  || user_permissions.includes('voucher_entry_jv_edit')"></td>
                                        <td colspan="8" v-if="user_permissions.includes('voucher_entry_jv_add') !=true &&  user_permissions.includes('voucher_entry_jv_edit') !=true"></td>
                                        <td>
                                            <button  style="cursor: pointer; width: 100%"
                                                    class="" @click="voucherprint">print
                                            </button>
                                        </td>
                                        <td v-if="user_permissions.includes('voucher_entry_jv_add')  || user_permissions.includes('voucher_entry_jv_edit')">
                                            <button v-if="savebutton==1 && posted_flag==0"
                                                    style="cursor:pointer;width:100%" class="btn-submit"
                                                    @click="vouchersave">submit
                                            </button>
                                        </td>
                                        <td v-if="user_permissions.includes('voucher_entry_jv_add')  || user_permissions.includes('voucher_entry_jv_edit')"></td>
                                    </tr>
                                </table>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>


        <div v-if="accountDetaisModal">
            <transition name="modal">
              <div class="modal-mask ">
                <div class="modal-wrapper">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                            <table class="table">
                                <tr>
                                    <td class="text_center"><h4 class="modal-title">Account Details list</h4></td>
                                    <td>
                                        <button type="button" class="close" @click="accountDetaisModal=false">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                      </div>
                      <div class="modal-body">
                        <div>
                            <input type="text" @keyup="accountSearchKeyup" class="form-control" name="account_search" v-model="account_search" placeholder="Account search">
                            <br>
                            <div  class="accountScroll" style="height:250px;overflow-y:auto;overflow-x:auto;background:lightgray;" @scroll="accountScroll">
                                <table class="table table-bordered" >
                                        <thead>
                                            <tr>
                                                <td>Account code</td>
                                                <td>Account name</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in account_list" :class="onhovercursour" @click="onclickitemnamelist(item,index)">
                                                <td>
                                                    {{item.ad_code}}
                                                </td>
                                                <td >
                                                    {{item.ad_name}}
                                                </td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn-secondary" @click="accountDetaisModal=false">close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
        </div>
        <div v-if="mrNumberModal">
            <transition name="modal">
              <div class="modal-mask ">
                <div class="modal-wrapper">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                            <table class="table">
                                <tr>
                                    <td class="text_center"><h4 class="modal-title">MR Number list</h4></td>
                                    <td>
                                        <button type="button" class="close" @click="mrNumberModal=false">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                      </div>
                      <div class="modal-body">
                        <div>
                            <input type="text" @keyup="MRNumberSearchKeyup" class="form-control" name="account_search" v-model="MrNumber_search" placeholder="Mr Number search">
                            <br>
                            <div  class="MrNumberScroll" style="height:250px;overflow-y:auto;overflow-x:auto;background:lightgray;" @scroll="MrNumberScroll">
                                <table  class="table table-bordered" >
                                        <thead>
                                            <tr>
                                                <th>Invoice Number</th>
                                                <th>Date</th>
                                                <th>Invoice Amount</th>
                                                <th>Paid Amount</th>
                                                <th>Due Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr  v-for="(item,index) in lc_numbers"       
                                                :class="onhovercursour" 
                                                v-if="item.gross_total_rd_line_total_after_calculation > item.rm_paid_amt"
                                                @click="onclicklcnumberlist(item,index)"
                                                >
                                                <td> {{item.rm_mr_no}}
                                                </td>
                                                <td> {{item.rm_mr_date}}
                                                </td>
                                                <td> {{item.gross_total_rd_line_total_after_calculation}}
                                                </td>
                                                <td> {{item.rm_paid_amt}}
                                                </td>
                                                <td> {{item.gross_total_rd_line_total_after_calculation-item.rm_paid_amt}}
                                                </td>
                                            </tr>
                                            <tr v-if="lc_numbers.length ==0">
                                                <td colspan="5" class="text-center">
                                                    No Data Found
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                       
                                    </table>
                            </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn-secondary" @click="mrNumberModal=false">close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
        </div>
        <div v-if="voucherNumberModal">
            <transition name="modal">
              <div class="modal-mask ">
                <div class="modal-wrapper">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                            <table class="table">
                                <tr>
                                    <td class="text_center"><h4 class="modal-title">Voucher Number list</h4></td>
                                    <td>
                                        <button type="button" class="close" @click="voucherNumberModal=false">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                      </div>
                      <div class="modal-body">
                        <div>
                            <input type="text" @keyup="voucherSearchKeyup" class="form-control" name="voucher_search" v-model="voucher_search" placeholder="Invoice search">
                            <br>
                            <div  class="voucherScroll" style="height:250px;overflow-y:auto;overflow-x:auto;background:lightgray;" @scroll="voucherScroll">
                                <table class="table table-bordered" >
                                        <thead>
                                            <tr>
                                                <td>Voucher Number</td>
                                                <td>Created Date</td>
                                                <td>Update Date </td>
                                                <td>Entry By </td>
                                                <td>Voucher Type </td>
                                                <td>Ref </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(voucher,vou_index) in voucher_number_list" :class="onhovercursour" @click="voucherNumberClick(voucher,vou_index)">
                                                <td>{{voucher.invoice_no}}</td>
                                                <td>{{voucher.created_at}}</td>
                                                <td>{{voucher.updated_at}}</td>
                                                <td>{{voucher.user.name}}</td>
                                                <td>{{voucher.voucher_type}}</td>
                                                <td v-if="voucher.ref==null"></td>
                                                <td v-if="voucher.ref !=null">{{voucher.ref.lg_vd_rm_id}}</td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn-secondary" @click="voucherNumberModal=false">close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
        </div>
        <div v-if="accountBaseInvoiceModal">
            <transition name="modal">
              <div class="modal-mask ">
                <div class="modal-wrapper">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                            <table class="table">
                                <tr>
                                    <td class="text_center"><h4 class="modal-title">Sales Invoice list</h4></td>
                                    <td>
                                        <button type="button" class="close" @click="accountBaseInvoiceModal=false">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                      </div>
                      <div class="modal-body">
                        <div>
                            <input type="text" @keyup="accountBaseSearchKeyup" class="form-control" name="accountBase_search" v-model="accountBase_search" placeholder="accountBase search">
                            <br>
                            <div  class="accBase_S_in_Scroll" style="height:250px;overflow-y:auto;overflow-x:auto;background:lightgray;" @scroll="accBase_S_in_Scroll">
                               
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Invoice Number</th>
                                            <th>Date</th>
                                            <th>Invoice Amount</th>
                                            <th>Receive Amount</th>
                                            <th>Due Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in invoice_number_dataset" 
                                                :class="onhovercursour" 
                                                v-if="(item.sm_net_amt - item.sm_paid_amt) > 0" 
                                                @click="onClickInvoiceNumberList(item,index)">
                                            <td>
                                                {{item.sm_inv_no}}
                                            </td>
                                            <td>
                                                {{item.sm_inv_date}}
                                            </td>
                                            <td>
                                                {{item.sm_net_amt}}
                                            </td>
                                            <td>
                                                {{item.sm_paid_amt}}
                                            </td>
                                            <td>
                                                {{item.sm_net_amt - item.sm_paid_amt}}
                                            </td>
                                        </tr>
                                    </tbody>
                                                    
                                </table>
                            </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn-secondary" @click="accountBaseInvoiceModal=false">close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
        </div>

    </div>
</template>



<script>
    import loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'JournalVoucher',
        data() {
            return {
                vm_post_flag:0,
                posted_flag:0,
                total_debit_amount:0,
                total_credit_amount:0,
                printbutton:0,
                savebutton:1,
                post_disabled:false,
                accountBaseInvoiceModal:false,
                accountDetaisModal:false,
                account_list:[],
                mrNumberModal:false,
                voucherNumberModal:false,
                account_search:'',
                MrNumber_search:'',
                logo: 'logo',
                voucher: 'jurnal voucher', //voucher no
                isloading: false,
                fullpage: true,
                onhovercursour: 'onhovercursour',
                disabled: false,
                lg_voucher_no:'',
                lg_voucher_date:'',
                lg_usr:'',
                lg_bill_ref:'',
                lg_naration:'',
                lg_voucher_type:'dv',

                lg_bm_id:'',
                account:'',
                lg_lc_mr:'',
                lg_inv:'',
                invoice_number_dataset:[],
                lg_voucher_date_required:'',

                
                
                new_journal_rows:[

                {id:'',lg_voucher_no:'',lg_ad_id:'',ad_code:'',ad_name:'',lg_dr_amt:0,lg_cr_amt:0,lg_chq_no:'',lg_chq_date:'',lg_voucher_type:'dv',lg_usr:'',lg_naration:'',lg_bill_ref:'',lg_inv:'',lg_lc_mr:'',branch_id:'',lg_data_flag:'',readonly:false,dr_cr_identify:'dr'},

                {id:'',lg_voucher_no:'',lg_ad_id:'',ad_code:'',ad_name:'',lg_dr_amt:0,lg_cr_amt:0,lg_chq_no:'',lg_chq_date:'',lg_voucher_type:'dv',lg_usr:'',lg_naration:'',lg_bill_ref:'',lg_inv:'',lg_lc_mr:'',branch_id:'',lg_data_flag:'',readonly:false,dr_cr_identify:'cr'}

                ],
                
                branches:[],
                user_details:[],
                user_permissions:[],
                user_role:[],
                default_user:'',
                default_user_id:'',
                lg_usr_id:'',
                cim_name:'',
                voucher_search:'',
                dr_cr:'',
                new_or_edit:'',
                row_index:'',
                four_p:'',
                five_p:'',
                account_list_count:0,
                accountBase_search:'',
                account_base_s_invoice_list:[],
                voucher_number_list:[],
                voucher_type:'dv',
                voucher_number_list_count:0,
                voucherInfos:[],
                lg_data_flag:1,
                lc_numbers:[],
                invoice_count:0,

            }
        },

       
        created() {

            this.isloading = true;
            var today = new Date();
            this.lg_voucher_date = this.change_date_formate(today);
            this.default_date = this.change_date_formate(today);;
            let uri = window.location.origin + '/user-parmited-branch';
            this.axios.get(uri).then(response => {
                this.branches = response.data.branch_info;
                this.user_details = response.data.user_details;
                this.user_permissions = response.data.user_permissions;
                this.user_role = response.data.user_role;
                this.lg_bm_id = this.user_details.branch_id;
                this.lg_usr = response.data.user_details.name
                this.default_user = response.data.user_details.name
                this.default_user_id = response.data.user_details.id
                this.lg_usr_id = response.data.user_details.id
                this.cim_name = response.data.company_information.cim_name;
                this.new_journal_rows[0].branch_id=this.lg_bm_id
                this.new_journal_rows[1].branch_id=this.lg_bm_id
                
                if (response.data.company_information.cim_logo != null) {
                    this.logo = window.location.origin + '/images/company/' + response.data.company_information.cim_logo;
                }
                if (response.data.company_information.cim_address != null) {
                    this.address = response.data.company_information.cim_address;
                }
                this.isloading = false;

            })
                .catch(function (error) {
                    //window.location.href='login';
                });

        },


        methods: {
            accountSearchKeyup(){
                this.account_list=[];
                this.showAccountDetails(this.new_or_edit,this.row_index,this.dr_cr,this.four_p,this.five_p)

            },
            accountScroll(){
               var scrollHeight = this.$el.getElementsByClassName('accountScroll')[0].scrollHeight
               var clientHeight =  this.$el.getElementsByClassName('accountScroll')[0].clientHeight
               var scrollTop = this.$el.getElementsByClassName('accountScroll')[0].scrollTop
               if(parseInt(scrollTop+clientHeight) === scrollHeight){
                var skip = this.account_list.length;
                if(skip == this.account_list_count) return false;
                    this.showAccountDetails(this.new_or_edit,this.row_index,this.dr_cr,this.four_p,this.five_p)
               }

            },
            showAccountDetails(new_or_edit,row_index,dr_cr,four_p,five_p){
                this.new_or_edit=new_or_edit
                this.row_index = row_index
                this.dr_cr=dr_cr
                this.four_p=four_p
                this.five_p=five_p
                this.accountDetaisModal =true;
                var limit = 10;
                var skip = this.account_list.length;
                var search_key = this.account_search;
                this.isloading = true;
                let uri = window.location.origin + '/account-list-display';
                this.axios.post(uri,{limit,skip,search_key}, {headers: {'accept': 'application/json'}}).then(response => {
                    this.isloading = false
                    this.account_list_count = response.data.item_count;
                    var account_list = response.data.item_code
                    var self = this;
                    account_list.map(function(data,index){
                        self.account_list.push(data);
                    })

                });

            },
            global_param(new_or_edit,row_index,dr_cr,four_p,five_p){
                this.new_or_edit=new_or_edit
                this.row_index = row_index
                this.dr_cr=dr_cr
                this.four_p=four_p
                this.five_p=five_p
            },
            showAccountBaseMrNumber(new_or_edit,row_index,dr_cr,four_p,five_p){
                this.global_param(new_or_edit,row_index,dr_cr,four_p,five_p);

                if(new_or_edit=='add'){
                  var lg_ad_id =  this.new_journal_rows[row_index].lg_ad_id
                }else{
                    var lg_ad_id =  this.voucherInfos[new_or_edit][row_index].lg_ad_id
                }
                if(lg_ad_id ==''){
                     this.$swal('Please Add Account Name', '', 'error')
                    return false;
                }
                 this.mrNumberModal =true;
                var limit =10;
                var skip = this.lc_numbers.length;
                var search_key = this.MrNumber_search;
                let uri = window.location.origin + '/account-base-lc-numbers';
                    this.axios.post(uri, {lg_ad_id,limit,skip,search_key}, {headers: {'accept': 'application/json'}}).then(response => {
                            this.lc_numbers =this.object_to_array(response.data.lclist);
                            this.lclist_count = response.data.lclist_count;
                        
                    });
            },
            
            MrNumberScroll(){
              var scrollHeight = this.$el.getElementsByClassName('MrNumberScroll')[0].scrollHeight
               var clientHeight =  this.$el.getElementsByClassName('MrNumberScroll')[0].clientHeight
               var scrollTop = this.$el.getElementsByClassName('MrNumberScroll')[0].scrollTop
               if(parseInt(scrollTop+clientHeight) === scrollHeight){
                var skip = this.lc_numbers.length;
                if(skip == this.lclist_count) return false;
                    this.showAccountBaseMrNumber(this.new_or_edit,this.row_index,this.dr_cr,this.four_p,this.five_p)
               }

            },
            MRNumberSearchKeyup(){
                this.lc_numbers=[];
                this.showAccountBaseMrNumber(this.new_or_edit,this.row_index,this.dr_cr,this.four_p,this.five_p)
            },
            onclicklcnumberlist(item,index){
                console.log(item)
                if(this.new_or_edit =='add'){ 
                   this.new_journal_rows[this.row_index].lg_lc_mr=item.rm_mr_no; 
                }else{
                    this.voucherInfos[this.new_or_edit][this.row_index].lg_lc_mr=item.rm_mr_no;   
                }
                var inv_bal = parseFloat(item.gross_total_rd_line_total_after_calculation)-parseFloat(item.rm_paid_amt);
                if(isNaN(inv_bal)) inv_bal = 0;
                 this.keyupAmount(this.new_or_edit,this.row_index,this.dr_cr,'lg_dr_amt',inv_bal)
                 this.mrNumberModal =false;
            },
            showAccountBaseinvoiceNumber(new_or_edit,row_index,dr_cr,four_p,five_p){
                
                this.global_param(new_or_edit,row_index,dr_cr,four_p,five_p);
                if(new_or_edit=='add'){
                  var lg_ad_id =  this.new_journal_rows[row_index].lg_ad_id
                }else{
                    var lg_ad_id =  this.voucherInfos[new_or_edit][row_index].lg_ad_id
                }
                if(lg_ad_id ==''){
                     this.$swal('Please Add Account Name', '', 'error')
                    return false;
                }
                 this.accountBaseInvoiceModal =true;
                var limit =10;
                var skip = this.invoice_number_dataset.length;
                var search_key = this.accountBase_search;
                let uri = window.location.origin + '/account-base-invoice-numbers';
                    this.axios.post(uri, {lg_ad_id,limit,skip,search_key}, {headers: {'accept': 'application/json'}}).then(response => {
                            this.invoice_number_dataset =this.object_to_array(response.data.inlist);
                            this.invoice_count = response.data.inlist_count;
                        
                    });
           
            },

            accountBaseSearchKeyup(){
                this.invoice_number_dataset=[];
                this.showAccountBaseinvoiceNumber(this.new_or_edit,this.row_index,this.dr_cr,this.four_p,this.five_p)
            },
            accBase_S_in_Scroll(){
                var scrollHeight = this.$el.getElementsByClassName('accBase_S_in_Scroll')[0].scrollHeight
               var clientHeight =  this.$el.getElementsByClassName('accBase_S_in_Scroll')[0].clientHeight
               var scrollTop = this.$el.getElementsByClassName('accBase_S_in_Scroll')[0].scrollTop
               if(parseInt(scrollTop+clientHeight) === scrollHeight){
                var skip = this.invoice_number_dataset.length;
                if(skip == this.invoice_count) return false;
                    this.showAccountBaseinvoiceNumber(this.new_or_edit,this.row_index,this.dr_cr,this.four_p,this.five_p)
               }
            },
            onClickInvoiceNumberList(item,index){
                this.accountBaseInvoiceModal =false;
                if(this.new_or_edit =='add'){ 
                   this.new_journal_rows[this.row_index].lg_inv=item.sm_inv_no; 
                }else{
                    this.voucherInfos[this.new_or_edit][this.row_index].lg_inv=item.sm_inv_no;   
                }
                
                var inv_bal = parseFloat(item.sm_net_amt)-parseFloat(item.sm_paid_amt);
                if(isNaN(inv_bal)) inv_bal = 0;
                 this.keyupAmount(this.new_or_edit,this.row_index,this.dr_cr,'lg_cr_amt',inv_bal)
              

            },
            voucherSearchKeyup(){
                this.voucher_number_list =[];
                this.showAllVoucherNumber();
            },
            voucherScroll(){
                var scrollHeight = this.$el.getElementsByClassName('voucherScroll')[0].scrollHeight
                var clientHeight =  this.$el.getElementsByClassName('voucherScroll')[0].clientHeight
                var scrollTop = this.$el.getElementsByClassName('voucherScroll')[0].scrollTop
                if(parseInt(scrollTop+clientHeight) === scrollHeight){
                    var skip = this.voucher_number_list.length;
                    if(skip == this.voucher_number_list_count) return false;
                        this.showAllVoucherNumber();
                   }
            },
            showAllVoucherNumber(){
                this.voucherNumberModal =true;
                var limit = 10;
                var skip = this.voucher_number_list.length;
                var search_key = this.voucher_search;
                var voucher_type = this.voucher_type;
                this.isloading = true;
                let uri = window.location.origin + '/voucher-number-list';
                this.axios.post(uri,{limit,skip,search_key,voucher_type}, {headers: {'accept': 'application/json'}}).then(response => {
                    this.isloading = false
                    var self = this;
                    var voucher_number_list = response.data.vouchers;
                    this.voucher_number_list_count = response.data.voucher_count;
                    voucher_number_list.map(function(data,index){
                        self.voucher_number_list.push(data);
                    })
                })
            },
            voucherNumberClick(voucher,vou_index){
                this.voucherInfos =[];
                this.voucherNumberModal = false;
                var voucher_no = voucher.invoice_no;
                this.isloading = true;
                 let uri = window.location.origin + '/voucher-info-retrive';
                this.axios.post(uri,{voucher_no}, {headers: {'accept': 'application/json'}})
                .then(response => {
                    this.isloading = false
                    var self = this;
                    var maindata = response.data.maindata;
                    this.lg_voucher_no  = maindata.vm_no;
                    this.lg_voucher_date = this.change_date_formate(maindata.created_at);
                    this.lg_bill_ref = maindata.vm_bill_ref_no;
                    this.lg_naration = maindata.vm_naration;
                    this.voucherInfos= this.object_to_array(response.data.invoicelist);
                    this.posted_flag = maindata.vm_post_flag;
                    this.post_disabled = (this.posted_flag==1) ? true : false;
                    this.savebutton = (this.posted_flag==1) ? 0 : 1;
                    this.total_dr_cr_calculation(); 
                })

            },
            object_to_array(obj){
                var new_array = [];
                var result = Object.keys(obj).map(function(key) {
                    new_array[key]= obj[key]
                });
               return  new_array;
            },
            total_dr_cr_calculation(){
                var total_debit_amount =0;
                var total_credit_amount =0;
                this.voucherInfos.map(function(data,index){
                    data.map(function(data_inner,inner_index){
                        if(inner_index ==0) data_inner['dr_cr_identify'] ='dr';
                        if(inner_index ==1) data_inner['dr_cr_identify'] ='cr';
                        var lg_dr_amt =parseFloat(data_inner.lg_dr_amt) 
                        if(isNaN(lg_dr_amt)) lg_dr_amt=0 ;
                        total_debit_amount+=lg_dr_amt
                        var lg_cr_amt =parseFloat(data_inner.lg_cr_amt)
                        if(isNaN(lg_cr_amt)) lg_cr_amt=0;
                        total_credit_amount+=lg_cr_amt
                    })
                })
                this.total_debit_amount =parseFloat(total_debit_amount.toFixed(2)) 
                this.total_credit_amount =parseFloat(total_credit_amount.toFixed(2)) 
            },
            newvoucher(){
                this.isloading = true;
                
                var self = this;
                setTimeout(function () {
                    self.empty_row_pair();
                    self.lg_voucher_no=''
                    self.lg_voucher_date =self.default_date
                    self.lg_bill_ref=''
                    self.lg_naration=''
                    self.lg_data_flag=1;
                    self.vm_post_flag = 0;
                    self.savebutton = 1;
                    self.voucherInfos = [];
                    self.total_dr_cr_calculation();
                    self.posted_flag = 0;
                    self.isloading = false;
                }, 500);
                    

            },
            change_date_formate(date){
                var formated_date = new Date(date);
                var dd = String(formated_date.getDate()).padStart(2, '0');
                var mm = String(formated_date.getMonth() + 1).padStart(2, '0'); //january is 0!
                var yyyy = formated_date.getFullYear();
                formated_date = yyyy + '-' + mm + '-' + dd;
                return formated_date;
            },
            new_journal_rows_push(){
                this.lg_data_flag = this.voucherInfos.length
                this.new_journal_rows[0].lg_voucher_no=this.lg_voucher_no
                this.new_journal_rows[1].lg_voucher_no=this.lg_voucher_no

                this.new_journal_rows[0].lg_data_flag=this.lg_data_flag
                this.new_journal_rows[1].lg_data_flag=this.lg_data_flag

                this.new_journal_rows[0].lg_voucher_type=this.lg_voucher_type
                this.new_journal_rows[1].lg_voucher_type=this.lg_voucher_type
            },
            addtodebitvoucherlist(){
                this.savebutton = 0;
                this.new_journal_rows_push();
                this.new_journal_rows[0].lg_data_flag=this.lg_data_flag
                this.new_journal_rows[1].lg_data_flag=this.lg_data_flag
                
                var detailsdata = this.new_journal_rows
                if(this.new_journal_rows[0].lg_ad_id ==''){
                    this.savebutton = 1;
                    this.$swal('Please Add Account Name', '', 'error')
                    return false;
                }
                if(this.new_journal_rows[1].lg_ad_id ==''){
                    this.savebutton = 1;
                    this.$swal('Please Add Account Name', '', 'error')
                    return false;
                }
                var singledata ={
                    lg_voucher_no:this.lg_voucher_no,
                    lg_voucher_date:this.lg_voucher_date,
                    lg_usr:this.lg_usr,
                    lg_bill_ref:this.lg_bill_ref,
                    lg_naration:this.lg_naration,
                    lg_voucher_type:this.lg_voucher_type,
                    vm_amount:0,
                }
                let uri = window.location.origin + '/voucher-single-pair-save';
                this.axios.post(uri,{singledata,detailsdata}, {headers: {'accept': 'application/json'}})
                .then(response => {
                    this.savebutton = 1;
                    this.isloading = false
                    if(response.data.ref =="ref"){

                        this.$swal('You Can not Change Because of Reference', '', 'error')
                        return false;
                    }
                    var self = this;
                    var maindata = response.data.maindata;
                    this.lg_voucher_no  = maindata.vm_no;
                    this.lg_voucher_date = this.change_date_formate(maindata.created_at);
                    this.lg_bill_ref = maindata.vm_bill_ref_no;
                    this.lg_naration = maindata.vm_naration;
                    this.voucherInfos= this.object_to_array(response.data.invoicelist);
                    this.posted_flag = maindata.vm_post_flag;
                    this.post_disabled = (this.posted_flag==1) ? true : false;
                    this.savebutton = (this.posted_flag==1) ? 0 : 1;
                    this.total_dr_cr_calculation();
                    this.empty_row_pair();

                })

            },
            empty_row_pair(){
                this.new_journal_rows=[];
                this.new_journal_rows=[{id:'',lg_voucher_no:this.lg_voucher_no,lg_ad_id:'',ad_code:'',ad_name:'',lg_dr_amt:0,lg_cr_amt:0,lg_chq_no:'',lg_chq_date:'',lg_voucher_type:'',lg_usr:'',lg_naration:'',lg_bill_ref:'',lg_inv:'',lg_lc_mr:'',branch_id:this.lg_bm_id,lg_data_flag:'',readonly:false,dr_cr_identify:'dr'},
                {id:'',lg_voucher_no:this.lg_voucher_no,lg_ad_id:'',ad_code:'',ad_name:'',lg_dr_amt:0,lg_cr_amt:0,lg_chq_no:'',lg_chq_date:'',lg_voucher_type:'',lg_usr:'',lg_naration:'',lg_bill_ref:'',lg_inv:'',lg_lc_mr:'',branch_id:this.lg_bm_id,lg_data_flag:'',readonly:false,dr_cr_identify:'cr'}];
                this.new_journal_rows_push();
            },
            onclickitemnamelist(item,index){
                this.accountDetaisModal = false;
                //this.new_or_edit
                // this.row_index
                // this.dr_cr
                // this.four_p
                // this.five_p
                if(this.new_or_edit =='add'){
                   this.new_journal_rows[this.row_index].id=''; 
                   this.new_journal_rows[this.row_index].lg_voucher_no=this.lg_voucher_no; 
                   this.new_journal_rows[this.row_index].lg_ad_id=item.id; 
                   this.new_journal_rows[this.row_index].ad_code=item.ad_code; 
                   this.new_journal_rows[this.row_index].ad_name=item.ad_name; 
                   this.new_journal_rows[this.row_index].lg_data_flag=this.lg_data_flag; 
                   this.new_journal_rows[this.row_index].lg_usr=this.lg_usr; 
                }else{
                    this.voucherInfos[this.new_or_edit][this.row_index].account_name=item; 
                    this.voucherInfos[this.new_or_edit][this.row_index].lg_ad_id=item.id; 
                    this.voucherInfos[this.new_or_edit][this.row_index].ad_code=item.ad_code; 

                }

            },
            keyupAmount(new_or_edit,index,dr_cr,lg_cr_dr,amount){
                this.new_or_edit = new_or_edit
                this.row_index = index
                this.dr_cr = dr_cr
                this.four_p = lg_cr_dr
                this.five_p = amount
                var self = this;
                if(new_or_edit =='add'){
                    var update_info = this.new_journal_rows;
                }else{
                   var update_info = this.voucherInfos[new_or_edit]
                    
                }
                if(dr_cr=='dr'){  
                         update_info.map(function(data,data_index){
                            if(data.dr_cr_identify =='dr'){
                                if( lg_cr_dr=='lg_dr_amt'){
                                   data.lg_cr_amt = 0; 
                                   data.lg_dr_amt = amount; 
                                }else{
                                    data.lg_dr_amt = 0;
                                     data.lg_cr_amt = amount; 
                                }
                                
                            }else{
                                if( lg_cr_dr=='lg_dr_amt'){
                                    data.lg_dr_amt = 0;
                                    data.lg_cr_amt = amount; 
                                }else{
                                    data.lg_dr_amt = amount;
                                    data.lg_cr_amt = 0;
                                }
                            }
                            
                        }) 
                    }
                    if(dr_cr=='cr'){  
                         update_info.map(function(data,data_index){
                            if(data.dr_cr_identify =='cr'){
                                 if( lg_cr_dr=='lg_dr_amt'){
                                   data.lg_cr_amt = 0; 
                                   data.lg_dr_amt = amount; 
                                }else{
                                    data.lg_dr_amt = 0;
                                     data.lg_cr_amt = amount; 
                                }
                                
                            }else{
                                if( lg_cr_dr=='lg_dr_amt'){
                                    data.lg_dr_amt = 0;
                                    data.lg_cr_amt = amount; 
                                }else{
                                    data.lg_dr_amt = amount;
                                    data.lg_cr_amt = 0;
                                }
                            }
                            
                        }) 
                    }
                if(new_or_edit =='add'){
                    this.new_journal_rows = update_info
                    if(event.which ===13){
                        this.addtodebitvoucherlist();
                    }
                }else{
                    this.voucherInfos[new_or_edit] = update_info
                }
                this.total_dr_cr_calculation();

            },
            voucherprint(){
                if(this.lg_voucher_no ==''){
                    this.$swal('Information Not Added', '', 'error')
                    return false;
                }
                var data ={
                    lg_voucher_no:this.lg_voucher_no,
                }
                let url = window.location.origin + `/voucher-print-pdf`;
                this.axios({
                    method: 'get',
                    url: url,
                    params: {lg_voucher_no:this.lg_voucher_no,voucher_type:this.voucher_type},
                    responseType: 'blob',
                })

                    .then(response => {
                        var report_name = ['record_list'];
                        var headers = response.headers;
                        var blob = new Blob([response.data], {type: headers['content-type']});
                        var link = document.createElement('a');
                        link.href = window.URL.createObjectURL(blob);
                        link.target = '_blank';
                        link.stream = 'voucher.pdf';
                        link.click();

                    })
                    .catch(function (error) {
                        this.isloading = false;
                    });

            },
            vouchersave(){
                if(this.lg_voucher_no ==''){
                    this.$swal('Please Add Account Name', '', 'error')
                    return false;
                }
                   var singledata ={
                    lg_voucher_no:this.lg_voucher_no,
                    lg_voucher_date:this.lg_voucher_date,
                    lg_usr:this.lg_usr,
                    lg_bill_ref:this.lg_bill_ref,
                    lg_naration:this.lg_naration,
                    lg_voucher_type:this.lg_voucher_type,
                    vm_amount:this.total_debit_amount,
                    vm_post_flag:this.vm_post_flag,
                }
                var detailsdata = this.voucherInfos;
                 let uri = window.location.origin + '/voucher-info-save';
                this.axios.post(uri,{singledata,detailsdata}, {headers: {'accept': 'application/json'}})
                .then(response => {
                    if(response.data.ref =="ref"){
                        this.$swal('You Can not Change Because of Reference', '', 'error')
                        return false;
                    }
                    if(response.data.update =="update"){
                        this.$swal('Information Updated', '', 'success')
                        this.posted_flag = this.vm_post_flag; 
                    }

                })
            },
            delete_voucher(v_d_f,vdf_index){
                if(!confirm('Are You Sure !')) return false;
                this.isloading = true;
                let uri = window.location.origin + '/voucher-row-delete';
                this.axios.post(uri,v_d_f, {headers: {'accept': 'application/json'}})
                .then(response => {
                    this.isloading = false;
                    if(response.data.ref =="ref"){
                        this.$swal('You Can not Change Because of Reference', '', 'error')
                        return false;
                    }

                    if(response.data.update=='update'){
                        var remove_key = v_d_f.lg_data_flag;
                        var new_data =  this.voucherInfos.filter(function(data,index){
                            return index !=remove_key;
                        })
                        this.voucherInfos = new_data;
                       this.total_dr_cr_calculation();
                    }
                    
                })

            },
            


        },

        components: {
            'loading': loading,


        }
    }
</script>

