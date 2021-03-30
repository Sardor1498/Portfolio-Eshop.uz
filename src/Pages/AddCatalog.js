import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class AddCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            title: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    clearState() {
        this.setState({
            url: "",
            title: ""
        });
    }

    submit = event => {
        event.preventDefault();
        this.props.createCatalog(this.state);
    };

    render() {
        return (
            <div className="flex justify-center">
                <form onSubmit={this.submit}>
                    <h1>Добавить каталог для меню</h1>
                    <br />
                    <TextField
                        id="outlined-email-input-01"
                        label="Title"
                        type="text"
                        variant="outlined"
                        value={this.state.title}
                        onChange={this.handleChange}
                        size="small"
                        name="title"
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-email-input-01"
                        label="Url"
                        type="text"
                        variant="outlined"
                        value={this.state.url}
                        onChange={this.handleChange}
                        size="small"
                        name="url"
                    />
                    <br />
                    <br />
                    <div className="grid grid-cols-1">
                        <h5
                            className="text-blue-800"
                            id="requestSuccessInfo"
                        ></h5>
                        <h5 className="text-red-800" id="requestErrorInfo"></h5>
                    </div>
                    <input
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    />
                </form>
            </div>
        );
    }
}

export default AddCatalog;
