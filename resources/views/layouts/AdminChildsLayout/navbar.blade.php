<nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
    <div class="container">

      <!-- Role base route for admin child dashboard -->
      @if(Auth::user()->role_id == 7) <!-- sales = 7 -->
        <router-link to="/dashboard-sales" class="navbar-brand">
      @endif
      @if(Auth::user()->role_id == 8) <!-- purchase = 8 -->
        <router-link to="/dashboard-purchase" class="navbar-brand">
      @endif
      @if(Auth::user()->role_id == 9) <!-- storage = 9 -->
        <router-link to="/dashboard-storage" class="navbar-brand">
      @endif
      @if(Auth::user()->role_id == 10) <!-- order = 10 -->
        <router-link to="/dashboard-order" class="navbar-brand">
      @endif
      @if(Auth::user()->role_id == 11) <!-- packaging = 11 -->
        <router-link to="/dashboard-packaging" class="navbar-brand">
      @endif
      @if(Auth::user()->role_id == 13) <!-- Delivery = 13 -->
        <router-link to="/dashboard-delivery" class="navbar-brand">
      @endif
      @if(Auth::user()->role_id == 14) <!-- Supervisor = 14 -->
        <router-link to="/dashboard-supervisor" class="navbar-brand">
      @endif
      @if(Auth::user()->role_id == 17) <!-- Guest user = 17 -->
        <router-link to="/dashboard-guest-user" class="navbar-brand">
      @endif
      
        <img src="{{asset('FilesStorage/CommonFiles/favicon.png')}}" alt="Sorboraho Logo" class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">Dashboard</span> <!-- {{ Auth::user()->role_id }} -->
      </router-link>

      <a class="navbar-brand" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      

<!-- 
      <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse order-3" id="navbarCollapse">
        
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="index3.html" class="nav-link">Home</a>
          </li>
          
        </ul>
      
        <form class="form-inline ml-0 ml-md-3">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>

      </div> -->




      <!-- Right navbar links -->
      <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
        <!-- Messages Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="fas fa-comments"></i>
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <img src="{{asset('/FilesStorage/CommonFiles/favicon.png')}}" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Brad Diesel
                    <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">Call me whenever you can...</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <img src="{{asset('/FilesStorage/CommonFiles/favicon.png')}}" alt="User Avatar" class="img-size-50 img-circle mr-3">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    John Pierce
                    <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">I got your message bro</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <!-- Message Start -->
              <div class="media">
                <img src="{{asset('/FilesStorage/CommonFiles/favicon.png')}}" alt="User Avatar" class="img-size-50 img-circle mr-3">
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              <!-- Message End -->
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        <!-- Notifications Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
              class="fas fa-th-large"></i></a>
        </li>

        <li class="nav-item dropdown">
            <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">{{ Auth::user()->name }} </a>
            <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow dropdown-menu-right">
              <li><router-link to="/spaa/admin-user-profile" class="dropdown-item"><i class="far fa-user-circle"></i> My Account</router-link></li>

              <!-- <li class="dropdown-divider"></li> -->
              <!-- <li><a href="#" class="dropdown-item"><i class="fas fa-cart-plus green"></i> Wishlist</a></li>
              <li><a href="#" class="dropdown-item"><i class="fas fa-shopping-bag green"></i> Cart</a></li> 
              <li><a href="#" class="dropdown-item"><i class="fas fa-shopping-basket green"></i> Order</a></li>

              <li><a href="#" class="dropdown-item"><i class="fas fa-download blue"></i> Download</a></li>
              <li><a href="#" class="dropdown-item"><i class="far fa-address-card"></i> Address</a></li> -->

              <li class="dropdown-divider"></li>
               @if(Auth::guard()->check())
                    <a class="dropdown-item" href="{{ route('logout') }}"
                       onclick="event.preventDefault();
                                     document.getElementById('logout-form').submit(); ">
                        <i class="fas fa-sign-out-alt red"></i>
                        {{ __('Logout') }}
                    </a>               
                    <form id="logout-form" action="{{route('logout' )}}" method="POST" style="display:none;">
                        @csrf
                    </form>
                @endif
            
              <!-- End Level two -->
            </ul>
          </li>
      </ul>
    </div>
  </nav>