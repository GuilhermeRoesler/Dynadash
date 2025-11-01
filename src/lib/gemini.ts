import { GoogleGenerativeAI } from "@google/generative-ai";

// ATENÇÃO: Crie um arquivo .env.local na raiz do projeto e adicione sua chave da API:
// VITE_GEMINI_API_KEY=SUA_CHAVE_API_AQUI
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY is not defined in the environment variables.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

export interface ChartSuggestion {
  chartType: "BarChart" | "PieChart" | "LineChart";
  title: string;
  description: string;
  dataKey: string;
  categoryKey: string;
}

const getPrompt = (headers: string[]) => `
Você é um assistente de análise de dados especialista. Sua tarefa é sugerir visualizações de gráficos com base em uma lista de cabeçalhos de colunas de um conjunto de dados.

Sua resposta DEVE SER APENAS um array JSON válido, sem nenhum texto adicional, explicações ou formatação markdown.

Os tipos de gráficos suportados são: "BarChart", "PieChart", "LineChart".

Cada objeto no array JSON deve ter as seguintes chaves:
- "chartType": O tipo de gráfico a ser usado.
- "title": Um título claro e conciso para o gráfico.
- "description": Uma breve descrição (máximo 15 palavras) do insight que o gráfico fornece.
- "dataKey": A coluna que contém os valores numéricos (eixo Y para BarChart/LineChart, valores para PieChart).
- "categoryKey": A coluna que contém as categorias ou rótulos (eixo X para BarChart/LineChart, nomes para PieChart).

Analise os cabeçalhos a seguir e forneça sugestões de gráficos. Escolha as colunas 'dataKey' e 'categoryKey' mais apropriadas para cada tipo de gráfico.

Cabeçalhos: ${JSON.stringify(headers)}
`;

export async function getChartSuggestions(headers: string[]): Promise<ChartSuggestion[]> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = getPrompt(headers);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Limpa a resposta para garantir que seja um JSON válido
    const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    const suggestions = JSON.parse(cleanedText);
    return suggestions as ChartSuggestion[];
  } catch (error) {
    console.error("Error fetching chart suggestions from Gemini API:", error);
    throw new Error("Não foi possível obter sugestões de gráficos da IA. Verifique sua chave de API e a resposta do modelo.");
  }
}