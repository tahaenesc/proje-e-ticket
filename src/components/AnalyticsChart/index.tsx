"use client";
import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const Chart = () => {
  const chartContainerRef = useRef<any>();

  useEffect(() => {
    // Grafik oluşturma
    const chart = createChart(chartContainerRef.current, {
      width: 400,
      height: 300,
    });
    const lineSeries = chart.addLineSeries();

    // Örnek veriler
    const data = [
      { time: "2023-05-01", value: 100 },
      { time: "2023-05-02", value: 101 },
      { time: "2023-05-03", value: 102 },
      { time: "2023-05-04", value: 105 },
      { time: "2023-05-05", value: 103 },
      { time: "2023-05-06", value: 109 },
      { time: "2023-05-07", value: 106 },
      { time: "2023-05-08", value: 101 },
      { time: "2023-05-09", value: 110 },
      { time: "2023-05-10", value: 99 },
      { time: "2023-05-11", value: 115 },
      { time: "2023-05-12", value: 112 },
      { time: "2023-05-13", value: 113 },
      { time: "2023-05-14", value: 111 },
      { time: "2023-05-15", value: 110 },
      { time: "2023-05-16", value: 108 },
      { time: "2023-05-17", value: 107 },
      { time: "2023-05-18", value: 109 },
      { time: "2023-05-19", value: 111 },
      { time: "2023-05-20", value: 110 },
      { time: "2023-05-21", value: 112 },
      { time: "2023-05-22", value: 115 },
      { time: "2023-05-23", value: 116 },
      { time: "2023-05-24", value: 114 },
      { time: "2023-05-25", value: 113 },
      { time: "2023-05-26", value: 112 },
      { time: "2023-05-27", value: 110 },
      { time: "2023-05-28", value: 108 },
      { time: "2023-05-29", value: 107 },
      { time: "2023-05-30", value: 106 },
      { time: "2023-05-31", value: 105 },
      { time: "2023-06-01", value: 104 },
      { time: "2023-06-02", value: 102 },
      { time: "2023-06-03", value: 101 },
      { time: "2023-06-04", value: 100 },
      { time: "2023-06-05", value: 99 },
      { time: "2023-06-06", value: 98 },
      { time: "2023-06-07", value: 97 },
      { time: "2023-06-08", value: 96 },
      { time: "2023-06-09", value: 95 },
      { time: "2023-06-10", value: 120 },
      { time: "2023-06-11", value: 120 },
      { time: "2023-06-12", value: 120 },
      { time: "2023-06-13", value: 91 },
      { time: "2023-06-14", value: 106 },
      { time: "2023-06-15", value: 89 },
      { time: "2023-06-16", value: 108 },
      { time: "2023-06-17", value: 87 },
      { time: "2023-06-18", value: 86 },
      { time: "2023-06-19", value: 100 },
      { time: "2023-06-20", value: 106 },
      { time: "2023-06-21", value: 98 },
      { time: "2023-06-22", value: 94 },
      { time: "2023-06-23", value: 81 },
      { time: "2023-06-24", value: 95 },
      { time: "2023-06-25", value: 99 },
      { time: "2023-06-26", value: 118 },
      { time: "2023-06-27", value: 77 },
      { time: "2023-06-28", value: 99 },
      { time: "2023-06-29", value: 104 },
      { time: "2023-06-30", value: 95 },
      { time: "2023-07-01", value: 120 },
      { time: "2023-07-02", value: 118 },
      { time: "2023-07-03", value: 115 },
      { time: "2023-07-04", value: 116 },
      { time: "2023-07-05", value: 115 },
      { time: "2023-07-06", value: 112 },
      { time: "2023-07-07", value: 113 },
      { time: "2023-07-08", value: 114 },
      { time: "2023-07-09", value: 116 },
      { time: "2023-07-10", value: 117 },
      { time: "2023-07-11", value: 115 },
      { time: "2023-07-12", value: 118 },
      { time: "2023-07-13", value: 119 },
      { time: "2023-07-14", value: 118 },
      { time: "2023-07-15", value: 116 },
      { time: "2023-07-16", value: 115 },
      { time: "2023-07-17", value: 113 },
      { time: "2023-07-18", value: 114 },
      { time: "2023-07-19", value: 112 },
    ];
    lineSeries.setData(data);

    // Temizleme
    return () => {
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} />;
};

export default Chart;
