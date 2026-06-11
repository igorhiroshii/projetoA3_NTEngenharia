// components/pdf/LaudoDocument.tsx
// Layout do PDF fiel ao laudo da ENDOGINE MACAÉ.
// Página 1: logo + título centralizados, identificação, descrição, procedimento, diagnóstico.
// Página 2+: mosaico 2 colunas das imagens + legendas numeradas.
// Assinatura à esquerda no fim do conteúdo de cada página.

import {
  Document, Page, View, Text, Image, StyleSheet, Font,
} from '@react-pdf/renderer';
import { Laudo, CLINICA } from '@/types/laudo';

Font.register({
  family: 'Roboto',
  fonts: [
    { src: '/fonts/Roboto-Regular.ttf', fontWeight: 'normal' },
    { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' },
    { src: '/fonts/Roboto-Italic.ttf', fontStyle: 'italic' },
    { src: '/fonts/Roboto-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    fontSize: 10,
    paddingVertical: 36,
    paddingHorizontal: 48,
    color: '#1a1a1a',
    lineHeight: 1.4,
  },

  // Cabeçalho centralizado
  header: { alignItems: 'center', marginBottom: 16 },
  logo: { width: 230, height: 70, objectFit: 'contain' },
  titulo: { fontSize: 16, fontWeight: 'bold', marginTop: 8, textAlign: 'center' },

  // Identificação em linhas simples (label em negrito + valor)
  idLinha: { marginBottom: 1.5 },
  idLabel: { fontWeight: 'bold' },

  // Títulos de seção (itálico + negrito, como no modelo)
  secaoTitulo: {
    fontSize: 11, fontWeight: 'bold', fontStyle: 'italic',
    marginTop: 14, marginBottom: 6,
  },

  // Parágrafos com label em negrito
  paragrafo: { marginBottom: 4, textAlign: 'justify' },
  labelBold: { fontWeight: 'bold' },

  // Mosaico de imagens (2 colunas)
  mosaico: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 4 },
  fotoCard: { width: '50%', padding: 4 },
  foto: { width: '100%', height: 200, objectFit: 'cover' },

  // Bloco de legendas numeradas
  legendas: { marginTop: 10 },
  legendaLinha: { marginBottom: 1.5 },

  // Assinatura (esquerda, fim do conteúdo)
  assinatura: { marginTop: 28 },
  assinaturaNome: { fontSize: 10 },
});

function Cabecalho() {
  return (
    <View style={styles.header}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image style={styles.logo} src={CLINICA.logoUrl} />
    </View>
  );
}

function Assinatura() {
  const { medico } = CLINICA;
  return (
    <View style={styles.assinatura}>
      <Text style={styles.assinaturaNome}>{medico.nome}</Text>
      <Text style={styles.assinaturaNome}>{medico.especialidade}</Text>
      <Text style={styles.assinaturaNome}>{medico.crm}</Text>
    </View>
  );
}

function LinhaId({ label, valor }: { label: string; valor: string }) {
  return (
    <Text style={styles.idLinha}>
      <Text style={styles.idLabel}>{label}: </Text>{valor || '—'}
    </Text>
  );
}

function ParagrafoLabel({ label, texto }: { label: string; texto: string }) {
  if (!texto) return null;
  return (
    <Text style={styles.paragrafo}>
      <Text style={styles.labelBold}>{label}: </Text>{texto}
    </Text>
  );
}

interface LaudoDocumentProps {
  laudo: Laudo;
}

export function LaudoDocument({ laudo }: LaudoDocumentProps) {
  const { identificacao: id, descricao: d, procedimentoDiagnostico: pd, imagens } = laudo;
  const diag = pd.diagnostico;

  return (
    <Document title={`Laudo - ${id.nome || 'Paciente'}`} author={CLINICA.medico.nome}>
      <Page size="A4" style={styles.page}>
        <Cabecalho />
        <Text style={styles.titulo}>{CLINICA.titulo}</Text>

        {/* Identificação */}
        <View style={{ marginTop: 12 }}>
          <LinhaId label="Nome" valor={id.nome} />
          <LinhaId label="Idade" valor={id.idade} />
          <LinhaId label="Data do exame" valor={id.dataExame} />
          <LinhaId label="DUM" valor={id.dum} />
          <LinhaId label="Indicação" valor={id.indicacao} />
          <LinhaId label="Medicação" valor={id.medicacao} />
        </View>

        {/* Descrição histeroscópica */}
        <Text style={styles.secaoTitulo}>DESCRIÇÃO HISTEROSCÓPICA:</Text>
        <ParagrafoLabel label="Colo uterino" texto={d.coloUterino} />
        <ParagrafoLabel label="Canal cervical" texto={d.canalCervical} />
        <ParagrafoLabel label="Cavidade uterina" texto={d.cavidadeUterina} />
        <ParagrafoLabel label="Óstios tubários" texto={d.ostiosTubarios} />
        <ParagrafoLabel label="Endométrio" texto={d.endometrio} />

        {/* Procedimento */}
        {pd.procedimento ? (
          <Text style={[styles.paragrafo, { marginTop: 10 }]}>
            <Text style={styles.labelBold}>PROCEDIMENTO: </Text>{pd.procedimento}
          </Text>
        ) : null}

        {/* Diagnóstico estruturado */}
        <Text style={styles.secaoTitulo}>DIAGNÓSTICO HISTEROSCÓPICO:</Text>
        <LinhaId label="Colo uterino" valor={diag.coloUterino} />
        <LinhaId label="Canal cervical" valor={diag.canalCervical} />
        <LinhaId label="Cavidade uterina" valor={diag.cavidadeUterina} />
        <LinhaId label="Óstios tubários" valor={diag.ostiosTubarios} />
        <LinhaId label="Endométrio" valor={diag.endometrio} />

        <Assinatura />
      </Page>

      {imagens.length > 0 && (
        <Page size="A4" style={styles.page}>
          <Cabecalho />

          <View style={styles.mosaico}>
            {imagens.slice().sort((a, b) => a.numero - b.numero).map((img) => (
              <View key={img.id} style={styles.fotoCard} wrap={false}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image style={styles.foto} src={img.dataUrl} />
              </View>
            ))}
          </View>

          <View style={styles.legendas}>
            {imagens.slice().sort((a, b) => a.numero - b.numero).map((img) => (
              <Text key={img.id} style={styles.legendaLinha}>
                {img.numero}. {img.legenda}
              </Text>
            ))}
          </View>

          <Assinatura />
        </Page>
      )}
    </Document>
  );
}
