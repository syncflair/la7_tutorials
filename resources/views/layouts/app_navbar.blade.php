<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <p class="LogoTextStyle" style="">
                        <Span style="font-size: 20px;">Sorboraho</Span>
                        <Span style="font-size: 17px;">সরবরাহ</Span>
                    </p>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('contact-us', app()->getLocale() ) }}">{{ __('menu.contactus')}}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('auth-check', app()->getLocale() ) }}">{{ __('menu.authentication') }}</a>
                            </li>
                            
                        @guest
                            
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('customer.login' ) }}">{{ __('menu.customer') }}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('supplier.login' ) }}">{{ __('menu.supplier') }}</a>
                            </li>
                          
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login-abc' ) }}">{{ __('menu.login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register' ) }}">{{ __('menu.register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                    <!-- {{ Auth::guard('customer')->check() }} -->
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                                    @if(Auth::guard('customer')->check() )
                                            <a class="dropdown-item" href="{{url('/dashboard-customer' )}}" >
                                                My Account
                                            </a>
                                    @endif
                                    @if( Auth::guard('supplier')->check())
                                        <a class="dropdown-item" href="{{url('/dashboard-supplier' )}}" >
                                            My Account
                                        </a>
                                    @endif
                                    @if(Auth::guard()->check())
                                        <a class="dropdown-item" href="{{url('/dashboard' )}}" >
                                            My Account
                                        </a>
                                    @endif



                                    @if(Auth::guard('customer')->check())
                                        <a class="dropdown-item" href="{{ route('customer.logout') }}"
                                           onclick="event.preventDefault();
                                                         document.getElementById('logout-form').submit(); ">
                                            {{ __('customer Logout') }}
                                        </a>
                                   
                                        <form id="logout-form" action="{{route('customer.logout' )}}" method="POST" style="display:none;">
                                            @csrf
                                        </form>
                                    @endif
                                    @if(Auth::guard('supplier')->check())
                                        <a class="dropdown-item" href="{{ route('supplier.logout') }}"
                                           onclick="event.preventDefault();
                                                         document.getElementById('logout-form').submit(); ">
                                            {{ __('Supplier Logout') }}
                                        </a>
                                   
                                        <form id="logout-form" action="{{route('supplier.logout' )}}" method="POST" style="display:none;">
                                            @csrf
                                        </form>
                                    @endif
                                    @if(Auth::guard()->check())
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                           onclick="event.preventDefault();
                                                         document.getElementById('logout-form').submit(); ">
                                            {{ __('Logout') }}
                                        </a>
                                   
                                        <form id="logout-form" action="{{route('logout' )}}" method="POST" style="display:none;">
                                            @csrf
                                        </form>
                                    @endif


                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                        @php $locale = session()->get('locale'); @endphp

                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                @switch($locale)
                                    @case('en')
                                    <img src="{{asset('FilesStorage/CommonFiles/en_lang.png')}}" width="30px" height="20x"> English
                                    @break
                                    @case('bn')
                                    <img src="{{asset('FilesStorage/CommonFiles/bn_lang.png')}}" width="30px" height="20x"> {{ __('menu.bangla') }}
                                    @break
                                    
                                    @default
                                    <img src="{{asset('FilesStorage/CommonFiles/en_lang.png')}}" width="30px" height="20x"> English
                                @endswitch

                                <span class="caret"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ URL::to('/en') }}"><img src="{{asset('FilesStorage/CommonFiles/en_lang.png')}}" width="30px" height="20x"> English</a>
                                <a class="dropdown-item" href="{{ URL::to('/bn') }}"><img src="{{asset('FilesStorage/CommonFiles/bn_lang.png')}}" width="30px" height="20x"> {{ __('menu.bangla') }}</a>
                            </div>
                        </li>
                </ul>

            </div>
        </nav>