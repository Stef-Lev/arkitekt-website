import { FormData } from '@/components/contact/contact';

export function sendEmail(data: FormData): Promise<any> {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      return res.text().then((text) => {
        throw new Error(text || 'Something went wrong!');
      });
    }
    return res.json();
  });
}
