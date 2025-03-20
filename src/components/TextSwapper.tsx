import { useEffect } from "react"
import { effect, useSignal } from "@preact/signals-react"
import { language } from "../App";
import BackgroundSwapper from "./BackgroundSwapper";

interface TextSwapperProps {
    texts: {
        en: string;
        de: string;
        path: string;
        font: string
    }[],
    speed: number,
    delay: number
}

function TextSwapper(props: TextSwapperProps) {

    let currentIndex = useSignal(0);
    let displayedText = useSignal("");
    let texts = props.texts;
    texts = texts.sort(() => Math.random() - 0.5);
    let speed = props.speed;
    let delay = props.delay;

    let resetTimout: ReturnType<typeof setTimeout>;
    let typeNextCharTimeout: ReturnType<typeof setTimeout>;
    let deleteCharTimeout: ReturnType<typeof setTimeout>;

    let backgroundSwapper = new BackgroundSwapper();
    backgroundSwapper.preload();


    let dispose = effect(() => {
        let currentTexts = texts[currentIndex.value];
        let currentText = currentTexts[language.value as keyof typeof currentTexts];

        if (!currentText) {
            console.error(`Language "${language.value}" not found in texts.`);
            return;
        }

        if (displayedText.value !== currentText) {
            if (currentText.startsWith(displayedText.value)) {
                typeNextChar();
            } else {
                deleteChar();
            }
        } else {
            backgroundSwapper.swap(currentTexts.path);
            clearTimeout(resetTimout);
            resetTimout = setTimeout(() => {
                currentIndex.value = (currentIndex.value + 1) % texts.length;
            }, delay);
        }
    });


    function typeNextChar() {
        let currentTexts = texts[currentIndex.value];
        let currentText = currentTexts[language.value as keyof typeof currentTexts] || "";

        clearTimeout(typeNextCharTimeout);
        typeNextCharTimeout = setTimeout(() => {
            displayedText.value = currentText.slice(0, displayedText.value.length + 1);
        }, (speed + Math.random() * speed) * 2);
    }


    function deleteChar() {
        clearTimeout(deleteCharTimeout);
        deleteCharTimeout = setTimeout(() => {
            displayedText.value = displayedText.value.slice(0, displayedText.value.length - 1);
        }, speed);
    }



    useEffect(() => {
        return () => {
            dispose();
            clearTimeout(resetTimout);
            clearTimeout(typeNextCharTimeout);
            clearTimeout(deleteCharTimeout);
        }
    }, []);

    return <span>{displayedText}</span>;
}

export default TextSwapper;
