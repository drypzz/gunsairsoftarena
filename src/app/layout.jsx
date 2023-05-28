export const metadata = {
  title: 'Guns Airsoft Arena',
  description: 'Sua arena de airsoft em Joinville - SC',
};

import './style/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
};
