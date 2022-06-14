## Fundamentos NOdeJS

- Es un entorno de ejecucionde de javaScript fuera del navegador, creado en el 2009 y esta orientado a servidores.

- Permite tener servidores de forma asincrona ya que node permite correr codigo en cualquier parte.

- Node corre sobre el motor v8, creado por google en c++. Convierte el codigo javaScript en codigo maquina en lugar de interpretarlo en tiempo real.

- En Node todo funciona en base a modulos, todo lo que no sea sintaxis del lenguaje son modulos. se pueden crear propios modulos aparte de los que ya vienen por defecto.

- Es orientado a eventos, permitiendo programar de forma reactiva.

## EventLoop

- Es un proceso con un bucle que se encarga de gestionar de forma asincrona todos los eventos de la aplicacion
- Event Queue: Contiene todos los eventos o procesos del codigo, que quedan en una cola y se van pasando al eventLoop
- Thread Pool: Se encarga de gestionar los eventos de forma asincrona como (DB ops , files, slow Ops). Finalizada la gestion los devuelve al EventLoop y este se encargara de decidir si los pasa al EventQueue o no.

## Monohilo
-
- Importante: Cuando ocurre un error dentro de alguno de los hilos y no se controla apropiadamente (catch); Node detiene todos los hilos ejecución. Esto puede ser muy peligroso, debido a que es dificil determinar fue el origen del problema y en que punto de ejecución se encontraba cada hilo cuando fue detenido.
