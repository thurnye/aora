import { ID, Account, Client, Avatars, Databases } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aora',
  projectId: '675da532000c443cec5b',
  databaseId: '675da6a7000b8f7e759a',
  userCollectionId: '675da6d20020648eee52',
  videoCollectionId: '675da6ef002e51630c06',
  storageId: '675da8990005c6fb40d6',
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const signIn = async (email, password) => {
  try {
     // Delete all previous sessions
     await account.deleteSessions();
     
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// Register User
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw new Error();
    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);
    
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  //   account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
  //     function (response) {
  //       console.log(response);
  //     },
  //     function (error) {
  //       console.log(error);
  //     }
  //   );
};
