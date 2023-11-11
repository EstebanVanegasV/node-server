Preguntas:
¿Qué sucedió al usar async y await?

Al usar async y await, las funciones asíncronas (async) permiten esperar a que las promesas se resuelvan de forma más legible y sin necesidad de encadenar .then(). Esto hace que el código sea más claro y se asemeje a un estilo de programación síncrono.

¿Qué sucedió al usar el método then()?

Al usar el método then(), se sigue el enfoque tradicional de las promesas. Cada operación asíncrona se maneja mediante encadenamiento de .then(). Aunque funcional, puede llevar a un código más anidado y menos legible en comparación con el uso de async y await.

¿Qué diferencias encontraste entre async, await y el método then()?

async y await:

Proporcionan una sintaxis más limpia y fácil de entender.
Hacen que el código asíncrono se vea más similar al código síncrono.
Facilitan la gestión de errores con try/catch.
then():

Requiere encadenar múltiples .then() para manejar operaciones asíncronas sucesivas.
Puede resultar en un código más anidado y menos claro en comparación con async/await.
Se utiliza comúnmente en código más antiguo o en situaciones donde async/await no es soportado o deseado.
