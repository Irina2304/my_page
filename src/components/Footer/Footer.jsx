// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';

// export function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         mt: 'auto',
//         borderTop: '1px solid rgba(224,224,224,0.5)',
//         py: 2,
//         px: 3,
//         backgroundColor: '#f9f9f9',
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: 1200,
//           mx: 'auto',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//           color: 'text.secondary',
//         }}
//       >
//         <Typography
//           variant="body2"
//           sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             gap: 0.5,
//           }}
//         >
//           © 2025 Iryna Kulyk.{' '}
//           <Box
//             component="span"
//             sx={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: 0.5,
//               whiteSpace: { xs: 'normal', sm: 'nowrap' }, // xs = перенос, sm+ = одна строка
//             }}
//           >
//             Erstellt mit <FavoriteIcon fontSize="small" color="error" /> und
//             React
//           </Box>
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 3,
        backgroundColor: '#9c9c9c',
        boxShadow: '0 -3px 6px rgba(0,0,0,0.2)',
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 0.5,
          }}
        >
          © 2025 Iryna Kulyk.{' '}
          <Box
            component="span"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              whiteSpace: { xs: 'normal', sm: 'nowrap' }, // на мобиле перенос, на больших — в одну строку
            }}
          >
            Erstellt mit <FavoriteIcon fontSize="small" color="error" /> und
            React
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
