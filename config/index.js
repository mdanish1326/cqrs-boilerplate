import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT,
  gcp: {
    projectId: process.env.GCP_PROJECT_ID,
    pubsubTopic: process.env.PUBSUB_TOPIC_NAME,
    pubsubSubscription: process.env.PUBSUB_SUBSCRIPTION_NAME,
  },
};