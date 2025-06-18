const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.grant-connect-c2317,
    privateKey: process.env.\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDuSTR0/BFnkJVs\\nvMXZw57M0ENSxvUViOGE/Pi5He+uhk3b3NmQf6pklTE/Gkwt0qTuFC7P5yMciNYz\\nJ/JdpeILZHzTD3mtquMghSyUJL+CvHcsahDnVtcV/9ZJuPMX9EjFd2TxHZN2Z6qm\\n0JbO8J/0RZOuKqbVms8aD3andWhU+gBVa/yeHas5n+u87F0BWgW1Ntt/B7WVgoUS\\nc37q9P65F7IbezQB1fXtgHeLuGfLeW3f9Mp8S+n/vO7cByeoU85jTrOBjdddXbXK\\nNEKsThgkGQI8mim7aNl0psCmRfBXRNuJbG/jrZ9qHS9a515iEUVnFjg2LRLR9rnG\\ns5aNdyEZAgMBAAECggEARM69x5QsQHAnPeWK6lWLKxBuiF4sUmIa4Sidd/MVjZt5\\nqyXsa0X6QZ41QMgKvGapupf4Zo+Te39l/xKncXRfwDNtuhKra8M/X9ok48hyxsE+\\nVoRwSiUw6cjdK5+tDrs7Mk5GRzvno5bO1+m+ypYAUmyu9umZEHBqIlfZxwRnsrWJ\\npj1lEDWQl6J2rw2cBoqV9gl+PjexZ3sws9LVqzkk0sJWA3M4ot+gNuSIsjzIlN13\\nw8pXeyIpeaCwmHq0Bv/Gsd0IkT2WtYfbdFV4lyZrBVKDXUqG2Nxbkfyd8TWi9JQ4\\n/br3WxnLvnlHjboLR3dK02FXJkx8s2fgJyGhrxAN4wKBgQD94Z+IMNv9Fceqs1fq\\n1n8lgpoPkE05ND0SrzTYHx9aJaT49iqleKKE6DaHFA4DQHb0uELJD3t8V0ECXxXY\\n5CmdK7PoCOse2gvkA3IucxdhB7T0+CGvepg6lKJrvu9S5hl4C9pu5hXgo5i/Cf1x\\n7WRdmLzFL7DCii7Dzv9gvfGWgwKBgQDwRkPDP/AbD2ygHWMHd7rbNhAGu8PDl8Iu\\nTBChnUvBz2EZnOFqB+bzC8/8/zeyMEDfoqv9K8dx1Y4mI8QEidnGmUv28B1XRPUM\\naJMIFnYtTAAMNwhXCTidHKF+kFJwhy7YDOFt1pWW9edUqL1E/iIte8oJq/i+6MNq\\nMEBlxQA3MwKBgQDUaWFAYSCtrvtPJp34LV5T0+FyBBmYMsymRVDBQcjJc5WDdvJX\\nX4caC+8TNQREVDsypLe74OhAMACEK2nr/XmTtmzfRhbxyR0JuJhfpIt68yfDjZch\\nakDTQmhiHW2+viWw+rnW70p+mGHD9GfIWgYPCStnD2+kVFisGxQvrLvkYQKBgQCH\\nuHjwYj5jWqwWKWNVxYjT6E7XLtqesitqcWb3k11GhbioehhOB1aqNSLwGs3AJkeO\\ny1lxMXiAUYvw+UTw91j/OHpTa0B3mij9MFjVObLZVVO1kqRwXXIQNSr3zdfzXjjU\\nqznvDEYFNrPL+2CmBxMRNBpkqjJgzCQN6GGH2uaLRwKBgA1Gynwv/JFQy1Sy32u8\\nU4UdUcIXE3ExOJHjS0ECJkWd3DFORypMGwc5eOcRtCd2/eG/hWdYCOr9mn6vgPC4\\nOtCGGxptv+IoFTscImmEpmMckw/L/Zwl/7hQCWH1nTSWvoslnz5Wneh7S7AShsDM\\nilh6NBdrDMQCN64beZLL4IDJ\\n-----END PRIVATE KEY-----\\n,.replace(/\\n/g, '\n'),
    clientEmail: process.env.firebase-adminsdk-fbsvc@grant-connect-c2317.iam.gserviceaccount.com,
  }),
});

module.exports = admin;
