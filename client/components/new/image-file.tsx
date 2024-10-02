"use client"
import { useRef, useState } from 'react';
import styles from "./image-file.module.css"
import "@/components/ui/inputs/inputs.css"

export default function ImageFile() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState('No file chosen');

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        const maxSize = 10 * 1024 * 1024; // 10 MB in bytes

        if (file && file.size > maxSize) {
            alert('File size exceeds 10 MB limit.');
            event.target.value = '';
            setFileName('No file chosen');
        } else {
            setFileName(file ? file.name : 'No file chosen');
        }
    };

    return (
        <div className="inputContainer">
            <label htmlFor="report">Scan Image</label>

            <input
                type="file"
                ref={fileInputRef}
                id="report"
                name="report"
                accept="image/*"
                required={true}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div className={styles.container}>
                <button className={styles.button} type="button" onClick={handleButtonClick}>
                    Choose File
                </button>
                <span className={styles.fileName}>{fileName}</span>
            </div>

        </div>
    );
};