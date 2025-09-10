import React from 'react';
import { Box, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { keyframes } from '@mui/system';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const experience = [
  {
    icon: <WorkIcon sx={{ color: '#1976d2' }} />,
    title: 'Junior Frontend Developer (freiwillig) - WeGo',
    period: 'August 2024 – November 2024',
    desc: `Entwicklung von responsiven Webanwendungen mit Next.js und Material-UI.
Selbstständiges Lösen technischer Probleme.
Optimierung der Performance und Usability.
Integration von REST-APIs und Umsetzung interaktiver Komponenten.`,
  },

  {
    icon: <FamilyRestroomIcon sx={{ color: '#388e3c' }} />,
    title: 'Familienzeit (Elternzeit)',
    period: 'Dezember 2008 – September 2017 | Ukraine',
    desc: 'Zeit für Familie und persönliche Entwicklung.',
  },
  {
    icon: <EngineeringIcon sx={{ color: '#f57c00' }} />,
    title: 'Konstrukteurin im Bereich metallurgischer Anlagen - OJSC "GSKTI"',
    period: 'April 2008 – Dezember 2008 | Ukraine, Mariupol',
    desc: `Konstruktion und Entwicklung von Bauteilen und Baugruppen für Maschinen in der Metallurgie.
Erstellung technischer Zeichnungen und Konstruktionsunterlagen.
Zusammenarbeit mit der Produktionsabteilung zur Umsetzung technischer Lösungen.`,
  },
];

function ExperienceRow({ icon, title, period, desc, delay = 0 }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'flex-start',
        mb: 3,
        p: 2,
        borderRadius: 2,
        opacity: 0,
        animation: `${fadeInUp} 0.6s ease forwards`,
        animationDelay: `${delay}s`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover, &:focus': {
          transform: 'translateY(-3px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          backgroundColor: '#f5f5f5',
        },
        cursor: 'pointer',
      }}
      tabIndex={0}
    >
      <Box
        sx={{
          width: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography fontWeight={600}>{title}</Typography>
        <Typography
          variant="body2"
          fontStyle="italic"
          color="text.secondary"
          mb={1}
        >
          {period}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ErfahrungSection() {
  return (
    <Box component="section" sx={{ py: 10, px: { xs: 2, md: 6 } }}>
      {/* Заголовок */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6 }}>
        <Box
          sx={{ width: 6, height: 40, bgcolor: '#ff6f61', borderRadius: 2 }}
        />
        <Typography variant="h3" fontWeight={700} textAlign="center">
          Erfahrung
        </Typography>
      </Box>

      {/* Список опыта */}
      {experience.map((exp, i) => (
        <ExperienceRow key={exp.title} {...exp} delay={0.1 * i} />
      ))}
    </Box>
  );
}
