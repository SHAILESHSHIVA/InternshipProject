import React, {Component} from 'react';

export default class Register extends Component {
	
	render() {
		return(

	<div>
      <div>
    	<section>
    		<form>
    			<fieldset>
    				<legend>Registration</legend>
    					<table>
    						<tr>
    							<td>Company Name</td>
    							<td><input type="text" /></td>
    						</tr>
    						<tr>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
    							<td>Owner Name</td>
    							<td><input type="text" /></td>
    						</tr>
                            <tr>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                                <td>Email Id</td>
                                <td><input type="email" /></td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                                <td>Contact Number</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                                <td>Head Office Address</td>
                                <td><input type="text" class="addr"/></td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                                <td>Certificate</td>
                                <td><input type="file" /></td>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button className="btn-register">Sign Up</button></td>
                            </tr>
	   					</table>
    			</fieldset>
    		</form>
    	</section>
        </div>
    </div>

);
	}
}