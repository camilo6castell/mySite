export const cryptoMessageCode = `
// Per-recipient encryption before sending a message
export const sendSecureMessage = async (
  chatId: number,
  message: string,
  myPublicKey: CryptoKey,
  recipientPublicKey: CryptoKey,
  myId: number,
  recipientId: number
) => {

  // Encrypt message separately for each participant
  const encryptedForMe = await crypto.subtle.encrypt(
    { name: 'RSA-OAEP' },
    myPublicKey,
    new TextEncoder().encode(message)
  );

  const encryptedForRecipient = await crypto.subtle.encrypt(
    { name: 'RSA-OAEP' },
    recipientPublicKey,
    new TextEncoder().encode(message)
  );

  // Send map<userId, ciphertext>
  return await fetch('/api/v1/messages', {
    method: 'POST',
    body: JSON.stringify({
      chatId,
      contentByUser: {
        [myId]: bufferToBase64(encryptedForMe),
        [recipientId]: bufferToBase64(encryptedForRecipient)
      }
    })
  });
};
    `;
