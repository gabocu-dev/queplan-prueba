# Prueba técnica que plan

Primero quier agradecer al equipo de Que Plan por su tiempo y por la confianza que me han brindado. estas son algunas aclaraciones:

1. como se podrá ver en el proyecto, se trabajó con el sistema de ramas bajo una rama principal que es develop. Para cada rama se creo un pull request con su respectivo merge a develop.
2. Debido al pequeño tamaño del proyecto no se hizo necesario establecer un estado con Redux ngrx.
3. Se utilizó el framework de UI ng prime.
4. La vista de home tiene dos opciones: la de cards que se hizo con maquetación y estilos manualmente, y la de tabla para ejemplificar el uso de herramientas y frameworks de UI.
5. Otras cosas como el paginador se hicieron con ayuda del framework ui.
6. En el filtro no se usó la edad, debído a que en la información de la API no se encuentra edad o fecha de nacimiento.
7. Como el proyecto es publico, la transferencia de datos se manejó como un parámetro de la ruta. si se quería mas privacidad se podría usar el local storage. Lo ideal en una plataforma privada y segura es establecer un estado, donde se dispara un action que activa un effect, este usara un servicio para realizar la consulta y se guardaran los datos en el estado de la app donde se podrán consultar cuando se necesiten.


Muchas gracias de nuevo por todo su tiempo y siempre estaré abierto a cualquier tipo de retroalimentación.

GABRIEL EDUARDO CARDONA URIBE
