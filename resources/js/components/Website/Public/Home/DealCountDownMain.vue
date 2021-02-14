<template>
<!-- Deal -->
<div class="mb-6">
    <h4 class="font-size-22 text-gray-100 mb-3">Deals of the Week</h4>
    <div class="p-xl-4 p-wd-0 border border-width-2 border-primary borders-radius-20 border-wd-0">
        <div class="js-slick-carousel u-slick u-slick--gutters-2 u-slick-deal-arrow__border"
            data-slides-show="2"
            data-slides-scroll="1"
            data-pagi-classes="text-center d-xl-none d-wd-flex mt-4 u-slick__pagination u-slick__pagination--long"
            data-arrows-classes="d-none d-xl-inline-flex d-wd-none align-items-center u-slick__arrow-normal u-slick-deal-arrow position-absolute z-index-9 font-size-18 top-3"
            data-arrow-left-classes="fa fa-angle-left right-xl-220 u-slick-deal-arrow__left"
            data-arrow-right-classes="fa fa-angle-right right-1 u-slick-deal-arrow__right"
            data-responsive='[{
                "breakpoint": 1399,
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
            
            <div class="js-slide">
                <div class="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                    <div class="row align-items-md-center">
                        <div class="col-md-6 col-xl-6 col-wd-6 px-0 align-self-center">
                            <div class="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                <div class="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                    <span class="font-size-12">Save</span>
                                    <div class="font-size-20 font-weight-bold">$120</div>
                                </div>
                            </div>
                            <div class="mb-4 mb-md-0">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <a href="../shop/single-product-fullwidth.html" class="d-block text-center"><img class="img-fluid mx-auto" v-lazy="baseURL+'/website/assets/img/380X350/img1.jpg'" alt="Image Description"></a>
                                    </div>

                                    <!-- <div class="col-auto d-none d-xl-block d-wd-none">
                                        <ul class="list-group rounded-0">
                                            <li class="list-group-item my-1 p-0 border-0">
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img2.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #02"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img2.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img3.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #03"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img3.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-wd-6">
                            <div class="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                <h5 class="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <del class="font-size-18 mr-2 text-gray-2">$99,00</del>
                                    <ins class="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                </div>
                                <div class="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span class="">Availavle: <strong>6</strong></span>
                                        <span class="">Already Sold: <strong>28</strong></span>
                                    </div>
                                    <div class="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                        <span class="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <h6 class="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                    <div class="js-countdown d-flex justify-content-center"
                                        data-end-date="2020/12/10 21:30:00"
                                        data-days-format="%D"
                                        data-hours-format="%H"
                                        data-minutes-format="%M"
                                        data-seconds-format="%S">
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-days"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">DAY</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-hours"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">HOURS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-minutes"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">MINS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-seconds"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">SECS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="js-slide">
                <div class="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                    <div class="row align-items-md-center">
                        <div class="col-md-6 col-xl-6 col-wd-6 px-0 align-self-center">
                            <div class="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                <div class="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                    <span class="font-size-12">Save</span>
                                    <div class="font-size-20 font-weight-bold">$120</div>
                                </div>
                            </div>
                            <div class="mb-4 mb-md-0">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <a href="../shop/single-product-fullwidth.html" class="d-block text-center"><img class="img-fluid mx-auto" v-lazy="baseURL+'/website/assets/img/380X350/img2.jpg'" alt="Image Description"></a>
                                    </div>

                                    <!-- <div class="col-auto d-none d-xl-block d-wd-none">
                                        <ul class="list-group rounded-0">
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img2.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #02"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img2.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img3.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #03"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img3.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-wd-6">
                            <div class="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                <h5 class="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <del class="font-size-18 mr-2 text-gray-2">$99,00</del>
                                    <ins class="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                </div>
                                <div class="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span class="">Availavle: <strong>6</strong></span>
                                        <span class="">Already Sold: <strong>28</strong></span>
                                    </div>
                                    <div class="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                        <span class="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <h6 class="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                    <div class="js-countdown d-flex justify-content-center"
                                        data-end-date="2021/01/05"
                                        data-days-format="%D"
                                        data-hours-format="%H"
                                        data-minutes-format="%M"
                                        data-seconds-format="%S">
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-days"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">DAY</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-hours"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">HOURS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-minutes"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">MINS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-seconds"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">SECS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="js-slide">
                <div class="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                    <div class="row align-items-md-center">
                        <div class="col-md-6 col-xl-6 col-wd-6 px-0 align-self-center">
                            <div class="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                <div class="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                    <span class="font-size-12">Save</span>
                                    <div class="font-size-20 font-weight-bold">$120</div>
                                </div>
                            </div>
                            <div class="mb-4 mb-md-0">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <a href="../shop/single-product-fullwidth.html" class="d-block text-center"><img class="img-fluid mx-auto" v-lazy="baseURL+'/website/assets/img/380X350/img1.jpg'" alt="Image Description"></a>
                                    </div>

                                    <!-- <div class="col-auto d-none d-xl-block d-wd-none">
                                        <ul class="list-group rounded-0">
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img2.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #02"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img2.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img3.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #03"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img3.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-wd-6">
                            <div class="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                <h5 class="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <del class="font-size-18 mr-2 text-gray-2">$99,00</del>
                                    <ins class="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                </div>
                                <div class="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span class="">Availavle: <strong>6</strong></span>
                                        <span class="">Already Sold: <strong>28</strong></span>
                                    </div>
                                    <div class="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                        <span class="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <h6 class="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                    <div class="js-countdown d-flex justify-content-center"
                                        data-end-date="2020/11/30"
                                        data-hours-format="%H"
                                        data-minutes-format="%M"
                                        data-seconds-format="%S">
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-hours"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">HOURS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-minutes"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">MINS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-seconds"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">SECS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="js-slide">
                <div class="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                    <div class="row align-items-md-center">
                        <div class="col-md-6 col-xl-6 col-wd-6 px-0 align-self-center">
                            <div class="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                <div class="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                    <span class="font-size-12">Save</span>
                                    <div class="font-size-20 font-weight-bold">$120</div>
                                </div>
                            </div>
                            <div class="mb-4 mb-md-0">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <a href="../shop/single-product-fullwidth.html" class="d-block text-center"><img class="img-fluid mx-auto" v-lazy="baseURL+'/website/assets/img/380X350/img2.jpg'" alt="Image Description"></a>
                                    </div>

                                    <!-- <div class="col-auto d-none d-xl-block d-wd-none">
                                        <ul class="list-group rounded-0">
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img2.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #02"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img2.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img3.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #03"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img3.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-wd-6">
                            <div class="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                <h5 class="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <del class="font-size-18 mr-2 text-gray-2">$99,00</del>
                                    <ins class="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                </div>
                                <div class="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span class="">Availavle: <strong>6</strong></span>
                                        <span class="">Already Sold: <strong>28</strong></span>
                                    </div>
                                    <div class="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                        <span class="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <h6 class="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                    <div class="js-countdown d-flex justify-content-center"
                                        data-end-date="2020/11/30"
                                        data-hours-format="%H"
                                        data-minutes-format="%M"
                                        data-seconds-format="%S">
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-hours"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">HOURS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-minutes"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">MINS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-seconds"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">SECS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="js-slide">
                <div class="p-4 p-xl-0 p-wd-4 border border-xl-0 border-width-2 border-primary borders-radius-20 bg-white">
                    <div class="row align-items-md-center">
                        <div class="col-md-6 col-xl-6 col-wd-6 px-0 align-self-center">
                            <div class="d-inline-flex justify-content-between align-items-center position-absolute left-3 top-0 z-index-9">
                                <div class="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                                    <span class="font-size-12">Save</span>
                                    <div class="font-size-20 font-weight-bold">$120</div>
                                </div>
                            </div>
                            <div class="mb-4 mb-md-0">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <a href="../shop/single-product-fullwidth.html" class="d-block text-center"><img class="img-fluid mx-auto" v-lazy="baseURL+'/website/assets/img/380X350/img1.jpg'" alt="Image Description"></a>
                                    </div>

                                    <!-- <div class="col-auto d-none d-xl-block d-wd-none">
                                        <ul class="list-group rounded-0">
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img2.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #02"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img2.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img3.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #03"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img3.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                            <li class="list-group-item my-1 p-0 border-0">
                                                
                                                <a class="js-fancybox max-width-70 u-media-viewer" href="javascript:;"
                                                    data-src="website/assets/img/1920X1080/img1.jpg"
                                                    data-fancybox="fancyboxGallery6"
                                                    data-caption="Electro in frames - image #01"
                                                    data-speed="700"
                                                    data-is-infinite="true">
                                                    <img class="img-fluid border" src="website/assets/img/100X100/img1.jpg" alt="Image Description">

                                                    <span class="u-media-viewer__container">
                                                        <span class="u-media-viewer__icon">
                                                            <span class="fas fa-plus u-media-viewer__icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                                
                                            </li>
                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-6 col-wd-6">
                            <div class="space-top-xl-2 space-top-wd-0 mt-xl-4 mt-wd-0">
                                <h5 class="mb-3 mb-xl-2 mb-wd-1 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" class="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <del class="font-size-18 mr-2 text-gray-2">$99,00</del>
                                    <ins class="font-size-xl-30 font-size-wd-25 text-red text-decoration-none">$79,00</ins>
                                </div>
                                <div class="mb-4 mb-xl-5 mb-wd-2 pb-wd-1 mx-2">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span class="">Availavle: <strong>6</strong></span>
                                        <span class="">Already Sold: <strong>28</strong></span>
                                    </div>
                                    <div class="rounded-pill bg-gray-3 height-wd-14 height-xl-20 position-relative">
                                        <span class="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <h6 class="font-size-15 text-gray-2 text-center mb-xl-3 mb-wd-2">Hurry Up! Offer ends in:</h6>
                                    <div class="js-countdown d-flex justify-content-center"
                                        data-end-date="2020/11/30"
                                        data-hours-format="%H"
                                        data-minutes-format="%M"
                                        data-seconds-format="%S">
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-hours"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">HOURS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-minutes"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">MINS</div>
                                        </div>
                                        <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                                        <div class="text-lh-1">
                                            <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                                                <span class="js-cd-seconds"></span>
                                            </div>
                                            <div class="text-gray-2 font-size-12 text-center">SECS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Deal -->

</template>
<script></script>