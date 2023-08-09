import { CONFIGS } from '@/__config';
import './style/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta property='og:type' content='website' />

        <meta name='theme-color' content='#54A824' />

        <meta name='keywords' content='Guns Airsoft Arena, gunsairsoftarena, guns airsoft, arena joinville, airsoft joinville, joinville airsoft, SC Airsoft, Airsoft, Guns Arena, Sua Arena de Airsoft em Joinville' />
        <meta name='title' content={CONFIGS.gerais['nome']} />
        <meta name='description' content='Sua arena de Airsoft em Joinville - SC' />
        <meta name='url' content='https://gunsairsoftarena.netlify.app/' />

        <meta property='og:title' content={CONFIGS.gerais['nome']} />

        <meta property='og:description' content='Sua arena de Airsoft em Joinville - SC' />

        <meta property='og:site_name' content={CONFIGS.gerais['nome']} />
        <meta property='og:url' content='https://gunsairsoftarena.netlify.app/' />

        <meta property='og:image' content='/files/transparent.png' />
        <meta property='og:image:width' content='200' />
        <meta property='og:image:height' content='200' />

        <link rel='shortcut icon' href='/files/transparent.png' type='image/x-icon' />
        <link rel='image_src' href='/files/transparent.png' />
        
        <title>{CONFIGS.gerais['nome']}</title>
      </head>
      <body>{children}</body>
    </html>
  )
};