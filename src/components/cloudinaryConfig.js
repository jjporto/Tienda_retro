import { Cloudinary } from "@cloudinary/url-gen";

// Inicializa Cloudinary
const cloudinary = new Cloudinary({
    cloud: {
        cloudName: "dwg4kerpk", // Cloud Name
    },
});

export default cloudinary;
