# Health P2P 🏥

Aplicación de salud descentralizada peer-to-peer. Los pacientes son dueños de sus datos y deciden con quién compartirlos.

## ✨ Características

- 🔐 Identidad con 12 palabras (frase semilla)
- 📊 Registro de constantes vitales (TA, FC, glucemia, etc.)
- 📝 Consultas médicas con diagnóstico y tratamiento
- 💬 Respuestas del médico a consultas
- 🔒 Notas privadas para profesionales
- 👥 Roles: Paciente (dueño) / Médico (acceso por token)
- 🚫 Sin servidores, sin nube, sin terceros

## 🛠️ Stack Tecnológico

- **Runtime**: [Pear](https://pears.com) (Holepunch)
- **UI**: React 19 + JavaScript
- **P2P**: Hyperdrive, Hyperswarm, HyperDHT
- **Identidad**: BIP39 (12 palabras)

## Dependencias Claves

{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "pear-electron": "^1.7.28",
    "pear-bridge": "^1.2.5",
    "pear-updates": "^1.0.1",
    "pear-wakeups": "^1.0.0",
    "pear-pipe": "^1.0.1"
  }
}

## 📦 Instalación

```bash
# Clonar repositorio
git clone <tu-repo>
cd health-p2p

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (navegador)
npm run dev

# Compilar para producción
npm run build

# Ejecutar en Pear (escritorio)
npm run pear
```

## 🚀 Uso Básico

1. **Crear identidad**: Al abrir la app, generar frase de 12 palabras
2. **Guardar frase**: ¡Imprescindible! En papel, lugar seguro
3. **Registrar constantes**: Paciente ingresa TA, glucemia, etc.
4. **Consultas médicas**: Médico crea consultas con diagnóstico
5. **Compartir**: Paciente genera token y lo envía al médico

## 📁 Estructura del Proyecto

```
health-p2p/
├── index.js          # Proceso principal Pear
├── app.js            # UI React
├── index.html        # Entrypoint HTML
├── src/              # Componentes React
│   ├── components/   # UI reutilizable
│   ├── containers/   # Páginas/paneles
│   ├── context/      # Contextos (UserContext)
│   └── hooks/        # Hooks personalizados
└── test/             # Tests
```

## 🤝 Contribuir

El proyecto está en fase inicial. Las áreas clave para contribuir:

- Migración completa de componentes de salud
- Implementación de red P2P real
- UI/UX refinamiento
- Tests

## Estructura de Archivos

```
health-p2p/
│
├── 📄 package.json           # Configuración principal y dependencias
├── 📄 index.js                # Proceso principal de Pear (backend ventana)
├── 📄 app.js                  # UI con React (código frontend)
├── 📄 index.html              # Punto de entrada HTML
│
├── 📁 src/                     # Código fuente React (pendiente de migrar)
│   ├── 📁 components/          # Componentes UI
│   ├── 📁 containers/          # Contenedores (App, paneles)
│   ├── 📁 context/             # Contextos React (UserContext)
│   ├── 📁 hooks/               # Hooks personalizados (useUser)
│   └── 📁 styles/              # Estilos CSS/Tailwind
│
└── 📁 test/                     # Tests (estructura Pear)
```

## 📄 Licencia

Apache-2.0

## 🙌 Agradecimientos

- [Holepunch](https://holepunch.to) por Pear Runtime
- La comunidad de código abierto
