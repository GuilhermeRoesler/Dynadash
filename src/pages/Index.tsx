import { MetricCard } from "@/components/MetricCard";
import { TechnicianChart } from "@/components/TechnicianChart";
import { CategoryChart } from "@/components/CategoryChart";
import { TicketsTable } from "@/components/TicketsTable";
import {
  getTotalTickets,
  getOpenTickets,
  getClosedTickets,
  getAverageTMA,
  getAverageFRT,
  getMostProductiveAgent,
  getAverageSatisfaction,
} from "@/data/mockData";
import {
  Ticket,
  CheckCircle2,
  Clock,
  Award,
  Star,
  TrendingUp,
  Timer,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DashTech
              </h1>
              <p className="text-sm text-muted-foreground">
                Dashboard de Suporte Técnico - TechHelp Solutions
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <MetricCard
            title="Total de Chamados"
            value={getTotalTickets()}
            icon={Ticket}
            description="Todos os chamados registrados"
          />
          <MetricCard
            title="Chamados Abertos"
            value={getOpenTickets()}
            icon={Clock}
            description="Aguardando resolução"
          />
          <MetricCard
            title="Chamados Encerrados"
            value={getClosedTickets()}
            icon={CheckCircle2}
            description="Resolvidos com sucesso"
          />
          <MetricCard
            title="TMA - Tempo Médio de Atendimento"
            value={`${getAverageTMA()} min`}
            icon={Clock}
            description="Média de tempo de resolução"
          />
          <MetricCard
            title="FRT - First Response Time"
            value={`${getAverageFRT()} min`}
            icon={Timer}
            description="Tempo médio da primeira resposta"
          />
          <MetricCard
            title="Agente Mais Produtivo"
            value={getMostProductiveAgent()}
            icon={Award}
            description="Maior número de chamados"
          />
          <MetricCard
            title="Satisfação Média do Cliente"
            value={getAverageSatisfaction()}
            icon={Star}
            description="Avaliação dos clientes (1-5)"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <TechnicianChart />
          <CategoryChart />
        </div>

        {/* Table */}
        <TicketsTable />
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            © 2025 DashTech - TechHelp Solutions | Dashboard de Suporte Técnico
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
