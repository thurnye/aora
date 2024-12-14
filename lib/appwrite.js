import { Client } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '675da532000c443cec5b',
    databaseId: '675da6a7000b8f7e759a',
    userCollectionId: '675da6d20020648eee52',
    videoCollectionId: '675da6ef002e51630c06',
    storageId: '675da8990005c6fb40d6',
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;