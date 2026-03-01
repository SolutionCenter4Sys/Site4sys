import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { nome, empresa, email, mensagem, servico, ofertaContexto } = body;

    if (!nome || !empresa || !email || !mensagem) {
      return NextResponse.json(
        { error: 'Campos obrigatórios ausentes' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido' },
        { status: 400 }
      );
    }

    // Mock: em produção, integrar com SendGrid, Zapier/Make ou CRM
    console.log('[Contato] Novo lead recebido:', {
      nome,
      empresa,
      email,
      servico: ofertaContexto || servico,
      mensagem: mensagem.substring(0, 100),
      timestamp: new Date().toISOString(),
    });

    // Simular delay de envio
    await new Promise(r => setTimeout(r, 500));

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contato] Erro:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
