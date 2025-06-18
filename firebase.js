const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.grant-connect-c2317,
    privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, '\n')
    clientEmail: process.env.firebase-adminsdk-fbsvc@grant-connect-c2317.iam.gserviceaccount.com,
  }),
});

module.exports = admin;
