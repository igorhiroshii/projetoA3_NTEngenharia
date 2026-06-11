// types/laudo.ts
// Contrato único de dados. O formulário escreve aqui e o gerador de PDF lê daqui.
// Ajustado ao laudo real: diagnóstico é estruturado por estrutura anatômica.

export interface IdentificacaoPaciente {
  nome: string;
  idade: string;        // "53 anos"
  dataExame: string;    // "08/04/2026"
  dum: string;          // "Menopausa aos 50 anos" (texto livre, não só data)
  indicacao: string;
  medicacao: string;
}

export interface DescricaoHisteroscopica {
  coloUterino: string;
  canalCervical: string;
  cavidadeUterina: string;
  ostiosTubarios: string;
  endometrio: string;
}

// Diagnóstico repete as mesmas estruturas da descrição, mas em forma de conclusão curta.
export interface DiagnosticoHisteroscopico {
  coloUterino: string;
  canalCervical: string;
  cavidadeUterina: string;
  ostiosTubarios: string;
  endometrio: string;
}

export interface ProcedimentoDiagnostico {
  procedimento: string;
  diagnostico: DiagnosticoHisteroscopico;
}

export interface ImagemExame {
  id: string;
  numero: number;       // legenda numerada (1, 2, 3...) vinculada à foto
  legenda: string;      // ex: "Região cornual direita"
  dataUrl: string;      // base64/data URL pronto para @react-pdf/renderer
}

export interface Laudo {
  identificacao: IdentificacaoPaciente;
  descricao: DescricaoHisteroscopica;
  procedimentoDiagnostico: ProcedimentoDiagnostico;
  imagens: ImagemExame[];
}

export const LAUDO_VAZIO: Laudo = {
  identificacao: { nome: '', idade: '', dataExame: '', dum: '', indicacao: '', medicacao: '' },
  descricao: {
    coloUterino: '', canalCervical: '', cavidadeUterina: '', ostiosTubarios: '', endometrio: '',
  },
  procedimentoDiagnostico: {
    procedimento: '',
    diagnostico: {
      coloUterino: '', canalCervical: '', cavidadeUterina: '', ostiosTubarios: '', endometrio: '',
    },
  },
  imagens: [],
};

// Dados fixos da clínica e do responsável. Centralizado para virar config/env depois.
export const CLINICA = {
  titulo: 'LAUDO DE VÍDEO-HISTEROSCOPIA',
  logoUrl: '/logo-endogine.png', // logo horizontal (ENDOGINE MACAÉ). Troque pelo asset real.
  medico: {
    nome: 'Dr. André Caldas Passos',
    especialidade: 'Ginecologista',
    crm: 'CRM 92282-0',
  },
} as const;
