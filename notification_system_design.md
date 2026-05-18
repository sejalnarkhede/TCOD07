# Notification System Design

## Overview
This project is a campus notification management system built using React and JavaScript.

The system fetches notifications from the API and displays them in a modern dashboard UI.

## Features
- Fetch notifications from API
- Display top 10 notifications
- Filter notifications by type
- Logging middleware integration
- Responsive notification cards

## Notification Priority
Notifications are filtered and displayed based on user selection:
- Placement
- Result
- Event

## Logging Middleware
A reusable logging middleware function is used to send logs to the evaluation logging API.

Logs are generated during:
- API fetch
- Filter selection

## Tech Stack
- React
- JavaScript
- Vite
- Fetch API

## Future Improvements
- Search functionality
- Real-time notifications
- Better mobile responsiveness