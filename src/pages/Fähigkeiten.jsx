import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { keyframes } from '@mui/system';
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SettingsIcon from '@mui/icons-material/Settings';
import DnsIcon from '@mui/icons-material/Dns';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

// Простая анимация появления
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* Встраиваемый SVG-компонент Union Jack (упрощённая, но узнаваемая) */
function UnionJack({ width = 32, height = 32 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 30"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Union Jack"
    >
      <rect width="60" height="30" fill="#00247d" />
      {/* белые диагонали */}
      <g fill="#fff">
        <polygon points="0,0 10,0 60,24 60,30 50,30 0,6" />
        <polygon points="60,0 50,0 0,24 0,30 10,30 60,6" />
      </g>
      {/* красные диагонали (суженные) */}
      <g fill="#cf142b">
        <polygon points="0,0 6,0 60,22 60,30 54,30 0,8" />
        <polygon points="60,0 54,0 0,22 0,30 6,30 60,8" />
      </g>
      {/* централь белый cross */}
      <rect x="25" y="0" width="10" height="30" fill="#fff" />
      <rect x="0" y="10" width="60" height="10" fill="#fff" />
      {/* централь red cross */}
      <rect x="27" y="0" width="6" height="30" fill="#cf142b" />
      <rect x="0" y="12" width="60" height="6" fill="#cf142b" />
    </svg>
  );
}

/* массив навыков: три колонки (Fach, Soft, Sprachen) */
const fach = [
  {
    icon: <LaptopMacIcon sx={{ color: '#1976d2' }} />,
    label: 'Grundkenntnisse im IT-Support',
    desc: 'Installation und Konfiguration von Software',
  },
  {
    icon: <SettingsIcon sx={{ color: '#f57c00' }} />,
    label: 'Technisches Verständnis',
    desc: 'Hohe Lernbereitschaft und analytisches Denken',
  },
  {
    icon: <CodeIcon sx={{ color: '#388e3c' }} />,
    label: 'Webtechnologien',
    desc: 'Grundkenntnisse in HTML, CSS, JavaScript',
  },
  {
    icon: <DnsIcon sx={{ color: '#d32f2f' }} />,
    label: 'IT-Netzwerke',
    desc: 'Erste Einblicke in Netzwerk- und Systemstrukturen',
  },
];

const soft = [
  {
    icon: <PeopleIcon sx={{ color: '#0A66C2', fontSize: 32 }} />,
    label: 'Kommunikationsstark',
    desc: 'Klare Kommunikation im Team',
  },
  {
    icon: <PeopleIcon sx={{ color: '#333', fontSize: 32 }} />,
    label: 'Teamfähig',
    desc: 'Effiziente Zusammenarbeit',
  },
  {
    icon: <LightbulbIcon sx={{ color: '#ff6f61', fontSize: 32 }} />,
    label: 'Detailorientiert',
    desc: 'Aufmerksamkeit für Details',
  },
  {
    icon: <SchoolIcon sx={{ color: '#ff6f61', fontSize: 32 }} />,
    label: 'Lernbegierig',
    desc: 'Hohe Motivation, Neues zu lernen',
  },
];

const languages = [
  {
    icon: (
      // украинский: желто-синий полосатый прямоугольник
      <Box
        sx={{
          width: 32,
          height: 20,
          borderRadius: '4px',
          background: 'linear-gradient(to bottom, #0057b7 50%, #ffd400 50%)',
        }}
      />
    ),
    label: 'Ukrainisch',
    desc: 'Muttersprache',
  },
  {
    icon: (
      // русский: бело-сине-красный
      <Box
        sx={{
          width: 32,
          height: 20,
          borderRadius: '4px',
          background:
            'linear-gradient(to bottom, #fff 33%, #0039a6 33% 66%, #d52b1e 66%)',
        }}
      />
    ),
    label: 'Russisch',
    desc: 'Muttersprache',
  },

  {
    icon: (
      // немецкий: чёрно-красно-жёлтый
      <Box
        sx={{
          width: 32,
          height: 20,
          borderRadius: '4px',
          background:
            'linear-gradient(to bottom, #000 33%, #dd0000 33% 66%, #ffce00 66%)',
        }}
      />
    ),
    label: 'Deutsch',
    desc: 'B2 – selbstständige Sprachverwendung',
  },
  {
    icon: <UnionJack width={32} height={20} />,
    label: 'Englisch',
    desc: 'A2 – elementare Sprachverwendung',
  },
];

function SkillRow({ icon, label, desc, delay = 0 }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        mb: 2.5,
        opacity: 0,
        animation: `${fadeInUp} 0.6s ease forwards`,
        animationDelay: `${delay}s`,
      }}
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
        <Typography fontWeight={600}>{label}</Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

// export default function Fähigkeiten() {
//   return (
//     <Box component="section" sx={{ py: 10, px: { xs: 2, md: 6 } }}>
//       {/* Заголовок */}
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           gap: 2,
//           mb: 6,
//         }}
//       >
//         <Box
//           sx={{ width: 6, height: 40, bgcolor: '#ff6f61', borderRadius: 2 }}
//         />
//         <Typography variant="h3" fontWeight={700} textAlign="center">
//           Fähigkeiten
//         </Typography>
//       </Box>

//       <Grid
//         container
//         spacing={4}
//         justifyContent="space-around"
//         alignItems="flex-start"
//       >
//         {/* Fachkenntnisse */}
//         <Grid item xs={12} md={4}>
//           <Typography
//             variant="h5"
//             fontWeight={600}
//             sx={{ mb: 2, textAlign: { xs: 'left', md: 'center' } }}
//           >
//             Fachkenntnisse
//           </Typography>
//           {fach.map((s, i) => (
//             <SkillRow
//               key={s.label}
//               {...{ icon: s.icon, label: s.label, desc: s.desc }}
//               delay={0.1 * i}
//             />
//           ))}
//         </Grid>

//         {/* Soft Skills */}
//         <Grid item xs={12} md={4}>
//           <Typography
//             variant="h5"
//             fontWeight={600}
//             sx={{ mb: 2, textAlign: { xs: 'left', md: 'center' } }}
//           >
//             Soft Skills
//           </Typography>
//           {soft.map((s, i) => (
//             <SkillRow
//               key={s.label}
//               {...{ icon: s.icon, label: s.label, desc: s.desc }}
//               delay={0.1 * i}
//             />
//           ))}
//         </Grid>

//         {/* Sprachkenntnisse */}
//         <Grid item xs={12} md={4}>
//           <Typography
//             variant="h5"
//             fontWeight={600}
//             sx={{ mb: 2, textAlign: { xs: 'left', md: 'center' } }}
//           >
//             Sprachkenntnisse
//           </Typography>
//           {languages.map((s, i) => (
//             <SkillRow
//               key={s.label}
//               {...{ icon: s.icon, label: s.label, desc: s.desc }}
//               delay={0.1 * i}
//             />
//           ))}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
export default function Fähigkeiten() {
  return (
    <Box component="section" sx={{ py: 10, px: { xs: 2, md: 6 } }}>
      {/* Заголовок */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          mb: 4,
        }}
      >
        <Box
          sx={{ width: 6, height: 40, bgcolor: '#ff6f61', borderRadius: 2 }}
        />
        <Typography variant="h3" fontWeight={700} textAlign="center">
          Fähigkeiten
        </Typography>
      </Box>

      {/* Вступительный текст */}
      <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6, textAlign: 'center' }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7 }}
        >
          Ich liebe es, meine Fähigkeiten weiterzuentwickeln und Neues
          auszuprobieren. Sowohl fachliche als auch persönliche Kompetenzen
          erweitern meinen Horizont und helfen mir, Herausforderungen zu
          meistern.
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="space-around"
        alignItems="flex-start"
      >
        {/* Fachkenntnisse */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mb: 2, textAlign: { xs: 'left', md: 'center' } }}
          >
            Fachkenntnisse
          </Typography>
          {fach.map((s, i) => (
            <SkillRow
              key={s.label}
              {...{ icon: s.icon, label: s.label, desc: s.desc }}
              delay={0.1 * i}
            />
          ))}
        </Grid>

        {/* Soft Skills */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mb: 2, textAlign: { xs: 'left', md: 'center' } }}
          >
            Soft Skills
          </Typography>
          {soft.map((s, i) => (
            <SkillRow
              key={s.label}
              {...{ icon: s.icon, label: s.label, desc: s.desc }}
              delay={0.1 * i}
            />
          ))}
        </Grid>

        {/* Sprachkenntnisse */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ mb: 2, textAlign: { xs: 'left', md: 'center' } }}
          >
            Sprachkenntnisse
          </Typography>
          {languages.map((s, i) => (
            <SkillRow
              key={s.label}
              {...{ icon: s.icon, label: s.label, desc: s.desc }}
              delay={0.1 * i}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
