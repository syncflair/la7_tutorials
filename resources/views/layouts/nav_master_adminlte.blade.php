
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">

      <!--Taggle Link-->
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" id="pushmenu_toggle" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>

      <!--Sales Link-->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
           <i class="fas fa-money-check-alt top-fa-size"></i>  Authentication
        </a>
        
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-left">

          @if( @GetAuthUserRolePermission()->user->page != null ) 
          <a href="{{route('user.index')}}" class="dropdown-item {{ Request::is('user*') ? 'active' : '' }}">
            <i class="fas fa-envelope mr-2"></i> User
          </a>
          @endif

          @if( @GetAuthUserRolePermission()->role->page != null ) 
          <div class="dropdown-divider"></div>
          <a href="{{route('role.index')}}" class="dropdown-item {{ Request::is('role*') ? 'active' : '' }}">
            <i class="fas fa-users mr-2"></i> Role
          </a>
          @endif

          @if( @GetAuthUserRolePermission()->permission->page != null ) 
          <div class="dropdown-divider"></div>
          <a href="{{route('permission.index')}}" class="dropdown-item {{ Request::is('permission*') ? 'active' : '' }}">
            <i class="fas fa-file mr-2"></i> Permission
          </a>
          @endif

        
          <div class="dropdown-divider"></div>
          <a href="{{route('profile.index')}}" class="dropdown-item {{ Request::is('profile*') ? 'active' : '' }}">
            <i class="fas fa-file mr-2"></i> User Profile
          </a>

          <!--
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Authentication</a> -->
        </div>
      </li>

      
     
     <!--  <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link"><i class="fas fa-users-cog top-fa-size "></i> HRM</a>
      </li>

      <li class="nav-item nav-item-btn">
        <a type="button" class="btn btn-block btn-sm btn-outline-success-"> 
          <i class="fas fa-plus"></i>
           Sale</a>
      </li>

      <li class="nav-item nav-item-btn">
        <a type="button" class="btn btn-block btn-sm btn-outline-success-"> 
          <i class="fas fa-plus"></i> Purchase</a>
      </li>


      <li class="nav-item nav-item-btn">
        <a type="button" class="btn btn-block btn-sm btn-outline-success-"> 
          <i class="fas fa-plus"></i> Expences</a>
      </li>

      <li class="nav-item nav-item-btn">
        <a type="button" onclick="click_me()" class="btn btn-block btn-sm"> <i class="fas fa-plus"></i>  Click </a>
      </li> -->



     
    </ul>
    <!-- /Left navbar links -->

    <!-- SEARCH FORM -->
    <!--<form class="form-inline ml-3 d-none d-sm-inline-block">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>-->

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">

       <!-- Show Clock Here -->
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" title="Clock" class="nav-link"><i class="far fa-clock"></i></a>
      </li>


      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img src="{{asset('backend/AdminLTE/img/user1-128x128.jpg')}}" alt="User Avatar" class="img-size-50 mr-3 img-circle">
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
              <img src="{{asset('backend/AdminLTE/img/user8-128x128.jpg')}}" alt="User Avatar" class="img-size-50 img-circle mr-3">
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
              <img src="{{asset('backend/AdminLTE/img/user3-128x128.jpg')}}" alt="User Avatar" class="img-size-50 img-circle mr-3">
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
          <counttest></counttest>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
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
      

     <!-- <li class="nav-item dropdown">
          <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
              {{ Auth::user()->name }} <span class="caret"></span>
          </a>

          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="{{ route('logout') }}"
                 onclick="event.preventDefault();
                               document.getElementById('logout-form').submit();">
                  {{ __('Logout') }}
              </a>

              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                  @csrf
              </form>
          </div>
      </li> -->

      <li class="nav-item">        
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">         
          <i class="fas fa-cogs"></i>
        </a>
      </li>

      <li class="dropdown user user-menu open">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
            @if(!empty( UserAvatar() ))
              <img src="{{ asset( UserAvatar() ) }}" class="user-image" alt="User Image" style="//witdh:30px; //height: 30px;">
            @else
                <img src="{{asset('FilesStorage/CommonFiles/avatar.png')}}" class="user-image" alt="User Image" style="//witdh:30px; //height: 30px;">
            @endif
            <!--<span class="hidden-xs">{{ Auth::user()->name }}</span>-->
          </a>
          <ul class="dropdown-menu">
            <!-- User image -->
            <li class="user-header">
              @if(!empty( UserAvatar() ))
                  <img src="{{ asset(UserAvatar()) }}" class="img-circle" alt="User Image" style="//witdh:90px; //height: 90px;">
              @else
                <img src="{{asset('FilesStorage/CommonFiles/avatar.png')}}" class="img-circle" alt="User Image" style="//witdh:90px; //height: 90px;">
              @endif

              <p>
                {{ Auth::user()->name }}
                <small>Member since Nov. {{ \Carbon\Carbon::parse(Auth::user()->created_at)->format('j F, Y') }}</small>

              </p>
            </li>
            <!-- Menu Body -->
            <li class="user-body">
              <div class="row">
                <div class="col-xs-4 text-center">
                  <a href="#">Followers</a>
                </div>
                <div class="col-xs-4 text-center">
                  <a href="#">Sales</a>
                </div>
                <div class="col-xs-4 text-center">
                  <a href="#">Friends</a>
                </div>
              </div>
              <!-- /.row -->
            </li>
            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-left">
                <a href="{{ route('profile.index')}}" class="btn btn-block btn-outline-info btn-flat">Click Profile</a>
              </div>
              <div class="pull-right">
                <!--<a href="#" class="btn btn-block btn-outline-danger btn-flat">Sign out</a>-->
                  <a class="dropdown-item- btn btn-block btn-outline-danger btn-flat" href="{{ route('logout') }}"
                     onclick="event.preventDefault();
                                   document.getElementById('logout-form').submit();">
                      {{ __('Logout') }}
                  </a>

                  <form id="logout-form" action="{{ route('logout')}}" method="POST" style="display: none;">
                      @csrf
                  </form>
              </div>
            </li>
          </ul>
      </li>


    </ul>
  </nav>
<!-- /.navbar