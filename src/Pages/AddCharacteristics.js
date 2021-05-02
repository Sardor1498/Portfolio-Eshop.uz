import React from "react";
import TextField from "@material-ui/core/TextField";

class AddCharactteristics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category_id: "",
            title: "",
            details: {
                version: "",
                warranty: "",
                weight: "",
                country: "",
                delivery: null,
                phoneFeatures: {
                    simSlotAndType: "",
                    fingreprint: null,
                    faceId: null,
                    nfc: null,
                    usbType: "",
                    bluetoothVersion: "",
                    gsmStandart: "",
                    navigation: "",
                    wiFiVersion: "",
                    ram: "",
                    memoryPhone: "",
                    slotMemoryCard: "",
                    numberOfProcessorCores: "",
                    batteryCapacity: "",
                    batteryType: "",
                    fastCharging: null,
                    frontalCamera: "",
                    mainCamera: "",
                    diagonal: "",
                    screenResolution 
                },
                feature2: ""
            }
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    clearState() {
        this.setState({
            category_id: "",
            title: "",
        });
    }

    submit = event => {
        event.preventDefault();
        let categoryId = parseInt(this.state.category_id);
        categoryId++;
        let formattedState = {
            category_id: categoryId,
            title: this.state.title
        };
    };

    render() {
        return (
            <div className="flex justify-center">
                <from onSubmit={this.submit}>
                    <h1>Добавить тип характеристики</h1>
                    <br />
                    {this.props.charactistics ? (
                        <>
                            {this.props.charactistics.map((char, id) => (
                                <h3>{char.title}</h3>
                            ))}
                        </>
                    ) : null}
                    <select
                        value={this.state.category_id}
                        className="border py-2 px-2 cursor-pointer"
                        name="category_id"
                        onChange={this.handleChange} 
                    >
                        <option>Выберите категорию : </option>
                        {this.props.categories.map((category, index) => (
                            <option key={index} value={index}>
                                {category.title}
                            </option>
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
                        size="small"
                        name="title"
                     />
                     <bt />
                     <bt />
                     <div className="grid grid-cols-1">
                         <h5 className="text-blue-800"
                         id="requestSuccessInfo"></h5>
                         <h5 className="text-red-800" id="requestSuccessInfo"></h5>
                     </div>
                     <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ronded" />
                </from>

            </div>
        )
    }
}

export default AddCharactteristics;