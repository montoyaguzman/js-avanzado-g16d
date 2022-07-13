# JavaScript Avanzado

## Table of Contents

1. [Node](#node)
2. [Npm y paquetes](#npm-y-paquetes)
3. [Node para front y back end](#node-para-front-y-back-end)
4. [Arquitectura de software](#arquitectura-de-software)
5. [Stacks de desarrollo web](#stacks-de-desarrollo-web)
6. [Asincronía y Event Loop](#asincronía-y-event-loop)
7. [Comparativa entre Node vs JavaScript](#node)
8. [Conceptos de una API](#conceptos-de-una-api)
9. [Qué es REST y sus principios](#qué-es-rest-y-sus-principios)
10. [API Rest](#api-rest)
11. [ExpressJS](#expressjs)
12. [Deploys](#deploys)
13. [Notas adicionales](#notas-adicionales)
14. [Glosario](#glosario)

### Node.

Node es un entorno multiplataforma para ejecutar JavaScript fuera del navegador, tiene su origen en el 2010.
Con ayuda de node se puede:

- Recuperar datos de formularios HTML.
- Generar páginas dinámicas en un servidor web. => server side render
- Crear, leer y escribir archivos.
- Procesar y almacenar archivos enviados desde una página web.
- Realizar API Rest.
- Acceder a bases de datos relacionales y no relacionales.

Dentro de node se utilizan mucho los módulos y las callbacks.

- **Módulo:** Permiten aislar parte de nuestro código en diferentes archivos y mandarlos llamar sólo cuándo los necesitamos.

Existen dos formas de utilizar módulos en node:
    - Commun JS.
    - ES6 Imports.

- **Callback:** Es una funcion que se pasa como parametro a otra funcion.

**Path**

Una ruta o path indica una ubicación a nivel de carpeta de algun fichero dentro del
sistema de archivos.
**Ejemplos de rutas**

```
/# Raiz
/

/# Significa ahi mismo
./

/# Regresar un nivel de carpetas../
../../
```

**Localhost**

Es la dirección de mi propio computador (http://localhost:8080), también se le conoce como dirección loopback (http://127.0.0.1:8080).

### Npm y paquetes.

### Node para front y back end.

### Arquitectura de software.

### Stacks de desarrollo web.

### Asincronía y Event Loop.

### Comparativa entre Node vs JavaScript.

### Conceptos de una API.

### Qué es REST y sus principios.

### API Rest.

### ExpressJS.

### Deploys.

## Notas adicionales

### **Markdown**

Es un [lenguaje de marcado ligero](https://es.wikipedia.org/wiki/Lenguajes_de_marcas_ligeros "Lenguajes de marcas ligeros") creado por [John Gruber](https://en.wikipedia.org/wiki/John_Gruber "en:John Gruber") y [Aaron Swartz](https://es.wikipedia.org/wiki/Aaron_Swartz "Aaron Swartz") que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, se inspira en convenciones existentes para marcar mensajes de correo electrónico usando texto plano.

**Medidas de almacenamiento**
1024 bytes = 1 megabytes
1024 megabytes = 1 gygabytes
1024 gygabites = 1 terabytes

### Comandos Terminal

El **CMD** es la línea de comandos basada en MS-DOS para windows, mientras que la **terminal** es la línea de comandos
de unix/lunix (kernels de mac os y algunas distribuciones linux).

```
# imprime el path en el que se encuentra
pwd

# moverse entre carpetas
cd

# listar carpetas y archivos que hay en la carpeta actual
ls

# crear carpetas
mkdir newFolder

# creat archivos
touch nameFile.txt

# eliminar carpetas
rmdir folderName

# eliminar archivos
rm fileName.txt

# comprobar conexión a internet
ping www.google.com

# limpiar la pantalla
clear
```

### Comandos Git

#### Información del repo

```
# ver estado del working directory y staging area
git status

# ver historial de commits
git log --oneline
```

#### Hacer un commit

```
# agregar al staging area
git add .

# quitar del staging area
git restore --staged namefile.txt

# commits
git commit -m "tipoCommit: mi mensaje"

```

#### Remoto

```
# ver los repos remotos a los que esta conectado el repo local
git remote -v

# bajar cambios
git pull origin rama

# subir cambios
git push origin rama

# obtener los cambios de una rama remota y cambiarse a esa rama
git fetch && git checkout develop

#  bajar cambios de una rama remota a una local (cuando ya existe)
git pull origin develop

# subir cambios
git push origin develop

```

#### Administración de ramas

```
# ver rama en la que se encuentra el head
git branch 

# crea una rama nueva
git branch nombreNuevaRama 

# cambiarse a una rama con el nombre nombreRama
git checkout nombreRama

# crear y cambiarse a una nueva rama
git checkout -b nombreNuevaRama

# crear y cambiarse a una nueva rama
git switch -c nombreNuevaRama 

# eliminar una rama
git branch -D nombreRama

```

#### Descartar cambios

```
# Descarta los cambios del stagin y working directory
git reset --hard

# actualiza la cache de git para que tome ciertos cambios (.gitignore)
git rm --cached . r

# actualiza el mensaje del ultimo commit realizado (no debe estar pusheado)
git commit --amend -m "an updated commit message"

# stash: el codigo de working directory y staging area es eliminado temporalmente
git stash

# stash: el codigo de working directory y staging area que fue eliminado se recuperar
git stash pop

```


#### Commits Atómicos

Consiste en realizar un commit por un solo objetivo. Es decir, no mezclar muchas soluciones en el mismo commit.

#### Conventional Commits

Es una especificación sobre como escribir mensajes de confirmación (commits).

**Estructura**

```
[optional scope]: [optional body][optional footer(s)]
```

**Tipos principales**

* feat: Nuevas caracteristicas.
* chore: Cosas que no aportan un req funcional pero posiblemente si un req no funcional.
* fix: Correccion de errores.
* docs: Commits con documentacion o comentarios.
* style: Estructura de carpetas y nombrado

[Más info](https://www.conventionalcommits.org/en/v1.0.0/)


**VSCode como editor de git**

```
git config --global core.editor"visual studio --wait"
git commit
// ir a vscode a escribir el mensaje, una vez escrito guardar y cerrar.
// regresar a la consola a comprobar el commit

```

### Áreas de estudio

#### Arquitectura de software

Modelos de arquitectura, cliente servidor, mvc, eventos, etc.

#### Redes de computadora

Área donde se estudia la comunicación de redes de telecomunicaciones y funcionamiento del internet.

#### Sistemas operativos

Área donde se estudia la estructura de un sistema operativo y todo lo requerido para que opere en el hardware.

#### Testing

Es una área que se encarga de la automatización de pruebas del código.

Las pruebas es un proceso de evaluar un producto, mediante exploración y experimentación.

Entre menos entendemos un producto, tendrá mayores errores.

**Motivos para probar**

* Reducir costos.
* Cuidar el prestigio
* Mejoran la calidad de funcionalidad.
* Minimizan la posibilidad de malas experiencias de usuario.

**Por qué no se hacen siempre**

* No son parte de la solución.
* No se entrega evidencia al cliente.
* Pueden ser difíciles de mantener.
* No hay tiempo o conocimiento.

**Metodologías testing**

* TDD.
* BDD.

#### Herramientas web

* https://www.cual-es-mi-ip.net/
* https://www.toptal.com/developers/gitignore/
* coderunner
* office readme.

### Glosario

- **Sistema operativo:** Es el software que coordina y dirige todos los servicios y aplicaciones que utiliza el usuario en una computadora.
- **Kernel:** El kernel es el núcleo de un sistema operativo y, por tanto, la interfaz (middleware) entre el software y el hardware.
- **Ip:** La dirección IP es una etiqueta numérica, por ejemplo "192.0.10.1" que identifica, de manera lógica y jerárquica, a una interfaz en la red. Existen IP públicas y IP privadas.
- **Dominio:**  Es una dirección web compuesta por un nombre de sitio web y una extensión de dominio. Ejemplo: google.com
- **URL:** Es una dirección web compuesta por al menos el protocolo, dominio y ruta.
- **DNS:** Es un tipo de servidor de redes de computadora que en encarga de convertir direcciones web en dominios IP y viceversa. Ejemplo: 8.8.8.8 => www.google.com
- **Cliente:** Es quien solicita información dentro de un sistema informatico.
- **Request:** Es una solicitud de información.
- **Response:** Es la entrega de información de un servidor a un cliente.
- **Servidor:** Es una instancia fisica o lógica que responde peticiones (request).
- **Estandar:** Es un patrón o modelo a seguir, generalmente derivado de un documento o certificación.
- **Buena práctica:** Es un actividad que se ha demostrado que funciona bien y produce buenos resultados, y, por lo tanto, se recomienda como modelo.
- **Path:** Es una ruta o dirección donde se encuentra alojado un recurso en un sistema de archivos. Existen rutas relativas como ../../my-docs o absolutas como C:\users\juan\Documents\tarea\tesis.doc
- **Puerto:** un lugar donde se abre una conexion para acceder a un servicio.
