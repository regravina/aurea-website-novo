import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!email.trim()) {
      setStatus("error");
      setMessage("Por favor, insira seu e-mail.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Por favor, insira um e-mail válido.");
      return;
    }

    setStatus("loading");

    try {
      // Simular envio (em produção, isso seria uma chamada tRPC)
      // const response = await trpc.newsletter.subscribe.useMutation();
      
      // Por enquanto, simulamos sucesso após 1 segundo
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus("success");
      setMessage("Obrigado! Você foi inscrito na nossa newsletter.");
      setEmail("");

      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage(
        "Ocorreu um erro ao inscrever-se. Por favor, tente novamente."
      );
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 relative">
            <Mail
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:bg-gray-100"
            />
          </div>
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="text-white px-6 py-2 rounded-lg transition font-medium"
            style={{ backgroundColor: "#D4AF37" }}
            onMouseEnter={(e) =>
              !e.currentTarget.disabled &&
              (e.currentTarget.style.backgroundColor = "#C99E2E")
            }
            onMouseLeave={(e) =>
              !e.currentTarget.disabled &&
              (e.currentTarget.style.backgroundColor = "#D4AF37")
            }
          >
            {status === "loading" ? "Inscrevendo..." : "Inscrever"}
          </Button>
        </div>

        {/* Mensagens de status */}
        {message && (
          <div
            className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
              status === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : status === "error"
                  ? "bg-red-50 text-red-800 border border-red-200"
                  : ""
            }`}
          >
            {status === "success" ? (
              <CheckCircle size={18} className="flex-shrink-0" />
            ) : status === "error" ? (
              <AlertCircle size={18} className="flex-shrink-0" />
            ) : null}
            <span>{message}</span>
          </div>
        )}

        <p className="text-xs text-gray-600">
          Receba notícias sobre nossos novos cursos e conteúdos exclusivos.
          Respeitamos sua privacidade.
        </p>
      </form>
    </div>
  );
}
