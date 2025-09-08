import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// Анимация появления текста
const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
`;

const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
`;

export default function Home() {
  const paragraphs = [
    'Ich bin neugierig von Natur und voller Motivation, Neues zu lernen. In den letzten Jahren habe ich meine Kenntnisse in verschiedenen Bereichen erweitert und mich in Deutschland integriert.',
    'Meine Interessen reichen von Technik und IT bis hin zu Kunst und Musik. Ich liebe es, mit Menschen zu kommunizieren, Projekte umzusetzen und kreative Ideen in die Realität zu bringen.',
    'Ich freue mich darauf, mich Ihnen hier vorzustellen und ein wenig über meinen Werdegang, meine Familie und meine Inspirationen zu erzählen.',
  ];

  const indent = [0, 60, 120]; // смещение каждого абзаца

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '100vh',
        px: { xs: 2, md: 8 },
        pt: 10,
        pb: 10,
        overflow: 'hidden',
        gap: '50px',
      }}
    >
      {/* Текст слева */}
      <Box
        sx={{
          textAlign: 'left',
          maxWidth: { xs: '90%', md: 700 }, // увеличено на десктопе
          zIndex: 2,
        }}
      >
        {/* Приветствие с акцентной полоской */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 2,
            mb: 3,
            animation: `${fadeInLeft} 0.8s ease forwards`,
            opacity: 0,
            pl: 0,
            overflow: 'visible',
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 40,
              bgcolor: '#ff6f61',
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
          <Typography variant="h2" fontWeight={700}>
            Hallo, ich heiße Iryna Kulyk
          </Typography>
        </Box>

        {/* Willkommen с креативным блоком */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            transform: 'rotate(-2deg)',
            display: 'inline-block',
            bgcolor: 'rgba(255,111,97,0.1)',
            px: 2,
            py: 1,
            borderRadius: 2,
            animation: `${fadeInLeft} 1s ease forwards`,
            opacity: 0,
            mb: 4,
          }}
        >
          Willkommen auf meiner persönlichen Seite
        </Typography>

        {/* Абзацы с увеличенным смещением и центрированием */}
        {paragraphs.map((text, i) => (
          <Box
            key={i}
            sx={{
              pl: { xs: 0, md: `${indent[i]}px` },
              mb: 3,
              textAlign: 'center', // центрирование текста внутри блока
              animation: `${fadeInLeft} 0.8s ease forwards`,
              animationDelay: `${0.4 + i * 0.2}s`,
              opacity: 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.7,
                fontSize: { xs: '1.3rem', md: '1.5rem' },
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Фото + рамочки */}
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
          zIndex: 2,
          animation: `${fadeInRight} 1.2s ease forwards`,
        }}
      >
        {/* Красная рамка */}
        <Box
          sx={{
            position: 'absolute',
            top: -20,
            left: -20,
            right: -20,
            bottom: -20,
            border: '3px solid rgba(255,111,97,0.6)',
            borderRadius: 2,
            transform: 'rotate(-4deg)',
            zIndex: 1,
          }}
        />
        {/* Тёмно-серая рамка */}
        <Box
          sx={{
            position: 'absolute',
            top: -35,
            left: -35,
            right: -35,
            bottom: -35,
            border: '3px solid rgba(50,50,50,0.4)',
            borderRadius: 2,
            transform: 'rotate(6deg)',
            zIndex: 0,
          }}
        />

        {/* Фото */}
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/foto/foto.jpg`}
          alt="Iryna Kulyk"
          sx={{
            height: { xs: 400, md: '90vh' },
            maxWidth: { xs: '80%', md: '80%' },
            objectFit: 'cover',
            borderRadius: 2,
            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
            position: 'relative',
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
}
