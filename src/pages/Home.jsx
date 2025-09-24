import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// Анимации появления
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
    'Ich freue mich darauf, mich Ihnen hier vorzustellen und ein wenig über meinen Werdegang und meine Inspirationen zu erzählen.',
  ];

  const indent = [0, 60, 120];

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' }, // мобилка/планшет колонка, десктоп ряд
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '100vh',
        px: { xs: 2, md: 6, lg: 8 },
        pt: 10,
        pb: 10,
        overflow: 'hidden',
        gap: '40px',
      }}
    >
      {/* Левый блок (текст + заголовки) */}
      <Box
        sx={{
          order: { xs: 1, lg: 1 }, // и на мобилке, и на десктопе текст идёт первым
          textAlign: 'left',
          maxWidth: { xs: '95%', lg: 700 },
          zIndex: 2,
        }}
      >
        {/* Заголовок */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 2,
            mb: 3,
            animation: `${fadeInLeft} 0.8s ease forwards`,
            opacity: 0,
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

        {/* Подзаголовок */}
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
            mb: { xs: 3, lg: 4 }, // чуть меньше отступ на мобилке
          }}
        >
          Willkommen auf meiner persönlichen Seite
        </Typography>

        {/* Абзацы — только на десктопе рядом с фото */}
        <Box
          sx={{
            display: { xs: 'none', lg: 'block' },
          }}
        >
          {paragraphs.map((text, i) => (
            <Box
              key={i}
              sx={{
                pl: { xs: 0, lg: `${indent[i]}px` },
                mb: 3,
                textAlign: 'center',
                animation: `${fadeInLeft} 0.8s ease forwards`,
                animationDelay: `${0.4 + i * 0.2}s`,
                opacity: 0,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.7,
                  fontSize: { xs: '1.2rem', lg: '1.5rem' },
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Фото блок */}
      <Box
        sx={{
          order: { xs: 2, lg: 2 }, // на мобилке фото идёт сразу после заголовков
          position: 'relative',
          display: 'inline-block',
          zIndex: 2,
          animation: `${fadeInRight} 1.2s ease forwards`,
          mb: { xs: 3, lg: 0 },
        }}
      >
        {/* Красная рамка */}
        <Box
          sx={{
            position: 'absolute',
            top: -15,
            left: -15,
            right: -15,
            bottom: -15,
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
            top: -30,
            left: -30,
            right: -30,
            bottom: -30,
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
            height: { xs: 250, sm: 320, lg: '80vh' },
            width: { xs: '70%', sm: '60%', lg: '80%' },
            objectFit: 'cover',
            objectPosition: 'top', // обрезка "по пояс"
            borderRadius: 2,
            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
            position: 'relative',
            zIndex: 2,
            mx: 'auto',
            bgcolor: '#c5c5c5',
          }}
        />
      </Box>

      {/* Абзацы для мобилки/планшета — под фото */}
      <Box
        sx={{
          order: { xs: 3, lg: 3 },
          display: { xs: 'block', lg: 'none' },
          mt: 2,
        }}
      >
        {paragraphs.map((text, i) => (
          <Box
            key={i}
            sx={{
              mb: 3,
              textAlign: 'center',
              animation: `${fadeInLeft} 0.8s ease forwards`,
              animationDelay: `${0.6 + i * 0.2}s`,
              opacity: 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.7,
                fontSize: { xs: '1.2rem', md: '1.4rem' },
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
