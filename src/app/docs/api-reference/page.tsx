'use client'

export default function ApiReferencePage() {
  return (
    <div className="max-w-none prose-gray">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
        API Reference
      </h1>
      
      <p className="text-muted-foreground leading-7 mb-4">
        Complete API documentation for Gray Bay Solutions services.
      </p>

      <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-10 mb-4">
        Authentication
      </h2>

      <p className="text-muted-foreground leading-7 mb-4">
        All API requests require authentication using API keys.
      </p>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        API Key
      </h3>

      <p className="text-muted-foreground leading-7 mb-4">
        Include your API key in the header of all requests:
      </p>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.graybaysolutions.io/v1/endpoint`}</code>
      </pre>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        Rate Limits
      </h3>

      <p className="text-muted-foreground leading-7 mb-4">
        API calls are limited to:
      </p>

      <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-1">
        <li className="leading-7"><strong className="font-semibold text-foreground">Free tier</strong>: 100 requests per hour</li>
        <li className="leading-7"><strong className="font-semibold text-foreground">Pro tier</strong>: 1,000 requests per hour</li>
        <li className="leading-7"><strong className="font-semibold text-foreground">Enterprise</strong>: 10,000 requests per hour</li>
      </ul>

      <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-10 mb-4">
        Endpoints
      </h2>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        Website Templates
      </h3>

      <h4 className="text-lg font-semibold tracking-tight text-foreground mt-6 mb-2">
        List Templates
      </h4>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>GET /v1/templates/websites</code>
      </pre>

      <p className="text-muted-foreground leading-7 mb-4">
        Returns available website templates for different industries.
      </p>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="font-semibold text-foreground">Response:</strong>
      </p>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>{`{
  "templates": [
    {
      "id": "restaurant-basic",
      "name": "Restaurant Template",
      "industry": "restaurant",
      "price": 1500
    }
  ]
}`}</code>
      </pre>

      <h4 className="text-lg font-semibold tracking-tight text-foreground mt-6 mb-2">
        Create Website
      </h4>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>POST /v1/websites</code>
      </pre>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="font-semibold text-foreground">Request Body:</strong>
      </p>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>{`{
  "template_id": "restaurant-basic",
  "business_name": "Joe's Diner",
  "customizations": {
    "primary_color": "#ff6b35",
    "logo_url": "https://example.com/logo.png"
  }
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        Chatbots
      </h3>

      <h4 className="text-lg font-semibold tracking-tight text-foreground mt-6 mb-2">
        Create Chatbot
      </h4>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>POST /v1/chatbots</code>
      </pre>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="font-semibold text-foreground">Request Body:</strong>
      </p>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>{`{
  "business_type": "restaurant",
  "business_name": "Joe's Diner",
  "settings": {
    "enable_booking": true,
    "business_hours": "9AM-9PM"
  }
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        SEO Services
      </h3>

      <h4 className="text-lg font-semibold tracking-tight text-foreground mt-6 mb-2">
        Start SEO Audit
      </h4>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>POST /v1/seo/audit</code>
      </pre>

      <p className="text-muted-foreground leading-7 mb-4">
        <strong className="font-semibold text-foreground">Request Body:</strong>
      </p>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>{`{
  "website_url": "https://joesdiner.com",
  "business_location": "New York, NY"
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-10 mb-4">
        Error Handling
      </h2>

      <p className="text-muted-foreground leading-7 mb-4">
        All errors return a JSON response with the following structure:
      </p>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>{`{
  "error": {
    "code": "invalid_request",
    "message": "The request is missing required parameters"
  }
}`}</code>
      </pre>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        Error Codes
      </h3>

      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse border border-border">
          <thead className="bg-muted">
            <tr className="border-b border-border">
              <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Code</th>
              <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="border border-border px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">invalid_request</code></td>
              <td className="border border-border px-4 py-2 text-muted-foreground">Request is malformed or missing parameters</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">unauthorized</code></td>
              <td className="border border-border px-4 py-2 text-muted-foreground">Invalid or missing API key</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">rate_limit_exceeded</code></td>
              <td className="border border-border px-4 py-2 text-muted-foreground">Too many requests</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">not_found</code></td>
              <td className="border border-border px-4 py-2 text-muted-foreground">Resource not found</td>
            </tr>
            <tr className="border-b border-border">
              <td className="border border-border px-4 py-2 text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">server_error</code></td>
              <td className="border border-border px-4 py-2 text-muted-foreground">Internal server error</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-10 mb-4">
        SDKs
      </h2>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        JavaScript/Node.js
      </h3>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>npm install @graybaysolutions/sdk</code>
      </pre>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>{`import { GrayBayClient } from '@graybaysolutions/sdk'

const client = new GrayBayClient({
  apiKey: 'your-api-key'
})

const website = await client.websites.create({
  templateId: 'restaurant-basic',
  businessName: 'Joe\\'s Diner'
})`}</code>
      </pre>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        Python
      </h3>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>pip install graybaysolutions</code>
      </pre>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>{`from graybaysolutions import Client

client = Client(api_key='your-api-key')

website = client.websites.create(
  template_id='restaurant-basic',
  business_name="Joe's Diner"
)`}</code>
      </pre>

      <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-10 mb-4">
        Webhooks
      </h2>

      <p className="text-muted-foreground leading-7 mb-4">
        Set up webhooks to receive notifications about project status updates.
      </p>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        Webhook Events
      </h3>

      <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-1">
        <li className="leading-7"><code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">website.created</code> - Website project created</li>
        <li className="leading-7"><code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">website.completed</code> - Website project completed</li>
        <li className="leading-7"><code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">chatbot.trained</code> - Chatbot training completed</li>
        <li className="leading-7"><code className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-mono">seo.audit.completed</code> - SEO audit finished</li>
      </ul>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mt-8 mb-3">
        Webhook Payload
      </h3>

      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        <code>{`{
  "event": "website.completed",
  "data": {
    "project_id": "proj_123",
    "website_url": "https://joesdiner.com",
    "status": "live"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}</code>
      </pre>
    </div>
  )
} 