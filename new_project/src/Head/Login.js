import React, {Component} from 'react';


export default class Login extends Component {
	render() {
		return(

<div className="side">
    	<section>
    		<form>
    			<fieldset>
    				<legend><b>Login</b></legend>
    					<table>
    						<tr>
    							<td>User Name</td>
    							<td><input type="text"/></td>
    						</tr>
    						<tr>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
    							<td>Password</td>
    							<td><input type="password" /></td>
    						</tr>
                            <tr>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                                <td><button className="btn-register">Sign In</button></td>
                                <td><button className="btn-reset">Reset</button></td>
                            </tr>
	   					</table>
    			</fieldset>
    		</form>
    	</section>
    </div>

	);
	}
}