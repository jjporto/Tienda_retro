import Swal from "sweetalert2";

/* eslint-disable @typescript-eslint/no-explicit-any */
const url = process.env.REACT_APP_API_URL;

export const customFetch = async ({
  endpoint, 
  method = "GET",
  token,
  body,
  formdata = false,
  isLoader = true,
  isLoaderClose = true,
}) => {
    if (isLoader) {
        Swal.fire({
            title: "Cargando...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
    }

    try {
        // Construir la URL completa de manera segura
        const fullUrl = new URL(endpoint, url).toString();

        const response = await fetch(fullUrl, {
            method: method,
            headers: formdata
                ? {
                    Authorization: token,

                }
                : {
                    Authorization: token,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            body: formdata ? body : JSON.stringify(body),
        });

        const data = await response.json();
        const result = {
            ...data,
            success: response.ok,
            statusCode: response.status,
        };

        if (isLoaderClose) {
            Swal.close();
        }
        if (!result.success) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error. Contacte con soporte",
            });
        }
        return result;
    } catch (err) {
        if (isLoaderClose) {
            Swal.close();
        }
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Contact support",
        });
        console.log("Fetch error:", err);
    }
};