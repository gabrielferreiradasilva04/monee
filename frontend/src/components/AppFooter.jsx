import React from "react";
import { Container, Typography, Link, Box, useTheme, Stack, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Copyright} from "@mui/icons-material";
export default function AppFooter() {
  return (
     <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: { xs: 4, sm: 8 },
      py: { xs: 8, sm: 10 },
      textAlign: { sm: 'center', md: 'left' },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minWidth: { xs: '100%', sm: '60%' },
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
          <Facebook />
          <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
            <Link>Acesse nosso grupo no Facebook!</Link>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Se inscreva para ficar por dentro das atualizações!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
          Product
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          FAQs
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
          Company
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          Sobre nós
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Localização
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Outros serviços
        </Link>

      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
          Informações Legais
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          Termos e condições
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Contato
        </Link>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        pt: { xs: 4, sm: 8 },
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <div>
        <Link color="text.secondary" variant="body2" href="#">
          Política de privacidade
        </Link>
        <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
          &nbsp;•&nbsp;
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          Monee - Gestão e Aprendizado Financeiro
        </Link>
        <Copyright />
      </div>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ justifyContent: 'left', color: 'text.secondary' }}
      >
        <IconButton
          color="inherit"
          size="small"
          href="https://github.com/mui"
          aria-label="GitHub"
          sx={{ alignSelf: 'center' }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          href="https://x.com/MaterialUI"
          aria-label="X"
          sx={{ alignSelf: 'center' }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          href="https://www.linkedin.com/company/mui/"
          aria-label="LinkedIn"
          sx={{ alignSelf: 'center' }}
        >
          <LinkedIn />
        </IconButton>
      </Stack>
    </Box>
  </Container>
  )
}
