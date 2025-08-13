

# LinuxStudio – The Linux Management Platform

Unifies **Cockpit** (system management) and **Portainer** (container management) into a single, modern, mobile-friendly dashboard. Replace complex terminal commands with real-time, visual controls for Linux systems and Docker containers.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Version](https://img.shields.io/badge/version-0.1.0-blue)](#)
[![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-green)](#installation)

---

## Table of Contents

1. [Overview](#linuxstudio--the-linux-management-platform)
2. [Installation](#installation)
3. [Quick Start / Usage](#quick-start--usage)
4. [API & Detailed Usage](#api--detailed-usage)
5. [Configuration](#configuration)
6. [Contributing](#contributing)
7. [Contact / Support](#contact--support)
8. [FAQ](#faq)
9. [Troubleshooting](#troubleshooting)

---

## Installation

### Prerequisites

* Node.js >= 20
* npm >= 9
* Docker (for containerized deployment)
* Modern Linux distribution with `systemd`

### Clone the Repository

```bash
git clone https://github.com/your-org/LinuxStudio.git
cd LinuxStudio
```

### Environment Setup

```bash
cp .env.example .env
```

### Local Development (Separate)

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

### Docker Deployment

```bash
docker compose up -d --build
```

---

## Quick Start / Usage

Once running:

* **Frontend UI**: `http://localhost:3000` (Dashboard)
* **Backend API**: `http://localhost:4000`

Example: Access live metrics

```bash
curl http://localhost:4000/system/info
```

Expected output:

```json
{
  "hostname": "demo-host",
  "os": "Ubuntu 22.04",
  "uptime": 123456
}
```

---

## API & Detailed Usage

| Endpoint                        | Method | Description                               |
| ------------------------------- | ------ | ----------------------------------------- |
| `/system/info`                  | GET    | Retrieves system info via Cockpit API     |
| `/system/service/:name/restart` | POST   | Restarts a systemd service                |
| `/containers`                   | GET    | Lists Docker containers via Portainer API |

**Example – Restart a Service**

```bash
curl -X POST http://localhost:4000/system/service/nginx/restart
```

---

## Configuration

You can customize settings in `.env`:

```env
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:4000
COCKPIT_BASE_URL=http://localhost:9090
COCKPIT_TOKEN=your_cockpit_token
PORTAINER_BASE_URL=http://localhost:9443/api
PORTAINER_TOKEN=your_portainer_token
```

---


---

## Contributing

We welcome contributions!

1. Fork the repo
2. Create a new branch:

```bash
git checkout -b feature/my-feature
```

3. Commit changes and push:

```bash
git push origin feature/my-feature
```

4. Open a pull request




---

## FAQ

<details>
<summary>Does LinuxStudio replace Cockpit and Portainer?</summary>
No, it integrates them into a unified interface. You still need both installed.
</details>

<details>
<summary>Can I run LinuxStudio without Docker?</summary>
Yes, but Docker deployment simplifies setup.
</details>

---

## Troubleshooting

<details>
<summary>Frontend not loading</summary>
Ensure the backend is running and `NEXT_PUBLIC_BACKEND_URL` in the frontend `.env` matches your backend URL.
</details>

<details>
<summary>Metrics not updating</summary>
Check your Socket.io connection and ensure WebSocket ports are open.
</details>

---
