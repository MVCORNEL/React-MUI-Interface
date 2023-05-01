import { useState } from 'react';

/**
 * The logic of a file upload element is gathered via a custom React hook, a reusable piece of code.
 * This component is used to manage the upload state of an image throughout the app.
 */
const useImageUploader = () => {
    const [image, setImage] = useState(null);
    const imageAsUrl = image ? URL.createObjectURL(image) : null;

    const imageUploadedHandler = (event) => {
        //A read method is triggered when a FILE or BLOB is loaded
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    };

    const resetImage = () => {
        setImage(null);
    };

    return {
        image,
        imageAsUrl,
        imageUploadedHandler,
        setImage,
        resetImage,
    };
};

export default useImageUploader;
