# Portafolio-TdeAw

Portafolio web del equipo TdeAw. Construimos soluciones de software accesibles, efectivas y a la medida para microempresas y personas.

## Mision

Brindar soluciones de software accesibles, efectivas y a la medida para microempresas y personas, ayudandoles a mejorar sus procesos, fortalecer su presencia digital y resolver necesidades reales con tecnologia de calidad.

## Stack

- Frontend: React + Tailwind CSS + Vite
- Backend: Python
- Base de datos: MongoDB

## Estructura

```text
Portafolio-TdeAw/
|-- .github/
|   |-- ISSUE_TEMPLATE/
|   `-- pull_request_template.md
|-- backend/
|   |-- app/
|   |   |-- api/
|   |   |-- core/
|   |   |-- db/
|   |   |-- models/
|   |   |-- schemas/
|   |   |-- services/
|   |   `-- main.py
|   |-- tests/
|   |-- .env.example
|   `-- requirements.txt
|-- docs/
|   |-- acuerdos/
|   |-- ideas/
|   |-- brief.md
|   |-- content-template.md
|   `-- roadmap.md
|-- frontend/
|   |-- public/
|   `-- src/
|       |-- assets/
|       |-- components/
|       |-- hooks/
|       |-- layouts/
|       |-- pages/
|       |-- sections/
|       |-- services/
|       |-- styles/
|       `-- utils/
|-- .editorconfig
|-- .gitignore
`-- README.md
```

## Flujo de trabajo

- La rama principal es `main`
- No se trabaja directamente sobre `main`
- Cada cambio vive en una rama propia
- Los cambios entran por Pull Request

## Convenciones

- Ramas: `feature/...`, `fix/...`, `chore/...`
- Commits: `feat:`, `fix:`, `chore:`, `docs:`

## Primeros objetivos

1. Terminar la identidad visual del portafolio
2. Organizar componentes del frontend
3. Preparar el backend para formulario y contacto
4. Conectar MongoDB cuando definan los datos reales
