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
  Timer,
} from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold">Dashboard de Suporte</h1>
            <p className="text-sm text-muted-foreground">
            Visão geral dos indicadores de performance da equipe.
            </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 my-6">
        <MetricCard
          title="Total de Chamados"
          value={getTotalTickets()}
          icon={Ticket}
        />
        <MetricCard
          title="Chamados Abertos"
          value={getOpenTickets()}
          icon={Clock}
        />
        <MetricCard
          title="Chamados Encerrados"
          value={getClosedTickets()}
          icon={CheckCircle2}
        />
        <MetricCard
          title="Satisfação Média"
          value={getAverageSatisfaction()}
          icon={Star}
        />
        <MetricCard
          title="TMA"
          value={`${getAverageTMA()} min`}
          icon={Clock}
        />
        <MetricCard
          title="FRT"
          value={`${getAverageFRT()} min`}
          icon={Timer}
        />
        <MetricCard
          title="Agente Mais Produtivo"
          value={getMostProductiveAgent()}
          icon={Award}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        <TechnicianChart />
        <CategoryChart />
      </div>

      {/* Table */}
      <TicketsTable />
    </>
  );
};

export default Index;