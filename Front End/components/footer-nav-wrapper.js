import React from 'react'
import FooterNav from './footer-nav'


export default class FooterNavWrapper extends React.Component {
    render() {
        return (
            <div className="flex flex-col h-full mx-8 w-1/5">
                <div className="font-bold text-mypurple-darkest">{this.props.data.title}</div>
                {this.props.data.list.map((e, index) => {
                    return (
                        <FooterNav name={e.name} link={e.link} key={index} hasIcon={this.props.data.hasIcon}></FooterNav>
                    )
                })
                }
            </div >
        )
    }
}