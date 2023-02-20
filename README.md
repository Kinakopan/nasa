### NASA EPIC App

## Description
This is a Next.js app built using the NASA APIs available at https://api.nasa.gov/.

## Tools/Languages Used

* Next.js
* React
* CSS
* NASA APIs

## Features
On the top of polychromatic page, with just one click on "View" button, users can see the latest images from the Earth Polychromatic Imaging Camera (EPIC), which is located on the DSCOVR satellite. The images are updated every day and show the sunlit side of the Earth from the satellite's vantage point.

The app uses the NASA APIs to fetch the latest images and display them in a responsive grid. Each image is accompanied by its date and time, as well as a caption describing the location and features visible in the image.

## colour Theme
The app uses a colour theme inspired by the colours used on the NASA website. The primary colour is blue colour (#105bd8), and the secondary colours are dark-blue (#0b3d91), gray (#aeb0b5), light-blue (#02bfe7), and red (#dd361c).

Reference: https://nasa.github.io/nasawds-site/components/colours/

## Getting Started
To run the app locally, follow these steps:

1. Clone this repository:
git clone https://github.com/your-username/nasa-epic-app.git

2. Navigate to the project directory:
```
cd nasa-epic-app
```

3. Install the dependencies:
```
npm install
```
 or
```
yarn install
```

4. Create a .env.local file in the root of the project with your API key:

# .env.local
NEXT_PUBLIC_API_KEY=your-api-key-here

5. Start the development server:
```
npm run dev
```
 or
```
yarn dev
```

6. Open http://localhost:3000 in your browser to view the app.
