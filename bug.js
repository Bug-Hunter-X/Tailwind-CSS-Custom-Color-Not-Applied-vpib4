```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color': '#007bff', // Example custom color
      }
    }
  },
  plugins: [],
}
```

```html
<!-- index.html -->
<div class="bg-custom-color">
  <h1>Hello, world!</h1>
</div>
```