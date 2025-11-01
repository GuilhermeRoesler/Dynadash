import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockTickets } from "@/data/mockData";
import { Star } from "lucide-react";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Encerrado":
      return "bg-success/10 text-success hover:bg-success/20";
    case "Em Andamento":
      return "bg-warning/10 text-warning hover:bg-warning/20";
    case "Aberto":
      return "bg-primary/10 text-primary hover:bg-primary/20";
    default:
      return "bg-muted";
  }
};

const getPriorityColor = (prioridade: string) => {
  switch (prioridade) {
    case "Crítica":
      return "bg-destructive text-destructive-foreground hover:bg-destructive/90";
    case "Alta":
      return "bg-destructive/10 text-destructive hover:bg-destructive/20";
    case "Média":
      return "bg-warning/10 text-warning hover:bg-warning/20";
    case "Baixa":
      return "bg-muted text-muted-foreground hover:bg-muted/80";
    default:
      return "bg-muted";
  }
};

export const TicketsTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Chamados Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">ID</TableHead>
                <TableHead className="font-semibold">Solicitante</TableHead>
                <TableHead className="font-semibold">Agente</TableHead>
                <TableHead className="font-semibold">Motivo</TableHead>
                <TableHead className="font-semibold">Departamento</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Prioridade</TableHead>
                <TableHead className="font-semibold text-center">
                  TMA (min)
                </TableHead>
                <TableHead className="font-semibold text-center">
                  Satisfação
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTickets.slice(0, 10).map((ticket) => (
                <TableRow
                  key={ticket.idChamado}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <TableCell className="font-medium">{ticket.idChamado}</TableCell>
                  <TableCell className="max-w-[150px] truncate">
                    {ticket.solicitante}
                  </TableCell>
                  <TableCell>{ticket.agenteResponsavel}</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {ticket.motivo}
                  </TableCell>
                  <TableCell>{ticket.departamento}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(ticket.status)}>
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(ticket.prioridade)}>
                      {ticket.prioridade}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {ticket.tma ? (
                      <span className="font-medium">{ticket.tma}</span>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {ticket.satisfacaoCliente ? (
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span className="font-medium">{ticket.satisfacaoCliente}</span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
