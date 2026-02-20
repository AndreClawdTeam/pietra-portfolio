import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Nutricionista Pietra Fogaça",
  description:
    "Leia os Termos de Uso do site da Nutricionista Pietra Fogaça e saiba as condições para utilização dos nossos serviços.",
};

export default function TermosDeUso() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Termos de Uso</h1>
      <p className="text-sm text-muted mb-10">
        Última atualização: 20 de fevereiro de 2026
      </p>

      {/* 1. Aceitação dos termos */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">1. Aceitação dos Termos</h2>
        <p className="mb-3">
          Ao acessar e utilizar o site{" "}
          <strong>www.nutricionistapietra.com.br</strong>, você concorda com
          estes Termos de Uso em sua totalidade. Se você não concordar com
          qualquer parte destes termos, pedimos que não utilize o site.
        </p>
        <p className="text-sm">
          Estes Termos de Uso constituem um acordo legal entre você (usuário) e
          a <strong>PIETRA LOUIS FOGACA SCHUMACHER LTDA</strong> (CNPJ:
          52.063.769/0001-52), responsável pelo site.
        </p>
      </section>

      {/* 2. Sobre o site e serviços */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          2. Sobre o Site e os Serviços
        </h2>
        <p className="mb-3">
          O site <strong>www.nutricionistapietra.com.br</strong> é a presença
          digital da nutricionista <strong>Pietra Fogaça</strong>, com o objetivo
          de apresentar seus serviços, compartilhar conteúdo educativo sobre
          nutrição e saúde, e facilitar o contato para agendamento de consultas.
        </p>
        <p className="mb-2">Os serviços oferecidos incluem:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>
            Informações sobre atendimento nutricional presencial (São Paulo - SP e
            Porto Alegre - RS) e online
          </li>
          <li>Conteúdo educativo sobre alimentação, saúde e bem-estar</li>
          <li>
            Agendamento de consultas por meio de formulário de contato ou
            WhatsApp
          </li>
          <li>
            Acesso a produtos digitais (e-books, programas, materiais de apoio)
            disponibilizados via plataforma Kiwify
          </li>
        </ul>
        <p className="mt-3 text-sm">
          Os serviços podem ser alterados, suspensos ou encerrados a qualquer
          momento, sem aviso prévio.
        </p>
      </section>

      {/* 3. Uso permitido */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">3. Uso Permitido</h2>
        <p className="mb-2">
          Você está autorizado a utilizar este site para:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Navegar pelas páginas e ler o conteúdo disponibilizado</li>
          <li>
            Preencher formulários de contato para solicitar informações ou
            agendar consultas
          </li>
          <li>Compartilhar links do site nas redes sociais, preservando a autoria</li>
          <li>Adquirir produtos digitais disponíveis na plataforma Kiwify</li>
          <li>Entrar em contato via WhatsApp para fins de atendimento</li>
        </ul>
      </section>

      {/* 4. Uso proibido */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">4. Uso Proibido</h2>
        <p className="mb-2">É expressamente proibido:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>
            Copiar, reproduzir, distribuir ou publicar qualquer conteúdo do site
            (textos, imagens, vídeos, receitas, protocolos) sem autorização
            prévia e expressa por escrito
          </li>
          <li>
            Utilizar o site ou seu conteúdo para fins comerciais sem
            autorização
          </li>
          <li>
            Usar o site de forma que possa danificar, sobrecarregar ou prejudicar
            sua disponibilidade para outros usuários
          </li>
          <li>
            Tentar acessar áreas restritas do site sem autorização
          </li>
          <li>
            Utilizar bots, scrapers ou qualquer meio automatizado para coletar
            dados do site sem permissão
          </li>
          <li>
            Usar o site para qualquer atividade ilegal ou que viole direitos de
            terceiros
          </li>
          <li>
            Transmitir vírus, malware ou qualquer outro código prejudicial
          </li>
          <li>
            Fazer-se passar pela nutricionista Pietra Fogaça ou por qualquer
            membro da equipe
          </li>
        </ul>
      </section>

      {/* 5. Propriedade intelectual */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          5. Propriedade Intelectual
        </h2>
        <p className="mb-3">
          Todo o conteúdo disponível neste site — incluindo, mas não se
          limitando a, textos, artigos, receitas, protocolos nutricionais,
          imagens, fotografias, logotipos, marcas, layout, design, identidade
          visual e código-fonte — é de propriedade exclusiva da{" "}
          <strong>PIETRA LOUIS FOGACA SCHUMACHER LTDA</strong> ou licenciado a
          ela, e está protegido pela legislação brasileira de direitos autorais
          e propriedade intelectual (Lei nº 9.610/1998).
        </p>
        <p className="text-sm">
          A marca <strong>Pietra Fogaça</strong> e os elementos gráficos
          associados são marcas registradas ou em processo de registro. Qualquer
          uso não autorizado configura infração e está sujeito às sanções legais
          cabíveis.
        </p>
      </section>

      {/* 6. Isenção de responsabilidade */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          6. Isenção de Responsabilidade
        </h2>
        <p className="mb-3">
          O conteúdo publicado neste site tem <strong>caráter exclusivamente informativo e educativo</strong>.
          As informações sobre nutrição, alimentação e saúde disponibilizadas
          não constituem diagnóstico, prescrição ou tratamento médico ou
          nutricional individualizado.
        </p>
        <p className="mb-3">
          <strong>
            O site não substitui uma consulta presencial ou online com a
            nutricionista.
          </strong>{" "}
          Cada pessoa tem necessidades nutricionais únicas, e recomendações
          genéricas podem não ser adequadas para o seu caso específico.
          Consulte sempre um profissional de saúde habilitado antes de fazer
          mudanças significativas na sua alimentação.
        </p>
        <p className="text-sm">
          A <strong>PIETRA LOUIS FOGACA SCHUMACHER LTDA</strong> não se
          responsabiliza por danos diretos ou indiretos decorrentes do uso das
          informações disponíveis neste site sem acompanhamento profissional
          adequado.
        </p>
      </section>

      {/* 7. Links externos */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">7. Links Externos</h2>
        <p className="mb-3">
          Este site pode conter links para sites ou plataformas de terceiros,
          como:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
          <li>
            <strong>Kiwify</strong> — plataforma de venda de produtos digitais
            utilizada para disponibilizar e-books e programas
          </li>
          <li>
            <strong>WhatsApp</strong> — aplicativo de mensagens utilizado para
            contato e agendamento
          </li>
          <li>
            <strong>Instagram e outras redes sociais</strong> — para
            compartilhamento de conteúdo
          </li>
        </ul>
        <p className="text-sm">
          Não somos responsáveis pelo conteúdo, políticas de privacidade ou
          práticas de sites externos. O acesso a links de terceiros é feito por
          sua conta e risco. Recomendamos que você leia os termos e políticas de
          privacidade de qualquer site externo que acessar.
        </p>
      </section>

      {/* 8. Alterações nos termos */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          8. Alterações nestes Termos
        </h2>
        <p className="mb-3">
          Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
          momento, a nosso critério exclusivo. Quando houver alterações
          relevantes, atualizaremos a data de &ldquo;última atualização&rdquo;
          no topo desta página.
        </p>
        <p className="text-sm">
          O uso continuado do site após a publicação de novas versões dos Termos
          constitui aceitação das alterações. Recomendamos revisar esta página
          periodicamente.
        </p>
      </section>

      {/* 9. Lei aplicável */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          9. Lei Aplicável e Foro
        </h2>
        <p className="mb-3">
          Estes Termos de Uso são regidos e interpretados de acordo com as leis
          da <strong>República Federativa do Brasil</strong>, em especial:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm mb-3">
          <li>Lei nº 12.965/2014 — Marco Civil da Internet</li>
          <li>Lei nº 13.709/2018 — Lei Geral de Proteção de Dados (LGPD)</li>
          <li>Lei nº 8.078/1990 — Código de Defesa do Consumidor</li>
          <li>Lei nº 9.610/1998 — Lei de Direitos Autorais</li>
        </ul>
        <p className="text-sm">
          Fica eleito o foro da comarca de <strong>São Paulo - SP</strong> para
          dirimir quaisquer controvérsias decorrentes destes Termos, com
          renúncia expressa a qualquer outro, por mais privilegiado que seja.
        </p>
      </section>

      {/* 10. Contato */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">10. Contato</h2>
        <p className="mb-3">
          Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
        </p>
        <ul className="list-none space-y-1 text-sm">
          <li>
            <strong>Razão social:</strong> PIETRA LOUIS FOGACA SCHUMACHER LTDA
          </li>
          <li>
            <strong>CNPJ:</strong> 52.063.769/0001-52
          </li>
          <li>
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:agendamento@nutricionistapietra.com.br"
              className="underline! hover:text-tertiary-foreground"
            >
              agendamento@nutricionistapietra.com.br
            </a>
          </li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/5511991538151"
              target="_blank"
              rel="noopener noreferrer"
              className="underline! hover:text-tertiary-foreground"
            >
              (11) 99153-8151
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
