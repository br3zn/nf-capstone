# "Bubatz" - educational app about cannabis

> This is my capstone project for a web developer bootcamp hosted by :fish: [neueFische](https://www.neuefische.de/)

This project is for cannabis users who wants to get more information about strains, their terpenes and what these terpenes are.

_This is not about the best looking or most exotic sounding strains, but the benefits of using cannabis for different issues. There are only infos about a strains thc level and their terpenes._

## Features

- Strain overview
- Terpene information

The preview deployment reflects the main branch and is accessible under [nf-capstone-bubatz-dev.vercel.app](https://nf-capstone-bubatz-dev.vercel.app/)

The link in the description is the "production build", only a production ready version will get deployed there.

---

## Tech

I used Next.js as my framework and Apollo GraphQL to fetch data. Apollo server runs in a next/api route and is connected to two data sources. The first is a REST api which I deconstructed for educational purposes. The second is a postgreSQL database where I store information about terpenes.

## Stack

- next.js
- tailwindCSS
- postCSS
- eslint
- prettier
- apollo/client
- jest
- cypress
- msw
