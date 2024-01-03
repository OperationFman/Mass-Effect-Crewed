import React, { Component } from "react";
import axios from "axios";
import GameSelect from "./game-select";
import Overview from "./overview";
import Orbitals from "./Orbitals/index";

class KingContent extends Component {
	state = {
		content: "loading",
		saveData: {},
	};

	constructor() {
		super();
	}

	componentDidMount() {
		let userId = this.props.userId;
		axios
			.get(`https://${process.env.BACKEND_API}.herokuapp.com/api/get/${userId}`)
			.then((response) => {
				this.setState({ saveData: response.data.userData });
				this.setState({ content: "gameSelect" });
			});
	}

	handleLoadMassEffect1 = () => {
		this.setState({ content: "MassEffect1" });
	};

	handleLoadMassEffect2 = () => {
		this.setState({ content: "MassEffect2" });
	};

	handleLoadMassEffect3 = () => {
		this.setState({ content: "MassEffect3" });
	};

	render() {
		const renderContent = () => {
			switch (this.state.content) {
				case "loading":
					return <Orbitals />;
				case "MassEffect1":
					return (
						<Overview
							gameTitle='MassEffect1'
							userId={this.props.userId}
							saveData={this.state.saveData}
						/>
					);
				case "MassEffect2":
					return (
						<Overview
							gameTitle='MassEffect2'
							userId={this.props.userId}
							saveData={this.state.saveData}
						/>
					);
				case "MassEffect3":
					return (
						<Overview
							gameTitle='MassEffect3'
							userId={this.props.userId}
							saveData={this.state.saveData}
						/>
					);
				default:
					return (
						<GameSelect
							onLoadMassEffect1Click={this.handleLoadMassEffect1}
							onLoadMassEffect2Click={this.handleLoadMassEffect2}
							onLoadMassEffect3Click={this.handleLoadMassEffect3}
						/>
					);
			}
		};

		return <React.Fragment>{renderContent()}</React.Fragment>;
	}
}

export default KingContent;
