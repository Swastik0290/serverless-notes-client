const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-api-bucket-04052024",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://r8b5vqgi0g.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_apX5R9wmO",
      APP_CLIENT_ID: "5o85av7tvjts1ubv42hofanoet",
      IDENTITY_POOL_ID: "us-east-1:c3d6d860-a74b-4181-a08e-eb4a74b08fd8",
    },
  };
  export default config;