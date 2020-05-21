<template>
	
	<table class="table table-striped table-sm">
      <thead>
        <tr>
          <th style="width: 5%">#</th>
          <th style="width: 35%">Name</th>
          <th style="width: 35px">Parent</th>
          <th style="width: 10%">Status</th>
          <th style="width: 20%; text-align:right;">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Name</td>
          <td>Sub</td>
          <td>
            Status
          </td>

          <td class="text-right">
          	<a  class="btn btn-danger- btn-flat btn-sm" data-toggle="tooltip" data-placement="right" title="Click to Unactive">  <i class="far fa-thumbs-down danger"></i>  </a>
            <a class="btn  btn-primary- btn-flat btn-sm">
                <i class="fas fa-edit primary "></i>
            </a> 
            <a class="btn btn-block- btn-danger- btn-flat btn-sm" id="delete">
               <i class="far fa-trash-alt red"></i>
            </a>
          </td>
        </tr>


      </tbody>
    </table>

</template>