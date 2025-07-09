const fetch = require('node-fetch');

async function testCategories() {
  const urls = [
    'https://fakestoreapi.in/api/categories',
    'https://fakestoreapi.in/categories'
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log(\`Failed to fetch \${url}: \${res.status} \${res.statusText}\`);
        continue;
      }
      const data = await res.json();
      console.log(\`Success fetching \${url}:\`, data);
    } catch (err) {
      console.log(\`Error fetching \${url}:\`, err.message);
    }
  }
}

testCategories();
