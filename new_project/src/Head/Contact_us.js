import React, {Component} from 'react';

export default class Contact_us extends Component {
	render() {
		return(
			<div class="side">
    	<section>
    		<form>
    			<fieldset>
    				<legend>Contact Us</legend>
    					<table>
                            <tr>
                                <td>Name</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Email Id</td>
                                <td><input type="text" /></td>
                            </tr>

                            <tr>
                                <td>Contact Number</td>
                                <td><input type="email" /></td>
                            </tr>

                            <tr>
                                <td>Description</td>
                                <td><input type="text" class="addr"/></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td><button className="btn-reset">Submit</button></td>
                            </tr>
                        </table>
    			</fieldset>
    		</form>
    	</section>
    </div>

		);
	}
}
