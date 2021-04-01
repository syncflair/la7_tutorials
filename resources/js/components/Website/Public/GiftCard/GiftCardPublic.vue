<template>
<span>


    <div class="container mt-10 mb-10">
        <div class="row">
            <div class="col-md-4 mb-4 mb-md-0">
                <div class="card mb-3 border-0 text-center rounded-0">
                    <img class="img-fluid mb-3" src="website/assets/img/500X300/img1.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="font-size-18 font-weight-semi-bold mb-3">1000 Tk</h5>
                        <p class="text-gray-90 max-width-334 mx-auto">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
                <div class="card mb-3 border-0 text-center rounded-0">
                    <img class="img-fluid mb-3" src="website/assets/img/500X300/img2.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="font-size-18 font-weight-semi-bold mb-3">2000 Tk</h5>
                        <p class="text-gray-90 max-width-334 mx-auto">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-3 border-0 text-center rounded-0">
                    <img class="img-fluid mb-3" src="website/assets/img/500X300/img3.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="font-size-18 font-weight-semi-bold mb-3">5000 Tk</h5>
                        <p class="text-gray-90 max-width-334 mx-auto">Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



        
    </div>
</span>
</template>
<script>
    export default {
        name: "Gift-Card-Public-website",
        data (){      
            return {                            
            }
        },

        methods: {          
        },           

        created(){
        },
           
        mounted() {

            
           this.$nextTick(function () {
                FireEvent.$emit('Call_all_javascript_function_for_theme'); // call all javascript for theme
            })//end this.$nextTick

        },
    }
</script>