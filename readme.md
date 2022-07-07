# JavaScript Avanzado

* Npm y paquetes.
* Node para front y back end.
* Arquitectura de software.
* Stacks de desarrollo web.
* Comparativa entre Node vs JavaScript.
* Event loop.
* Asincronía.
* API Rest.
* ExpressJS (CRUD).
* Deploys.





## Notas adicionales

### **Markdown**

Es un [lenguaje de marcado ligero](https://es.wikipedia.org/wiki/Lenguajes_de_marcas_ligeros "Lenguajes de marcas ligeros") creado por [John Gruber](https://en.wikipedia.org/wiki/John_Gruber "en:John Gruber") y [Aaron Swartz](https://es.wikipedia.org/wiki/Aaron_Swartz "Aaron Swartz") que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, se inspira en convenciones existentes para marcar mensajes de correo electrónico usando texto plano.

### Comandos Git

#### Estado del repo

```
# ver estado del repo
git status

# ver historial de commits
git log --oneline
```

#### Commits / Stage

```
# agregar al staging area
git add .

# quitar del stagin area
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

#### Otro comandos

```
# actualiza la cache de git para que tome ciertos cambios (.gitignore)
git rm --cached . r

# actualiza el mensaje del ultimo commit realizado (no debe estar pusheado)
git commit --amend -m "an updated commit message"

# stash
git stash

# unstash
git stash pop
```

#### Conventional Commits

Es una especificación sobre como escribir mensajes de confirmación (commits).

**Estructura**

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Tipos principales**

* feat: Nuevas caracteristicas.
* chore: Cosas que no aportan un req funcional pero posiblemente si un req no funcional.
* fix: Correccion de errores.
* docs: Commits con documentacion o comentarios.
* style: Estructura de carpetas y nombrado

[más info](https://www.conventionalcommits.org/en/v1.0.0/)

#### VSCode como editor de git

```
git config --global core.editor"visual studio --wait"
git commit 
// ir a vscode a escribir el mensaje, una vez escrito guardar y cerrar.
// regresar a la consola a comprobar el commit
```

### Áreas de estudio
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
