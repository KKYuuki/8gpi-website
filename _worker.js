// Worker to handle static file serving and API routes
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Handle API routes
  if (url.pathname.startsWith('/api/')) {
    return handleApiRequest(request);
  }
  
  // Handle static files
  return handleStaticRequest(request);
}

async function handleStaticRequest(request) {
  // This will be handled by the static assets from the Pages build output
  return fetch(request);
}

async function handleApiRequest(request) {
  // Handle API routes here
  if (request.method === 'POST' && request.url.endsWith('/api/contact')) {
    try {
      // Process form data here
      const formData = await request.json();
      console.log('Form data received:', formData);
      
      // Return success response
      return new Response(JSON.stringify({ 
        success: true,
        message: 'Form submitted successfully' 
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.error('Error processing form:', err);
      return new Response(JSON.stringify({ 
        error: 'Invalid request',
        details: err.message 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  
  // Return 404 for unknown API routes
  return new Response(JSON.stringify({ error: 'Not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
}
