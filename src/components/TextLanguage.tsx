

import { effect, useSignal } from "@preact/signals-react";
import { language } from "../App";
import { useEffect } from "react";


interface TextLanguageProps {
    texts: { [key: string]: string };
    speed?: number;
    preShow?: boolean;
}

function TextLanguage(props: TextLanguageProps) {
    let texts = props.texts;
    let speed = props.speed || 50;
    let preShow = props.preShow || false

    let displayedText = useSignal(preShow ? texts[language.value] : texts[language.value][0]);

    let dispose = effect(() => {
        if (displayedText.value !== texts[language.value]) {
            if (texts[language.value].startsWith(displayedText.value)) {
                typeNextChar();
            } else {
                deleteChar();
            }
        }
    });

    function typeNextChar() {
        setTimeout(() => {
            if (texts[language.value].startsWith(displayedText.value)) {
                displayedText.value = texts[language.value].substring(0, displayedText.value.length + 1);
            }
        }, (speed + Math.random() * speed) * 2);
    }

    function deleteChar() {
        setTimeout(() => {
            displayedText.value = displayedText.value.substring(0, displayedText.value.length - 1);
        }, speed);
    }

    useEffect(() => {
        return () => {
            dispose();
        }
    }, []);


    return (
        <span>
            {displayedText}
        </span>
    );
}

export default TextLanguage;