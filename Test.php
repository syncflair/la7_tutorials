<!-- <ul>Here sub_category is function in Category Model -->
    <!-- @foreach( \App\Models\Category::with('sub_category')->where('parent_id', null)->get() as $category )
      @if($category->sub_category->count() > 0)
        <li>{{ $category->cat_name }}</li>

        @foreach($category->sub_category as $sub_category )
          <ul>
            <li> {{ $sub_category->cat_name }}</li>
          </ul>
        @endforeach

      @else
        <li>{{ $category->cat_name }}</li>
      @endif
    @endforeach -->
    <!-- </ul> -->