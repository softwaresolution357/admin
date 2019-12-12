import React from 'react';

const From = (props) =>{
    return(
        <div class="wrapper-page">
		<div class="card overflow-hidden account-card mx-3">
			<div class="bg-primary p-4 text-white text-center position-relative">
				<h4 class="font-20 m-b-5">Welcome Back !</h4>
					<p class="text-white-50 mb-4">Sign in to continue to admin.</p>
                    <a href={props.BASE_URL}>
					<img src="assets/images/logo-sm.png" height="48" alt="logo"/>
					</a>
			</div>
			<div class="account-card-content">
			<form class="form-horizontal m-t-30" action="#">
				<div class="form-group">
				<label for="username">Username</label> 
				<input type="text" class="form-control" id="username" placeholder="Enter username" />
				</div>
				<div class="form-group">
				<label for="userpassword">Password</label> 
				<input type="password" class="form-control" id="userpassword" placeholder="Enter password" />
				</div>
				<div class="form-group row m-t-20">
				<div class="col-sm-6">
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="customControlInline"/> 
						<label class="custom-control-label" for="customControlInline">Remember me</label>
					</div>
				</div>
				<div class="col-sm-6 text-right">
					<button class="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
				</div>
				</div>
				<div class="form-group m-t-10 mb-0 row">
					<div class="col-12 m-t-20">
						<i class="mdi mdi-lock"></i> Forgot your password?
					</div>
				</div>
			</form>
			</div>
			</div>
			<div class="m-t-40 text-center">
			<p>Don't have an account ? 
				Signup now
			</p>
			</div>
			</div>
       
    );
}
function Login(){
    return(
        <div>
             <div class="home-btn d-none d-sm-block">
        <a href="index.html" class="text-white">
            <i class="fas fa-home h2"></i>
        </a>
        </div>
            <From BASE_URL='http://localhost:3000'/>
        </div>
       
        
    );
}

export default Login;