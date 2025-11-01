import { useState } from "react";
import { FileUpload } from "@/components/FileUpload";
import { DynamicChart } from "@/components/DynamicChart";
import { getChartSuggestions, ChartSuggestion } from "@/lib/gemini";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnalysisPage = () => {
  const [fileData, setFileData] = useState<any[]>([]);
  const [chartSuggestions, setChartSuggestions] = useState<ChartSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (data: any[], headers: string[]) => {
    setFileData(data);
    setChartSuggestions([]);
    setError(null);
    setIsLoading(true);

    try {
      const suggestions = await getChartSuggestions(headers);
      setChartSuggestions(suggestions);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleReset = () => {
    setFileData([]);
    setChartSuggestions([]);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h1 className="text-3xl font-bold">Análise de Dados com IA</h1>
            <p className="text-muted-foreground">
            Faça upload de um arquivo .xlsx ou .csv para gerar insights e gráficos automaticamente.
            </p>
        </div>
        {fileData.length > 0 && (
            <Button onClick={handleReset} variant="outline">Nova Análise</Button>
        )}
      </div>

      {fileData.length === 0 ? (
        <FileUpload onFileUpload={handleFileUpload} setIsLoading={setIsLoading} />
      ) : (
        <>
          {isLoading && (
            <div className="grid gap-6 lg:grid-cols-2">
              <Skeleton className="h-[400px] w-full" />
              <Skeleton className="h-[400px] w-full" />
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Erro na Análise</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {!isLoading && !error && (
            <div className="grid gap-6 lg:grid-cols-2">
              {chartSuggestions.map((suggestion, index) => (
                <DynamicChart key={index} suggestion={suggestion} data={fileData} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AnalysisPage;