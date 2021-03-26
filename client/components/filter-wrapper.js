import React from 'react'

export default class FilterWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className={`filter flex-auto w-full md:w-max md:px-4 md:py-2 ${this.props.className}`}>
                <label>
                    <p className=" md:font-bold mb-1">{this.props.data.text}</p>
                    <select name={this.props.data.name} value={this.state.value} onChange={this.handleChange} className="p-2 ring-2 ring-gray-300 rounded-md w-full bg-white focus:outline-none text-sm md:text-base">
                        {this.props.data.list.map(item => {
                            return <option value={item.value} key={item.value}>{item.text}</option>
                        })}
                    </select>
                </label>
            </div>
        )
    }
}
