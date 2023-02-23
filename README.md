Las rutas con las que le puedes hacer peticiones a esta API son las siguientes

GET https://todolistapi-production-ffac.up.railway.app/registros y recibiras un JSON con todos los todos hasta el momento

GET https://todolistapi-production-ffac.up.railway.app/registros/id Sustituye id por el numero de todo que deseas y recibes un json

POST https://todolistapi-production-ffac.up.railway.app/registros En el body necesitas usar: task: La nueva tarea que deseas agregar

PATCH https://todolistapi-production-ffac.up.railway.app/registros/id En el body necesitas usar: task: La nueva tarea que deseas agregar

DELETE https://todolistapi-production-ffac.up.railway.app/registros/id el id de la tarea que deseas eliminar
