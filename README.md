# Smart Urban Traffic Management Platform

##  Description

Cette application est une plateforme intelligente de gestion du trafic urbain basée sur une architecture microservices avec une API Gateway GraphQL.

Le système permet :
- la gestion des utilisateurs et authentification JWT
- la gestion des véhicules
- l’analyse du trafic urbain
- la gestion des incidents
- l’envoi de notifications temps réel

---

#  Architecture

Le projet est composé de plusieurs microservices indépendants :

- Auth Service
- Vehicle Service
- Traffic Service
- Incident Service
- Notification Service
- GraphQL Gateway

Chaque service possède sa propre base de données.

---

#  Technologies utilisées

## Backend
- Node.js
- Express.js
- GraphQL (Apollo Server)

## Base de données
- MySQL

## Sécurité
- JWT Authentication
- bcrypt

## Temps réel
- WebSocket

## Outils
- Git / GitHub
- Docker

---

#  Structure du projet

project/
│
├── auth-service/
├── vehicle-service/
├── traffic-service/
├── incident-service/
├── notification-service/
├── gateway-graphql/
└── docker-compose.yml

---

#  Bases de données

Le projet utilise plusieurs bases MySQL :

- auth_db
- vehicle_db
- traffic_db
- incident_db

---

git clone <repo-url>
cd project
