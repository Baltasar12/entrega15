import dotenv from 'dotenv';
import parseArgs from 'minimist';

const options= {default:{port:8080},alias:{p:"port", m:"modo"}};
const puerto = parseArgs(process.argv,options).port;
const modo = parseArgs(process.argv,options).modo;

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 8000,
  MONGO_URL: process.env.MONGO_URL||'noURL',
  MONGO_DB: process.env.MONGO_BASE||'ecommerce',
  MONGO_SESSION_URL: process.env.SESSION_URL||'noURL',
  SESSION_MAXAGE: process.env.SESSION_MAXAGE || 600000,
  SECRET:process.env.SECRET || 'Thebestteam9',
  TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA|| 'Mongo' ,
  
  firebase: {
    "type": "service_account",
  "project_id": "ecommerce-13d40",
  "private_key_id": "00e8e3b300b043536321f157c60249f22e4ed5da",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDS+IPLAuTVO5S5\ne2vUSRHIHxm5jvHmGNcZUHFZnKM7EklHbysZkS9jg84TdfKDeWV+/WazZ76qXmK8\n3+hkzW5X+p+J6c1GVai4d9BT63aUK3P7QStVsw4+xC9L5A3WB/Msc2RWBURiVb5F\nXpwtYswgrvbNa074v2dgAoKFJCtE48UGox49Ai+byl3xA5MVEpBLkzaay/JA2zTg\nRICT+S5/XfGg8sqqPS1rqAqY5O+XkirPcwpNPevZFDVk0bZH9axxFWXEOSzbEp/7\n6PRd3zRiJ5jgeENW89HvnG7Z8sA/EEfFc/0zOAiZzbryUgEFYk192xBrSzq0b2bk\nTfqIk4H9AgMBAAECggEAAPTBXCUqNlErzl9h0Ld4Dikd67pbHEjWiLXVnatZDgZ6\nMImvb1E6HsBVKb9qFvBw5k9trLh2o70Dw4lcO0C3FEz9dhmKJZxzxEo+tnKluews\nfWIBOUUzdlNbR4PEEEk+79+h/8XMVom+7/+Kw6Xj+O3yDmJDHFt5s3SvdL0COTCw\n8hWegRau6rxTFSiB+Gz0cGwUzslc/tSJjDfNzu8bQ46yoHKXbzFyrkAWjO8rnFJL\n+bLeQ4IsxZBOklM5CAVB8m6VAAX+AHXpCvf1eOP8oxZItrXRCei1HV2qP+GHV6QX\nJu55Z3ZKXOF4dasPvZjvix+VzpXr7wXqgaECpL0V4QKBgQD602ckn3PD+GYiVshu\nMptx5VtWwdWaj6ACAvz7d+EJOsnB2m1dpOzMUHDmfCogmDUA6lDm0GGuhOxk4VkA\nrw2kJbG8WLkZx/MwJ7HHm1P3j7c/89VnAwAfy1ftQ28m1dOUAR/WpOIw+ffNWVgA\n5jaNVTogzeprYfnuBCcs+xXSJQKBgQDXUqPDkHckmNcHeBskFIXjdiWTP2Mi8kfN\nXWhAYR+7iZFxKJh9lVyOMBoBnWa6v6jCdvAtgadrPNCkAlsYgxvHDbwSDmqBA67y\n8z6Nba1Cyr/RmksoapTcUGrDfNi9d4RsNLRmZTmMfKOkNkPGqjlroupDE7McFWPG\n1/LZ1iDs+QKBgC62IhZK77dGUlcAzHDhUdujOCBvFsWjC8x0HAME707VuO82K3nu\nFf9y16PE6d+KGQzjlk917UsgDBo5cWbUMvkn3/LQnyAzAZItQkmHHtsS07DASzTU\n9Tf2mZhhH5ke5zlAAFrr+Afg9YozolUAipZFkf67+nUnGPF/qoAQ/p5VAoGAZzls\n3MIS++5xl1kS2dck4IixNsf6hLRVi7Qt2D83cTZgDTmC8SF7f4a70O5eY0SiaKeQ\nOKChXB2JgDbI6RVhaanB8X4LvNHBOyM1Z6OenhiIoLkxMqz1tDCxHgpp9Vqolx8l\nJLl+P0U5Re3lzAWrBVjSqVl2Ug5HCPpZp+ipXDECgYBPXvvcX7P0cEsTrlW/vJmq\nIHf1qqAOy9IsWd1QOMnXjsIB1FBuBrBLRY6LZ3DjmFScWJG2+XJnAhF1wTBTTVFR\nkQ6Kb9V26I/igGa9elqyMCOS0iczrEU1YzFnmdTV3DJtFAuYvxa1yC6q78yHSbVP\n8aEcA03BUuTtSgG7iTKJ1Q==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-dk04o@ecommerce-13d40.iam.gserviceaccount.com",
  "client_id": "109290604651900708691",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dk04o%40ecommerce-13d40.iam.gserviceaccount.com"
  }
  
}