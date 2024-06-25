'use client';
import {Button, Input} from "@nextui-org/react";
import Image from "next/image";
import {useState} from "react";

const ImageInput = () => {
    const [image, setImage] = useState<string | ArrayBuffer | null>("");

    // Функция для обработки изменения файла в input
    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                setImage(reader.result); // Установка изображения в состояние
            };

            reader.onerror = () => {
                console.error('Ошибка при чтении файла');
            };
        }
    };

    return (
        <div className={'mt-20 mb-20'}>
            <Input
                onChange={handleFileInputChange}
                type={'file'}
            />
            {image && typeof image === 'string' ? (
                <Image src={image} width={100} height={100} alt={'Превью изображения'} />
            ) : null}
        </div>
    );
};

export default ImageInput;
