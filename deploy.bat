@echo off
echo ===============================
echo Desplegando Sistema de Alumnos
echo ===============================

git add .
git commit -m "Actualizacion del proyecto"
git push origin main

docker build -t sistema-alumnos .

docker stop mi-contenedor 2>nul
docker rm mi-contenedor 2>nul

docker run -d -p 8080:80 --name mi-contenedor sistema-alumnos

start http://localhost:8080

pause