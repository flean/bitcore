var config = {
  basePath: '/bws/api',
  disableLogs: false,
  port: 3232,

  // Uncomment to make BWS a forking server
  // cluster: true,

  // Uncomment to set the number or process (will use the nr of availalbe CPUs by default)
  // clusterInstances: 4,

  https: true,
  // privateKeyFile: 'private.pem',
  // certificateFile: 'cert.pem',
  ////// The following is only for certs which are not
  ////// trusted by nodejs 'https' by default
  ////// CAs like Verisign do not require this
  // CAinter1: '', // ex. 'COMODORSADomainValidationSecureServerCA.crt'
  // CAinter2: '', // ex. 'COMODORSAAddTrustCA.crt'
  // CAroot: '', // ex. 'AddTrustExternalCARoot.crt'

  storageOpts: {
    mongoDb: {
      uri: "mongodb://ccvend:pvjXGly4b6rlwJU5@cluster0-shard-00-00-7ps7h.mongodb.net:27017,cluster0-shard-00-01-7ps7h.mongodb.net:27017,cluster0-shard-00-02-7ps7h.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
    },
  },
  messageBrokerOpts: {
    //  To use message broker server, uncomment this:
    messageBrokerServer: {
      url: 'http://localhost:3380',
    },
  },
  blockchainExplorerOpts: {
    btc: {
      livenet: {
        url: 'https://api.bitcore.io',
      },
      testnet: {
        url: 'https://api.bitcore.io',
      },
    },
    bch: {
      livenet: {
        url: 'https://api.bitcore.io',
      },
      testnet: {
       // url: 'http://localhost:3000',
       url: 'https://api.bitcore.io',
      },

    },
  },
  pushNotificationsOpts: {
    templatePath: './lib/templates',
    defaultLanguage: 'en',
    defaultUnit: 'btc',
    subjectPrefix: '',
    pushServerUrl: 'https://fcm.googleapis.com/fcm',
    authorizationKey: 'AAAAp4TjRfI:APA91bGb4md_KMni2MKC8pm2qLhh6M421Sur_mseMa3RmGauMOpHPF_BOn1nmuTpnrw6Mb1WBsj8ZSELZ4JnefaexmL8N1r9OaU3-2mu3aWl401uavr9xZjUzGJQZHNqlPGeLAsHqmDt',
  },
  fiatRateServiceOpts: {
    defaultProvider: 'BitPay',
    fetchInterval: 60, // in minutes
  },
  // To use email notifications uncomment this:
  // emailOpts: {
  //  host: 'localhost',
  //  port: 25,
  //  ignoreTLS: true,
  //  subjectPrefix: '[Wallet Service]',
  //  from: 'wallet-service@bitcore.io',
  //  templatePath: './lib/templates',
  //  defaultLanguage: 'en',
  //  defaultUnit: 'btc',
  //  publicTxUrlTemplate: {
  //    btc: {
  //      livenet: 'https://insight.bitpay.com/tx/{{txid}}',
  //      testnet: 'https://test-insight.bitpay.com/tx/{{txid}}',
  //    },
  //    bch: {
  //      livenet: 'https://bch-insight.bitpay.com/#/tx/{{txid}}',
  //      testnet: 'https://test-bch-insight.bitpay.com/#/tx/{{txid}}',
  //    }
  //  },
  // },
  // To use sendgrid:
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //
  //
  // //then add:
  // mailer: sgMail,
};
module.exports = config;
