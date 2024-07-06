AchCom

Setup Instructions
To run this project locally, follow these steps:

1:Clone the repository:

git clone <https://github.com/KamrulHasaanAnanda/amhartechTest.git>
cd <project_folder>

2: npm install
 # or
yarn install

3: Set up environment variables:

Create a .env file in the root directory of the project.
Add the following environment variables to .env:

NEXT_PUBLIC_API_BASE_URL=https://dummyjson.com

BASE_API= https://dummyjson.com

NEXT_PUBLIC_BASE_API = https://dummyjson.com

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = <your key>

NEXT_PUBLIC_STRIPE_SECRET_KEY = <your secret key>

4L Run the development server:

npm run dev
# or
yarn dev