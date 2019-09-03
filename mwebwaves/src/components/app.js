import ReactDOM from "react-dom";
import Reactfrom 'react';

class App extands React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return	(
			<dev className="container">
				<input className="btn btn-primary" type="submit" value="Alert" onClick={() => {alert("Alert button onClick");}}/>
			</dev>
		)
	}
}

const app = document.getElementById('app');
if(app){
	ReactDOM.render(<App/>, app);

}
