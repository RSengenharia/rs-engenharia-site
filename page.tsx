
// Estrutura inicial do site com abas separadas para serviços
// Adicionado formulário de contato funcional e botão de WhatsApp

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function RSEngenharia() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <header className="text-center">
        <img src="/LOGO.png" alt="Logo RS Engenharia" className="mx-auto h-24" />
        <h1 className="text-3xl font-bold mt-4">RS Engenharia Elétrica</h1>
        <p className="text-gray-400 mt-2">Projetos Elétricos • Automação • Laudos Técnicos</p>
      </header>

      <section className="text-center space-y-2">
        <p>
          <Mail className="inline mr-2" /> contato@rsengenharia.com.br
        </p>
        <p>
          <Phone className="inline mr-2" /> (51) 98031-8366
        </p>
        <a
          href="https://wa.me/5551980318366"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-2" variant="default">
            Fale conosco no WhatsApp
          </Button>
        </a>
      </section>

      <section className="bg-zinc-900 p-6 rounded-2xl shadow-xl text-white">
        <h2 className="text-2xl font-semibold mb-4">Fale Conosco</h2>
        <form
          action="https://formsubmit.co/contato@rsengenharia.com.br"
          method="POST"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <Input type="text" name="name" placeholder="Nome" required className="col-span-2" />
          <Input type="email" name="email" placeholder="E-mail" required />
          <Input type="tel" name="telefone" placeholder="Telefone" />
          <Textarea name="mensagem" placeholder="Sua mensagem" rows={4} className="col-span-2" required />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <Button type="submit" className="col-span-2">Enviar</Button>
        </form>
      </section>

      <Tabs defaultValue="residencial" className="mt-8">
        <TabsList className="flex flex-wrap justify-center gap-2">
          <TabsTrigger value="residencial">Residencial</TabsTrigger>
          <TabsTrigger value="comercial">Comercial</TabsTrigger>
          <TabsTrigger value="industrial">Industrial</TabsTrigger>
          <TabsTrigger value="aumento">Aumento de Carga</TabsTrigger>
          <TabsTrigger value="automacao">Automação</TabsTrigger>
          <TabsTrigger value="laudos">Laudos Técnicos</TabsTrigger>
        </TabsList>

        <TabsContent value="residencial">
          <Card><CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Projetos Elétricos Residenciais</h2>
            <p>
              Desenvolvemos projetos elétricos residenciais completos, com foco na segurança,
              eficiência e praticidade. Cada projeto é personalizado conforme o perfil do
              imóvel e as necessidades dos moradores. Garantimos conformidade com as normas
              da NBR 5410 e um projeto fácil de executar para eletricistas.
            </p>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="comercial">
          <Card><CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Projetos Elétricos Comerciais</h2>
            <p>
              Soluções elétricas para comércios de todos os portes, com foco na funcionalidade,
              economia de energia e expansão futura. Tudo com atenção à norma técnica e
              agilidade na execução.
            </p>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="industrial">
          <Card><CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Projetos Elétricos Industriais</h2>
            <p>
              Projetos robustos para instalações industriais, desde pequenos galpões até plantas
              complexas. Atuamos no dimensionamento de cargas, transformadores, proteção e automação.
            </p>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="aumento">
          <Card><CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Aumento de Carga e Regularização</h2>
            <p>
              Realizamos estudos e projetos para aumento de carga, troca de disjuntor, novos quadros de
              medição ou adequação junto à concessionária. Entregamos ART, diagrama unifilar e cálculo
              de demanda.
            </p>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="automacao">
          <Card><CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Automação Industrial</h2>
            <p>
              Projetos sob medida para automação de processos industriais, com foco em produtividade,
              segurança e padronização. Atuamos no desenvolvimento de painéis, sensores e lógicas de controle.
            </p>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="laudos">
          <Card><CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Laudos e Vistorias Técnicas</h2>
            <p>
              Emitimos laudos técnicos com análise detalhada das instalações elétricas, identificando falhas,
              riscos e propondo soluções. Ideal para regularizações e certificações.
            </p>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
