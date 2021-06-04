import React from 'react'

const Footer = () => {
    let footerStyle ={
        position: "absolute",
        top: "100vh",
        width: "100%",

    }


    return (
        <div className=" text-center bg-primary text-light py-4" >
            Copyright &copy; TheITFamily.com
        </div>
    )
}

export default Footer;