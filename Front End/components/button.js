import Link from 'next/link'
import React from 'react'


export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.element = React.createRef()
        this.color1 = this.props.color1
        this.color2 = this.props.color2 || "white"
        this.styleWithBorder = `bg-${this.color2} text-${this.color1} border-${this.color1} border-2`
        this.styleNoBorder = `bg-${this.color1} text-${this.color2} border-${this.color1} border-2`
        this.width = (this.props.width != undefined) ? this.props.width : 'max'
        this.height = (this.props.height != undefined) ? this.props.height : '8'
        this.state = {
            style: (this.props.withBorder) ? this.styleWithBorder : this.styleNoBorder
        }
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    componentDidMount() {
        if (!this.props.withChange) return
        this.element.current.addEventListener("mouseover", this.handleMouseOver);
        this.element.current.addEventListener("mouseout", this.handleMouseOut);
    }

    componentWillUnmount() {
        this.element.current.removeEventListener("mouseover", this.handleMouseOver);
        this.element.current.removeEventListener("mouseout", this.handleMouseOut);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleMouseOver() {
        if (this.state.style == this.styleNoBorder) {
            this.setState({ style: this.styleWithBorder })
        } else {
            this.setState({ style: this.styleNoBorder })
        }
    }

    handleMouseOut() {
        if (this.state.style == this.styleNoBorder) {
            this.setState({ style: this.styleWithBorder })
        } else {
            this.setState({ style: this.styleNoBorder })
        }
    }


    render() {
        return (
            <Link href={this.props.link}>
                <a className={`rounded-full inline-block px-6 box-border transition-all ${this.props.className} ${this.state.style} w-${this.width} h-${this.height}`} ref={this.element} >
                    <span className="inline-block align-middle">
                        {this.props.text}
                    </span>
                </a>
            </Link>
        )
    }
}