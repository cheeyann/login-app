## Getting Started

#1 Install Dependencies <br/>
npm install <br/>

#2 Set Up Environment Variables <br/>
Create a .env file in the root of the project and add your Google OAuth credentials: <br/>

DATABASE_URL="postgresql://username:password@localhost:5432/logindb?schema=public" <br/>
NEXTAUTH_SECRET="your_random_secret" <br/>
GOOGLE_CLIENT_ID="your-google-client-id" <br/>
GOOGLE_CLIENT_SECRET="your-google-client-secret" <br/>

#3 Run the Application <br/>
npm run dev <br/>
`http://localhost:3000/` <br/>

#4 Project Structure <br/>
`app/` : Contains the Next.js pages. <br/>
`components/` : Contains reusable components and form. <br/>
`lib/` : Contains DB and Auth configuration. <br/>
`redux/` : Contains the Redux setup, including the authentication slice and store configuration. <br/>
`util/` : Contains mock provider for JEST test. <br/>
`app/api/auth/[...nextauth]` : The NextAuth.js API route for handling authentication. <br/>

## Solution

#1 / : <br/>
Visit the homepage and click "Open admin page" will redirect to /sign-in <br/>

#2 /sign-in : <br/>
Click "Sign in with Google" to authenticate with your Google account and set the signedIn session using redux store. <br/>

#3 /admin (Protected page) : <br/>
#3a. User list screen , 3 components shown: header, footer and body. <br/>
#3b. API call 1st time to get total pages then loop call the API to retrieve the complete set of records. <br/>
#3c. Filter the list with condition: first name starting with “G”, or last name starting with “W”. <br/>
#3d. Add 'isShowEmail' flag into each record. <br/>
#3e. Show User list using table and email is masked using reusable function 'maskEmailFn' based on 'isShowEmail' flag <br/>
#3f. 'Show Email' button is shown in last column of each record, non-mask email will show once the button clicked. Toggle 'isShowEmail' flag and button label change to 'Hide Email'. <br/>

#4 Sign out: <br/>
Once signed in, click sign out button at the /admin header to sign out. <br/>

#5 After sign out: <br/>
Once signed out, trying to access /admin , will redirect you to /sign-in page. <br/>

#6 Unit tests with 90.47% code coverage. <br/>
