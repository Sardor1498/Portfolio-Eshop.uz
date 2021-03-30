import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog_id: "",
            title: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    setBrandName = e => {
        this.setState({
            brandName: e.nativeEvent.target.selectedOptions[0].label
        });
    };

    clearState() {
        this.setState({
            catalog_id: "",
            title: ""
        });
    }

    submit = event => {
        event.preventDefault();
        let catalogId = parseInt(this.state.catalog_id);
        catalogId++ 
        let formattedState = {
            catalog_id: catalogId,
            title: this.state.title
        };
        this.props.createCategory(formattedState);
    };

    render() {
        return (
            <div className="flex justify-center">
                <form onSubmit={this.submit}>
                    <h1>Добавить категорию</h1>
                    <br />

                    <select
                        value={this.state.catalog_id}
                        className="border py-2 px-2 cursor-pointer"
                        name="catalog_id"
                        onChange={this.handleChange}
                    >
                        <option>Выберите каталог:</option>
                        {this.props.catalogs.map((catalog, index) => (
                            <option key={index} value={index}>{catalog.title}</option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <TextField
                        id="outlined-email-input-01"
                        label="Имя категории"
                        type="text"
                        variant="outlined"
                        value={this.state.title}
                        onChange={this.handleChange}
                        size="small"
                        name="title"
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

export default AddCategory;
