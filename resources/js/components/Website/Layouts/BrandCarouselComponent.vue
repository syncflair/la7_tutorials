<template>
<div class="mb-8">
    <div class="py-2 border-top border-bottom">
        <div class="js-slick-carousel u-slick my-1"
            data-slides-show="5"
            data-slides-scroll="1"
            data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y"
            data-arrow-left-classes="fa fa-angle-left u-slick__arrow-classic-inner--left z-index-9"
            data-arrow-right-classes="fa fa-angle-right u-slick__arrow-classic-inner--right"
            data-responsive='[{
                "breakpoint": 992,
                "settings": {
                    "slidesToShow": 2
                }
            }, {
                "breakpoint": 768,
                "settings": {
                    "slidesToShow": 1
                }
            }, {
                "breakpoint": 554,
                "settings": {
                    "slidesToShow": 1
                }
            }]'>

            <!-- <tr v-for="(brand, index) in Brands" :key="index"> :data-slick-index="index" brand_url-->
            <div class="js-slide" v-for="(brand, index) in brandList" :key="index" >
                <a :href="brand.brand_url" class="link-hover__brand" :title="brand.brand_name">
                    <img class="img-fluid m-auto max-height-50" :src="brand.brand_img" loading="lazy" :alt="brand.brand_desc">
                </a>
            </div>


            <!-- 
            <div class="js-slide">
                <a href="#" class="link-hover__brand">
                    <img class="img-fluid m-auto max-height-50" src="website/assets/img/200X60/img2.png" alt="Image Description">
                </a>
            </div>
            <div class="js-slide">
                <a href="#" class="link-hover__brand">
                    <img class="img-fluid m-auto max-height-50" src="website/assets/img/200X60/img2.png" alt="Image Description">
                </a>
            </div>
            <div class="js-slide">
                <a href="#" class="link-hover__brand">
                    <img class="img-fluid m-auto max-height-50" src="website/assets/img/200X60/img3.png" alt="Image Description">
                </a>
            </div>
            <div class="js-slide">
                <a href="#" class="link-hover__brand">
                    <img class="img-fluid m-auto max-height-50" src="website/assets/img/200X60/img4.png" alt="Image Description">
                </a>
            </div>
            <div class="js-slide">
                <a href="#" class="link-hover__brand">
                    <img class="img-fluid m-auto max-height-50" src="website/assets/img/200X60/img5.png" alt="Image Description">
                </a>
            </div>
            <div class="js-slide">
                <a href="#" class="link-hover__brand">
                    <img class="img-fluid m-auto max-height-50" src="website/assets/img/200X60/img6.png" alt="Image Description">
                </a>
            </div> -->


        </div>
    </div>
    <!-- <div>{{brandList}}</div> -->

</div>
</template>
<script>
    export default {
        name: "Brand-Carousel-Public-website",
        data (){      
            return {
                brandList:{},          
            }
        },

        components:{ }, 

        methods: { 
            fetchBrand(){
                axios.get('/get-brand-for-carousel')
                  .then( (response) => {
                    this.brandList = response.data;
                    //console.log(response.data);
                });
            }
        },           

        created(){
            
        },
           
        mounted() {
            this.fetchBrand();
        },
    }
	
</script>