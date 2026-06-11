// hooks/useLaudoForm.ts
// Estado central do formulário. Um objeto Laudo passado direto ao LaudoDocument.

import { useState, useCallback } from 'react';
import { Laudo, LAUDO_VAZIO, ImagemExame, DiagnosticoHisteroscopico } from '@/types/laudo';

function fileParaDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function useLaudoForm(inicial: Laudo = LAUDO_VAZIO) {
  const [laudo, setLaudo] = useState<Laudo>(inicial);

  const setIdentificacao = useCallback(
    (campo: keyof Laudo['identificacao'], valor: string) =>
      setLaudo((p) => ({ ...p, identificacao: { ...p.identificacao, [campo]: valor } })),
    []
  );

  const setDescricao = useCallback(
    (campo: keyof Laudo['descricao'], valor: string) =>
      setLaudo((p) => ({ ...p, descricao: { ...p.descricao, [campo]: valor } })),
    []
  );

  const setProcedimento = useCallback(
    (valor: string) =>
      setLaudo((p) => ({
        ...p,
        procedimentoDiagnostico: { ...p.procedimentoDiagnostico, procedimento: valor },
      })),
    []
  );

  const setDiagnostico = useCallback(
    (campo: keyof DiagnosticoHisteroscopico, valor: string) =>
      setLaudo((p) => ({
        ...p,
        procedimentoDiagnostico: {
          ...p.procedimentoDiagnostico,
          diagnostico: { ...p.procedimentoDiagnostico.diagnostico, [campo]: valor },
        },
      })),
    []
  );

  const adicionarImagens = useCallback(async (files: FileList | File[]) => {
    const novas: ImagemExame[] = [];
    for (const file of Array.from(files)) {
      novas.push({ id: crypto.randomUUID(), numero: 0, legenda: '', dataUrl: await fileParaDataUrl(file) });
    }
    setLaudo((p) => {
      const todas = [...p.imagens, ...novas];
      return { ...p, imagens: todas.map((img, i) => ({ ...img, numero: i + 1 })) };
    });
  }, []);

  const atualizarLegenda = useCallback((id: string, legenda: string) => {
    setLaudo((p) => ({
      ...p,
      imagens: p.imagens.map((img) => (img.id === id ? { ...img, legenda } : img)),
    }));
  }, []);

  const removerImagem = useCallback((id: string) => {
    setLaudo((p) => {
      const filtradas = p.imagens.filter((img) => img.id !== id);
      return { ...p, imagens: filtradas.map((img, i) => ({ ...img, numero: i + 1 })) };
    });
  }, []);

  return {
    laudo, setIdentificacao, setDescricao, setProcedimento,
    setDiagnostico, adicionarImagens, atualizarLegenda, removerImagem,
  };
}
