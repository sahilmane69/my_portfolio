declare module '@emailjs/browser' {
  export interface EmailJSResponseStatus {
    status: number
    text: string
  }

  export function send(
    serviceID: string,
    templateID: string,
    templateParams?: Record<string, unknown>,
    publicKey?: string
  ): Promise<EmailJSResponseStatus>
}

