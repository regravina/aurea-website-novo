import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Loader2, ArrowLeft, TrendingUp, Calendar } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AdminReports() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const [dateRange, setDateRange] = useState<"week" | "month" | "year">("month");

  // Redirecionar se não for admin
  if (user && user.role !== "admin") {
    navigate("/");
    return null;
  }

  // Buscar dados de vendas
  const { data: orders = [], isLoading } = trpc.orders.getUserOrders.useQuery(
    undefined,
    { enabled: !!user }
  );

  // Calcular dados dos gráficos
  const chartData = useMemo(() => {
    // Gráfico de vendas por período
    const salesByDate: Record<string, number> = {};
    const paymentMethods: Record<string, number> = {};
    let totalApproved = 0;
    let totalPending = 0;
    let totalFailed = 0;

    orders.forEach((order) => {
      // Contar por status
      if (order.status === "approved") totalApproved++;
      else if (order.status === "pending") totalPending++;
      else if (order.status === "failed") totalFailed++;

      // Contar por método de pagamento
      const method = order.paymentMethod || "Desconhecido";
      paymentMethods[method] = (paymentMethods[method] || 0) + 1;

      // Contar por data
      const date = new Date(order.createdAt).toLocaleDateString("pt-BR");
      salesByDate[date] = (salesByDate[date] || 0) + (order.amount || 0) / 100;
    });

    // Dados para gráfico de linha (vendas por período)
    const dates = Object.keys(salesByDate).sort();
    const salesLineData = {
      labels: dates,
      datasets: [
        {
          label: "Vendas (R$)",
          data: dates.map((date) => salesByDate[date]),
          borderColor: "#D4AF37",
          backgroundColor: "rgba(212, 175, 55, 0.1)",
          tension: 0.4,
          fill: true,
          pointBackgroundColor: "#D4AF37",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointRadius: 5,
        },
      ],
    };

    // Dados para gráfico de pizza (métodos de pagamento)
    const paymentMethodsData = {
      labels: Object.keys(paymentMethods),
      datasets: [
        {
          label: "Pedidos por Método",
          data: Object.values(paymentMethods),
          backgroundColor: [
            "#D4AF37",
            "#0D9488",
            "#06B6D4",
            "#8B5CF6",
            "#EC4899",
            "#F59E0B",
          ],
          borderColor: "#fff",
          borderWidth: 2,
        },
      ],
    };

    // Dados para gráfico de barras (status de pedidos)
    const statusData = {
      labels: ["Aprovados", "Pendentes", "Falhas"],
      datasets: [
        {
          label: "Quantidade de Pedidos",
          data: [totalApproved, totalPending, totalFailed],
          backgroundColor: ["#10B981", "#F59E0B", "#EF4444"],
          borderRadius: 8,
          borderSkipped: false,
        },
      ],
    };

    return {
      salesLineData,
      paymentMethodsData,
      statusData,
      totalApproved,
      totalPending,
      totalFailed,
    };
  }, [orders]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-teal-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Carregando relatórios...</p>
        </div>
      </div>
    );
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: { size: 12 },
          padding: 15,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Relatórios de Vendas</h1>
            <p className="text-sm text-gray-600 mt-1">Análise detalhada de desempenho</p>
          </div>
          <Button
            onClick={() => navigate("/admin")}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtro de Período */}
        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5 text-gray-600" />
            <div className="flex gap-2">
              {(["week", "month", "year"] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setDateRange(range)}
                  className={`px-4 py-2 rounded-lg transition font-medium text-sm ${
                    dateRange === range
                      ? "text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={
                    dateRange === range ? { backgroundColor: "#D4AF37" } : {}
                  }
                >
                  {range === "week"
                    ? "Esta Semana"
                    : range === "month"
                    ? "Este Mês"
                    : "Este Ano"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <KPICard
            title="Pedidos Aprovados"
            value={chartData.totalApproved}
            color="bg-green-100"
            icon="✓"
            iconColor="text-green-600"
          />
          <KPICard
            title="Pedidos Pendentes"
            value={chartData.totalPending}
            color="bg-yellow-100"
            icon="⏳"
            iconColor="text-yellow-600"
          />
          <KPICard
            title="Pedidos com Falha"
            value={chartData.totalFailed}
            color="bg-red-100"
            icon="✕"
            iconColor="text-red-600"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gráfico de Vendas por Período */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" style={{ color: "#D4AF37" }} />
              Vendas por Período
            </h2>
            <div className="relative h-80">
              <Line
                data={chartData.salesLineData}
                options={{
                  ...chartOptions,
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: { callback: (value) => `R$ ${value}` },
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Gráfico de Status de Pedidos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" style={{ color: "#D4AF37" }} />
              Status dos Pedidos
            </h2>
            <div className="relative h-80">
              <Bar
                data={chartData.statusData}
                options={{
                  ...chartOptions,
                  indexAxis: "x" as const,
                }}
              />
            </div>
          </div>
        </div>

        {/* Métodos de Pagamento */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" style={{ color: "#D4AF37" }} />
            Métodos de Pagamento Utilizados
          </h2>
          <div className="relative h-80 max-w-md mx-auto">
            <Pie
              data={chartData.paymentMethodsData}
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  legend: {
                    ...chartOptions.plugins.legend,
                    position: "bottom" as const,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface KPICardProps {
  title: string;
  value: number;
  color: string;
  icon: string;
  iconColor: string;
}

function KPICard({ title, value, color, icon, iconColor }: KPICardProps) {
  return (
    <div className={`${color} rounded-lg p-6 border-l-4`} style={{ borderColor: "#D4AF37" }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-700 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className={`text-4xl ${iconColor}`}>{icon}</div>
      </div>
    </div>
  );
}
