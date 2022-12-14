import { NextApiRequest, NextApiResponse } from "next";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const name = 'projects/4263139851/secrets/wallet_private_key/versions/latest';
const client = new SecretManagerServiceClient();

async function accessSecretVersion() {
  const [version] = await client.accessSecretVersion({
    name,
  });

  if (version) {
    // Extract the payload as a string.
    const payload = version?.payload?.data?.toString();
    console.log(payload);
    return payload
  }
}

accessSecretVersion();