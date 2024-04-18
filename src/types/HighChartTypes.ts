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

export type TopRatingHistogramOptions = {
  chart: {
    renderTo: string;
    type: string;
    backgroundColor: string;
    height: number;
  };
  xAxis: {
    categories: any[];
    labels: {
      enabled: boolean;
    };
    lineColor: string;
  };
  yAxis: {
    min: number;
    title: {
      enabled: boolean;
    };
    gridLineColor: string;
    labels: {
      enabled: boolean;
    };
  };
  tooltip: {
    headerFormat: string;
    pointFormat: string;
    enabled: boolean;
  };
  title: {
    text: string;
    align?: string;
    style?: {
      color: string;
      fontSize: string;
    };
  };
  subtitle: {
    text: string;
    align?: string;
    style?: {
      color: string;
      fontSize: string;
    };
  };
  legend: {
    enabled: boolean;
  };
  minPointLength: number;
  plotOptions: {
    series: {
      pointPadding: number;
      groupPadding: number;
    };
    threshold: number;
  };
  series: {
    data: any[];
    color: string;
    borderColor: string;
    borderRadius: number;
    minHeight: number;
    depth: number;
    states: {
      hover: {
        color: string;
        animation: {
          duration: number;
        };
      };
    };
    point: {
      events: {
        mouseOver: (event: HighChartMouseoverEvent) => void;
        mouseOut: (event: HighChartMouseoverEvent) => void;
      };
    };
    threshold: number;
  }[];
  credits: {
    enabled: boolean;
  };
};
