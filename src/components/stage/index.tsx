import GridLayout from "react-grid-layout";
import { EChartsOption } from "echarts";
import { ChatWidget, IWidget } from "../widget";

type Config = {
  cols: number;
  rowHeight: number;
  width: number;
};

type Props = {
  layout: Pick<GridLayout.Layout, "i" | "x" | "y" | "w" | "h">[];
  widgets: IWidget[];
  config: Config;
  onLayoutChange: (newLayout: GridLayout.Layout[]) => void;
};

function Stage({ layout, widgets, config, onLayoutChange }: Props) {
  function generateDOM() {
    return layout.map((l) => {
      const widget = widgets.find((w) => w.id === l.i);
      if (widget) {
        return (
          <div
            key={l.i}
            className="backdrop-blur-md bg-white/30 shadow-md border rounded-md overflow-hidden p-2"
          >
            <ChatWidget option={widget.payload as EChartsOption} />
          </div>
        );
      } else {
        return null;
      }
    });
  }

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={config.cols}
      rowHeight={config.rowHeight}
      width={window.innerWidth}
      onLayoutChange={onLayoutChange}
    >
      {generateDOM()}
    </GridLayout>
  );
}

export default Stage;
