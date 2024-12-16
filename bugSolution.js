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

**Solution:**

The problem lies in the `content` property in `tailwind.config.js`.  If your HTML or JavaScript files using Tailwind classes are not included in the `content` array, Tailwind won't process them. Ensure the paths provided in the `content` array accurately reflect the location of your files.  The provided solution uses a glob pattern `'./src/**/*.{js,ts,jsx,tsx}'` to include all JavaScript, TypeScript, JSX and TSX files within the `src` directory. Adjust the path to match your project structure.

Also, make sure that you have run `npm run build` or `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch` to build your CSS after modifying `tailwind.config.js`.