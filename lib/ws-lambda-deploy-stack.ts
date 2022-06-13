import { lambda_layer_awscli, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as cdk from 'aws-cdk-lib'
import * as path from 'path'

export class WsLambdaDeployStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaFunction = new lambda.Function(this, "practice-lambda", {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'practice-lambda.lambda_handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/../src')),
      environment: {
        ACCOUNT_ID: cdk.Stack.of(this).account
      }
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'WsLambdaDeployQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }

}
