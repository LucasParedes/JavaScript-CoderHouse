# JavaScript - CoderHouse
✔️**FINALIZADO**✔️

Este trabajo se encuentra finalizado, fue realizado como proyecto final para el curso "JavaScript" de CoderHouse.

📝**DESCRIPCIÓN**📝  

El objetivo de este Proyecto fue crear una Concesionaria de Auto con JavaScipt, la cual cuente con un Registro, un Login y la Pagina Principal, entre otras.        
Estos mismos guardan sus datos con la api de IndexDB.

Registro --> Cuando se registra un usuario nuevo su guarda en esta misma api, en la seccion de registro, con sus datos correspondiente, ingresados por el mismo usuario.
A su vez cuando el usuario le da al boton de registrarse, este mismo utiliza la libreria de Toastify para que nos muestre un pop-up de "Registro exitoso" y luego se redirige a la pagina de login.

Login --> Cuando se hace un login exitoso con los datos que estan guardados en IndexDB, nos redirige a la Pagina Principal de la Concesionaria. Si se ingresan usuario o contraseñas invalidas las cuales no estan en la Base , nos muestra un error de validacion.

Pagina Principal --> En esta seccion tenemos dos opciones "Ver inventario" y "Contacto" cuando se selecciona la de "ver inventario" nos muestra los autos que hay, y si queremos contactar a la concesionaria por algun auto que estamos interesados, le damos click al boton de "ver detalles" el cual lo incluye cada auto y este nos abre el form de contacto, el cual el mensaje se agrega automaticamente dependiendo el auto que querramos que nos manden mas información, cuando se envia el form, tenemos una validacion para que nos muestra que se envió correctamente.

**Todas estas seccion, tambien cuentan con algunas validacion como:**
- Que todos los campos sean obligatorios
- Que el campo email, se pase solo tipo "email"
- Que el password este encriptado
  

🔧**Herramientas/Lenguajes/Librerias utilizados:**

- Visual Studio Code                                                                                                                                                  
- JavaScript                                                                                                                                                          
- HTML                                                                                                                                                                
- CSS                                                                                                                                                                 
- Api --> IndexDB                                                                                                                                                     
- Libreria --> Toastify
