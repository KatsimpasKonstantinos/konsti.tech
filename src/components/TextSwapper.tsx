import { useState, useEffect } from "react";

function TextSwapper(props: { texts: { name: string; font: string }[] }) {
    const { texts } = props;

    const [visibleText, setVisibleText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[currentIndex].name;

        let timer: number;

        if (isDeleting) {
            if (charIndex > 0) {
                timer = setTimeout(() => {
                    setCharIndex((prev) => prev - 1);
                    setVisibleText(currentText.substring(0, charIndex - 1));
                }, 50);
            } else {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            if (charIndex < currentText.length) {
                timer = setTimeout(() => {
                    setCharIndex((prev) => prev + 1);
                    setVisibleText(currentText.substring(0, charIndex + 1));
                }, Math.random() * 250 + 50);
            } else {
                timer = setTimeout(() => setIsDeleting(true), 2000);
            }
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, currentIndex, texts]);

    return <span>{visibleText}</span>;
}

export default TextSwapper;
