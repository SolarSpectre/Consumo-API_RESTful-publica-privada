const API_KEY='a3TH1VRhHmhb6ppdVyAlFg==9bydDtG7TAIvL6cg'
function toggleForms() {
    document.getElementById("registerForm").style.display = 
        document.getElementById("registerForm").style.display === "none" ? "block" : "none";
    document.getElementById("loginForm").style.display = 
        document.getElementById("loginForm").style.display === "none" ? "block" : "none";
}
// Funcion para convertir imagen a base64
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
    });
}

async function uploadImage(imageFile) {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await fetch('https://api.api-ninjas.com/v1/facedetect', {
            method: 'POST',
            body: formData,
            headers: {
                'X-Api-Key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.length === 0) {
            document.getElementById("registerMessage").innerText = "Por favor, selecciona una imagen con un rostro.";
            return null;
        }
        
        return result;
        
    } catch (error) {
        document.getElementById("registerMessage").innerText = `Error: ${error}`;
        return null;
    }
}

// Registro
document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const imageFile = document.getElementById("registerImage").files[0];

    if (!imageFile) {
        document.getElementById("registerMessage").innerText = "Por favor, selecciona una imagen.";
        return;
    }

    const faceData = await uploadImage(imageFile);
    if (!faceData) return;

    const base64Image = await toBase64(imageFile);
    localStorage.setItem("registeredImage", base64Image);

    document.getElementById("registerMessage").innerText = "Registro exitoso.";
});

// Login
document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const imageFile = document.getElementById("loginImage").files[0];

    if (!imageFile) {
        document.getElementById("loginMessage").innerText = "Por favor, selecciona una imagen.";
        return;
    }
    const storedImage = localStorage.getItem("registeredImage");
    if (!storedImage) {
        document.getElementById("loginMessage").innerText = "No hay imagen registrada. Por favor, regístrate primero.";
        return;
    }

    const base64Image = await toBase64(imageFile);
    if (base64Image === storedImage) {
        document.getElementById("loginMessage").innerText = "Inicio de sesión exitoso.";
         window.location.href = "api.html";
    } else {
        document.getElementById("loginMessage").innerText = "Imagen no coincide. Inicio de sesión fallido.";
    }
});
