import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { EChartsOption } from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

interface IWidget {
  id: string;
  type: string;
  payload: unknown;
}

function ChatWidget({ payload }: IWidget) {
  return (
    <ReactEcharts
      option={payload}
      notMerge={true}
      lazyUpdate={true}
      style={{ height: "100%", width: "100%" }}
    />
  );
}

function MapWidget({ id, payload }: IWidget) {
  const { mapUrl, option } = payload as {
    mapUrl: string;
    option: EChartsOption;
  };

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatRef.current = echarts.init(chatContainerRef.current);
      chatRef.current.showLoading();
      axios.get(mapUrl).then(({ data }) => {
        echarts.registerMap(id, data);
        chatRef.current?.setOption(option);
        chatRef.current?.hideLoading();
      });
    }
  }, [id, mapUrl, option]);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      chatRef.current?.resize();
    });
    resizeObserver.observe(chatContainer);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={chatContainerRef} style={{ height: "100%", width: "100%" }}></div>
  );
}

export type { IWidget };
export { ChatWidget, MapWidget };
