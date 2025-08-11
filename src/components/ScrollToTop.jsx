import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTop.css";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="scroll-to-top-container">
            {showTopBtn && (
                <button
                    className="scroll-to-top"
                    onClick={goToTop}
                    aria-label="Scroll to top"
                >
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;