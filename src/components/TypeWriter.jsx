import React, { useEffect, useState } from "react";

const TypeWriter = ({ modalClosed }) => {

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
            {showAnimation &&(
                <p className="text-typewriter">Bem vindo ao sistema</p>
            )}
        </div>
    )
}

export default TypeWriter;