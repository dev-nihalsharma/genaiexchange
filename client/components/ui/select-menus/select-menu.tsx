"use client"
import styles from "./select-menu.module.css"
import React, {useState} from 'react';
import {MdArrowDropDown} from "react-icons/md";

export default function SelectMenu({options, name, label}: {
    options: {
        [key: string]: any
    }[],
    name: string,
    label: string
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<any>(
        null
    );

    const toggleDropdown = () => setIsOpen(val => !val);

    const handleOptionClick = (option: {
        [key: string]: any
    }) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className={styles.inputContainer}>
            <p className={styles.label}>
                {label}
            </p>
            <div className={styles.mainContainer}>
                <div className={isOpen ? `${styles.selectedOption} ${styles.open}` : styles.selectedOption}
                     onClick={toggleDropdown}>
                    <p style={{
                        margin: 0,
                        width: "fit-content",
                        padding: "10px 0",
                        float: "left"
                    }}>{selectedOption ? selectedOption.label : 'Select an option'}</p>
                    <div className={styles.imageContainer}>
                        <MdArrowDropDown className={styles.icon}/>
                    </div>
                </div>
                {isOpen && (
                    <div className={styles.optionList}>
                        {options.map((option) => (
                            <div className={styles.option} key={option.value} onClick={() => handleOptionClick(option)}>
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
                <input
                    type="hidden"
                    name={name}
                    id={name}
                    value={selectedOption ? selectedOption.value : ''}
                />
            </div>
        </div>
    );
};