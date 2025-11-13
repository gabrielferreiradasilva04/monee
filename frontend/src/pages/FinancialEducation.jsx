import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Stack,
  Button,
  LinearProgress,
  Paper,
  Avatar,
  Container
} from '@mui/material';
import {
  School,
  EmojiEvents,
  Quiz,
  TrendingUp,
  Lock,
  CheckCircle,
  PlayArrow
} from '@mui/icons-material';

export default function FinancialEducation() {
  // Dados mockados do usuário
  const userData = {
    level: 5,
    currentXP: 750,
    nextLevelXP: 1000,
    username: "Investidor Jr",
    completedQuizzes: 12
  };

  // Níveis disponíveis
  const levels = [
    { id: 1, title: "Básico", description: "Fundamentos da educação financeira", requiredXP: 0, unlocked: true, completed: true },
    { id: 2, title: "Orçamento", description: "Aprendendo a controlar gastos", requiredXP: 200, unlocked: true, completed: true },
    { id: 3, title: "Investimentos", description: "Introdução aos investimentos", requiredXP: 400, unlocked: true, completed: true },
    { id: 4, title: "Renda Extra", description: "Gerando fontes alternativas", requiredXP: 600, unlocked: true, completed: false },
    { id: 5, title: "Aposentadoria", description: "Planejamento de longo prazo", requiredXP: 800, unlocked: true, completed: false },
    { id: 6, title: "Avançado", description: "Estratégias complexas", requiredXP: 1000, unlocked: false, completed: false },
  ];

  // Questionários disponíveis
  const quizzes = [
    { id: 1, title: "Orçamento Doméstico", level: 2, xp: 50, completed: true },
    { id: 2, title: "Fundos de Investimento", level: 3, xp: 75, completed: true },
    { id: 3, title: "Tesouro Direto", level: 3, xp: 75, completed: false },
    { id: 4, title: "Renda Extra", level: 4, xp: 100, completed: false },
  ];

  // Desafios ativos
  const challenges = [
    { 
      id: 1, 
      title: "Economia Semanal", 
      description: "Economize 20% da sua renda esta semana", 
      xp: 150,
      deadline: "2024-01-15",
      progress: 65
    },
    { 
      id: 2, 
      title: "Primeiro Investimento", 
      description: "Realize seu primeiro investimento em renda fixa", 
      xp: 200,
      deadline: "2024-01-20",
      progress: 0
    },
    { 
      id: 3, 
      title: "Leitura Financeira", 
      description: "Leia um livro sobre educação financeira", 
      xp: 100,
      deadline: "2024-01-25",
      progress: 100
    },
  ];

  // Calcular progresso para a barra de XP
  const progress = ((userData.currentXP / userData.nextLevelXP) * 100);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        {/* Header do Usuário */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 4,
            background: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
            color: 'white'
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
            <Avatar sx={{ width: 80, height: 80, bgcolor: 'rgba(255,255,255,0.2)' }}>
              <School sx={{ fontSize: 40 }} />
            </Avatar>
            
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {userData.username}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }} gutterBottom>
                Nível {userData.level} • {userData.completedQuizzes} quizzes concluídos
              </Typography>
              
              <Box sx={{ mt: 2 }}>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                  <Typography variant="body2">
                    XP: {userData.currentXP} / {userData.nextLevelXP}
                  </Typography>
                  <Typography variant="body2">
                    {userData.nextLevelXP - userData.currentXP} XP para o próximo nível
                  </Typography>
                </Stack>
                <LinearProgress 
                  variant="determinate" 
                  value={progress} 
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'white'
                    }
                  }}
                />
              </Box>
            </Box>

            <Chip 
              icon={<EmojiEvents />} 
              label={`Nível ${userData.level}`}
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontSize: '1.1rem',
                padding: 2
              }}
            />
          </Stack>
        </Paper>

        <Grid container spacing={3}>
          {/* Coluna da Esquerda - Níveis e Progressão */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Níveis de Aprendizado */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingUp /> Trilha de Aprendizado
                </Typography>
                
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {levels.map((level) => (
                    <Paper 
                      key={level.id}
                      variant="outlined"
                      sx={{ 
                        p: 2,
                        borderColor: level.unlocked ? 'primary.main' : 'grey.300',
                        backgroundColor: level.unlocked ? 'background.default' : 'grey.50',
                        opacity: level.unlocked ? 1 : 0.6
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={2}>
                        {level.completed ? (
                          <CheckCircle color="success" />
                        ) : level.unlocked ? (
                          <PlayArrow color="primary" />
                        ) : (
                          <Lock color="disabled" />
                        )}
                        
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" fontWeight="bold">
                            {level.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {level.description}
                          </Typography>
                        </Box>
                        
                        <Chip 
                          label={`${level.requiredXP} XP`}
                          color={level.unlocked ? "primary" : "default"}
                          variant={level.unlocked ? "filled" : "outlined"}
                        />
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Desafios Ativos */}
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmojiEvents /> Desafios Ativos
                </Typography>
                
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {challenges.map((challenge) => (
                    <Card key={challenge.id} variant="outlined">
                      <CardContent>
                        <Stack spacing={2}>
                          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                            <Box>
                              <Typography variant="h6" fontWeight="bold">
                                {challenge.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {challenge.description}
                              </Typography>
                            </Box>
                            <Chip 
                              label={`+${challenge.xp} XP`}
                              color="success"
                              variant="outlined"
                            />
                          </Stack>
                          
                          {challenge.progress > 0 && (
                            <Box>
                              <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                                <Typography variant="body2" color="text.secondary">
                  Progresso
                                </Typography>
                                <Typography variant="body2" fontWeight="bold">
                                  {challenge.progress}%
                                </Typography>
                              </Stack>
                              <LinearProgress 
                                variant="determinate" 
                                value={challenge.progress}
                                color={challenge.progress === 100 ? "success" : "primary"}
                                sx={{ height: 6, borderRadius: 3 }}
                              />
                            </Box>
                          )}
                          
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="caption" color="text.secondary">
                              Prazo: {new Date(challenge.deadline).toLocaleDateString('pt-BR')}
                            </Typography>
                            <Button 
                              variant={challenge.progress === 100 ? "contained" : "outlined"}
                              size="small"
                              color={challenge.progress === 100 ? "success" : "primary"}
                            >
                              {challenge.progress === 100 ? "Reivindicar" : "Iniciar"}
                            </Button>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Coluna da Direita - Questionários e Stats */}
          <Grid size={{ xs: 12, lg: 4 }}>
            {/* Questionários Disponíveis */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Quiz /> Questionários
                </Typography>
                
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {quizzes.map((quiz) => (
                    <Paper 
                      key={quiz.id}
                      variant="outlined"
                      sx={{ p: 2 }}
                    >
                      <Stack direction="row" alignItems="center" spacing={2}>
                        {quiz.completed ? (
                          <CheckCircle color="success" />
                        ) : (
                          <Quiz color="primary" />
                        )}
                        
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body1" fontWeight="medium">
                            {quiz.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Nível {quiz.level} • {quiz.xp} XP
                          </Typography>
                        </Box>
                        
                        <Button 
                          variant={quiz.completed ? "outlined" : "contained"}
                          size="small"
                          color={quiz.completed ? "success" : "primary"}
                          disabled={quiz.completed}
                        >
                          {quiz.completed ? "Concluído" : "Iniciar"}
                        </Button>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Estatísticas Rápidas */}
            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Suas Conquistas
                </Typography>
                
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Quizzes Concluídos</Typography>
                    <Typography variant="body2" fontWeight="bold">{userData.completedQuizzes}</Typography>
                  </Stack>
                  
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Desafios Ativos</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {challenges.filter(c => c.progress > 0 && c.progress < 100).length}
                    </Typography>
                  </Stack>
                  
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">XP Total</Typography>
                    <Typography variant="body2" fontWeight="bold">{userData.currentXP}</Typography>
                  </Stack>
                  
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Nível Atual</Typography>
                    <Typography variant="body2" fontWeight="bold">{userData.level}</Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}