## Getting Started

#1 Install Dependencies\
npm install\

#2 Set Up Environment Variables\
Create a .env file in the root of the project and add your Google OAuth credentials:\

DATABASE_URL="postgresql://username:password@localhost:5432/logindb?schema=public"\
NEXTAUTH_SECRET="your_random_secret"\
GOOGLE_CLIENT_ID="your-google-client-id"\
GOOGLE_CLIENT_SECRET="your-google-client-secret"\

#3 Run the Application\
npm run dev\
http://localhost:3000/\

#4 Project Structure\
`app/` : Contains the Next.js pages.\
`components/` : Contains reusable components and form.\
`lib/` : Contains DB and Auth configuration.\
`redux/` : Contains the Redux setup, including the authentication slice and store configuration.\
`util/` : Contains mock provider for JEST test.\
`app/api/auth/[...nextauth]` : The NextAuth.js API route for handling authentication.\

## Solution

#1 / :\
Visit the homepage and click "Open admin page" will redirect to /sign-in\

#2 /sign-in :\
Click "Sign in with Google" to authenticate with your Google account and set the signedIn session using redux store.\

#3 /admin (Protected page) :\
#3a. User list screen , 3 components shown: header, footer and body.\
#3b. API call 1st time to get total pages then loop call the API to retrieve the complete set of records.\
#3c. Filter the list with condition: first name starting with “G”, or last name starting with “W”.\
#3d. Add 'isShowEmail' flag into each record.\
#3e. Show User list using table and email is masked using reusable function 'maskEmailFn' based on 'isShowEmail' flag\
#3f. 'Show Email' button is shown in last column of each record, non-mask email will show once the button clicked. Toggle 'isShowEmail' flag and button label change to 'Hide Email'.\

#4 Sign out:\
Once signed in, click sign out button at the /admin header to sign out.\

#5 After sign out:\
Once signed out, trying to access /admin , will redirect you to /sign-in page.\

#6 Unit tests with 90.47% code coverage.\
