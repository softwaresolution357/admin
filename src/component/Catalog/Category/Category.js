import React from 'react';
import {Link} from 'react-router-dom';
export const Category = () =>{
    return (
<div class="content-page">
   
    <div class="content">
        <div class="container-fluid">
            <div class="page-title-box">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <h4 class="page-title">Product Listing</h4>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
                            <li class="breadcrumb-item"><a href="javascript:void(0);">Tables</a></li>
                            <li class="breadcrumb-item active">Data Table</li>
                        </ol>
                    </div>
                    <div class="col-sm-6">
                        <div class="float-right d-none d-md-block">
                            <div class="dropdown">
                               <Link to={{pathname:'/AddCategory'}}> <button class="btn btn-primary dropdown-toggle arrow-none waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-settings mr-2"></i> Add Category</button>
                                </Link>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="mt-0 header-title">Listing</h4>
                            <p class="text-muted m-b-30">DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function: </p>
                            <div id="datatable_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                
								<div class="row">
    <div class="col-sm-12 col-md-2">
        <div class="dataTables_length" id="datatable_length">
            <label>Show entries
                <select name="datatable_length" aria-controls="datatable" class="custom-select custom-select-sm form-control form-control-sm">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select> </label>
        </div>
    </div>
	
    <div class="col-sm-12 col-md-10">
        <div id="datatable_filter" class="dataTables_filter">
            <label>Search:
                <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="datatable" />
            </label>
        </div>
    </div>
	
	
	
</div>
								
                                <div class="row">
                                 <div class="table-responsive">
    <table class="table mb-0">
        <thead>
            <tr>
                <th><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1" ></label></div></th>
                <th>Product Listing</th>
                <th>Inventory</th>                
				<th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1"></label></div></th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50" /> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>                
				<td>				 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			
			
			<tr>
                <th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1"></label></div></th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50" /> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>                
				<td>				 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			
			
			<tr>
                <th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1"/> <label class="custom-control-label" for="customCheck1" ></label></div></th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50" /> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>                
				<td>				 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			
			
			<tr>
                <th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1"/> <label class="custom-control-label" for="customCheck1"></label></div></th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50" /> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>                
				<td>				 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			
			
			<tr>
                <th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1"/> <label class="custom-control-label" for="customCheck1" ></label></div></th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50" /> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>                
				<td>				 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			</tbody>
    </table>
</div>
                                </div><br/><br/>
                                <div class="row">
                                    <div class="col-sm-12 col-md-7">
                                        <div class="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                    </div>
                                    <div class="col-sm-12 col-md-5">
                                        <div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                                            <ul class="pagination">
                                                <li class="paginate_button page-item previous disabled" id="datatable_previous"><a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
                                                <li class="paginate_button page-item active"><a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                                <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                                <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                                <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="4" tabindex="0" class="page-link">4</a></li>
                                                <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="5" tabindex="0" class="page-link">5</a></li>
                                                <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="6" tabindex="0" class="page-link">6</a></li>
                                                <li class="paginate_button page-item next" id="datatable_next"><a href="#" aria-controls="datatable" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li>
                                            </ul>
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
    )
}

export const AddCategory = () =>{
    return(
        <div class="content-page">
           
            <div class="content">
                <div class="container-fluid">
                    <div class="page-title-box">
                        <div class="row align-items-center">
                            <div class="col-sm-12">
                                <h4 class="page-title"> Category Entry</h4>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active">Welcome to Dashboard</li>
                                </ol>
                            </div>
                            
                        </div>
                    </div>
                   
                    <div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">	
			<h4 class="mt-0 header-title">Category Entry</h4><br/>		
			<form class="outer-repeater">
                    <div data-repeater-list="outer-group" class="outer">
                        <div data-repeater-item="" class="outer">
                            <div class="form-group">
                                <label for="formname">Name :</label>
                                <input type="text" class="form-control" id="formname" placeholder="Enter your Name..." />
                            </div>
                            							
							<div class="form-group">
                                <label for="formmessage">Description :</label>
                                <textarea id="formmessage" class="form-control" rows="3"></textarea>
                            </div>
							
							<div class="form-group">
    <label class="control-label">Parent Category</label>
    <select class="form-control select2 select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
        <option data-select2-id="3">Select</option>
        <optgroup label="">
            <option value="AK">Parent Category-1</option>
            <option value="HI">Parent Category-2</option>
        </optgroup>
    </select>
</div>
							
							<div class="form-group">
                                <label for="formmessage">Tag Line :</label>
                                <input class="form-control" type="text"  id="example-number-input" />
                            </div>
							
							<div class="form-group">
                                <label for="formname">Meta Title :</label>
                                <textarea required="" class="form-control" rows="2"></textarea>
                            </div>
							
							<div class="form-group">
                                <label for="formname">Meta Keyword :</label>
                                <textarea required="" class="form-control" rows="2"></textarea>
                            </div>
							
							<div class="form-group">
                                <label for="formname">Meta Description :</label>
                                <textarea required="" class="form-control" rows="2"></textarea>
                            </div>
							
							<div class="form-group"><label>Category Image</label> <input type="file" class="filestyle" data-buttonname="btn-secondary" id="filestyle-0" tabindex="-1"/><div class="bootstrap-filestyle input-group"><input type="text" class="form-control " placeholder="" disabled=""/> <span class="group-span-filestyle input-group-append" tabindex="0"><label for="filestyle-0" class="btn btn-secondary "><span class="icon-span-filestyle fas fa-folder-open"></span> <span class="buttonText">Choose file</span></label></span></div></div>
							
							<div class="form-group">
    <label class="d-block mb-3">Category Status :</label>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline1" name="outer-group[0][customRadioInline1]" class="custom-control-input" />
        <label class="custom-control-label" for="customRadioInline1">Active</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="outer-group[0][customRadioInline1]" class="custom-control-input" />
        <label class="custom-control-label" for="customRadioInline2">Inactive</label>
    </div>
</div>
							<button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
    </div>
</div>
                </div>
               
            </div>
            
        </div>
      
       
    </div>
</div>

    );
}