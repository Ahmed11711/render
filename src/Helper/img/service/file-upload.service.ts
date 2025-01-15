import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class FileService {
  public s3Client: S3Client;
  public bucketName: string;

  constructor() {
    this.s3Client = new S3Client({
      region: 'eu-central-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    this.bucketName =process.env.AWS_SECRET_ACCESS_KEY;
  }

  async uploadFile(file: Express.Multer.File,folderName)  {
    const extension = path.extname(file.originalname); 
    const fileKey = `${Date.now()}${extension}`;
    const params = {
        Bucket: this.bucketName,
        Key: `${folderName}/${fileKey}`,  
        Body: file.buffer,
        ContentType: file.mimetype,
      };
 
    await this.s3Client.send(new PutObjectCommand(params));
    // return `https://${this.bucketName}.s3.amazonaws.com/${folderName}/${fileKey}`;
    return `${folderName}/${fileKey}`;
}
}
 
