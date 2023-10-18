import { EChartsOption } from "echarts";
import ReactEcharts from "echarts-for-react";

interface IWidget {
  id: string;
  type: string;
  payload: unknown;
}

function ChatWidget({ option }: { option: EChartsOption }) {
  return (
    <ReactEcharts
      option={option}
      notMerge={true}
      lazyUpdate={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
}

export type { IWidget };
export { ChatWidget };
