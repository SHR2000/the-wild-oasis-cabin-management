# The Wild Oasis Cabin Management

## Live Demo

You can view the live version of the app here: [https://the-wild-oasis-cabin-management.vercel.app/]

## Data Re-upload and Sync

The booking data displayed in the charts is re-uploaded every couple of days to keep it relevant and in sync with the current date. This ensures that the charts show meaningful, non-zero data, instead of outdated or empty charts.

While visiting the site, the data might not reflect real-time changes, but it will always be updated periodically to maintain freshness and relevance.

Feel free to check back periodically to see the updated data.

## Description

The Wild Oasis Cabin Management web application is designed to streamline the management of luxury cabin rentals. It enables administrators to efficiently handle bookings, cabins, user (admin) accounts, and booking settings. Built with React and Supabase, the app provides a seamless and secure experience for managing reservations and operational settings.

## Features

### Admin Features

- **Guest Management**: Check-in and check-out guests.
- **Cabin Management**: Add, update, and delete cabins.
- **Booking Configuration**: Adjust settings such as:
  - Minimum and maximum nights per booking.
  - Maximum guests per cabin.
  - Breakfast pricing.
- **User Management**: Add new admin users.

### Additional Features

- **Email Authentication**: Secure login system powered by Supabase.
- **Optimized Data Fetching**: Utilizes React Query for efficient server-state management.
- **Custom Styling**: Styled with **Styled Components** for a modular and maintainable UI.
- **Data Visualization**: Uses **Recharts** to display booking statistics and analytics.

## Tech Stack

### Frontend

- React
- React Router
- React Query
- React Hook Form
- React Icons
- React Hot Toast
- Styled Components
- Recharts

### State Management

- React Context API

### Utilities

- date-fns

### Backend & Database

- Supabase (database, authentication, and API)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (preferably v22 or higher)
- npm or yarn

### Installation

First, Clone this repository:

```bash
git clone https://github.com/SHR2000/the-wild-oasis-cabin-management.git
```

Second, Navigate to the project directory:

```bash
cd the-wild-oasis-cabin-management
```

Third, Install dependencies:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```
