import { useState } from "react";
import * as XLSX from "xlsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
  onFileUpload: (data: any[], headers: string[]) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const FileUpload = ({ onFileUpload, setIsLoading }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type === "text/csv" || selectedFile.name.endsWith(".xlsx")) {
        setFile(selectedFile);
      } else {
        toast.error("Formato de arquivo inválido. Por favor, use .csv ou .xlsx.");
        setFile(null);
      }
    }
  };

  const handleProcessFile = () => {
    if (!file) {
      toast.warning("Por favor, selecione um arquivo primeiro.");
      return;
    }

    setIsLoading(true);
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        if (typeof data !== "string" && !data) {
            throw new Error("Failed to read file data.");
        }
        
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet);

        if (jsonData.length === 0) {
          toast.error("O arquivo parece estar vazio ou em um formato incorreto.");
          return;
        }

        const headers = Object.keys(jsonData[0]);
        onFileUpload(jsonData, headers);
        toast.success("Arquivo processado! Gerando insights com IA...");
      } catch (error) {
        console.error("Error processing file:", error);
        toast.error("Ocorreu um erro ao processar o arquivo.");
        setIsLoading(false);
      }
    };

    reader.onerror = () => {
        toast.error("Falha ao ler o arquivo.");
        setIsLoading(false);
    }

    reader.readAsBinaryString(file);
  };

  return (
    <div className="w-full max-w-lg mx-auto text-center p-8 border-2 border-dashed rounded-lg">
      <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
      <h3 className="mt-4 text-lg font-medium">Arraste ou selecione um arquivo</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Formatos suportados: .xlsx, .csv
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <Label htmlFor="file-upload" className="sr-only">
          Escolher arquivo
        </Label>
        <Input id="file-upload" type="file" onChange={handleFileChange} accept=".csv, .xlsx" className="flex-grow" />
        <Button onClick={handleProcessFile} disabled={!file} className="w-full sm:w-auto">
          Analisar Dados
        </Button>
      </div>
    </div>
  );
};