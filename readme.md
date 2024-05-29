# Here is the Website link: [Sheryians_Coding_School_Level_3_ProjectNo_1_significo](https://pratikrameshmajage.github.io/Sheryians_Coding_School_Level_3_ProjectNo_1_significo/).


# Install Tailwind CSS
```
npm install -D tailwindcss
npx tailwindcss init
```
# Configure your template paths
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
# Add the Tailwind directives to your CSS
```
input.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Start the Tailwind CLI build process
```
Terminal
npx tailwindcss -i input.css -o output.css --watch
```

# Start using Tailwind in your HTML
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```
