Esta aplicación web es una interfaz de usuario para registrar y autenticar usuarios mediante el reconocimiento de rostros en imágenes, seguido de la renderización de una plantilla personalizada usando una API pública. El sistema está dividido en dos secciones principales: la página de registro/inicio de sesión y la página de renderización de plantilla.
Estructura de Archivos

    index.html: Contiene el formulario de registro y el inicio de sesión con imagen.
    main.js: (archivo no incluido aquí) Debe gestionar la lógica de alternar entre los formularios de registro e inicio de sesión y de integrar la API de detección facial privada.
    api.html: Interfaz de usuario para renderizar una plantilla personalizada mediante una API pública.
    estilos.css: Contiene los estilos del formulario de registro e inicio de sesion
# Detalle de Archivos
## 1. index.html

Este archivo HTML contiene el diseño de la página de registro e inicio de sesión. La funcionalidad principal de esta sección es capturar la imagen del usuario, enviarla a la API privada para el reconocimiento facial y, una vez autenticado el usuario, redirigirlo a la página de renderización de plantilla.
Estructura de index.html

    Formulario de Registro: Permite a los usuarios cargar una imagen para registrar su rostro.
    Formulario de Inicio de Sesión: Permite a los usuarios cargar una imagen para autenticarse mediante el reconocimiento facial.
    Botón de Alternar Formularios: Cambia entre las secciones de registro e inicio de sesión.
    JavaScript (main.js): Este script debería realizar la integración con la API de detección facial y manejar la lógica de alternancia de formularios.

Funcionalidades Clave

    Carga de Imagen: Los usuarios pueden cargar una imagen desde su dispositivo.
    Integración con la API de Reconocimiento Facial: Envía la imagen del usuario a una API privada para validación facial.
    Mensajes de Estado: Muestra mensajes de éxito o error tras el registro o inicio de sesión, según la respuesta de la API.
![image](https://github.com/user-attachments/assets/c1250cad-5cbe-4509-997c-1c0964e4667c)


## 2. api.html

Esta página se encarga de hacer la solicitud a una API pública para renderizar una plantilla una vez el usuario se haya autenticado correctamente.
Estructura de api.html

    Estado de Renderización: Muestra el estado de la solicitud de renderización (inicializando, en progreso, completado o error).
    Script de Renderización: Hace una petición a la API pública para renderizar una plantilla con el ID especificado y el token de autenticación.

Funcionalidades Clave

    API de Renderización Pública: Realiza una solicitud POST a la API pública para iniciar el proceso de renderización de la plantilla.
    Verificación de Estado de Renderización: Cada cinco segundos, realiza una petición GET para verificar el estado de renderización. Una vez completada, redirige al usuario al enlace de la plantilla renderizada.
    Mensajes de Estado: Proporciona retroalimentación visual sobre el estado del proceso de renderización.
![image](https://github.com/user-attachments/assets/8dfff434-8d93-4818-873a-d393f9725eed)
![image](https://github.com/user-attachments/assets/8712c7ed-abbd-495a-8600-254fce957da5)


# Requisitos

    API Privada de Detección de Rostros: Para el registro e inicio de sesión mediante reconocimiento facial.
    API Pública de Renderización de Plantillas: Para generar la imagen de una plantilla personalizada después de la autenticación.

# Cómo Usar

    Registro:
        Cargar una imagen en el formulario de registro y hacer clic en "Registrar".
        La API privada verificará y almacenará la imagen para futuros inicios de sesión.

    Inicio de Sesión:
        Cargar una imagen en el formulario de inicio de sesión y hacer clic en "Iniciar sesión".
        La API privada intentará validar la imagen con las imágenes registradas previamente.

    Renderización de Plantilla:
        Después de una autenticación exitosa, el usuario será redirigido automáticamente a template_render.html.
        En esta página, la aplicación iniciará una solicitud a la API pública para renderizar la plantilla.
        El usuario verá el progreso y será redirigido al enlace de la plantilla una vez el renderizado esté completo.
