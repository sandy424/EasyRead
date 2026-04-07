"use client";

import { useState, useRef } from "react";

export default function FileDrop() {
    const [isDrag, setDrag] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };
    const handleDragEnter = (e: React.DragEvent) => {
        setDrag(true);
    };
    const handleDragLeave = () => {
        setDrag(false);
    };
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDrag(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(droppedFiles);
    };
    
}