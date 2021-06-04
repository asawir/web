import React from 'react'

const Footer = () => {
    let footerStyle ={
        position: "relative",
        top: "100vh",
        width: "100%",

    }


    return (
        <div className=" text-center bg-primary text-light py-100 mt-1 " style ={footerStyle} >
            Copyright &copy; TheITFamily.com
        </div>
    )
}

export default Footer;