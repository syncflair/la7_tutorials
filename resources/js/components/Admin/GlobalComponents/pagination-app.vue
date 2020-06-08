<template>
  <div class="row">
	<div class="col-md-4 pl-0">
		<span><strong>Total: </strong>{{ this.pagination.total }} </span>
		<span><strong>Page: </strong> {{pagination.current_page}} of {{pagination.last_page}}</span>
	</div>

	<div class="col-md-2 pl-0 pr-0">
		<div class="input-group input-control-sm">
		  <label>Per Page:</label>
	      <select class="form-control form-control-sm" v-model="pagination.per_page" @change="onChange($event)">
	      	<option value="10">10</option>
	        <option value="15">15</option>
	        <option value="20">20</option>
	        <option value="25">25</option>
	        <option value="50">50</option>
	        <option value="100">100</option>
	        <option value="250">250</option>
	      </select>
		</div>
	</div>

	<div class="col-md-6 pr-0">
	    <nav aria-label="...">
	        <ul class="pagination pagination-sm justify-content-center- float-right">
	            <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }">
	                <a class="page-link" @click.prevent="changePage(1)"  >First</a>
	            </li>
	            <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }">
	                <a class="page-link" @click.prevent="changePage(pagination.current_page - 1)">Pre</a>
	            </li>

	            <li class="page-item" v-for="page in pages"  :key="page" :class="isCurrentPage(page) ? 'active' : ''">
	                <a class="page-link" @click.prevent="changePage(page)">{{ page }}
	                    <span v-if="isCurrentPage(page)" class="sr-only">(current)</span>
	                </a>
	            </li>

	            <li class="page-item" :class="{ disabled: pagination.current_page >= pagination.last_page }">
	                <a class="page-link" @click.prevent="changePage(pagination.current_page + 1)">Next</a>
	            </li>
	            <li class="page-item" :class="{ disabled: pagination.current_page >= pagination.last_page }">
	                <a class="page-link" @click.prevent="changePage(pagination.last_page)">Last</a>
	            </li>
	        </ul>
	    </nav>
	</div>
  </div>
</template>

<script>
    export default {
        //props:['pagination', 'offset'],

        props: {
	      pagination: {
	          type: Object,
	          required: true
	      },
	      offset: {
	          type: Number,
	          default: 4
	      }
	    },
       
        methods: {        	
            isCurrentPage(page){
                return this.pagination.current_page === page
            },

            changePage(page) {
                if (page > this.pagination.last_page) {
                    page = this.pagination.last_page;
                }
                this.pagination.current_page = page;
                this.$emit('paginate');
            },

            onChange(event){
            	//alert(event.target.value)
           		//this.$emit('changPerPage', event.target.value);
           		FireEvent.$emit('changPerPage', event.target.value);           		
            }

        },
        
        computed: {
            pages() {
				let pages = []              	             

                let from = this.pagination.current_page - Math.floor(this.offset / 2)
               // let from = this.pagination.current_page - this.offsets

                if (from < 1) {
                    from = 1
                }

                let to = from + this.offset -1
                //let to = from + (this.offset * 2)

                if (to > this.pagination.last_page) {
                    to = this.pagination.last_page
                }                
                 
                while (from <= to) {

                    pages.push(from)

                  from++  
                }

                return pages
            }
        }
    }
</script>