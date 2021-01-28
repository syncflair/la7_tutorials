<template>
    <div class="page-wrap">
    	<div class="col-md-12 text-center" style="padding-top: 80px">
    		<div><img :src="'../'+NotFoundIcon" class="img-thumbnail" height="100%" width="30%"></div>
    		<!-- <span class="display-1 d-block">Opps!</span> -->
            <!-- <span class="display-1 d-block">404</span> -->
            <div class="mb-4 mt-3 lead">The page you are looking for was not found.</div>
            <!-- <a  href="/dashboard" class="btn btn-link">Back to Dashboard</a> -->
        </div>
    </div>
</template>
<style>
	.page-wrap {
		//background: #dedede;  
		min-height: 700px;  
	}
	.btn-link{color:#000000 !important; font-size: 20px}
</style>
<script>
	export default {
		name: 'NotFound',
		data(){
			return{
				NotFoundIcon: 'FilesStorage/CommonFiles/undraw_page_not_found.png',
			}
		}
	}
</script>