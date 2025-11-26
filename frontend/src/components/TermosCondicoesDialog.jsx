// TermosCondicoesDialog.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Divider,
  Chip,
  Paper,
} from "@mui/material";
import { CheckCircle, Security, PrivacyTip, Gavel } from "@mui/icons-material";

export default function TermosCondicoesDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      scroll="paper"
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: 3,
        }
      }}
    >
      <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Gavel />
          <Box>
            <Typography variant="h4" component="h2" fontWeight="bold">
              TERMOS E CONDIÇÕES DE USO - PLATAFORMA MONEE
            </Typography>
            <Typography variant="subtitle1">
              Contrato de Prestação de Serviços com Tecnologia de Inteligência Artificial
            </Typography>
          </Box>
        </Box>
      </DialogTitle>
      
      <DialogContent dividers sx={{ p: 4 }}>
        {/* Cabeçalho Informativo */}
        <Paper sx={{ p: 3, mb: 4, bgcolor: 'grey.50', border: 1, borderColor: 'grey.300' }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
            <Chip icon={<Security />} label="LGPD - Lei 13.709/2018" color="primary" />
            <Chip icon={<Gavel />} label="Marco Civil da Internet" color="secondary" />
            <Chip icon={<PrivacyTip />} label="Proteção de Dados" color="success" />
          </Box>
          <Typography variant="body2" color="text.secondary">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            {" | "}
            <strong>Plataforma:</strong> Monee - Sistema Inteligente de Gestão
            {" | "}
            <strong>Versão:</strong> 1.0
          </Typography>
        </Paper>

        {/* Seção 1: Preâmbulo */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1 }}>
            CLÁUSULA 1ª - DO OBJETO E ACEITAÇÃO
          </Typography>
          <Typography variant="body1" paragraph>
            Os presentes Termos e Condições ("Termos") regulam o uso da plataforma <strong>Monee</strong>, 
            sistema inteligente de gestão que utiliza tecnologia de Inteligência Artificial para análise 
            e processamento de dados, nos termos da legislação brasileira vigente, em especial:
          </Typography>
          <List dense sx={{ mb: 2 }}>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Lei nº 13.709/2018 (LGPD) - Proteção de Dados Pessoais"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Lei nº 12.965/2014 (Marco Civil da Internet)"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Lei nº 8.078/1990 (Código de Defesa do Consumidor)"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Lei nº 10.406/2002 (Código Civil Brasileiro)"
              />
            </ListItem>
          </List>
          <Typography variant="body1" paragraph>
            Ao cadastrar-se na plataforma Monee, o USUÁRIO declara ter lido, compreendido e aceito 
            integralmente todas as condições aqui estabelecidas, concordando expressamente com o 
            tratamento de seus dados pessoais nos termos do artigo 7º da LGPD.
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Seção 2: Definições */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1 }}>
            CLÁUSULA 2ª - DEFINIÇÕES
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText 
                primary="PLATAFORMA MONEE"
                secondary="Sistema inteligente de gestão que utiliza algoritmos de machine learning e IA para processamento e análise de dados"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="USUÁRIO"
                secondary="Pessoa física ou jurídica que utiliza a plataforma, devidamente cadastrada"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="DADOS PESSOAIS"
                secondary="Qualquer informação relacionada a pessoa natural identificada ou identificável, nos termos do artigo 5º, I da LGPD"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="TRATAMENTO DE DADOS"
                secondary="Toda operação realizada com dados pessoais, conforme artigo 5º, X da LGPD"
              />
            </ListItem>
          </List>
        </Box>

        {/* Seção 3: Funcionalidades da IA */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1 }}>
            CLÁUSULA 3ª - DA TECNOLOGIA DE INTELIGÊNCIA ARTIFICIAL
          </Typography>
          <Typography variant="body1" paragraph>
            A plataforma Monee utiliza algoritmos avançados de Inteligência Artificial que:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Processam e analisam dados fornecidos pelo usuário"
                secondary="Utilizando técnicas de machine learning para identificar padrões e tendências"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Geram insights e recomendações automatizadas"
                secondary="Com base em análise estatística e modelos preditivos"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Aprendem com o uso contínuo da plataforma"
                secondary="Melhorando a precisão das recomendações ao longo do tempo"
              />
            </ListItem>
          </List>
          
          <Paper sx={{ p: 2, mt: 2, bgcolor: 'warning.light' }}>
            <Typography variant="body2" fontWeight="bold">
              LIMITAÇÕES E ISENÇÃO DE RESPONSABILIDADE:
            </Typography>
            <Typography variant="body2">
              • As sugestões da IA são baseadas em padrões estatísticos e não substituem análise humana profissional
              {"\n"}• A Monee não se responsabiliza por decisões tomadas com base exclusiva nas recomendações da IA
              {"\n"}• O usuário mantém total responsabilidade pelas decisões finais baseadas nas análises fornecidas
            </Typography>
          </Paper>
        </Box>

        {/* Seção 4: Tratamento de Dados */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1 }}>
            CLÁUSULA 4ª - DO TRATAMENTO DE DADOS PESSOAIS
          </Typography>
          
          <Typography variant="h6" gutterBottom>4.1. Dados Coletados</Typography>
          <List dense sx={{ mb: 3 }}>
            <ListItem>
              <ListItemText 
                primary="Dados de Identificação"
                secondary="Nome completo, e-mail, telefone, dados de cadastro"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Dados de Uso"
                secondary="Logs de acesso, interações com a plataforma, preferências de uso"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Dados Processados pela IA"
                secondary="Informações fornecidas para análise pelos algoritmos de inteligência artificial"
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom>4.2. Bases Legais para Tratamento</Typography>
          <Typography variant="body1" paragraph>
            Conforme artigo 7º da LGPD, o tratamento será realizado com base nas seguintes hipóteses:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Consentimento do titular"
                secondary="Artigo 7º, I - para finalidades específicas e limitadas"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Execução de contrato"
                secondary="Artigo 7º, V - necessário para prestação dos serviços"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Legítimo interesse"
                secondary="Artigo 7º, IX - para melhorar a qualidade dos serviços"
              />
            </ListItem>
          </List>
        </Box>

        {/* Seção 5: Direitos do Usuário */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1 }}>
            CLÁUSULA 5ª - DOS DIREITOS DO TITULAR
          </Typography>
          <Typography variant="body1" paragraph>
            Conforme disposto no artigo 18 da LGPD, o USUÁRIO possui os seguintes direitos:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Confirmação e Acesso"
                secondary="Direito de confirmar a existência de tratamento e acessar seus dados"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Correção"
                secondary="Retificação de dados incompletos, inexatos ou desatualizados"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Anonimização, Bloqueio ou Eliminação"
                secondary="Solicitação de limitação do tratamento ou exclusão de dados"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Portabilidade"
                secondary="Fornecimento dos dados em formato estruturado para outro controlador"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Revogação do Consentimento"
                secondary="Direito de retirar o consentimento a qualquer momento"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Informação sobre Compartilhamento"
                secondary="Direito de saber com quais terceiros os dados são compartilhados"
              />
            </ListItem>
          </List>
        </Box>

        {/* Seção 6: Segurança e Confidencialidade */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1 }}>
            CLÁUSULA 6ª - DA SEGURANÇA E CONFIDENCIALIDADE
          </Typography>
          <Typography variant="body1" paragraph>
            Nos termos do artigo 46 da LGPD, a Monee implementa medidas de segurança técnicas e administrativas:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Security color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Criptografia de Dados"
                secondary="Proteção dos dados em repouso e em trânsito utilizando criptografia AES-256"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Security color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Acesso Restrito"
                secondary="Controle de acesso baseado em roles e autenticação multifator"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Security color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Backup e Recuperação"
                secondary="Sistema de backup regular e plano de recuperação de desastres"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Security color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Monitoramento Contínuo"
                secondary="Sistema de detecção e prevenção de intrusões 24/7"
              />
            </ListItem>
          </List>
        </Box>

        {/* Seção 7: Compartilhamento de Dados */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1 }}>
            CLÁUSULA 7ª - DO COMPARTILHAMENTO DE DADOS
          </Typography>
          <Typography variant="body1" paragraph>
            A Monee poderá compartilhar dados pessoais nas seguintes hipóteses:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Determinação Legal ou Judicial"
                secondary="Artigo 7º, II da LGPD - para cumprimento de obrigação legal"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Proteção de Direitos"
                secondary="Artigo 7º, IV - para proteção dos direitos da Monee ou de terceiros"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Processadores de Dados"
                secondary="Artigo 7º, VII - com operadores que processam dados em nosso nome"
              />
            </ListItem>
          </List>
          
          <Paper sx={{ p: 2, mt: 2, bgcolor: 'info.light' }}>
            <Typography variant="body2" fontWeight="bold">
              IMPORTANTE:
            </Typography>
            <Typography variant="body2">
              A Monee <strong>não comercializa</strong> seus dados pessoais. Todo compartilhamento 
              é realizado em estrita conformidade com as bases legais da LGPD.
            </Typography>
          </Paper>
        </Box>

        {/* Seção 8: Responsabilidades */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1 }}>
            CLÁUSULA 8ª - DAS RESPONSABILIDADES
          </Typography>
          
          <Typography variant="h6" gutterBottom>8.1. Responsabilidades do USUÁRIO</Typography>
          <List dense sx={{ mb: 3 }}>
            <ListItem>
              <ListItemText 
                primary="Veracidade das Informações"
                secondary="Fornecer dados verdadeiros e atualizados, sob pena de responsabilidade civil"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Sigilo de Credenciais"
                secondary="Manter login e senha em sigilo, sendo responsável por seu uso"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Uso Adequado"
                secondary="Utilizar a plataforma de acordo com a legislação aplicável"
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom>8.2. Responsabilidades da MONEE</Typography>
          <List dense>
            <ListItem>
              <ListItemText 
                primary="Manutenção da Plataforma"
                secondary="Garantir a disponibilidade e funcionamento adequado dos serviços"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Proteção de Dados"
                secondary="Implementar medidas de segurança adequadas conforme LGPD"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Transparência"
                secondary="Comunicar eventuais incidentes de segurança aos usuários e autoridades"
              />
            </ListItem>
          </List>
        </Box>

        {/* Seção 9: Disposições Finais */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ borderBottom: 2, borderColor: 'primary.main', pb: 1 }}>
            CLÁUSULA 9ª - DAS DISPOSIÇÕES FINAIS
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Alterações Contratuais"
                secondary="Estes termos podem ser alterados, com comunicação prévia de 30 dias aos usuários"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Rescisão"
                secondary="O usuário pode solicitar exclusão de conta e dados a qualquer momento"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary="Foro"
                secondary="Eleito o Foro da Comarca de São Paulo/SP para questões judiciais"
              />
            </ListItem>
          </List>
        </Box>

        {/* Contato e DPO */}
        <Paper sx={{ p: 3, mt: 3, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            ENCARREGADO DE PROTEÇÃO DE DADOS (DPO) - MONEE
          </Typography>
          <Typography variant="body1" paragraph>
            Para exercer seus direitos sob a LGPD, esclarecer dúvidas sobre proteção de dados 
            ou reportar incidentes de segurança, entre em contato com nosso Encarregado:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body1">
              <strong>E-mail:</strong> monee@gmail.com
            </Typography>
            <Typography variant="body1">
              <strong>Atendimento:</strong> Segunda a Sexta, 9h às 18h
            </Typography>
            <Typography variant="body1">
              <strong>Prazo de Resposta:</strong> Até 15 dias úteis para solicitações LGPD
            </Typography>
          </Box>
        </Paper>

        {/* Aviso Final */}
        <Box sx={{ mt: 3, p: 2, border: 1, borderColor: 'success.main', borderRadius: 1 }}>
          <Typography variant="body2" align="center" color="success.main">
            <strong>ESTES TERMOS FORAM ELABORADOS EM CONFORMIDADE COM A LEGISLAÇÃO BRASILEIRA VIGENTE, 
            GARANTINDO A TRANSPARÊNCIA E PROTEÇÃO DOS DIREITOS DOS USUÁRIOS DA PLATAFORMA MONEE.</strong>
          </Typography>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ p: 3, bgcolor: 'grey.50' }}>
        <Button 
          onClick={onClose} 
          variant="contained" 
          color="primary"
          size="large"
          sx={{ 
            minWidth: 200,
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}
        >
          LIDO E COMPREENDIDO
        </Button>
      </DialogActions>
    </Dialog>
  );
}