     _                                         _               _     
    | | ___  __ _ _ __ _ __  _   _  ___  _   _| |__   __ _ ___| |__  
    | |/ _ \/ _` | '__| '_ \| | | |/ _ \| | | | '_ \ / _` / __| '_ \
    | |  __/ (_| | |  | | | | |_| | (_) | |_| | |_) | (_| \__ \ | | |
    |_|\___|\__,_|_|  |_| |_|\__, |\___/ \__,_|_.__/ \__,_|___/_| |_|
                             |___/                                   

Bienvenido a **learnyoubash**!

Este taller está completamente basado en **bash-handbook**:

<https://github.com/denysdovhan/bash-handbook>


### ¿Qué es Bash?

Bash es un shell de Unix escrito por **Brian Fox** para el GNU PROJECT como un reemplazo del software gratuito para el [Bourne shell](https://en.wiki
pedia.org/wiki/Bourne_shell). Fue lanzado en 1989 y se ha distribuido como shell predeterminado de Linux y OS X durante mucho tiempo. Hoy, Bash es una de las herramientas más poderosas y portátiles para escribir scripts eficientes para todos los sistemas basados en Unix. ¡Entonces empecemos!

### Modos interactivos y no interactivos

Bash puede trabajar en dos diferentes modos: interactivo y no interactivo.

Justo ahora estás interactuando con este taller usando comandos, por ejemplo, `learnyoubash`. Este es un _modo interactivo_. Aquí puede ingresar una variedad de comandos de Unix, como `ls`, `grep`, `cd`, `mkdir`, `rm` y ver el resultado de su ejecución.

En _modo no interactivo_, el shell lee los comandos de un archivo o una tubería y los ejecuta. Los ejercicios de este taller le enseñarán cómo escribir scripts simples usando Bash.

### ¿Qué es el script?

Un script es simplemente un archivo de texto regular que consta de comandos que el intérprete de shell puede evaluar utilizando el programa intérprete de shell `bash`. Los comandos son solo comandos regulares que también puede usar desde el modo interactivo.

Crea tu primer script usando el comando `touch`.

    touch hi.bash

El comando `touch` crea un archivo vacío en su directorio actual.

Ahora puede simplificar la invocación del script convirtiéndolo en un archivo ejecutable usando el comando `chmod`:

    chmod +x hi.bash

Además, la primera línea del script debe indicar qué programa debe usar para ejecutar el archivo, así:

```bash
#!/usr/bin/env bash

echo "Hi!"
```

Esta secuencia de caracteres `#!/usr/bin/env bash` se conoce como [shebang](http://en.wikipedia.org/wiki/Shebang_%28Unix%29). Ahora, puedes ejecutar un script como este:

    ./hi.bash

Otra cosa útil que aprendimos anteriormente es usar `echo` para imprimir algo en la pantalla del terminal.

## EL RETO

Crea un archivo llamado `hello.bash` (prefiero usar `touch`).

Ese archivo debe contener un comando que genere:

    Hello, world!

---
