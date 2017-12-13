import React, {Component} from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {value: props.initialValue}

    }

    sum(numero) {
        this.setState({value: this.state.value + numero})
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Diminuir</button>
                <button onClick={() => this.sum(1)}>Aumentar</button>
            </div>
        )
    }
} 