interface XAxisLabel {
  formatter?: () => number | string;
  color?: string;
  isFirst?: boolean;
  isLast?: boolean;
}

interface YAxisLabel {
  formatter?: () => number | string;
  color?: string;
  value?: string | number;
}

export type HighChartOptions = {
  title: {
    text: string;
  };
  chart: {
    backgroundColor: string;
    height: string;
    marginLeft: number;
    renderTo: string;
  };
  accessibility: {
    enabled: boolean;
  };
  credits: {
    enabled: boolean;
  };
  legend: {
    enabled: boolean;
  };
  series: {
    name: string;
    showInLegend: string;
    legendIndex: number;
    marker: {
      enabled: boolean;
    };
    data: any[]; // You might want to replace 'any' with a more specific type for your data
    color: string;
  }[];
  xAxis: {
    title: {
      text: string;
    };
    tickInterval: number;
    showFirstLabel: boolean;
    showLastLabel: boolean;
    lineColor: string;
    tickColor: string;
    minorGridLineColor: string;
    labels: XAxisLabel;
  };
  yAxis: {
    tickInterval: number;
    tickPixelInterval: number;
    labels: YAxisLabel;
    title: string;
    accessibility: {
      enabled: boolean;
    };
    showFirstLabel: boolean;
    showLastLabel: boolean;
    gridLineColor: string;
  };
  tooltip: {
    enabled: boolean;
  };
  plotOptions: PlotOptions;
};

interface PlotOptions {
  series: {
    point: {
      events: {
        mouseOver: (event: HighChartMouseoverEvent) => void;
        mouseOut: (event: HighChartMouseoverEvent) => void;
      };
    };
  };
}

export interface HighChartMouseoverEvent {
  target: {
    x: number;
    y: number;
    index: number;
  };
  type: "mouseover";
}
