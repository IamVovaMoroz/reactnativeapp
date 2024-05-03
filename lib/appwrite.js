import {
	Account,
	Avatars,
	Client,
	Databases,
	ID,
	Query,
	Storage,
  } from "react-native-appwrite";
export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aora',
  projectId: '66265afe7722c8fed759',
  databaseId: '66265e8eda47c0c0f8dd',
  userCollectionId: '66265ecd96133f27cb2d',
  videoCollectionId: '66265f2556c7b76b022d',
  storageId: '6626617d57d9b29cd5f9'
}

// Init your react-native SDK
const client = new Client()

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform) // Your application ID or bundle ID.

  const account = new Account(client);
  const storage = new Storage(client);
  const avatars = new Avatars(client);
  const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  // Register User
  try {
	  // Create a new account
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )
	// If account creation failed, throw an error
    if (!newAccount) throw new Error(error)
	 // Generate avatar URL based on username
    const avatarUrl = avatars.getInitials(username)
   // Sign in the newly created user
    await signIn(email, password)
  // Create a new document for the user in the database
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl
      }
    )
	    // Return the newly created user
    return newUser
	  // If any error occurs, log it and throw a new error
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
  //   account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
  //     function (response) {
  //       console.log(response)
  //     },
  //     function (error) {
  //       console.log(error)
  //     }
  //   )
}

// Function to sign in a user with the provided email and password
export async function signIn (email, password) {
  try {
	    // Create a session for the user with email and password
    const session = await account.createEmailSession(email, password)
    return session
	    // If any error occurs, throw a new error
  } catch (error) {
    throw new Error(error)
  }
}

// Function to get the current user
export async function getCurrentUser()  {
try{
	// Get the current account
	const currentAccount = await account.get()
    // If no current account exists, throw an error
	if(!currentAccount) throw Error
    // Get the current user document from the database
	const currentUser = await databases.listDocuments(
		config.databaseId,
		config.userCollectionId,
		[Query.equal('accountId', currentAccount.$id)]
	)
 // If no current user document exists, throw an error
	if(!currentUser) throw Error
   // Return the current user document
	return currentUser.documents[0]
}
  // If any error occurs, log it.
catch(error){}
console.log(error)
}
