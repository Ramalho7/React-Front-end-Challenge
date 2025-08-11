import React, { useEffect, useState } from "react";

const TypeWriter = ({ modalClosed}) => {

    const [showAnimation, setShowAnimation] = useState(false)

    useEffect(() => {
        if(modalClosed){
            setShowAnimation(true)
        }else{
            setShowAnimation(false)
        }
        
    }, [modalClosed])

    return (
        <div className="container-typewriter">
            <p className={`text-typewriter${showAnimation ? "" : "no-animation"}`}>Bem-vindo ao Sistema!</p>
        </div>
    )
}

export default TypeWriter;