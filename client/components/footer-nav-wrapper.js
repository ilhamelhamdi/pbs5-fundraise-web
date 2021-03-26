import React from 'react'
import FooterNav from './footer-nav'


export default class FooterNavWrapper extends React.Component {
    render() {
        return (
            <div className="footer-nav-wrapper flex flex-none flex-wrap justify-around md:justify-start md:flex-col h-full p-4 lg:p-8 w-full md:w-1/5">
                <div className="font-bold text-mypurple-darkest w-full">{this.props.data.title}</div>
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