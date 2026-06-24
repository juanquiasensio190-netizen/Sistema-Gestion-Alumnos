# Sistema de Gestión de Alumnos

## Descripción del Proyecto

Este es un sistema web interactivo desarrollado para la administración académica. Permite registrar alumnos (capturando nombre, documento/cédula y materia), asignarles una nota final en una escala del 1 al 5 y gestionar la lista mediante la eliminación dinámica de registros, manteniendo la persistencia de datos local en el navegador utilizando LocalStorage.

---

## Integrantes del Grupo

- Diego Peña
- Juan Franco

---

## Tareas Realizadas

### Estructura Base (HTML5)
- Creación del formulario de registro de datos académicos.
- Maquetación de la tabla para la visualización de alumnos registrados.

### Diseño e Interfaz (CSS3)
- Implementación de un diseño moderno de dos columnas.
- Diseño adaptable (Responsive Design).
- Uso de variables CSS.
- Estilización de botones, formularios y tablas.

### Lógica y Persistencia (JavaScript)
- Registro dinámico de alumnos.
- Eliminación de registros.
- Manejo del DOM.
- Persistencia de datos utilizando LocalStorage.

---

# Dockerización del Proyecto

## Dockerfile

Se creó un Dockerfile utilizando la imagen oficial **nginx:alpine** para contenerizar la aplicación web.

```Dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
```

---

## Construcción de la Imagen Docker

```bash
docker build -t sistema-alumnos .
```

---

## Ejecución del Contenedor

```bash
docker run -d -p 8080:80 --name mi-contenedor sistema-alumnos
```

---

## Verificación del Contenedor

```bash
docker ps
```

---

## Acceso a la Aplicación

Una vez iniciado el contenedor, la aplicación se encuentra disponible en:

```
http://localhost:8080
```

---

## Evidencias del Trabajo

Se realizaron correctamente las siguientes actividades:

- Creación del Dockerfile.
- Construcción de la imagen Docker.
- Ejecución del contenedor Docker.
- Verificación mediante el comando `docker ps`.
- Visualización del sistema funcionando desde Docker en el navegador.

---

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Docker
- Nginx
- Git
- GitHub
- Netlify

---

## Repositorio

Repositorio del proyecto:

https://github.com/juanquiasensio190-netizen/Sistema-Gestion-Alumnos

---

## Autor

Trabajo Práctico desarrollado para la asignatura **Cloud Computing**.
- Contenedor ejecutándose.
- Verificación mediante `docker ps`.
- Aplicación funcionando desde Docker en el navegador.
