import React from 'react';

export const AddProducts = () => {

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
                                <div class="form-group"><label>Main/Thumbnail Image</label> <input type="file" class="filestyle" data-buttonname="btn-secondary" id="filestyle-0" tabindex="-1" /><div class="bootstrap-filestyle input-group"><input type="text" class="form-control " placeholder="" disabled=""/> <span class="group-span-filestyle input-group-append" tabindex="0"><label for="filestyle-0" class="btn btn-secondary "><span class="icon-span-filestyle fas fa-folder-open"></span> <span class="buttonText">Choose file</span></label></span></div></div>
                                
                                <div class="form-group mb-0"><label>Product Images</label> <input type="file" class="filestyle" data-input="false" data-buttonname="btn-secondary" id="filestyle-1" tabindex="-1" /><div class="bootstrap-filestyle input-group"><span class="group-span-filestyle " tabindex="0"><label for="filestyle-1" class="btn btn-secondary "><span class="icon-span-filestyle fas fa-folder-open"></span> <span class="buttonText">Choose file</span></label></span></div></div>
                                
                                <br/>
                                <div class="form-group mb-0"> <input type="file" class="filestyle" data-input="false" data-buttonname="btn-secondary" id="filestyle-1" tabindex="-1" /><div class="bootstrap-filestyle input-group"><span class="group-span-filestyle " tabindex="0"><label for="filestyle-1" class="btn btn-secondary "><span class="icon-span-filestyle fas fa-folder-open"></span> <span class="buttonText">Choose file</span></label></span></div></div>
    
                                <br/>
                                <div class="form-group mb-0"> <input type="file" class="filestyle" data-input="false" data-buttonname="btn-secondary" id="filestyle-1" tabindex="-1" /><div class="bootstrap-filestyle input-group"><span class="group-span-filestyle " tabindex="0"><label for="filestyle-1" class="btn btn-secondary "><span class="icon-span-filestyle fas fa-folder-open"></span> <span class="buttonText">Choose file</span></label></span></div></div>
                                    
                                <br/>
                                <div class="form-group mb-0"> <input type="file" class="filestyle" data-input="false" data-buttonname="btn-secondary" id="filestyle-1" tabindex="-1" /><div class="bootstrap-filestyle input-group"><span class="group-span-filestyle " tabindex="0"><label for="filestyle-1" class="btn btn-secondary "><span class="icon-span-filestyle fas fa-folder-open"></span> <span class="buttonText">Choose file</span></label></span></div></div>
                                    
                                <br/>
                                <div class="form-group mb-0"> <input type="file" class="filestyle" data-input="false" data-buttonname="btn-secondary" id="filestyle-1" tabindex="-1"/><div class="bootstrap-filestyle input-group"><span class="group-span-filestyle " tabindex="0"><label for="filestyle-1" class="btn btn-secondary "><span class="icon-span-filestyle fas fa-folder-open"></span> <span class="buttonText">Choose file</span></label></span></div></div>
                                
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
