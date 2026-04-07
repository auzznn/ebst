import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const ALGORITHM = 'aes-256-gcm'
const IV_LENGTH = 12    // 96 bits, recommended for GCM
const TAG_LENGTH = 16
@Injectable()
export class EncryptionService {
    private key: Buffer;

    constructor() {
        const hex = process.env.ENCRYPTION_KEY

        if (!hex || hex.length !== 64) {
            throw new Error("ENCRYPTION KEY must be in 64-char hex string")
        }
        this.key = Buffer.from(hex, 'hex')
    }

    encrypt(plainText: string): string {
        const iv = randomBytes(IV_LENGTH)
        const cipher = createCipheriv(ALGORITHM, this.key, iv)

        const encrypted = Buffer.concat([
            cipher.update(plainText, 'utf8'),
            cipher.final()
        ])

        const tag = cipher.getAuthTag()

        return `${iv.toString('hex')}:${tag.toString('hex')}:${encrypted.toString('hex')}`

    }

    decrypt(stored: string): string {
            const [ivHex, tagHex, encryptedHex] = stored.split(':')

    if (!ivHex || !tagHex || !encryptedHex) {
      throw new Error('Invalid encrypted format')
    }

    const iv = Buffer.from(ivHex, 'hex')
    const tag = Buffer.from(tagHex, 'hex')
    const encrypted = Buffer.from(encryptedHex, 'hex')

    const decipher = createDecipheriv(ALGORITHM, this.key, iv)
    decipher.setAuthTag(tag)

    return decipher.update(encrypted) + decipher.final('utf8')
  }
 

 }
