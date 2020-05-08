 <!-- @foreach ()    
                       <tr>
                        <td>{{$user->id}}</td>
                        <td>{{$user->name}}</td>
                        <td>{{$user->email}}</td>
                        <td>{{$user->role_name}}</td>
                        <td>{{$user->role_id}}</td>
                        <td style="text-align: right;">              
                            <a class="btn  btn-primary- btn-flat btn-sm" href="">
                                <i class="fas fa-eye info"></i>
                            </a>

                            <a class="btn  btn-primary- btn-flat btn-sm" href="">
                                <i class="fas fa-edit primary "></i>
                            </a>
                            <?php //if( $user->id != Auth::user()->id ){  ?> 
                              <a class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete" href="">
                                  <i class="far fa-trash-alt red"></i>
                              </a>
                            <?php // } ?>
                        </td>
                      </tr>
                    @endforeach -->