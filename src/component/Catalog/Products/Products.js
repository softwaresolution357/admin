import React from 'react';
import {Link} from 'react-router-dom';
import "./Product.css";
export const ProductDispaly = () => {
     return(
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
                              <Link to={{pathname : '/addProducts'}}><button class="btn btn-primary dropdown-toggle arrow-none waves-effect waves-light" type="button"><i class="mdi mdi-settings mr-2"></i> Add Product</button></Link> 
                               
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
                <th>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" /> 
                        <label class="custom-control-label" for="customCheck1" ></label>
                    </div>
                </th>
                <th>Product Listing</th>
                <th>Inventory</th>
                <th>Type</th>
				<th>Vendor</th>
				<th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1"></label></div></th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50"/> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>
                <td>Combo Deals</td>
				<td>Latest Dealz</td>
				<td>
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button"> <i class="fas fa-eye"></i> View</a> 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			
			<tr>
                <th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1" ></label></div></th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50"/> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>
                <td>Combo Deals</td>
				<td>Latest Dealz</td>
				<td>
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button"> <i class="fas fa-eye"></i> View</a> 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			
			<tr>
                <th scope="row">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" /> 
                        <label class="custom-control-label" for="customCheck1" ></label>
                    </div>
                </th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50"/> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>
                <td>Combo Deals</td>
				<td>Latest Dealz</td>
				<td>
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button"> <i class="fas fa-eye"></i> View</a> 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			
			<tr>
                <th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1" ></label></div></th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50"/> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>
                <td>Combo Deals</td>
				<td>Latest Dealz</td>
				<td>
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button"> <i class="fas fa-eye"></i> View</a> 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			
			<tr>
                <th scope="row"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1"></label></div></th>
                <td><img src="https://images-na.ssl-images-amazon.com/images/I/71ERfTd2-KL._UX679_.jpg" width="50" height="50"/> A1 Smart Watch + TWS Mini Earpods</td>
                <td>9995 in Stock</td>
                <td>Combo Deals</td>
				<td>Latest Dealz</td>
				<td>
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button"> <i class="fas fa-eye"></i> View</a> 
				<a class="btn btn-primary waves-effect waves-light" href="#" role="button">Edit</a> 
				<button type="button" class="btn btn-dark waves-effect waves-light">Delete</button>
				</td>
            </tr>
			
			
			
            
            
        </tbody>
    </table>
</div>
                                </div><br></br>
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

    );
}

export const AddProducts = () => {
    const style ={
        width: "0px",
        height: "0px",
        overflow: "hidden"
} 
    return(
        <div class="content-page">
           
            <div class="content">
                <div class="container-fluid">
                    <div class="page-title-box">
                        <div class="row align-items-center">
                            <div class="col-sm-12">
                                <h4 class="page-title">Product Entry</h4>
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
             <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
                <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#home2" role="tab" aria-selected="false"><span class="d-block d-sm-none"><i class="fas fa-home"></i></span> <span class="d-none d-sm-block">PRODUCT</span></a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#profile2" role="tab" aria-selected="false"><span class="d-block d-sm-none"><i class="far fa-user"></i></span> <span class="d-none d-sm-block">IMAGES</span></a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#messages2" role="tab" aria-selected="false"><span class="d-block d-sm-none"><i class="far fa-envelope"></i></span> <span class="d-none d-sm-block">PRICING</span></a></li>
                <li class="nav-item"><a class="nav-link " data-toggle="tab" href="#settings2" role="tab" aria-selected="true"><span class="d-block d-sm-none"><i class="fas fa-cog"></i></span> <span class="d-none d-sm-block">VARIANTS</span></a></li>
                <li class="nav-item"><a class="nav-link " data-toggle="tab" href="#seo2" role="tab" aria-selected="true"><span class="d-block d-sm-none"><i class="fas fa-cog"></i></span> <span class="d-none d-sm-block">SEO FIELD</span></a></li>
                <li class="nav-item"><a class="nav-link " data-toggle="tab" href="#Linking2" role="tab" aria-selected="true"><span class="d-block d-sm-none"><i class="fas fa-cog"></i></span> <span class="d-none d-sm-block">LINKING</span></a></li>
                <li class="nav-item"><a class="nav-link " data-toggle="tab" href="#Status2" role="tab" aria-selected="true"><span class="d-block d-sm-none"><i class="fas fa-cog"></i></span> <span class="d-none d-sm-block">STATUS</span></a></li>
            </ul>
            
            <div class="tab-content">
                <div class="tab-pane p-3 active" id="home2" role="tabpanel">                 
                <form class="outer-repeater">
                    <div data-repeater-list="outer-group" class="outer">
                        <div data-repeater-item="" class="outer">
                            <div class="form-group">
                                <label for="formname">Name :</label>
                                <input type="text" class="form-control" id="formname" placeholder="Enter your Name..."/>
                            </div>
                            <div class="form-group">
                                <label for="formemail">Model :</label>
                                <input type="text" class="form-control" id="formname" placeholder="Enter your Model..."/>
                            </div>
                            <div class="form-group">
                                <label for="formemail">SKU :</label>
                                <input type="text" class="form-control" id="formname" placeholder="Enter your SKU..."/>
                            </div>	
                            
                            <div class="form-group">
                                <label for="formmessage">Description :</label>
                                <textarea id="formmessage" class="form-control" rows="3"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label for="formmessage">Specification :</label>
                                <textarea id="formmessage" class="form-control" rows="3"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label for="formmessage">Quantity Available :</label>
                                <input class="form-control" type="number" value="42" id="example-number-input" placeholder="Enter your Quantity" />
                            </div>
                            
                            <div class="form-group">
    <label class="d-block mb-3">Track Quantity :</label>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline1" name="outer-group[0][customRadioInline1]" class="custom-control-input" />
        <label class="custom-control-label" for="customRadioInline1">Yes</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="outer-group[0][customRadioInline1]" class="custom-control-input" />
        <label class="custom-control-label" for="customRadioInline2">No</label>
    </div>
</div>
<div class="form-group">
                                <label for="formmessage">Weight :</label>
                                <input class="form-control" type="number" id="example-number-input" placeholder="Enter your Weight" />
                            </div>
<div class="form-group">
    <label class="d-block mb-3">Out Of Stock Notice :</label>
    <div class="custom-control custom-radio custom-control-inline" />
        <input type="radio" id="customRadioInline3" name="outer-group[0][customRadioInline1]" class="custom-control-input" />
        <label class="custom-control-label" for="customRadioInline3">Sold Out</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline4" name="outer-group[0][customRadioInline1]" class="custom-control-input" />
        <label class="custom-control-label" for="customRadioInline4">Pre-order</label>
    </div>
</div>

<div class="form-group">
                                <label for="formmessage">Diamention :</label>
                                <input class="form-control" type="text" id="example-number-input" placeholder="Enter your Diamention" />
                            </div>

                            
                            
                            
                            
                            <div class="form-group">
                                <label for="formmessage">Base Colour :</label>
                                <input class="form-control" type="color" value="#02a499" id="example-color-input" />
                            </div>

                           {/* <!-- <button type="submit" class="btn btn-primary">Submit</button>--> */}
                        </div>
                
                </form>
                </div>
                
                
                <div class="tab-pane p-3" id="profile2" role="tabpanel">
                    <div class="" id="profile2" role="tabpanel">
                    <div data-repeater-list="outer-group" class="outer">
                        <div data-repeater-item="" class="outer">
                        <br/>
                        <div class="container">
                            <div class="row">
                            <div class="col-sm-2 imgUp">
                                <div class="imagePreview"></div>
                            <label class="btn btn-primary">
                                                                                    Upload<input type="file" class="uploadFile img"  style={style}/>
                                            </label>
                            </div>
                            <i class="fa fa-plus imgAdd"></i>
                            </div>
                            </div>
										    		
                        </div>
                    </div>
                </div>
                </div>
                
            
                <div class="tab-pane p-3" id="messages2" role="tabpanel">
                    
                    <div data-repeater-list="outer-group" class="outer">
                        <div data-repeater-item="" class="outer">
                            <div class="form-group">
                                <label for="formname">MRP :</label>
                                <input type="text" class="form-control" id="formname"/>
                            </div>
                            
                            <div class="form-group">
                                <label for="formname">Special Price :</label>
                                <input type="text" class="form-control" id="formname"/>
                            </div>
                            
                            <div class="form-group">
                                <label for="formname">Prepaid Price :</label>
                                <input type="text" class="form-control" id="formname"/>
                            </div>
                            
                            <div class="form-group">
                                <label for="formname">Tax Percentage :</label>
                                <input type="text" class="form-control" id="formname"/>
                            </div>
                            
                            <div class="form-group">
                                <label for="formname">COD Shipping Amount :</label>
                                <input type="text" class="form-control" id="formname"/>
                            </div>
                            
                            <div class="form-group">
                                <label for="formname">Prepaid Shipping Amount :</label>
                                <input type="text" class="form-control" id="formname"/>
                            </div>
                            
                            
                            
    
                            
                        </div>
                    </div>
                
                </div>
                
                
                <div class="tab-pane p-3" id="settings2" role="tabpanel">
                 <div data-repeater-list="outer-group" class="outer">
                        <div data-repeater-item="" class="outer">
                            <div class="form-group">
                                <label for="formname">Variant Options :</label>
                                <input type="text" class="form-control" id="formname"/>
                            </div>							 
                        </div>
                    </div>
                </div>
                
                
                <div class="tab-pane p-3" id="seo2" role="tabpanel">
                 <div data-repeater-list="outer-group" class="outer">
                        <div data-repeater-item="" class="outer">
                            <div class="form-group">
                                <label for="formname">Tag Line :</label>
                                <input type="text" class="form-control" id="formname"/>
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
                            
                            <div class="form-group">
                                <label for="formname">Slug/URL :</label>
                                <input type="web" class="form-control" id="formname" />
                            </div>							
                            
                        </div>
                    </div>
                </div>
                
                
                <div class="tab-pane p-3" id="Linking2" role="tabpanel">
                 <div data-repeater-list="outer-group" class="outer">
                        <div data-repeater-item="" class="outer">
                            <div class="p-3"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1"/> <label class="custom-control-label" for="customCheck1">Category-1</label>
                        </div>
                    </div>
                    
                     <div class="p-3"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1">Filter-1</label>							
                        </div>
                    </div>
                    
                    <div class="p-3"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1">Brand-1</label>							
                        </div>
                    </div>
                    
                    <div class="p-3"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheck1" /> <label class="custom-control-label" for="customCheck1">Vender-1</label>							
                        </div>
                    </div>					
                </div>
            </div>               
            </div>
            
    
                <div class="tab-pane p-3" id="Status2" role="tabpanel">
                 <div>
    <input type="checkbox" id="switch1" switch="none" checked="checked" />
    <label for="switch1" data-on-label="Active" data-off-label="Inactive"></label>
    <input type="checkbox" id="switch2" switch="default" checked="checked" />
    <label for="switch2" data-on-label="" data-off-label=""></label>
    <input type="checkbox" id="switch3" switch="bool" checked="checked"/>
    
    
    
</div>  
<button type="submit" class="btn btn-primary">Submit</button>      
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
