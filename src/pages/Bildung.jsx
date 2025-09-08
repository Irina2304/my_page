import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';
import { keyframes } from '@mui/system';

// Анимация появления
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Универсальная карточка
function EducationCard({ title, subtitle, year, file, color }) {
  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        width: { xs: 250, sm: 320, md: 360 },
        height: '100%',
        borderRadius: 3,
        boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
        overflow: 'hidden',
        animation: `${fadeInUp} 0.8s ease forwards`,
        opacity: 0,
        borderLeft: `8px solid ${color}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.25)',
        },
      }}
    >
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          textAlign="center"
        >
          {subtitle}
        </Typography>
        {year && (
          <Typography
            variant="body2"
            fontStyle="italic"
            gutterBottom
            textAlign="center"
          >
            {year}
          </Typography>
        )}
        {file && (
          <Box sx={{ mt: 'auto', textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="small"
              sx={{ mt: 1, borderRadius: 2 }}
              onClick={() => window.open(file, '_blank')}
            >
              Dokument öffnen
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default function Bildung() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 6 },
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Заголовок страницы */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          mb: 6,
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
        <Typography variant="h3" fontWeight={700} textAlign="center">
          Bildung
        </Typography>
      </Box>

      {/* Школа и Университет */}
      <Typography
        variant="h4"
        fontWeight={600}
        gutterBottom
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Schule & Universität
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ mb: 6 }}
      >
        <Grid item xs={12} sm={6} md={4} display="flex">
          <EducationCard
            title="Allgemeinbildende Schule Nr. 42 der Stadt Mariupol mit Schwerpunktprofil (Stufen I–III)"
            subtitle="Atestat"
            file={`${process.env.PUBLIC_URL}/dokumente/school.pdf`}
            color="#ff6f61"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex">
          <EducationCard
            title='Bachelor –  Nationale Technische Universität der Ukraine
"Polytechnisches Institut Kyjiw"'
            subtitle="Diplom mit Auszeichnung"
            file={`${process.env.PUBLIC_URL}/dokumente/bachelor.pdf`}
            color="#333"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex">
          <EducationCard
            title='Spezialist – Nationale Technische Universität der Ukraine
"Polytechnisches Institut Kyjiw"'
            subtitle="Diplom mit Auszeichnung"
            file={`${process.env.PUBLIC_URL}/dokumente/specialist.pdf`}
            color="#ff6f61"
          />
        </Grid>
      </Grid>

      {/* Weiterbildung & Sprachen */}
      <Typography
        variant="h4"
        fontWeight={600}
        gutterBottom
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Weiterbildung & Sprachen
      </Typography>

      {/* Первая строка */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ mb: 6 }}
      >
        <Grid item xs={12} sm={6} md={6} display="flex">
          <EducationCard
            title="QATestLab Training Center"
            subtitle="Fundamentals of Software Testing"
            file={`${process.env.PUBLIC_URL}/dokumente/test.pdf`}
            color="#ff6f61"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} display="flex">
          <EducationCard
            title="GoIT"
            subtitle="Fullstack Developer Course"
            file={`${process.env.PUBLIC_URL}/dokumente/fullstack.pdf`}
            color="#333"
          />
        </Grid>
      </Grid>

      {/* Вторая строка */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={4} display="flex">
          <EducationCard
            title="Deutsch-Test für Zuwanderer"
            subtitle="Integrationskurs Zertifikat"
            file={`${process.env.PUBLIC_URL}/dokumente/b1.pdf`}
            color="#ff6f61"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex">
          <EducationCard
            title="Leben in Deutschland"
            subtitle="Bescheinigung über die Teilnahme am Test"
            file={`${process.env.PUBLIC_URL}/dokumente/ld.pdf`}
            color="#333"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex">
          <EducationCard
            title="Deutsch-Test für den Beruf"
            subtitle="Sprachniveau B2"
            file={`${process.env.PUBLIC_URL}/dokumente/b2.pdf`}
            color="#ff6f61"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
