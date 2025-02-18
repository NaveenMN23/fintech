This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
1. Install Nodejs and Git
1. clone the repo 
```bash
git clone https://github.com/NaveenMN23/fintech.git
```
2. run the development server:

```bash
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

1. Front-end: ReactJS, ChartJS, Redux.
2. Framework: NextJS.
3. Mock API: NextJS API route.
4. Logging: Log rocket (https://app.logrocket.com/bnizbp/fintech?persistForm=true)
5. Deployed URL: Vercel (https://fintech-n1udigu9g-naveens-projects-d98eea15.vercel.app/)

## Features covered

1. Responsive design (Mobile to 4K).
2. Redux Toolkit RTK query for fetching the data. Implemented to fetch the list of users for quick transfer functionality.
3. Fetch API for fetching the data of bank cards and transaction history.
4. Error Boundary for error handling in components.
5. Lazy loading implemented for Chart components using Next.js dynamic route to fetch the components lazy to improve the performance of the page.
6. Used Tailwind CSS for styling.
7. NextJS is used instead of Create React App to create the mock API.
8. NextJS in-built routing mechanism is used instead of React Router.
9. Chart.JS for building the charts.
10. Memoize the components to avoid unnecessary re-renders.
11. Grids and Flexboxes are used for styling.

## Pending Tasks

1. Buttons, Search and Profile buttons are not added in Header. Considered as out of scope.
2. Lazy loading or pagination for API data is considered as out of scope.
3. Creation and Integration of all the API is considered as out of scope.
4. Quick transfer button styling issue (overlap with input field).
