/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:LsUf4E7eaciM@ep-spring-scene-a57hnnz7.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };