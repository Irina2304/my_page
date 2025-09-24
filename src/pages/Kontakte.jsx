import React from 'react';
import { Box, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
// import FacebookIcon from '@mui/icons-material/Facebook';
import SvgIcon from '@mui/material/SvgIcon';
import { siViber } from 'simple-icons/icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { keyframes } from '@mui/system';

// Анимация появления карточек
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function ViberIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d={siViber.path} fill="#7360F2" />
    </SvgIcon>
  );
}

export default function Contact() {
  const contacts = [
    [
      {
        icon: <PhoneIcon sx={{ color: '#25D366', fontSize: 40 }} />,
        label: 'Telefon',
        value: '+49 175 627 44 88',
        href: 'tel:+491756274488',
      },
      {
        icon: <MailIcon sx={{ color: '#D44638', fontSize: 40 }} />,
        label: 'Email',
        value: 'irisha.kulik@gmail.com',
        href: 'mailto:irisha.kulik@gmail.com',
      },
    ],
    [
      {
        icon: <LinkedInIcon sx={{ color: '#0A66C2', fontSize: 40 }} />,
        label: 'LinkedIn',
        value: 'linkedin.com/in/iryna-k/',
        href: 'https://www.linkedin.com/in/iryna-k/',
      },
      // {
      //   icon: <FacebookIcon sx={{ color: '#1877F2', fontSize: 40 }} />,
      //   label: 'Facebook',
      //   value: 'facebook.com/irisha.kulik',
      //   href: 'https://www.facebook.com/irisha.kulik/',
      // },
      {
        icon: <TelegramIcon sx={{ color: '#0088CC', fontSize: 40 }} />,
        label: 'Telegram',
        value: '@irisha_kulyk',
        href: 'tg://resolve?domain=irisha_kulyk',
      },
    ],
    [
      {
        icon: <WhatsAppIcon sx={{ color: '#25D366', fontSize: 40 }} />,
        label: 'WhatsApp',
        value: '+49 175 627 44 88',
        href: 'https://wa.me/491756274488',
      },
      {
        icon: <ViberIcon sx={{ fontSize: 40 }} />,
        label: 'Viber',
        value: '+380631304494',
        href: 'viber://chat?number=%2B380631304494',
      },
    ],
  ];

  return (
    <Box component="section" sx={{ py: 10, px: 2 }}>
      {/* Заголовок с акцентной полоской */}
      <Box sx={{ maxWidth: 1100, mx: 'auto', textAlign: 'center', mb: 8 }}>
        <Box
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, mb: 2 }}
        >
          <Box
            sx={{ width: 6, height: 40, bgcolor: '#ff6f61', borderRadius: 2 }}
          />
          <Typography variant="h3" fontWeight={700}>
            Kontakte
          </Typography>
        </Box>
        <Typography
          sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7 }}
          color="text.secondary"
          maxWidth={600}
          mx="auto"
        >
          Ich bin immer offen für spannende Projekte und neue Möglichkeiten.
          Wenn Sie ein Angebot oder Fragen haben, zögern Sie nicht, mich zu
          kontaktieren.
        </Typography>
      </Box>

      {/* Контакты */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
        }}
      >
        {contacts.map((column, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              flex: 1,
              animation: `${fadeInUp} 0.8s ease forwards`,
              opacity: 0,
            }}
          >
            {column.map((contact, index) => {
              const isExternal = contact.href.startsWith('http');
              const target = isExternal ? '_blank' : undefined;
              const rel = isExternal ? 'noopener noreferrer' : undefined;

              return (
                <Box
                  key={index}
                  component="a"
                  href={contact.href}
                  target={target}
                  rel={rel}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    textDecoration: 'none',
                    backgroundColor: '#f5f5f5',
                    color: '#1a1a1a',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    '&:hover': {
                      backgroundColor: '#e0e0e0',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  {contact.icon}
                  <Box>
                    <Typography fontWeight={600}>{contact.label}</Typography>
                    <Typography variant="body2">{contact.value}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
