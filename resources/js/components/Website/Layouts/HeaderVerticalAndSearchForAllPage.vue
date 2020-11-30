<template>
<div class="d-none d-xl-block bg-primary">
    <div class="container">
        <div class="row align-items-stretch min-height-50">
            <!-- Vertical Menu -->
            <div class="col-md-auto d-none d-xl-flex align-items-end">
                <div class="max-width-270 min-width-270">
                    <!-- Basics Accordion -->
                    <div id="basicsAccordion">
                        <!-- Card -->
                        <div class="card border-0 rounded-0">
                            <div class="card-header bg-primary rounded-0 card-collapse border-0" id="basicsHeadingOne">
                                <button type="button" class="btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90"
                                    data-toggle="collapse"
                                    data-target="#basicsCollapseOne"
                                    aria-expanded="true"
                                    aria-controls="basicsCollapseOne">
                                    <span class="pl-1 text-gray-90">Shop By Department</span>
                                    <span class="text-gray-90 ml-3">
                                        <span class="ec ec-arrow-down-search"></span>
                                    </span>
                                </button>
                            </div>
                            <div id="basicsCollapseOne" class="collapse vertical-menu v1"
                                aria-labelledby="basicsHeadingOne"
                                data-parent="#basicsAccordion">
                                <div class="card-body p-0">
                                    <nav class="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized">
                                        <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                                            <ul class="navbar-nav u-header__navbar-nav border-primary border-top-0">
                                                <li class="nav-item u-header__nav-item"
                                                    data-event="hover"
                                                    data-position="left">
                                                    <a href="#" class="nav-link u-header__nav-link font-weight-bold">Value of the Day</a>
                                                </li>
                                                <li class="nav-item u-header__nav-item"
                                                    data-event="hover"
                                                    data-position="left">
                                                    <a href="#" class="nav-link u-header__nav-link font-weight-bold">Top 100 Offers</a>
                                                </li>
                                                <li class="nav-item u-header__nav-item"
                                                    data-event="hover"
                                                    data-position="left">
                                                    <a href="#" class="nav-link u-header__nav-link font-weight-bold">New Arrivals</a>
                                                </li>
                                                <!-- Nav Item MegaMenu -->
                                                <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                                    data-event="hover"
                                                    data-animation-in="slideInUp"
                                                    data-animation-out="fadeOut"
                                                    data-position="left">
                                                    <a id="basicMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Computers & Accessories</a>

                                                    <!-- Nav Item - Mega Menu -->
                                                    <div class="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu">
                                                        <div class="vmm-bg">
                                                            <img class="img-fluid" src="website/assets/img/500X400/img1.png" alt="Image Description">
                                                        </div>
                                                        <div class="row u-header__mega-menu-wrapper">
                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Computers & Accessories</span>
                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Computers & Accessories</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Laptops, Desktops & Monitors</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Printers & Ink</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Networking & Internet Devices</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Computer Accessories</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Software</a></li>
                                                                    <li>
                                                                        <a class="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                                                            <div class="">All Electronics</div>
                                                                            <div class="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Office & Stationery</span>
                                                                <ul class="u-header__sub-menu-nav-group">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Office & Stationery</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Nav Item - Mega Menu -->
                                                </li>
                                                <!-- End Nav Item MegaMenu-->
                                                <!-- Nav Item MegaMenu -->
                                                <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                                    data-event="hover"
                                                    data-position="left">
                                                    <a id="basicMegaMenu1" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Cameras, Audio & Video</a>

                                                    <!-- Nav Item - Mega Menu -->
                                                    <div class="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu1">
                                                        <div class="vmm-bg">
                                                            <img class="img-fluid" src="website/assets/img/500X400/img4.png" alt="Image Description">
                                                        </div>
                                                        <div class="row u-header__mega-menu-wrapper">
                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Cameras & Photography</span>
                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Lenses</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Camera Accessories</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Security & Surveillance</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Binoculars & Telescopes</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Camcorders</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Software</a></li>
                                                                    <li>
                                                                        <a class="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                                                            <div class="">All Electronics</div>
                                                                            <div class="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Audio & Video</span>
                                                                <ul class="u-header__sub-menu-nav-group">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Audio & Video</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Headphones & Speakers</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Nav Item - Mega Menu -->
                                                </li>
                                                <!-- End Nav Item MegaMenu-->
                                                <!-- Nav Item MegaMenu -->
                                                <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                                    data-event="hover"
                                                    data-position="left">
                                                    <a id="basicMegaMenu2" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Mobiles & Tablets</a>

                                                    <!-- Nav Item - Mega Menu -->
                                                    <div class="hs-mega-menu vmm-tfw u-header__sub-menu vmm-bg-extended" aria-labelledby="basicMegaMenu2">
                                                        <div class="vmm-bg">
                                                            <img class="img-fluid" src="website/assets/img/500X400/img3.png" alt="Image Description">
                                                        </div>
                                                        <div class="row u-header__mega-menu-wrapper">
                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Mobiles & Tablets</span>
                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Mobile Phones</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Smartphones</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Refurbished Mobiles</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link border-top pt-2" href="#">All Mobile Accessories</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Cases & Covers</a></li>
                                                                    <li>
                                                                        <a class="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                                                            <div class="">All Electronics</div>
                                                                            <div class="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div class="col mb-3 mb-sm-0">
                                                                <ul class="u-header__sub-menu-nav-group">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Tablets</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Tablet Accessories</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Nav Item - Mega Menu -->
                                                </li>
                                                <!-- End Nav Item MegaMenu-->
                                                <!-- Nav Item MegaMenu -->
                                                <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                                    data-event="hover"
                                                    data-position="left">
                                                    <a id="basicMegaMenu3" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Movies, Music & Video</a>

                                                    <!-- Nav Item - Mega Menu -->
                                                    <div class="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu3">
                                                        <div class="vmm-bg">
                                                            <img class="img-fluid" src="website/assets/img/500X400/img2.png" alt="Image Description">
                                                        </div>
                                                        <div class="row u-header__mega-menu-wrapper">
                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Movies & TV Shows</span>
                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Movies & TV Shows</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All English</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">All Hindi</a></li>
                                                                </ul>
                                                                <span class="u-header__sub-menu-title">Video Games</span>
                                                                <ul class="u-header__sub-menu-nav-group">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">PC Games</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Consoles</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Accessories</a></li>
                                                                </ul>
                                                            </div>

                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Music</span>
                                                                <ul class="u-header__sub-menu-nav-group">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Music</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Indian Classical</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Musical Instruments</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Nav Item - Mega Menu -->
                                                </li>
                                                <!-- End Nav Item MegaMenu-->
                                                <!-- Nav Item MegaMenu -->
                                                <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                                    data-event="hover"
                                                    data-position="left">
                                                    <a id="basicMegaMenu4" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">TV & Audio</a>

                                                    <!-- Nav Item - Mega Menu -->
                                                    <div class="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu4">
                                                        <div class="vmm-bg">
                                                            <img class="img-fluid" src="website/assets/img/500X400/img5.png" alt="Image Description">
                                                        </div>
                                                        <div class="row u-header__mega-menu-wrapper">
                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Audio & Video</span>
                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Audio & Video</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Televisions</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Headphones</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Speakers</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Audio & Video Accessories</a></li>
                                                                    <li>
                                                                        <a class="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                                                            <div class="">Electro Home Appliances</div>
                                                                            <div class="u-nav-subtext font-size-11 text-gray-30">Available in select cities</div>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Music</span>
                                                                <ul class="u-header__sub-menu-nav-group">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Televisions</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Headphones</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Nav Item - Mega Menu -->
                                                </li>
                                                <!-- End Nav Item MegaMenu-->
                                                <!-- Nav Item MegaMenu -->
                                                <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                                    data-event="hover"
                                                    data-position="left">
                                                    <a id="basicMegaMenu5" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Watches & Eyewear</a>

                                                    <!-- Nav Item - Mega Menu -->
                                                    <div class="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu5">
                                                        <div class="vmm-bg">
                                                            <img class="img-fluid" src="website/assets/img/500X400/img6.png" alt="Image Description">
                                                        </div>
                                                        <div class="row u-header__mega-menu-wrapper">
                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Watches</span>
                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Watches</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Men's Watches</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Women's Watches</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Premium Watches</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Deals on Watches</a></li>
                                                                </ul>
                                                            </div>

                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Eyewear</span>
                                                                <ul class="u-header__sub-menu-nav-group">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Men's Sunglasses</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Nav Item - Mega Menu -->
                                                </li>
                                                <!-- End Nav Item MegaMenu-->
                                                <!-- Nav Item MegaMenu -->
                                                <li class="nav-item hs-has-mega-menu u-header__nav-item"
                                                    data-event="hover"
                                                    data-position="left">
                                                    <a id="basicMegaMenu3" class="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Car, Motorbike & Industrial</a>

                                                    <!-- Nav Item - Mega Menu -->
                                                    <div class="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu3">
                                                        <div class="vmm-bg">
                                                            <img class="img-fluid" src="website/assets/img/500X400/img7.png" alt="Image Description">
                                                        </div>
                                                        <div class="row u-header__mega-menu-wrapper">
                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Car & Motorbike</span>
                                                                <ul class="u-header__sub-menu-nav-group mb-3">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Cars & Bikes</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Car & Bike Care</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">Lubricants</a></li>
                                                                </ul>
                                                                <span class="u-header__sub-menu-title">Shop for Bike</span>
                                                                <ul class="u-header__sub-menu-nav-group">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Helmets & Gloves</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Bike Parts</a></li>
                                                                </ul>
                                                            </div>

                                                            <div class="col mb-3 mb-sm-0">
                                                                <span class="u-header__sub-menu-title">Industrial Supplies</span>
                                                                <ul class="u-header__sub-menu-nav-group">
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">All Industrial Supplies</a></li>
                                                                    <li><a class="nav-link u-header__sub-menu-nav-link" href="#">Lab & Scientific</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- End Nav Item - Mega Menu -->
                                                </li>
                                                <!-- End Nav Item MegaMenu-->
                                                <!-- Nav Item -->
                                                <li class="nav-item hs-has-sub-menu u-header__nav-item"
                                                    data-event="click"
                                                    data-animation-in="slideInUp"
                                                    data-animation-out="fadeOut"
                                                    data-position="left">
                                                    <a id="homeMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="homeSubMenu">Accessories</a>

                                                    <!-- Home - Submenu -->
                                                    <ul id="homeSubMenu" class="hs-sub-menu u-header__sub-menu animated hs-position-left fadeOut" aria-labelledby="homeMegaMenu" style="min-width: 230px; display: none;">
                                                        <!-- Home-v1 -->
                                                        <li class="hs-has-sub-menu">
                                                            <a class="nav-link u-header__sub-menu-nav-link " href="index.html">Home-v1</a>
                                                        </li>
                                                        <!-- End Home-v1 -->

                                                        <!-- Home-v2 -->
                                                        <li class="hs-has-sub-menu">
                                                            <a class="nav-link u-header__sub-menu-nav-link " href="home-v2.html">Home-v2</a>
                                                        </li>
                                                        <!-- End Home-v2 -->

                                                        <!-- Home-v3 -->
                                                        <li class="hs-has-sub-menu">
                                                            <a class="nav-link u-header__sub-menu-nav-link " href="home-v3.html">Home-v3</a>
                                                        </li>
                                                        <!-- End Home-v3 -->

                                                        <!-- Home-v4 -->
                                                        <li class="hs-has-sub-menu">
                                                            <a class="nav-link u-header__sub-menu-nav-link " href="home-v4.html">Home-v4</a>
                                                        </li>
                                                        <!-- End Home-v4 -->
                                                    </ul>
                                                    <!-- End Home - Submenu -->
                                                </li>
                                                <!-- End Nav Item -->
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <!-- End Card -->
                    </div>
                    <!-- End Basics Accordion -->
                </div>
            </div>
            <!-- End Vertical Menu -->
            <!-- Search bar -->
            <div class="col align-self-center">
                <!-- Search-Form -->
                <form class="js-focus-state">
                    <label class="sr-only" for="searchProduct">Search</label>
                    <div class="input-group">
                        <input type="email" class="form-control py-2 pl-5 font-size-15 border-0 height-40 rounded-left-pill" name="email" id="searchProduct" placeholder="Search for Products" aria-label="Search for Products" aria-describedby="searchProduct1" required>
                        <div class="input-group-append">
                            <!-- Select -->
                            <select class="js-select selectpicker dropdown-select custom-search-categories-select"
                                data-style="btn height-40 text-gray-60 font-weight-normal border-0 rounded-0 bg-white px-5 py-2">
                                <option value="one" selected>All Categories</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                                <option value="four">Four</option>
                            </select>
                            <!-- End Select -->
                            <button class="btn btn-dark height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                                <span class="ec ec-search font-size-24"></span>
                            </button>
                        </div>
                    </div>
                </form>
                <!-- End Search-Form -->
            </div>
            <!-- End Search bar -->
            <!-- Header Icons -->
            <div class="col-md-auto align-self-center">
                <div class="d-flex">
                    <ul class="d-flex list-unstyled mb-0">
                        <li class="col"><a href="../shop/compare.html" class="text-gray-90" data-toggle="tooltip" data-placement="top" title="Compare"><i class="font-size-22 ec ec-compare"></i></a></li>
                        <li class="col"><a href="../shop/wishlist.html" class="text-gray-90" data-toggle="tooltip" data-placement="top" title="Favorites"><i class="font-size-22 ec ec-favorites"></i></a></li>
                        <li class="col pr-0">
                            <router-link to="/cart" class="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="Cart">
                                <i class="font-size-22 ec ec-shopping-bag"></i>
                                <span class="width-22 height-22 bg-dark position-absolute flex-content-center text-white rounded-circle left-12 top-8 font-weight-bold font-size-12">2</span>
                                <span class="font-weight-bold font-size-16 text-gray-90 ml-3">$1785.00</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- End Header Icons -->
        </div>
    </div>
</div>
</template>
<script></script>