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

const account = new Account(client)
const databases = new Databases(client)
const avatars = new Avatars(client)

export const createUser = async (email, password, username) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )
    if (!newAccount) throw new Error(error)
    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password)

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
    return newUser
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

export async function signIn (email, password) {
  try {
    const session = await account.createEmailSession(email, password)
    return session
  } catch (error) {
    throw new Error(error)
  }
}
