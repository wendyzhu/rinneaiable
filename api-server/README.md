# RINNE AIABLE API Server

Simple Express API server for handling contact form submissions via SendGrid.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Configure your SendGrid credentials in `.env`:
   - `SENDGRID_API_KEY`: Your SendGrid API key
   - `SENDGRID_FROM_EMAIL`: Your verified sender email in SendGrid
   - `RECIPIENT_EMAIL`: The email address where you want to receive form submissions

## Running Locally

```bash
npm start
```

The server will run on `http://localhost:3001`

## Deploying to Render.com

1. Create a new Web Service on Render.com
2. Connect your GitHub repository
3. Set the root directory to `api-server`
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables:
   - `SENDGRID_API_KEY`
   - `SENDGRID_FROM_EMAIL`
   - `RECIPIENT_EMAIL`
   - `PORT` (optional, Render will set this automatically)

## API Endpoints

### POST /api/contact
Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your interest! We will contact you soon."
}
```

### GET /health
Health check endpoint.
