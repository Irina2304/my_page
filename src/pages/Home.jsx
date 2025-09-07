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
        pt: 10, // отступ сверху, как на Familie
        pb: 10,
        overflow: 'hidden',
        gap: '50px',
      }}
    >
      {/* Текст слева */}
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: 500,
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
            pl: 0, // обнуляем внутренний padding слева
            overflow: 'visible', // чтобы полоска не обрезалась
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 40,
              bgcolor: '#ff6f61',
              borderRadius: 2,
              flexShrink: 0, // чтобы полоска не сжималась
            }}
          />
          <Typography variant="h2" fontWeight={700}>
            Hallo, ich heiße Iryna Kulyk
          </Typography>
        </Box>

        {/* Елочка: каждый абзац смещен вправо */}
        <Typography
          variant="h5"
          sx={{
            mb: 3,
            fontWeight: 500,
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            animation: `${fadeInLeft} 0.8s ease forwards`,
            animationDelay: '0.2s',
            opacity: 0,
            ml: { xs: 0, md: 0 },
          }}
        >
          Willkommen auf meiner persönlichen Seite!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            lineHeight: 1.7,
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            animation: `${fadeInLeft} 0.8s ease forwards`,
            animationDelay: '0.4s',
            opacity: 0,
            ml: { xs: 0, md: 2 },
          }}
        >
          Ich bin neugierig von Natur und voller Motivation, Neues zu lernen. In
          den letzten Jahren habe ich meine Kenntnisse in verschiedenen
          Bereichen erweitert und mich in Deutschland integriert.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            lineHeight: 1.7,
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            animation: `${fadeInLeft} 0.8s ease forwards`,
            animationDelay: '0.6s',
            opacity: 0,
            ml: { xs: 0, md: 4 },
          }}
        >
          Meine Interessen reichen von Technik und IT bis hin zu Kunst und
          Musik. Ich liebe es, mit Menschen zu kommunizieren, Projekte
          umzusetzen und kreative Ideen in die Realität zu bringen.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.7,
            fontSize: { xs: '1.3rem', md: '1.5rem' },
            animation: `${fadeInLeft} 0.8s ease forwards`,
            animationDelay: '0.8s',
            opacity: 0,
            ml: { xs: 0, md: 6 },
          }}
        >
          Ich freue mich darauf, mich Ihnen hier vorzustellen und ein wenig über
          meinen Werdegang, meine Familie und meine Inspirationen zu erzählen.
        </Typography>
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
