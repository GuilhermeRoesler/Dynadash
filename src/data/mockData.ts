export interface Ticket {
  idChamado: string;
  dataAbertura: string;
  dataFechamento?: string;
  status: "Aberto" | "Em Andamento" | "Encerrado";
  prioridade: "Baixa" | "Média" | "Alta" | "Crítica";
  motivo: string;
  solucao?: string;
  solicitante: string;
  agenteResponsavel: string;
  departamento: string;
  tma?: number; // Tempo Médio de Atendimento em minutos
  frt?: number; // First Response Time em minutos
  satisfacaoCliente?: number; // 1-5
}

export const mockTickets: Ticket[] = [
  {
    idChamado: "CH001",
    dataAbertura: "2025-01-15 09:30",
    dataFechamento: "2025-01-15 14:45",
    status: "Encerrado",
    prioridade: "Alta",
    motivo: "Computador não liga",
    solucao: "Substituição da fonte de alimentação",
    solicitante: "Maria Santos - Financeiro",
    agenteResponsavel: "Carlos Silva",
    departamento: "TI - Hardware",
    tma: 315,
    frt: 15,
    satisfacaoCliente: 5,
  },
  {
    idChamado: "CH002",
    dataAbertura: "2025-01-16 10:00",
    dataFechamento: "2025-01-16 16:30",
    status: "Encerrado",
    prioridade: "Média",
    motivo: "Sistema ERP travando",
    solucao: "Limpeza de cache e atualização do sistema",
    solicitante: "João Costa - Vendas",
    agenteResponsavel: "Ana Costa",
    departamento: "TI - Software",
    tma: 390,
    frt: 20,
    satisfacaoCliente: 4,
  },
  {
    idChamado: "CH003",
    dataAbertura: "2025-01-18 08:15",
    status: "Em Andamento",
    prioridade: "Crítica",
    motivo: "Rede sem acesso à internet",
    solicitante: "Pedro Lima - Administrativo",
    agenteResponsavel: "Carlos Silva",
    departamento: "TI - Infraestrutura",
    frt: 10,
  },
  {
    idChamado: "CH004",
    dataAbertura: "2025-01-12 14:20",
    dataFechamento: "2025-01-15 11:00",
    status: "Encerrado",
    prioridade: "Baixa",
    motivo: "Senha do email esquecida",
    solucao: "Reset de senha via portal",
    solicitante: "Ana Paula - RH",
    agenteResponsavel: "João Santos",
    departamento: "TI - Suporte",
    tma: 4320,
    frt: 180,
    satisfacaoCliente: 3,
  },
  {
    idChamado: "CH005",
    dataAbertura: "2025-01-14 11:30",
    dataFechamento: "2025-01-14 18:45",
    status: "Encerrado",
    prioridade: "Média",
    motivo: "Impressora não imprime",
    solucao: "Reinstalação de drivers e limpeza de fila",
    solicitante: "Roberto Alves - Logística",
    agenteResponsavel: "Ana Costa",
    departamento: "TI - Hardware",
    tma: 435,
    frt: 25,
    satisfacaoCliente: 5,
  },
  {
    idChamado: "CH006",
    dataAbertura: "2025-01-20 09:00",
    status: "Aberto",
    prioridade: "Baixa",
    motivo: "Solicitação de acesso ao sistema",
    solicitante: "Carla Mendes - Marketing",
    agenteResponsavel: "Maria Oliveira",
    departamento: "TI - Suporte",
  },
  {
    idChamado: "CH007",
    dataAbertura: "2025-01-17 15:45",
    dataFechamento: "2025-01-18 10:20",
    status: "Encerrado",
    prioridade: "Alta",
    motivo: "Sistema de vendas offline",
    solucao: "Reinício do servidor de aplicação",
    solicitante: "Lucas Ferreira - Vendas",
    agenteResponsavel: "Carlos Silva",
    departamento: "TI - Infraestrutura",
    tma: 1115,
    frt: 10,
    satisfacaoCliente: 4,
  },
  {
    idChamado: "CH008",
    dataAbertura: "2025-01-13 08:30",
    dataFechamento: "2025-01-14 09:45",
    status: "Encerrado",
    prioridade: "Média",
    motivo: "VPN não conecta",
    solucao: "Reconfiguração de certificados VPN",
    solicitante: "Fernanda Dias - Comercial",
    agenteResponsavel: "João Santos",
    departamento: "TI - Infraestrutura",
    tma: 1515,
    frt: 30,
    satisfacaoCliente: 5,
  },
  {
    idChamado: "CH009",
    dataAbertura: "2025-01-19 10:15",
    dataFechamento: "2025-01-19 14:00",
    status: "Encerrado",
    prioridade: "Alta",
    motivo: "Monitor com defeito",
    solucao: "Substituição do monitor",
    solicitante: "Ricardo Moura - Contabilidade",
    agenteResponsavel: "Ana Costa",
    departamento: "TI - Hardware",
    tma: 225,
    frt: 15,
    satisfacaoCliente: 5,
  },
  {
    idChamado: "CH010",
    dataAbertura: "2025-01-21 13:20",
    status: "Em Andamento",
    prioridade: "Média",
    motivo: "Instalação de software",
    solicitante: "Patricia Rocha - Projetos",
    agenteResponsavel: "Maria Oliveira",
    departamento: "TI - Software",
    frt: 45,
  },
  {
    idChamado: "CH011",
    dataAbertura: "2025-01-10 16:00",
    dataFechamento: "2025-01-11 10:30",
    status: "Encerrado",
    prioridade: "Baixa",
    motivo: "Email com anexo grande não envia",
    solucao: "Orientação sobre uso do drive compartilhado",
    solicitante: "Bruno Campos - Compras",
    agenteResponsavel: "Carlos Silva",
    departamento: "TI - Suporte",
    tma: 1110,
    frt: 60,
    satisfacaoCliente: 4,
  },
  {
    idChamado: "CH012",
    dataAbertura: "2025-01-11 09:15",
    dataFechamento: "2025-01-11 15:30",
    status: "Encerrado",
    prioridade: "Crítica",
    motivo: "Servidor de backup fora do ar",
    solucao: "Restart do serviço e verificação de logs",
    solicitante: "Sistema Automático",
    agenteResponsavel: "João Santos",
    departamento: "TI - Infraestrutura",
    tma: 375,
    frt: 5,
    satisfacaoCliente: 5,
  },
  {
    idChamado: "CH013",
    dataAbertura: "2025-01-22 11:00",
    status: "Aberto",
    prioridade: "Média",
    motivo: "Lentidão no sistema",
    solicitante: "Diversos usuários",
    agenteResponsavel: "Carlos Silva",
    departamento: "TI - Infraestrutura",
  },
  {
    idChamado: "CH014",
    dataAbertura: "2025-01-16 14:30",
    dataFechamento: "2025-01-17 09:00",
    status: "Encerrado",
    prioridade: "Baixa",
    motivo: "Dúvida sobre uso do sistema",
    solucao: "Treinamento e orientação ao usuário",
    solicitante: "Juliana Pires - RH",
    agenteResponsavel: "Maria Oliveira",
    departamento: "TI - Suporte",
    tma: 1110,
    frt: 90,
    satisfacaoCliente: 4,
  },
  {
    idChamado: "CH015",
    dataAbertura: "2025-01-19 16:45",
    dataFechamento: "2025-01-20 10:15",
    status: "Encerrado",
    prioridade: "Alta",
    motivo: "Banco de dados não responde",
    solucao: "Otimização de queries e reinício do serviço",
    solicitante: "Sistema Automático",
    agenteResponsavel: "João Santos",
    departamento: "TI - Infraestrutura",
    tma: 1050,
    frt: 8,
    satisfacaoCliente: 5,
  },
];

export const getTotalTickets = () => mockTickets.length;

export const getOpenTickets = () =>
  mockTickets.filter((t) => t.status !== "Encerrado").length;

export const getClosedTickets = () =>
  mockTickets.filter((t) => t.status === "Encerrado").length;

export const getAverageTMA = () => {
  const resolved = mockTickets.filter((t) => t.tma);
  if (resolved.length === 0) return 0;
  const total = resolved.reduce((sum, t) => sum + (t.tma || 0), 0);
  return Math.round(total / resolved.length);
};

export const getAverageFRT = () => {
  const withFRT = mockTickets.filter((t) => t.frt);
  if (withFRT.length === 0) return 0;
  const total = withFRT.reduce((sum, t) => sum + (t.frt || 0), 0);
  return Math.round(total / withFRT.length);
};

export const getTicketsByAgent = () => {
  const agentMap = new Map<string, number>();
  mockTickets.forEach((ticket) => {
    agentMap.set(
      ticket.agenteResponsavel,
      (agentMap.get(ticket.agenteResponsavel) || 0) + 1
    );
  });
  return Array.from(agentMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};

export const getTicketsByDepartment = () => {
  const deptMap = new Map<string, number>();
  mockTickets.forEach((ticket) => {
    deptMap.set(
      ticket.departamento,
      (deptMap.get(ticket.departamento) || 0) + 1
    );
  });
  return Array.from(deptMap.entries()).map(([name, value]) => ({
    name,
    value,
  }));
};

export const getTicketsByReason = () => {
  const reasonMap = new Map<string, number>();
  mockTickets.forEach((ticket) => {
    reasonMap.set(ticket.motivo, (reasonMap.get(ticket.motivo) || 0) + 1);
  });
  return Array.from(reasonMap.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5); // Top 5 motivos
};

export const getMostProductiveAgent = () => {
  const agents = getTicketsByAgent();
  return agents.length > 0 ? agents[0].name : "N/A";
};

export const getAverageSatisfaction = () => {
  const withSatisfaction = mockTickets.filter((t) => t.satisfacaoCliente);
  if (withSatisfaction.length === 0) return 0;
  const total = withSatisfaction.reduce(
    (sum, t) => sum + (t.satisfacaoCliente || 0),
    0
  );
  return (total / withSatisfaction.length).toFixed(1);
};
