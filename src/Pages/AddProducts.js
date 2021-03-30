import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            price: "",
            categoryId: "",
            brandId: "",
            availability: "",
            brandName: "",
            photo: ""
        };
        this.btnIsDisabled = true;
        console.log(this.props);
    }

    handleChange = event => {
        let optionLabel = event.nativeEvent.target.selectedOptions;
        if (optionLabel !== undefined) {
            if (optionLabel[0].attributes[1] !== undefined) {
                this.setState({
                    [event.target.name]: optionLabel[0].attributes[1].value
                });
            } else {
                this.setState({
                    [event.target.name]: ""
                });
            }

        } else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    };
    toggleBtn = () => {
        let a = this.state;
        let submitBtn = document.getElementById("submit");
        if (
            a.title !== "" &&
            a.description !== "" &&
            a.price !== "" &&
            a.categoryId !== "" &&
            a.brandId !== "" &&
            a.availability !== "" &&
            a.brandName !== "" &&
            a.photo !== ""
        ) {
            submitBtn.removeAttribute("disabled");
            this.btnIsDisabled = false;
        } else {
            submitBtn.setAttribute("disabled", "");
            this.btnIsDisabled = true;
        }
    };

    setBrandName = e => {
        let optionLabel =
            e.nativeEvent.target.selectedOptions[0].attributes[0];
        if (optionLabel !== undefined) {
            this.setState({
                brandName: optionLabel.value,
            });
        } else {
            this.setState({
                brandName: ""
            });
        }
    };

    clearState() {
        this.setState({
            availability: "",
            brandName: "",
            brandId: "",
            categoryId: "",
            description: "",
            photo: "",
            price: "",
            title: ""
        });
    }

    submit = event => {
        event.preventDefault();
        let category_id = parseInt(this.state.categoryId);
        let brand_id = parseInt(this.state.brandId);
        category_id++;
        brand_id++;
        let formattedState = {
            availability: parseInt(this.state.availability),
            brandName: this.state.brandName,
            brandId: brand_id,
            categoryId: category_id,
            description: this.state.description,
            photo: this.state.photo,
            price: parseInt(this.state.price),
            title: this.state.title
        };
        this.props.createProduct(formattedState);
        this.clearState();
        document.getElementById("submit").setAttribute("disabled", "");;
    };
    render() {
        return (
            <div className="flex justify-center">
                <form onSubmit={this.submit}>
                    <h1>Добавить продукт</h1>
                    <br />
                    <TextField
                        id="outlined-email-input-01"
                        label="Title"
                        type="text"
                        variant="outlined"
                        value={this.state.title}
                        onChange={this.handleChange}
                        onKeyUp={this.toggleBtn}
                        size="small"
                        name="title"
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-email-input-02"
                        label="Description"
                        type="text"
                        variant="outlined"
                        value={this.state.description}
                        onChange={this.handleChange}
                        size="small"
                        name="description"
                        onKeyUp={this.toggleBtn}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Price"
                        type="number"
                        variant="outlined"
                        value={this.state.price}
                        onChange={this.handleChange}
                        size="small"
                        name="price"
                        onKeyUp={this.toggleBtn}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Enter photo url"
                        type="text"
                        variant="outlined"
                        value={this.state.photo}
                        onChange={this.handleChange}
                        size="small"
                        name="photo"
                        onKeyUp={this.toggleBtn}
                    />
                    <br />
                    <br />
                    <select
                        value={this.state.categoryId}
                        className="border py-2 px-2 cursor-pointer"
                        name="categoryId"
                        onChange={this.handleChange}
                        onClick={this.toggleBtn}
                    >
                        <option>Выберите категорию:</option>
                        {this.props.categories.map((category, index) => (
                            <option
                                label={category.title}
                                key={index}
                                value={index}
                            >
                                {category.title}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <select
                        value={this.state.brandId}
                        id="brandName"
                        className="border py-2 px-2 cursor-pointer"
                        name="brandId"
                        data-value={this.state.brandName}
                        // onClick={e => this.setBrandName(e)}
                        onChange={e => {
                            this.handleChange(e);
                            this.setBrandName(e);
                        }}
                        onClick={this.toggleBtn}
                    >
                        <option>Выберите Бренд:</option>
                        {this.props.brands.map((brand, index) => (
                            <option
                                label={brand.name}
                                key={index}
                                value={index}
                            >
                                {brand.name}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <select
                        value={this.state.availability}
                        className="border py-2 px-2 cursor-pointer"
                        name="availability"
                        onChange={this.handleChange}
                        onClick={this.toggleBtn}
                    >
                        <option>Есть ли в наличии:</option>
                        <option className="border py-2 px-3" value={1}>
                            Есть
                        </option>
                        <option className="border py-2 px-3" value={0}>
                            Нет
                        </option>
                    </select>
                    <br />
                    <div className="grid grid-cols-1">
                        <h5
                            className="text-blue-600"
                            id="requestSuccessInfo"
                        ></h5>
                        <h5 className="text-red-600" id="requestErrorInfo"></h5>
                    </div>
                    <button
                        id="submit"
                        type="submit"
                        className="bg-blue-500 text-white m-2 px-3 py-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                    >
                        Отправить
                    </button>
                </form>
            </div>
        );
    }
}

export default AddProduct;