import React from "react";
import { UploadImageComponent } from "./UploadImageComponent.tsx";

export const UploadButton: React.FC = () => {

        const [imageSrc, setImageSrc] = React.useState("https://thumbs.dreamstime.com/b/hand-real-man-gives-robot-red-apple-modern-technology-robotics-robots-people-nearby-concept-144472570.jpg");
        const [currentInputText, setCurrentInputText] = React.useState("");

        const textOnKeyUp = (event) => {
                if (event.code === "Enter") {
                        console.log("press Enter.....");
                        console.log(currentInputText);

                        const inputData = {
                                description: currentInputText
                        };

                        const response = fetch("https://meowfacts.herokuapp.com/", {
                                method: "POST",
                                cache: "no-cache",
                                credentials: "omit",
                                headers: {
                                        "Content-Type": "application/json"
                                },
                                redirect: "follow",
                                referrerPolicy: "no-referrer",
                                body: JSON.stringify(inputData)
                        });
                        // const res = response.json(); Get the image src from the response and put into setImageSrc

                        setImageSrc("https://p7.itc.cn/images01/20210606/9d3e115f91e44e1b8f01e4f056a67433.jpeg");
                }
        };

        const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
                const newValue = e.currentTarget.value;
                console.log(`current input text is: ${newValue}`);
                setCurrentInputText(newValue);
        }

        return (
                <>
                        <UploadImageComponent imageSrc={imageSrc} />
                        <input id={"inputTextDesc"} value={currentInputText} type="text" className="input-style" placeholder={"Input image instructions here..."} onKeyUp={textOnKeyUp} onChange={onTextChange} />
                </>
        );
};
