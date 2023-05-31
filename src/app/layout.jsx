import './style/globals.css';

export const metadata = {
  title: 'Guns Airsoft Arena',
  description: 'Sua arena de airsoft em Joinville - SC',
  theme_color: '#54A824',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
};