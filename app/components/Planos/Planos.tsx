"use client";

import { BarChart3, Zap, ShieldCheck, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { PricingCard } from "../PrincingPlan/PricingCard";

export default function Planos() {
    
  return (
    
    <section
      id="Planos"
      className="py-20 bg-slate-950 w-full max-w-full overflow-hidden"
    >
      <div className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      {/* Decorative corner glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">
            Transparencia
          </h2>
          <p className="text-4xl md:text-5xl font-black mb-6 text-white">
            Nossos Planos
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Escolha a estrutura ideal para a escala atual da sua empresa.
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingCard 
            title="🟢 Free" 
            subtitle="Ideal para começar e organizar suas primeiras operações." 
            price="€ 0" 
            color="green"
            features={["3 usuários", "10 clientes", "100 invoices", "Dashboard básico"]}
            onSelect={() => console.log("Selecionou Free")}
           
          />
          <PricingCard 
            title="🔵 Starter" subtitle="Para pequenas equipes em crescimento com mais controle." price="€ 99" color="blue" highlight={true} badge="7 dias grátis"
            features={["10 usuários", "100 clientes", "500 invoices", "Dashboard completo", "Suporte padrão"]}
            onSelect={() => console.log("Selecionou Starter")}
                        

          />
          <PricingCard 
            title="🟣 Growth" subtitle="Escale seu negócio com performance e organização." price="€ 199" color="purple"
            features={["100 usuários", "500 clientes", "1.000 invoices", "Relatórios avançados", "Permissões", "Suporte prioritário"]}
            onSelect={() => console.log("Selecionou Growth")}
                       

          />
          <PricingCard 
            title="🟡 Enterprise" subtitle="Estrutura completa para operações de grande escala." price="Consultar" color="yellow"
            features={["Usuários ilimitados", "Clientes ilimitados", "Invoices ilimitadas", "Performance otimizada", "Segurança avançada"]}
            onSelect={() => console.log("Selecionou Enterprise")}
            

          />
        </div>
      </div>
    </section>
  );
}
