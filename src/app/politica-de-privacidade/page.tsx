import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Nutricionista Pietra Fogaça",
  description:
    "Saiba como coletamos, usamos e protegemos seus dados pessoais no site da Nutricionista Pietra Fogaça, em conformidade com a LGPD.",
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Política de Privacidade</h1>
      <p className="text-sm text-muted mb-10">
        Última atualização: 20 de fevereiro de 2026
      </p>

      {/* 1. Quem somos */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">1. Quem somos</h2>
        <p className="mb-2">
          Esta Política de Privacidade se aplica ao site{" "}
          <strong>www.nutricionistapietra.com.br</strong>, operado por:
        </p>
        <ul className="list-none space-y-1 text-sm">
          <li>
            <strong>Razão social:</strong> PIETRA LOUIS FOGACA SCHUMACHER LTDA
          </li>
          <li>
            <strong>CNPJ:</strong> 52.063.769/0001-52
          </li>
          <li>
            <strong>E-mail de contato:</strong>{" "}
            <a
              href="mailto:agendamento@nutricionistapietra.com.br"
              className="underline! hover:text-tertiary-foreground"
            >
              agendamento@nutricionistapietra.com.br
            </a>
          </li>
          <li>
            <strong>Site:</strong>{" "}
            <a
              href="https://www.nutricionistapietra.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="underline! hover:text-tertiary-foreground"
            >
              www.nutricionistapietra.com.br
            </a>
          </li>
        </ul>
        <p className="mt-3">
          Levamos a privacidade dos nossos usuários a sério e nos comprometemos
          a proteger seus dados pessoais em conformidade com a{" "}
          <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
        </p>
      </section>

      {/* 2. Quais dados coletamos */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">2. Quais dados coletamos</h2>
        <p className="mb-2">
          Coletamos dados pessoais de duas formas principais:
        </p>
        <h3 className="font-medium mt-4 mb-2">2.1 Dados fornecidos por você</h3>
        <p className="mb-2">
          Ao preencher formulários no site (como o formulário de agendamento ou
          de contato), podemos coletar:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Nome completo</li>
          <li>Endereço de e-mail</li>
          <li>Número de WhatsApp / telefone</li>
          <li>Outras informações que você optar por compartilhar na mensagem</li>
        </ul>

        <h3 className="font-medium mt-4 mb-2">2.2 Dados coletados automaticamente</h3>
        <p className="mb-2">
          Ao navegar pelo site, coletamos automaticamente dados de uso por meio
          de cookies e tecnologias de rastreamento, incluindo:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Endereço IP (anonimizado sempre que possível)</li>
          <li>Tipo de dispositivo, navegador e sistema operacional</li>
          <li>Páginas visitadas e tempo de permanência</li>
          <li>Origem do acesso (busca orgânica, anúncio, redes sociais etc.)</li>
          <li>Interações com elementos da página (cliques, rolagem)</li>
        </ul>
      </section>

      {/* 3. Tecnologias de rastreamento */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          3. Tecnologias de rastreamento utilizadas
        </h2>
        <p className="mb-4">
          Utilizamos as seguintes ferramentas de terceiros para analisar o
          desempenho do site e das nossas campanhas:
        </p>

        <div className="space-y-5">
          <div>
            <h3 className="font-medium mb-1">Meta Pixel (Facebook / Instagram)</h3>
            <p className="text-sm">
              O Meta Pixel é um código do Facebook que nos permite medir a
              eficácia de nossos anúncios no Facebook e Instagram, rastrear
              conversões e criar públicos personalizados para campanhas futuras.
              Os dados coletados pelo Meta Pixel são processados pela Meta
              Platforms, Inc., de acordo com a{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline! hover:text-tertiary-foreground"
              >
                Política de Privacidade da Meta
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-1">
              Google Analytics (ID: G-JHGW1PWY5H)
            </h3>
            <p className="text-sm">
              O Google Analytics é um serviço de análise da Google LLC que nos
              ajuda a entender como os visitantes interagem com o site — quais
              páginas são mais acessadas, quanto tempo os usuários permanecem no
              site e de onde vêm. Os dados são anonimizados e agregados. Saiba
              mais na{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline! hover:text-tertiary-foreground"
              >
                Política de Privacidade do Google
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-1">
              Google Ads (ID: AW-17059362533)
            </h3>
            <p className="text-sm">
              O Google Ads nos permite veicular anúncios na rede de pesquisa e
              display do Google e medir quais anúncios levam a ações no site
              (conversões). O rastreamento de conversões ajuda a otimizar os
              investimentos em publicidade paga.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-1">
              Google Tag Manager (ID: GTM-MRGMLF5R)
            </h3>
            <p className="text-sm">
              O Google Tag Manager é uma ferramenta de gerenciamento de tags que
              nos permite implementar e gerenciar de forma centralizada os
              scripts de rastreamento (como os citados acima) sem alterar
              diretamente o código do site. O GTM em si não coleta dados
              pessoais; ele apenas facilita o carregamento das demais tags.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Como usamos os dados */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">4. Como usamos seus dados</h2>
        <p className="mb-2">Utilizamos os dados coletados para:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>
            <strong>Personalizar o atendimento:</strong> entender seu perfil e
            necessidades antes da consulta nutricional.
          </li>
          <li>
            <strong>Responder solicitações:</strong> entrar em contato por e-mail
            ou WhatsApp quando você preenche um formulário.
          </li>
          <li>
            <strong>Enviar comunicações:</strong> informações sobre serviços,
            conteúdos relevantes e novidades (você pode cancelar o recebimento
            a qualquer momento).
          </li>
          <li>
            <strong>Medir desempenho de anúncios:</strong> entender quais
            campanhas de marketing digital trazem resultados e otimizar nossos
            investimentos.
          </li>
          <li>
            <strong>Melhorar o site:</strong> identificar páginas com problemas,
            melhorar a navegação e a experiência do usuário.
          </li>
          <li>
            <strong>Cumprir obrigações legais:</strong> quando exigido por lei
            ou regulação aplicável.
          </li>
        </ul>
      </section>

      {/* 5. Com quem compartilhamos */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          5. Com quem compartilhamos seus dados
        </h2>
        <p className="mb-3">
          <strong>Nunca vendemos seus dados pessoais.</strong> Compartilhamos
          informações apenas com as plataformas de tecnologia necessárias para
          operar o site e as campanhas descritas nesta política:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>
            <strong>Meta Platforms, Inc.</strong> — para operação do Meta Pixel
            (Facebook/Instagram Ads)
          </li>
          <li>
            <strong>Google LLC</strong> — para Google Analytics, Google Ads e
            Google Tag Manager
          </li>
          <li>
            <strong>Kiwify</strong> — plataforma de pagamento utilizada para
            aquisição de produtos digitais; possui sua própria política de
            privacidade
          </li>
        </ul>
        <p className="mt-3 text-sm">
          Todos os terceiros com quem compartilhamos dados são obrigados a tratar
          essas informações de forma segura e somente para as finalidades
          autorizadas.
        </p>
      </section>

      {/* 6. Direitos do usuário */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          6. Seus direitos (LGPD)
        </h2>
        <p className="mb-3">
          Nos termos da Lei Geral de Proteção de Dados (LGPD), você tem os
          seguintes direitos em relação aos seus dados pessoais:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            <strong>Acesso:</strong> saber quais dados pessoais seus mantemos.
          </li>
          <li>
            <strong>Correção:</strong> solicitar a correção de dados incompletos,
            inexatos ou desatualizados.
          </li>
          <li>
            <strong>Exclusão:</strong> pedir a exclusão dos seus dados quando não
            houver mais necessidade ou base legal para o tratamento.
          </li>
          <li>
            <strong>Portabilidade:</strong> receber seus dados em formato
            estruturado e interoperável.
          </li>
          <li>
            <strong>Revogação do consentimento:</strong> retirar o consentimento
            para o tratamento de dados a qualquer momento.
          </li>
          <li>
            <strong>Oposição:</strong> se opor ao tratamento de dados realizado
            com base em legítimo interesse.
          </li>
          <li>
            <strong>Informação sobre compartilhamento:</strong> saber com quem
            seus dados são compartilhados.
          </li>
        </ul>
        <p className="mt-3 text-sm">
          Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
          <a
            href="mailto:agendamento@nutricionistapietra.com.br"
            className="underline! hover:text-tertiary-foreground"
          >
            agendamento@nutricionistapietra.com.br
          </a>
          . Responderemos em até 15 dias úteis.
        </p>
      </section>

      {/* 7. Cookies */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">7. Cookies</h2>
        <p className="mb-3">
          Cookies são pequenos arquivos de texto armazenados no seu navegador
          quando você visita um site. Eles nos ajudam a lembrar suas preferências,
          analisar o uso do site e exibir anúncios relevantes.
        </p>
        <h3 className="font-medium mb-2">Tipos de cookies que utilizamos:</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
          <li>
            <strong>Cookies essenciais:</strong> necessários para o funcionamento
            básico do site.
          </li>
          <li>
            <strong>Cookies analíticos:</strong> utilizados pelo Google Analytics
            para medir o uso do site.
          </li>
          <li>
            <strong>Cookies de publicidade:</strong> utilizados pelo Meta Pixel e
            Google Ads para medir conversões e exibir anúncios personalizados.
          </li>
        </ul>
        <h3 className="font-medium mb-2">Como desativar os cookies:</h3>
        <p className="text-sm">
          Você pode configurar seu navegador para recusar todos ou alguns cookies,
          ou para alertá-lo quando sites definem ou acessam cookies. Veja como
          fazer isso nos principais navegadores:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="underline! hover:text-tertiary-foreground"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/pt-BR/kb/desative-cookies-terceiros-impedir-rastreamento"
              target="_blank"
              rel="noopener noreferrer"
              className="underline! hover:text-tertiary-foreground"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="underline! hover:text-tertiary-foreground"
            >
              Safari
            </a>
          </li>
        </ul>
        <p className="mt-3 text-sm">
          Atenção: desativar cookies pode afetar a funcionalidade de algumas
          partes do site.
        </p>
        <p className="mt-2 text-sm">
          Você também pode optar por não ser rastreado pelo Google Analytics
          instalando o{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="underline! hover:text-tertiary-foreground"
          >
            complemento de desativação do Google Analytics
          </a>
          .
        </p>
      </section>

      {/* 8. Contato */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">8. Contato</h2>
        <p className="mb-2">
          Se você tiver dúvidas, solicitações ou reclamações sobre esta Política
          de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em
          contato conosco:
        </p>
        <ul className="list-none space-y-1 text-sm">
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
        <p className="mt-3 text-sm">
          Você também pode registrar uma reclamação perante a Autoridade Nacional
          de Proteção de Dados (ANPD) por meio do site{" "}
          <a
            href="https://www.gov.br/anpd"
            target="_blank"
            rel="noopener noreferrer"
            className="underline! hover:text-tertiary-foreground"
          >
            www.gov.br/anpd
          </a>
          .
        </p>
      </section>

      {/* 9. Atualização */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">
          9. Alterações nesta política
        </h2>
        <p className="text-sm">
          Podemos atualizar esta Política de Privacidade periodicamente para
          refletir mudanças nas nossas práticas ou na legislação aplicável.
          Quando houver alterações relevantes, atualizaremos a data de
          &ldquo;última atualização&rdquo; no topo desta página. Recomendamos
          que você revise esta página periodicamente.
        </p>
        <p className="mt-3 text-sm font-medium">
          Última atualização: 20 de fevereiro de 2026
        </p>
      </section>
    </div>
  );
}
