@foreach ($roles as $role)
                      <tr>                     
                          <td>
                            <?php
                              if($role->is_enabled == 1){ echo $role->id; }
                              else{ echo '<span class="red">'.$role->id.'</span>'; }
                            ?>
                          </td>
                          <td>
                            <?php
                              if($role->is_enabled == 1){ echo $role->name; }
                              else{ echo '<span class="red">'.$role->name.'</span>'; }
                            ?>
                          </td>
                          <td>
                            <?php 
                              if($role->is_enabled == 1){
                                  echo '<span class="btn btn-flat btn-success btn-sm">Active</span>';
                              }else{ 
                                  echo '<span class="btn btn-flat btn-danger btn-sm">Unactive</span>';
                              }
                            ?>
                          </td>
                          <td style="text-align: right;">
                            <?php
                              if($role->is_enabled == 1){
                                echo '<a onclick="RoleUnactive('.$role->id.')" class="btn btn-danger- btn-flat btn-sm" data-toggle="tooltip" data-placement="right" title="Click to Unactive" >                
                                    <i class="far fa-thumbs-down danger"></i>
                                  </a>';

                              }elseif($role->is_enabled == 0){
                                  echo '<a onclick="RoleActive('.$role->id.')" class="use-tooltip btn btn-success- btn-flat btn-sm" data-toggle="tooltip" data-placement="left" title="Click to Active" >                
                                    <i class="far fa-thumbs-up success"></i>
                                  </a>';
                              }
                            ?>

                            <a onclick="EditRole(<?php echo $role->id; ?>)" class="btn  btn-primary- btn-flat btn-sm">
                                <i class="fas fa-edit primary "></i>
                            </a>
                                
                            <a onclick="DeleteRole(<?php echo $role->id; ?>)" class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete" >
                                <i class="far fa-trash-alt red"></i>
                            </a>
                          </td>                    
                      </tr>
                     @endforeach