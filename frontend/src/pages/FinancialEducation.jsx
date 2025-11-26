import React, { useState, useEffect } from 'react';
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
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Alert,
  CircularProgress,
  Backdrop,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import {
  School,
  EmojiEvents,
  Quiz,
  TrendingUp,
  Lock,
  CheckCircle,
  PlayArrow,
  AutoAwesome,
  Visibility,
  Info
} from '@mui/icons-material';

export default function FinancialEducation() {
  // Estado para controle do loading inicial
  const [isLoading, setIsLoading] = useState(true);

  // Estados para controle das funcionalidades
  const [userData, setUserData] = useState({
    level: 5,
    currentXP: 750,
    nextLevelXP: 1000,
    username: "",
    completedQuizzes: 12
  });

  const [quizzes, setQuizzes] = useState([
    { 
      id: 1, 
      title: "Orçamento Doméstico", 
      level: 2, 
      xp: 50, 
      completed: true,
      userScore: 4,
      totalQuestions: 5,
      userAnswers: {1: 0, 2: 1, 3: 1, 4: 0, 5: 1},
      questions: [
        {
          id: 1,
          question: "Qual é o primeiro passo para criar um orçamento doméstico?",
          options: [
            "Controlar todos os gastos por 30 dias",
            "Cortar todas as despesas não essenciais",
            "Investir em ações"
          ],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Qual porcentagem da renda deve ser destinada a gastos essenciais?",
          options: [
            "30%",
            "50%",
            "70%"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "O que é uma despesa variável?",
          options: [
            "Aluguel",
            "Conta de luz",
            "Plano de saúde"
          ],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Qual ferramenta é mais eficaz para controle orçamentário?",
          options: [
            "Planilha Excel",
            "Aplicativo de controle financeiro",
            "Ambos são igualmente eficazes"
          ],
          correctAnswer: 2
        },
        {
          id: 5,
          question: "Com que frequência o orçamento deve ser revisado?",
          options: [
            "Anualmente",
            "Mensalmente",
            "Trimestralmente"
          ],
          correctAnswer: 1
        }
      ]
    },
    { 
      id: 2, 
      title: "Fundos de Investimento", 
      level: 3, 
      xp: 75, 
      completed: true,
      userScore: 5,
      totalQuestions: 5,
      userAnswers: {1: 0, 2: 1, 3: 2, 4: 0, 5: 1},
      questions: [
        {
          id: 1,
          question: "O que é um fundo de investimento?",
          options: [
            "Condomínio de investidores",
            "Aplicação individual em ações",
            "Empréstimo bancário"
          ],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Qual a vantagem principal dos fundos?",
          options: [
            "Rentabilidade garantida",
            "Diversificação profissional",
            "Isenção de impostos"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "O que significa a taxa de administração?",
          options: [
            "Taxa cobrada pelo governo",
            "Remuneração do gestor",
            "Imposto sobre ganhos"
          ],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Qual tipo de fundo é mais conservador?",
          options: [
            "Fundo de Renda Fixa",
            "Fundo de Ações",
            "Fundo Multimercado"
          ],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "O que é cotização?",
          options: [
            "Processo de compra de cotas",
            "Análise de mercado",
            "Declaração de imposto"
          ],
          correctAnswer: 0
        }
      ]
    },
    { 
      id: 3, 
      title: "Tesouro Direto", 
      level: 3, 
      xp: 75, 
      completed: false,
      questions: [
        {
          id: 1,
          question: "O que é Tesouro Direto?",
          options: [
            "Programa de investimento em títulos públicos",
            "Investimento em ações da bolsa",
            "Plano de previdência privada"
          ],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Qual a vantagem do Tesouro Selic?",
          options: [
            "Rentabilidade atrelada à poupança",
            "Liquidez diária e baixo risco",
            "Alta rentabilidade garantida"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "O que significa Tesouro IPCA+?",
          options: [
            "Rendimento acima da inflação",
            "Rendimento fixo mensal",
            "Investimento em dólar"
          ],
          correctAnswer: 0
        },
        {
          id: 4,
          question: "Qual o valor mínimo para investir?",
          options: [
            "R$ 50,00",
            "R$ 100,00",
            "R$ 1.000,00"
          ],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "O que é marcação a mercado?",
          options: [
            "Valorização diária do título",
            "Sistema de preços do mercado",
            "Taxa de administração"
          ],
          correctAnswer: 1
        }
      ]
    },
    { 
      id: 4, 
      title: "Renda Extra", 
      level: 4, 
      xp: 100, 
      completed: false,
      questions: [
        {
          id: 1,
          question: "Qual é a principal característica da renda extra?",
          options: [
            "É uma renda fixa garantida",
            "Complementa a renda principal",
            "Substitui o salário integralmente"
          ],
          correctAnswer: 1
        },
        {
          id: 2,
          question: "Qual destes é um exemplo de renda extra?",
          options: [
            "Salário mensal",
            "Trabalho freelancer",
            "13º salário"
          ],
          correctAnswer: 1
        },
        {
          id: 3,
          question: "O que é importante ao buscar renda extra?",
          options: [
            "Abandonar o emprego principal",
            "Equilibrar com outras atividades",
            "Investir todo o patrimônio"
          ],
          correctAnswer: 1
        },
        {
          id: 4,
          question: "Qual plataforma é comum para renda extra online?",
          options: [
            "Sites de freelancer",
            "Redes sociais pessoais",
            "Aplicativos bancários"
          ],
          correctAnswer: 0
        },
        {
          id: 5,
          question: "Renda extra deve ser vista como:",
          options: [
            "Substituição da carreira",
            "Oportunidade de crescimento",
            "Gasto de tempo inútil"
          ],
          correctAnswer: 1
        }
      ]
    },
  ]);

  const [challenges, setChallenges] = useState([
    { 
      id: 1, 
      title: "Economia Semanal", 
      description: "Economize 20% da sua renda esta semana", 
      xp: 150,
      deadline: "2024-01-15",
      progress: 65,
      claimed: false
    },
    { 
      id: 2, 
      title: "Primeiro Investimento", 
      description: "Realize seu primeiro investimento em renda fixa", 
      xp: 200,
      deadline: "2024-01-20",
      progress: 0,
      claimed: false
    },
    { 
      id: 3, 
      title: "Leitura Financeira", 
      description: "Leia um livro sobre educação financeira", 
      xp: 100,
      deadline: "2024-01-25",
      progress: 100,
      claimed: false
    },
  ]);

  const [levels] = useState([
    { id: 1, title: "Básico", description: "Fundamentos da educação financeira", requiredXP: 0, unlocked: true, completed: true },
    { id: 2, title: "Orçamento", description: "Aprendendo a controlar gastos", requiredXP: 200, unlocked: true, completed: true },
    { id: 3, title: "Investimentos", description: "Introdução aos investimentos", requiredXP: 400, unlocked: true, completed: true },
    { id: 4, title: "Renda Extra", description: "Gerando fontes alternativas", requiredXP: 600, unlocked: true, completed: false },
    { id: 5, title: "Aposentadoria", description: "Planejamento de longo prazo", requiredXP: 800, unlocked: true, completed: false },
    { id: 6, title: "Avançado", description: "Estratégias complexas", requiredXP: 1000, unlocked: false, completed: false },
  ]);

  // Estados para o questionário IA
  const [generatingQuiz, setGeneratingQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizDialogOpen, setQuizDialogOpen] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Estado para visualizar questionários anteriores
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [quizToReview, setQuizToReview] = useState(null);

  // Estado para confirmação de geração de IA
  const [confirmAIDialogOpen, setConfirmAIDialogOpen] = useState(false);

  // Calcular progresso para a barra de XP
  const progress = ((userData.currentXP / userData.nextLevelXP) * 100);

  // Efeito para simular o loading inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Função para abrir diálogo de confirmação da IA
  const openAIConfirmation = () => {
    setConfirmAIDialogOpen(true);
  };

  // Função para simular geração de questionário por IA
  const generateAIQuiz = () => {
    setConfirmAIDialogOpen(false);
    setGeneratingQuiz(true);
    
    // Simular tempo de processamento da IA
    setTimeout(() => {
      const newQuiz = {
        id: Date.now(),
        title: "Questionário Personalizado IA",
        level: userData.level,
        xp: 125,
        completed: false,
        questions: [
          {
            id: 1,
            question: "Qual é a melhor estratégia para um fundo de emergência?",
            options: [
              "Manter em poupança com 3-6 meses de despesas",
              "Investir tudo em ações para maior retorno",
              "Deixar no cheque especial para facilidade"
            ],
            correctAnswer: 0
          },
          {
            id: 2,
            question: "O que é diversificação de investimentos?",
            options: [
              "Concentrar em um único tipo de ativo",
              "Distribuir recursos em diferentes categorias",
              "Investir apenas no exterior"
            ],
            correctAnswer: 1
          },
          {
            id: 3,
            question: "Qual a principal vantagem dos juros compostos?",
            options: [
              "São mais simples de calcular",
              "Geram crescimento exponencial ao longo do tempo",
              "São livres de impostos"
            ],
            correctAnswer: 1
          },
          {
            id: 4,
            question: "O que significa CDI no mercado financeiro?",
            options: [
              "Certificado de Depósito Interbancário",
              "Conta de Depósito Imobiliário",
              "Crédito Direto ao Investidor"
            ],
            correctAnswer: 0
          },
          {
            id: 5,
            question: "Qual é o primeiro passo para organizar as finanças?",
            options: [
              "Fazer investimentos arriscados",
              "Controlar gastos e fazer um orçamento",
              "Contratar um consultor financeiro"
            ],
            correctAnswer: 1
          }
        ]
      };
      
      setQuizzes(prev => [newQuiz, ...prev]);
      setGeneratingQuiz(false);
    }, 3000);
  };

  // Função para reivindicar desafio
  const handleClaimChallenge = (challengeId) => {
    setChallenges(prevChallenges => 
      prevChallenges.map(challenge => {
        if (challenge.id === challengeId && challenge.progress === 100 && !challenge.claimed) {
          // Adicionar XP ao usuário
          setUserData(prev => ({
            ...prev,
            currentXP: prev.currentXP + challenge.xp
          }));
          
          return { ...challenge, claimed: true };
        }
        return challenge;
      })
    );
  };

  // Função para iniciar questionário
  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setQuizAnswers({});
    setQuizCompleted(false);
    setQuizScore(0);
    setQuizDialogOpen(true);
  };

  // Função para visualizar questionário anterior
  const reviewQuiz = (quiz) => {
    setQuizToReview(quiz);
    setReviewDialogOpen(true);
  };

  // Função para submeter questionário
  const submitQuiz = () => {
    let score = 0;
    currentQuiz.questions.forEach(question => {
      // Garantir que estamos comparando números com números
      const userAnswer = parseInt(quizAnswers[question.id]);
      if (userAnswer === question.correctAnswer) {
        score++;
      }
    });

    setQuizScore(score);
    setQuizCompleted(true);

    // Se acertou pelo menos 3 questões, considerar concluído
    if (score >= 3) {
      // Criar cópia do quiz com as respostas do usuário
      const completedQuiz = {
        ...currentQuiz,
        completed: true,
        userScore: score,
        totalQuestions: currentQuiz.questions.length,
        userAnswers: { ...quizAnswers }
      };

      // Atualizar quiz como concluído
      setQuizzes(prev => 
        prev.map(q => 
          q.id === currentQuiz.id 
            ? completedQuiz
            : q
        )
      );

      // Adicionar XP ao usuário
      setUserData(prev => ({
        ...prev,
        currentXP: prev.currentXP + currentQuiz.xp,
        completedQuizzes: prev.completedQuizzes + 1
      }));
    }
  };

  // Função para fechar o diálogo do quiz
  const closeQuizDialog = () => {
    setQuizDialogOpen(false);
    setCurrentQuiz(null);
    setQuizCompleted(false);
  };

  // Função para fechar o diálogo de revisão
  const closeReviewDialog = () => {
    setReviewDialogOpen(false);
    setQuizToReview(null);
  };

  // Função para fechar o diálogo de confirmação da IA
  const closeAIConfirmation = () => {
    setConfirmAIDialogOpen(false);
  };

  // Função para lidar com resposta do quiz
  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  // Tela de Loading
  if (isLoading) {
    return (
      <Backdrop
        sx={{ 
          color: '#fff', 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)'
        }}
        open={isLoading}
      >
        <Box 
          textAlign="center" 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <School sx={{ fontSize: 40, color: 'white' }} />
          </Box>
          
          <CircularProgress 
            size={60} 
            thickness={4}
            sx={{ 
              color: 'white',
              mb: 2 
            }} 
          />
          
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Educação Financeira
          </Typography>
          
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 1 }}>
            Carregando sua jornada de aprendizado...
          </Typography>
          
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Preparando tudo para você
          </Typography>

          <Box sx={{ width: '200px', mt: 2 }}>
            <LinearProgress 
              sx={{ 
                height: 6, 
                borderRadius: 3,
                backgroundColor: 'rgba(255,255,255,0.3)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: 'white',
                  borderRadius: 3
                }
              }}
            />
          </Box>
        </Box>
      </Backdrop>
    );
  }

  // Conteúdo principal da aplicação
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        {/* Backdrop de carregamento para geração de quiz */}
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={generatingQuiz}
        >
          <Box textAlign="center">
            <CircularProgress color="inherit" />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Gerando questionário personalizado com IA...
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              Isso pode levar alguns segundos
            </Typography>
          </Box>
        </Backdrop>

        {/* Header do Usuário */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 4,
            background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
            color: 'white',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2)'
          }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
            <Avatar sx={{ 
              width: 80, 
              height: 80, 
              bgcolor: 'rgba(255,255,255,0.2)',
              border: '2px solid rgba(255,255,255,0.3)'
            }}>
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
                    height: 10, 
                    borderRadius: 5,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'white',
                      borderRadius: 5
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
                padding: 2,
                height: 'auto',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
            />
          </Stack>
        </Paper>

        <Grid container spacing={3}>
          {/* Coluna da Esquerda - Níveis e Progressão */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Níveis de Aprendizado */}
            <Card sx={{ 
              mb: 3, 
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  color: '#22C55E'
                }}>
                  <TrendingUp /> Progressão de Nível
                </Typography>
                
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {levels.map((level) => (
                    <Paper 
                      key={level.id}
                      variant="outlined"
                      sx={{ 
                        p: 2,
                        borderColor: level.unlocked ? '#22C55E' : 'grey.300',
                        backgroundColor: level.unlocked ? 'background.default' : 'grey.50',
                        opacity: level.unlocked ? 1 : 0.6,
                        borderRadius: 2,
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          boxShadow: level.unlocked ? '0 2px 8px rgba(34, 197, 94, 0.2)' : 'none',
                          transform: level.unlocked ? 'translateY(-2px)' : 'none'
                        }
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={2}>
                        {level.completed ? (
                          <CheckCircle sx={{ color: '#22C55E' }} />
                        ) : level.unlocked ? (
                          <PlayArrow sx={{ color: '#22C55E' }} />
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
                          sx={{
                            backgroundColor: level.unlocked ? '#22C55E' : 'grey.300',
                            color: level.unlocked ? 'white' : 'grey.600'
                          }}
                        />
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Desafios Ativos */}
            <Card sx={{ 
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  color: '#22C55E'
                }}>
                  <EmojiEvents /> Desafios Ativos
                </Typography>
                
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {challenges.map((challenge) => (
                    <Card key={challenge.id} variant="outlined" sx={{ 
                      borderRadius: 2,
                      borderColor: challenge.claimed ? '#22C55E' : 'grey.200',
                      backgroundColor: challenge.claimed ? 'rgba(34, 197, 94, 0.05)' : 'white'
                    }}>
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
                              sx={{
                                backgroundColor: '#22C55E',
                                color: 'white'
                              }}
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
                                sx={{ 
                                  height: 6, 
                                  borderRadius: 3,
                                  backgroundColor: 'grey.200',
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: challenge.progress === 100 ? '#22C55E' : '#3B82F6',
                                    borderRadius: 3
                                  }
                                }}
                              />
                            </Box>
                          )}
                          
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="caption" color="text.secondary">
                              Prazo: {new Date(challenge.deadline).toLocaleDateString('pt-BR')}
                            </Typography>
                            <Button 
                              variant={challenge.progress === 100 && !challenge.claimed ? "contained" : "outlined"}
                              size="small"
                              sx={{
                                backgroundColor: challenge.claimed ? '#22C55E' : 
                                               challenge.progress === 100 ? '#22C55E' : 'transparent',
                                color: challenge.claimed ? 'white' : 
                                      challenge.progress === 100 ? 'white' : '#22C55E',
                                borderColor: '#22C55E',
                                '&:hover': {
                                  backgroundColor: challenge.claimed ? '#16A34A' : 
                                                 challenge.progress === 100 ? '#16A34A' : 'rgba(34, 197, 94, 0.1)',
                                  borderColor: '#16A34A'
                                }
                              }}
                              onClick={() => handleClaimChallenge(challenge.id)}
                              disabled={challenge.progress !== 100 || challenge.claimed}
                            >
                              {challenge.claimed ? "Reivindicado" : challenge.progress === 100 ? "Reivindicar" : "Iniciar"}
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

          {/* Coluna da Direita - Questionários */}
          <Grid size={{ xs: 12, lg: 4 }}>
            {/* Questionários Disponíveis */}
            <Card sx={{ 
              mb: 3, 
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h5" fontWeight="bold" sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    color: '#22C55E'
                  }}>
                    <Quiz /> Questionários
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<AutoAwesome />}
                    onClick={openAIConfirmation}
                    disabled={generatingQuiz}
                    sx={{
                      background: 'linear-gradient(45deg, #22C55E, #10B981)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #16A34A, #059669)',
                      },
                      borderRadius: 2
                    }}
                  >
                    Gerar 
                  </Button>
                </Stack>
                
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {quizzes.map((quiz) => (
                    <Paper 
                      key={quiz.id}
                      variant="outlined"
                      sx={{ 
                        p: 2, 
                        borderRadius: 2,
                        borderColor: quiz.completed ? '#22C55E' : 'grey.200',
                        backgroundColor: quiz.completed ? 'rgba(34, 197, 94, 0.05)' : 'white',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          transform: 'translateY(-1px)'
                        }
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={2}>
                        {quiz.completed ? (
                          <CheckCircle sx={{ color: '#22C55E' }} />
                        ) : (
                          <Quiz sx={{ color: '#22C55E' }} />
                        )}
                        
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body1" fontWeight="medium">
                            {quiz.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Nível {quiz.level} • {quiz.xp} XP
                            {quiz.completed && ` • ${quiz.userScore}/${quiz.totalQuestions} acertos`}
                          </Typography>
                        </Box>
                        
                        <Stack direction="column" spacing={1}>
                          {quiz.completed ? (
                            <Button 
                              variant="outlined"
                              size="small"
                              startIcon={<Visibility />}
                              sx={{
                                color: '#22C55E',
                                borderColor: '#22C55E',
                                '&:hover': {
                                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                  borderColor: '#16A34A'
                                }
                              }}
                              onClick={() => reviewQuiz(quiz)}
                            >
                              Visualizar
                            </Button>
                          ) : (
                            <Button 
                              variant="contained"
                              size="small"
                              sx={{
                                backgroundColor: '#22C55E',
                                '&:hover': {
                                  backgroundColor: '#16A34A'
                                }
                              }}
                              onClick={() => startQuiz(quiz)}
                            >
                              Iniciar
                            </Button>
                          )}
                        </Stack>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Estatísticas Rápidas */}
            <Card sx={{ 
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#22C55E' }}>
                  Seu Progresso
                </Typography>
                
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">Quizzes Concluídos</Typography>
                    <Chip 
                      label={userData.completedQuizzes} 
                      size="small"
                      sx={{ backgroundColor: '#22C55E', color: 'white' }}
                    />
                  </Stack>
                  
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">Desafios Ativos</Typography>
                    <Chip 
                      label={challenges.filter(c => c.progress > 0 && c.progress < 100).length} 
                      size="small"
                      sx={{ backgroundColor: '#3B82F6', color: 'white' }}
                    />
                  </Stack>
                  
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">XP Total</Typography>
                    <Chip 
                      label={userData.currentXP} 
                      size="small"
                      sx={{ backgroundColor: '#F59E0B', color: 'white' }}
                    />
                  </Stack>
                  
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">Nível Atual</Typography>
                    <Chip 
                      label={userData.level} 
                      size="small"
                      sx={{ backgroundColor: '#EF4444', color: 'white' }}
                    />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Diálogo do Questionário Ativo */}
        <Dialog 
          open={quizDialogOpen} 
          onClose={closeQuizDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: { borderRadius: 3 }
          }}
        >
          <DialogTitle sx={{ 
            backgroundColor: '#22C55E', 
            color: 'white',
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3
          }}>
            <Typography variant="h6" fontWeight="bold">
              {currentQuiz?.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {quizCompleted ? `Resultado: ${quizScore}/${currentQuiz?.questions?.length}` : 'Responda todas as questões'}
            </Typography>
          </DialogTitle>
          
          <DialogContent sx={{ mt: 2 }}>
            {!quizCompleted ? (
              <Stack spacing={3}>
                {currentQuiz?.questions?.map((q, index) => (
                  <FormControl key={q.id} component="fieldset" sx={{ width: '100%' }}>
                    <Typography variant="h6" gutterBottom fontWeight="medium">
                      {index + 1}. {q.question}
                    </Typography>
                    <RadioGroup
                      value={quizAnswers[q.id] ?? ''}
                      onChange={(e) => handleQuizAnswer(q.id, parseInt(e.target.value))}
                    >
                      {q.options.map((option, optIndex) => (
                        <FormControlLabel
                          key={optIndex}
                          value={optIndex}
                          control={<Radio sx={{ color: '#22C55E' }} />}
                          label={option}
                          sx={{ 
                            mb: 1,
                            padding: 1,
                            borderRadius: 1,
                            '&:hover': {
                              backgroundColor: 'rgba(34, 197, 94, 0.05)'
                            }
                          }}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                ))}
              </Stack>
            ) : (
              <Box>
                <Alert 
                  severity={quizScore >= 3 ? "success" : "error"} 
                  sx={{ mb: 2, borderRadius: 2 }}
                >
                  {quizScore >= 3 
                    ? `Parabéns! Você acertou ${quizScore} de ${currentQuiz?.questions?.length} questões e ganhou ${currentQuiz?.xp} XP!`
                    : `Você acertou ${quizScore} de ${currentQuiz?.questions?.length} questões. Tente novamente!`
                  }
                </Alert>
                
                {quizScore >= 3 && (
                  <Typography variant="body2" color="text.secondary">
                    O XP foi adicionado ao seu perfil automaticamente.
                  </Typography>
                )}
              </Box>
            )}
          </DialogContent>
          
          <DialogActions sx={{ p: 3 }}>
            {!quizCompleted ? (
              <>
                <Button 
                  onClick={closeQuizDialog}
                  sx={{ color: '#6B7280' }}
                >
                  Cancelar
                </Button>
                <Button 
                  variant="contained" 
                  onClick={submitQuiz}
                  disabled={Object.keys(quizAnswers).length !== currentQuiz?.questions?.length}
                  sx={{
                    backgroundColor: '#22C55E',
                    '&:hover': {
                      backgroundColor: '#16A34A'
                    }
                  }}
                >
                  Finalizar Questionário
                </Button>
              </>
            ) : (
              <Button 
                variant="contained" 
                onClick={closeQuizDialog}
                sx={{
                  backgroundColor: '#22C55E',
                  '&:hover': {
                    backgroundColor: '#16A34A'
                  }
                }}
              >
                Fechar
              </Button>
            )}
          </DialogActions>
        </Dialog>

        {/* Diálogo para Visualizar Questionários Anteriores */}
        <Dialog 
          open={reviewDialogOpen} 
          onClose={closeReviewDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: { borderRadius: 3 }
          }}
        >
          <DialogTitle sx={{ 
            backgroundColor: '#22C55E', 
            color: 'white',
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3
          }}>
            <Typography variant="h6" fontWeight="bold">
              {quizToReview?.title} - Revisão
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Resultado: {quizToReview?.userScore}/{quizToReview?.totalQuestions} acertos
            </Typography>
          </DialogTitle>
          
          <DialogContent sx={{ mt: 2 }}>
            <Stack spacing={3}>
              {quizToReview?.questions?.map((question, index) => {
                const userAnswer = quizToReview.userAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <Box key={question.id}>
                    <Typography variant="h6" fontWeight="medium" gutterBottom>
                      {index + 1}. {question.question}
                    </Typography>
                    
                    <List dense>
                      {question.options.map((option, optIndex) => {
                        let bgColor = 'transparent';
                        let textColor = 'text.primary';
                        
                        if (optIndex === question.correctAnswer) {
                          bgColor = 'rgba(34, 197, 94, 0.1)';
                          textColor = '#22C55E';
                        } else if (optIndex === userAnswer && !isCorrect) {
                          bgColor = 'rgba(239, 68, 68, 0.1)';
                          textColor = '#EF4444';
                        }
                        
                        return (
                          <ListItem 
                            key={optIndex}
                            sx={{ 
                              backgroundColor: bgColor,
                              borderRadius: 1,
                              mb: 0.5
                            }}
                          >
                            <ListItemText 
                              primary={
                                <Typography variant="body2" color={textColor}>
                                  {option}
                                  {optIndex === question.correctAnswer && " ✓"}
                                  {optIndex === userAnswer && !isCorrect && " ✗"}
                                </Typography>
                              }
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                    
                    <Box sx={{ mt: 1, mb: 2 }}>
                      <Chip 
                        label={isCorrect ? "Resposta Correta" : "Resposta Incorreta"} 
                        size="small"
                        color={isCorrect ? "success" : "error"}
                        variant="outlined"
                      />
                      {!isCorrect && (
                        <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                          Sua resposta: {question.options[userAnswer]}
                        </Typography>
                      )}
                    </Box>
                    
                    {index < quizToReview.questions.length - 1 && <Divider />}
                  </Box>
                );
              })}
            </Stack>
          </DialogContent>
          
          <DialogActions sx={{ p: 3 }}>
            <Button 
              variant="contained" 
              onClick={closeReviewDialog}
              sx={{
                backgroundColor: '#22C55E',
                '&:hover': {
                  backgroundColor: '#16A34A'
                }
              }}
            >
              Fechar
            </Button>
          </DialogActions>
        </Dialog>

        {/* Diálogo de Confirmação para Geração com IA */}
        <Dialog 
          open={confirmAIDialogOpen} 
          onClose={closeAIConfirmation}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: { borderRadius: 3 }
          }}
        >
          <DialogTitle sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            color: '#22C55E'
          }}>
            <Info /> Confirmação de Geração com IA
          </DialogTitle>
          
          <DialogContent>
            <Typography variant="body1" paragraph>
              Para gerar um questionário personalizado com Inteligência Artificial, utilizaremos dados dos seus questionários anteriores para criar perguntas relevantes ao seu nível de conhecimento.
            </Typography>
            
            <Alert severity="info" sx={{ mb: 2, borderRadius: 2 }}>
              <Typography variant="body2">
                <strong>Dados utilizados:</strong>
              </Typography>
              <Typography variant="body2">
                • Seu nível atual ({userData.level})
              </Typography>
              <Typography variant="body2">
                • Seus questionários concluídos ({userData.completedQuizzes})
              </Typography>
              <Typography variant="body2">
                • Suas áreas de interesse baseadas no histórico
              </Typography>
            </Alert>
            
            <Typography variant="body2" color="text.secondary">
              Você concorda com o uso desses dados para gerar um questionário personalizado?
            </Typography>
          </DialogContent>
          
          <DialogActions sx={{ p: 3 }}>
            <Button 
              onClick={closeAIConfirmation}
              sx={{ color: '#6B7280' }}
            >
              Cancelar
            </Button>
            <Button 
              variant="contained" 
              onClick={generateAIQuiz}
              startIcon={<AutoAwesome />}
              sx={{
                backgroundColor: '#22C55E',
                '&:hover': {
                  backgroundColor: '#16A34A'
                }
              }}
            >
              Sim, Gerar Questionário
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}