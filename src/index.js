import React from "react";
import { render } from "react-dom";
import './App.css';

class App extends React.Component {
  state = {
    rows: [{
      name: "",
      mobile: ""
    }],
    rowsCons: [
       {
      name: "",
      mobile: ""
    }
    ]

  };
  handleChange = idx => e =>
 {
       const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = (e) => {
    console.log(e)
    const item = {
      name: "",
      mobile: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
handleKeyPress = (e) =>{
  if (e.key === "Enter"){
    this.handleAddRow()
  }
}

  render() {
    return (
        <div>
            <div className="mainContainer">
                <h1>Should I eat in McDonalds ?</h1>
                <div className="mainFlex">
                    <div className="prosDiv">
                        <h2 >PROS</h2>
                        <div className="divMargin">
                        {this.state.rows.map((item, idx) => (
                            <div><span>{idx}</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={this.state.rows[idx].name}
                                    onChange={this.handleChange(idx)}
                                    onKeyDown = {this.handleKeyPress}
                                    />
                            </div>
                    ))}
                        </div>

                    </div>
                    <div className="consDiv">
                        <h2>CONS</h2>
                        <div className="divMargin">
                        {this.state.rowsCons.map((item, idx) => (
                            <div><span>{idx}</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={this.state.rows[idx].name}
                                    onChange={this.handleChange(idx)}
                                    onKeyDown = {this.handleKeyPress}
                                    />
                            </div>
                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

render(<App />, document.getElementById("root"));
